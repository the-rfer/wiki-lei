import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { AppSidebar } from '@/components/app-sidebar';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import { ModeToggle } from '@/components/mode-toggle';

import './globals.css';

export const metadata: Metadata = {
    title: 'Wiki Engenharia Informática UAb',
    description:
        'Acesso rápido e organizado aos recursos da wiki da Universidade Aberta para estudantes de Engenharia Informática',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='pt' suppressHydrationWarning>
            <body className='antialiased'>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                >
                    <SidebarProvider>
                        <AppSidebar />
                        <SidebarInset>
                            <header className='top-0 sticky flex items-center gap-2 bg-background px-4 border-b h-16 shrink-0'>
                                <SidebarTrigger className='-ml-1' />
                                <Separator
                                    orientation='vertical'
                                    className='mr-2 h-4'
                                />
                                <Breadcrumb>
                                    <BreadcrumbList>
                                        <BreadcrumbItem className='hidden md:block'>
                                            <BreadcrumbLink href='#'>
                                                Building Your Application
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator className='hidden md:block' />
                                        <BreadcrumbItem>
                                            <BreadcrumbPage>
                                                Data Fetching
                                            </BreadcrumbPage>
                                        </BreadcrumbItem>
                                    </BreadcrumbList>
                                </Breadcrumb>
                                <ModeToggle className='ml-auto' />
                            </header>
                            <main className='flex flex-col flex-1 gap-4'>
                                {children}
                            </main>
                        </SidebarInset>
                    </SidebarProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
