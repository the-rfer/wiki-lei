'use client';

import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ModeToggle } from '@/components/mode-toggle';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getLabel } from '@/lib/utils';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
    const pathname = usePathname();
    const [paths, setPaths] = useState<string[]>([]);

    useEffect(() => {
        setPaths(pathname.split('/').filter((path) => path));
    }, [pathname]);

    console.log(paths);

    return (
        <header className='top-0 z-50 sticky flex items-center gap-2 bg-background/80 backdrop-blur-md px-4 border-b h-16 shrink-0'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 h-4' />
            <Breadcrumb>
                <BreadcrumbList>
                    {paths.length > 0 &&
                        paths.map((path, index) =>
                            index === paths.length - 1 ? (
                                <BreadcrumbItem key={index}>
                                    <BreadcrumbPage>
                                        {getLabel(path)}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            ) : (
                                <span key={index} className='flex items-center'>
                                    <BreadcrumbItem className='hidden md:block'>
                                        <BreadcrumbLink href={`/${path}`}>
                                            {getLabel(path)}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className='hidden md:block' />
                                </span>
                            )
                        )}
                </BreadcrumbList>
            </Breadcrumb>
            <ModeToggle className='ml-auto' />
        </header>
    );
}
