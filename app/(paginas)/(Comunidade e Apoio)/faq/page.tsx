import { H1, H3 } from '@/components/typography';

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Perguntas frequentes - Wiki Lei',
    description: '',
    keywords: ['Wiki Lei'],
    openGraph: {
        title: 'Perguntas frequentes - Wiki Lei',
        description: '',
        url: '',
        siteName: 'Wiki Lei',
    },
};

const pageData = {
    interna: [
        {
            title: 'Introdução rápida ao WISEflow',
            url: 'https://wiki.dcet.uab.pt/files/images/b/b3/Consulta_r%C3%A1pida_do_WISEflow.pdf',
        },
        {
            title: 'Introdução para o principiante no WISEflow',
            url: 'https://wiki.dcet.uab.pt/files/images/5/53/Guia_de_introdu%C3%A7%C3%A3o_para_o_participante.pdf',
        },
        {
            title: 'Informação UAb 2023',
            url: 'https://wiki.dcet.uab.pt/files/images/8/8b/Pee_2223_2SN%2BR_A.pdf.pdf',
        },
    ],
    externa: [
        {
            title: 'Página Oficial do WISEflow 2023',
            url: 'https://uniwise.eu/wiseflow',
        },
        {
            title: 'O que é o WISEflow?',
            url: 'https://wiseflow.zendesk.com/hc/en-gb/articles/4406229415954-What-is-WISEflow-',
        },
        {
            title: 'Introdução',
            url: 'https://wiseflow.zendesk.com/hc/en-gb/articles/4405890860434-WISEflow-Lockdown-Browser-Introduction',
        },
    ],
};

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-2xl'>
            <H1>Perguntas Frequentes</H1>
            <H3 className='mt-4'>WISEflow</H3>
            <p className='mt-4 leading-7'>Informação Universidade aberta:</p>
            <ul className='space-y-2 my-4 list-disc list-inside'>
                {pageData.interna.map((item, index) => (
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

            <p className='mt-4 leading-7'>
                Informação Externa à Universidade Aberta:
            </p>
            <ul className='space-y-2 my-4 list-disc list-inside'>
                {pageData.externa.map((item, index) => (
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
