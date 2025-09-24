import { H1 } from '@/components/typography';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dicas e Informações úteis - Wiki Lei',
    description: '',
    keywords: ['Wiki Lei'],
    openGraph: {
        title: 'Dicas e Informações úteis - Wiki Lei',
        description: '',
        url: '',
        siteName: 'Wiki Lei',
    },
};

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-3xl'>
            <H1>Dicas e Informações úteis</H1>
        </div>
    );
}
