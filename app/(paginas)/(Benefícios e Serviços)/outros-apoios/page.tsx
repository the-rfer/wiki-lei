import { H1 } from '@/components/typography';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Outros apoios institucionais - Wiki Lei',
    description: '',
    keywords: ['Wiki Lei'],
    openGraph: {
        title: 'Outros apoios institucionais - Wiki Lei',
        description: '',
        url: '',
        siteName: 'Wiki Lei',
    },
};

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-2xl'>
            <H1>Outros benefícios/apoios</H1>
        </div>
    );
}
