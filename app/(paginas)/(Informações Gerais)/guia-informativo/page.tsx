import { H1 } from '@/components/typography';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Guia Informativo Oficial - Wiki Lei',
    description: '',
    keywords: ['Wiki Lei'],
    openGraph: {
        title: 'Guia Informativo Oficial - Wiki Lei',
        description: '',
        url: '',
        siteName: 'Wiki Lei',
    },
};

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-3xl'>
            <H1>Guia informativo Oficial</H1>
            <ul className='space-y-2 my-4 mt-4 list-disc list-inside'>
                <li>
                    <Link
                        href={
                            'https://guiadoscursos.uab.pt/cursos/licenciatura-em-engenharia-informatica/'
                        }
                        target='_blank'
                        className='hover:underline'
                    >
                        Guia informativo da Licenciatura em Engenharia
                        Informática
                    </Link>
                </li>
            </ul>
        </div>
    );
}
