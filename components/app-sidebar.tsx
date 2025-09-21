'use client';

import { ComponentProps } from 'react';
import {
    ChevronRight,
    Github,
    Search,
    ArrowUpRight,
    BookMarked,
    GraduationCap,
    Globe,
} from 'lucide-react';
import Image from 'next/image';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarRail,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { InlineCode } from './typography';
import { isIos } from '@/lib/utils';
import { NAV_LINKS as data } from '@/static/nav-links';
import { SearchModal } from './search-modal';
import { usePathname } from 'next/navigation';

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size='lg' asChild>
                            <Link href='/' className='flex items-center p-2'>
                                <Image
                                    src={'/logo.png'}
                                    alt='Wiki Lei logo'
                                    width={40}
                                    height={40}
                                />
                                <span className='ml-2 font-bold text-lg'>
                                    Wiki LEI
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className='gap-0'>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link
                                    href={'https://portal.uab.pt/'}
                                    target='_blank'
                                >
                                    <Globe />
                                    <span>Site oficial UAb</span>
                                    <ArrowUpRight className='opacity-0 group-hover/menu-item:opacity-100 ml-auto transition-opacity' />
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link
                                    href={
                                        'https://wiki.dcet.uab.pt/files/index.php/Categoria:Engenharia_Inform%C3%A1tica?fbclid=IwAR1J4KKJxHX8oLQY-KYxV-LRzqTMyxoYQqfdIngzz7lS1XfE-kcSOGFUT4c'
                                    }
                                    target='_blank'
                                >
                                    <BookMarked />
                                    <span>Wiki Oficial</span>
                                    <ArrowUpRight className='opacity-0 group-hover/menu-item:opacity-100 ml-auto transition-opacity' />
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link
                                    href={
                                        'https://guiadoscursos.uab.pt/cursos/licenciatura-em-engenharia-informatica/'
                                    }
                                    target='_blank'
                                >
                                    <GraduationCap />
                                    <span>Página do curso</span>
                                    <ArrowUpRight className='opacity-0 group-hover/menu-item:opacity-100 ml-auto transition-opacity' />
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>

                <SidebarGroupLabel className='ml-2'>
                    Navegação
                </SidebarGroupLabel>
                <SidebarMenu className='gap-0'>
                    {data.map((item) => (
                        <Collapsible
                            key={item.title}
                            title={item.title}
                            defaultOpen
                            className='group/collapsible'
                        >
                            <SidebarGroup>
                                <SidebarGroupLabel
                                    asChild
                                    className='group/label hover:bg-sidebar-accent text-sidebar-foreground text-sm hover:text-sidebar-accent-foreground'
                                >
                                    <CollapsibleTrigger>
                                        {item.title}{' '}
                                        <ChevronRight className='ml-auto group-data-[state=open]/collapsible:rotate-90 transition-transform' />
                                    </CollapsibleTrigger>
                                </SidebarGroupLabel>
                                <CollapsibleContent>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            <SidebarMenuSub>
                                                {item.items &&
                                                    item.items.map((item) => (
                                                        <SidebarMenuItem
                                                            key={item.title}
                                                        >
                                                            <SidebarMenuButton
                                                                asChild
                                                                isActive={
                                                                    pathname ===
                                                                    item.url
                                                                }
                                                                size={
                                                                    (item.size as
                                                                        | 'lg'
                                                                        | 'default'
                                                                        | 'sm') ||
                                                                    'default'
                                                                }
                                                            >
                                                                <Link
                                                                    href={
                                                                        item.url
                                                                    }
                                                                    className='block'
                                                                >
                                                                    {item.title}
                                                                </Link>
                                                            </SidebarMenuButton>
                                                        </SidebarMenuItem>
                                                    ))}
                                            </SidebarMenuSub>
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </CollapsibleContent>
                            </SidebarGroup>
                        </Collapsible>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <SearchModal>
                                <Search className='size-4' />
                                <span>Procurar</span>
                                <div className='space-x-1 ml-auto text-sm'>
                                    <InlineCode>
                                        {isIos() ? '⌘' : 'Ctrl'}
                                    </InlineCode>
                                    <InlineCode>k</InlineCode>
                                </div>
                            </SearchModal>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link
                                href={'https://github.com/the-rfer/wiki-lei'}
                                target='_blank'
                            >
                                <Github />
                                <span>Contribuir</span>
                                <ArrowUpRight className='opacity-0 group-hover/menu-item:opacity-100 ml-auto transition-opacity' />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
