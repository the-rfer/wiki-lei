'use client';

import { ReactNode, useState, useEffect } from 'react';
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command';
import { searchWiki, type SearchWikiResult } from '@/lib/fuse';
import { useRouter } from 'next/navigation';

const pages = [
    { id: 'MAO', title: 'Módulo de Ambientação Online (MAO)', url: '/mao' },
    {
        id: 'GUIA-CURSO',
        title: 'Guia Informativo Oficial',
        url: '/guia-informativo',
    },
    { id: 'PLANO-ESTUDOS', title: 'Plano de Estudos', url: '/plano-estudos' },
];

export function SearchModal({
    children,
    useClass = true,
    shouldKbdShortcutTrigger = true,
}: {
    children?: ReactNode;
    useClass?: boolean;
    shouldKbdShortcutTrigger?: boolean;
}) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [recent, setRecent] = useState<
        { id: string; title: string; url: string }[]
    >([]);

    const { results } = searchWiki(query) as SearchWikiResult;

    useEffect(() => {
        if (!shouldKbdShortcutTrigger) return;
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down, { capture: true });
        return () => document.removeEventListener('keydown', down);
    }, [shouldKbdShortcutTrigger]);

    useEffect(() => {
        const saved = localStorage.getItem('recentSearches');
        if (saved) setRecent(JSON.parse(saved));
    }, []);

    const handleSelect = (title: string, url: string, id: string) => {
        // evitar dupes entre mais procurados e recentes
        if (pages.some((page) => page.id === id)) {
            router.push(url);
            setOpen(false);
            return;
        }

        setRecent((prev) => {
            const updated = [
                { id, title, url },
                ...prev.filter((item) => item.title !== title),
            ].slice(0, 5);
            localStorage.setItem('recentSearches', JSON.stringify(updated));
            return updated;
        });
        router.push(url);
        setOpen(false);
    };

    return (
        <>
            <div
                onClick={() => setOpen(true)}
                className={
                    useClass
                        ? 'peer/menu-button flex items-center gap-2 data-[active=true]:bg-sidebar-accent data-[state=open]:hover:bg-sidebar-accent active:bg-sidebar-accent aria-disabled:opacity-50 disabled:opacity-50 group-data-[collapsible=icon]:p-2! group-has-data-[sidebar=menu-action]/menu-item:pr-8 rounded-md outline-hidden ring-sidebar-ring focus-visible:ring-2 w-full [&>svg]:size-4 group-data-[collapsible=icon]:size-8! overflow-hidden data-[active=true]:font-medium text-sm text-left [&>span:last-child]:truncate transition-[width,height,padding] data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:text-sidebar-accent-foreground active:text-sidebar-accent-foreground cursor-pointer aria-disabled:pointer-events-none disabled:pointer-events-none [&>svg]:shrink-0'
                        : ''
                }
            >
                {children}
            </div>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput
                    placeholder='O que deseja encontrar?'
                    value={query}
                    onValueChange={setQuery}
                />
                <CommandList>
                    {query ? (
                        <>
                            <CommandGroup heading='Resultados'>
                                {results.map((item) => (
                                    <CommandItem
                                        key={item.id}
                                        onSelect={() =>
                                            handleSelect(
                                                item.title,
                                                item.url,
                                                item.id
                                            )
                                        }
                                        className='flex flex-col gap-1'
                                    >
                                        <div className='w-full'>
                                            <p className='font-bold'>
                                                {item.title}
                                            </p>
                                            {item.snippets.map(
                                                (snippet, index) => (
                                                    <div
                                                        key={index}
                                                        dangerouslySetInnerHTML={{
                                                            __html: snippet,
                                                        }}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </CommandItem>
                                ))}
                                {results.length === 0 && (
                                    <CommandEmpty>
                                        Nenhum resultado encontrado.
                                    </CommandEmpty>
                                )}
                            </CommandGroup>
                            <CommandSeparator />
                        </>
                    ) : (
                        <>
                            <CommandGroup heading='Mais procurados'>
                                {pages.map((item) => (
                                    <CommandItem
                                        key={item.url}
                                        onSelect={() =>
                                            handleSelect(
                                                item.title,
                                                item.url,
                                                item.id
                                            )
                                        }
                                    >
                                        {item.title}
                                    </CommandItem>
                                ))}
                            </CommandGroup>

                            {recent.length > 0 && (
                                <>
                                    <CommandSeparator />
                                    <CommandGroup heading='Pesquisas recentes'>
                                        {recent.map((item) => (
                                            <CommandItem
                                                key={item.title}
                                                onSelect={() =>
                                                    handleSelect(
                                                        item.title,
                                                        item.url,
                                                        item.id
                                                    )
                                                }
                                            >
                                                {item.title}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </>
                            )}
                        </>
                    )}
                </CommandList>
            </CommandDialog>
        </>
    );
}
