import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
    title: 'Wiki Engenharia Informática UAb',
    description:
        'Acesso rápido e organizado aos recursos da wiki da Universidade Aberta para estudantes de Engenharia Informática',
    keywords: ['wiki', 'informática', 'UAb'],
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
                            <Header />
                            <main className='flex flex-col flex-1 gap-4'>
                                {children}
                            </main>
                            <Toaster position='top-center' />
                            <Footer />
                        </SidebarInset>
                    </SidebarProvider>
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
