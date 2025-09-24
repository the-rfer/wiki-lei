import { H1, H3 } from '@/components/typography';

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Apoio e Motivação - Wiki Lei',
    description: '',
    keywords: ['Wiki Lei'],
    openGraph: {
        title: 'Apoio e Motivação - Wiki Lei',
        description: '',
        url: '',
        siteName: 'Wiki Lei',
    },
};

const pageData = {
    motivacao: [
        {
            title: 'Apoio e Motivação Primeira vez 2020/2021',
            url: 'https://wiki.dcet.uab.pt/files/images/0/01/Apoio_e_Motiva%C3%A7%C3%A3o_para_quem_est%C3%A1_nesta_Universidade_pela_primeira_vez_2020.pdf',
        },
        {
            title: 'O Outro Lado do Estudo',
            url: 'https://wiki.dcet.uab.pt/files/images/0/03/O_Aviao.jpg',
        },
    ],
    testemunhos: [
        {
            title: 'Motivação Inicial',
            url: 'https://wiki.dcet.uab.pt/files/index.php/Motiva%C3%A7%C3%A3o_Inicial',
        },
        {
            title: 'Fim de Semestre',
            url: 'https://wiki.dcet.uab.pt/files/index.php/Fim_de_Semestre',
        },
    ],
};

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-2xl'>
            <H1>Apoio e Motivação</H1>

            <ul className='space-y-2 my-4 list-disc list-inside'>
                {pageData.motivacao.map((item, index) => (
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
            <hr className='bg-muted-foreground/50 my-4 rounded h-1' />
            <H3>
                Testemunho dos colegas que se inscrevem a todas as Unidades
                Curriculares
            </H3>
            <p className='mt-4 leading-7'>Ano actual 2020/2021</p>
            <ul className='space-y-2 my-4 list-disc list-inside'>
                {pageData.testemunhos.map((item, index) => (
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
