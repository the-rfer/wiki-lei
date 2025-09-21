'use client';

import { ReactNode, useState, useEffect } from 'react';
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from 'lucide-react';

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command';
import { searchWiki } from '@/lib/fuse';

export function SearchModal({
    children,
    useClass = true,
}: {
    children?: ReactNode;
    useClass?: boolean;
}) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');

    const results = query ? searchWiki(query) : [];

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down, { capture: true });
        return () => document.removeEventListener('keydown', down);
    }, []);

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
                    {results.length === 0 && query && (
                        <CommandEmpty>Nenhum resultado.</CommandEmpty>
                    )}

                    {results.map((item) => (
                        <CommandItem key={item.id} value={item.title}>
                            <div className='flex flex-col'>
                                <span className='font-medium'>
                                    {item.title}
                                </span>
                                {item.snippets.length > 0 && (
                                    <span
                                        className='text-muted-foreground text-sm'
                                        // ⚠️ safe if snippets only contain <mark>, otherwise sanitize!
                                        dangerouslySetInnerHTML={{
                                            __html: item.snippets[0],
                                        }}
                                    />
                                )}
                            </div>
                        </CommandItem>
                    ))}
                </CommandList>
            </CommandDialog>
        </>
    );
}

// <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
// {/* TODO: Implementar ultimas pesquisas */}

// {/* <CommandGroup heading='Últimas pesquisas'>

// </CommandGroup> */}
// <CommandSeparator />
// <CommandGroup heading='Mais procurados'>
//     <CommandItem>
//         <span>Profile</span>
//     </CommandItem>
//     <CommandItem>
//         <span>Billing</span>
//     </CommandItem>
//     <CommandItem>
//         <span>Settings</span>
//     </CommandItem>
// </CommandGroup>
