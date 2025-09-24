import { H1, H3 } from '@/components/typography';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Módulo de Ambientação Online (MAO) - Wiki Lei',
    description: '',
    keywords: ['Wiki Lei'],
    openGraph: {
        title: 'Módulo de Ambientação Online (MAO) - Wiki Lei',
        description: '',
        url: '',
        siteName: 'Wiki Lei',
    },
};

const pageData = [
    {
        title: 'Modulo de Ambientação Online 2020/2021',
        url: 'https://wiki.dcet.uab.pt/files/images/e/e4/Plano_do_Modulo_de_Ambientac%C3%A3o_2020.pdf',
    },
    {
        title: 'Testemunho 2020/2021',
        url: 'https://wiki.dcet.uab.pt/files/images/d/dc/Folha_resolu%C3%A7%C3%A3o_efolio_-_O_que_aprendi.pdf',
    },
];

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-3xl'>
            <H1>Módulo de Ambientação Online</H1>
            <H3 className='mt-8'>MAO 2020/2021</H3>
            <ul className='space-y-2 my-4 list-disc list-inside'>
                {pageData.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.url}
                            target='_blank'
                            className='hover:underline'
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
