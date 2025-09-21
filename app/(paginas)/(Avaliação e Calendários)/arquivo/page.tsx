import type { Metadata } from 'next';
import { H1 } from '@/components/typography';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Arquivo de calendários anteriores - Wiki Lei',
    description: '',
    keywords: ['Wiki Lei'],
    openGraph: {
        title: 'Arquivo de calendários anteriores - Wiki Lei',
        description: '',
        url: '',
        siteName: 'Wiki Lei',
    },
};

export const aquivoData: FuseWikiDataType = {
    title: 'Arquivo de calendários anteriores',
    url: '/arquivo',
    content:
        'Calendário de Provas Presenciais da Licenciatura em Informática 2013-2014. Calendário de Provas Presenciais da Licenciatura em Informática 2014-2015. Calendário de Provas Presenciais da Licenciatura em Informática 2015-2016. Calendário de Provas Presenciais da Licenciatura em Informática 2016-2017. Licenciatura Informática 2017/2018. Licenciatura Engenharia Informática 2017/2018. Licenciatura Engenharia Informática 2018/2019.',
};

const pageData = [
    {
        title: 'Licenciatura Engenharia Informática 2018/2019',
        url: 'https://wiki.dcet.uab.pt/files/images/8/8f/CALENDARIOGERAL_-2018_2019_2307218.pdf',
    },
    {
        title: 'Licenciatura Engenharia Informática 2017/2018',
        url: 'https://wiki.dcet.uab.pt/files/images/5/51/CalendarioGeral7_13032018.pdf',
    },
    {
        title: 'Licenciatura Informática 2017/2018',
        url: 'https://wiki.dcet.uab.pt/files/images/e/e6/CALENDARIO_GERAL_2018_atualizado_em_28_07_2017.pdf',
    },
    {
        title: 'Calendário de Provas Presenciais da Licenciatura em Informática 2016-2017',
        url: 'https://wiki.dcet.uab.pt/files/index.php/Calend%C3%A1rio_de_Provas_Presenciais_da_Licenciatura_em_Inform%C3%A1tica_2016-2017',
    },
    {
        title: 'Calendário de Provas Presenciais da Licenciatura em Informática 2015-2016',
        url: 'https://wiki.dcet.uab.pt/files/index.php/Calend%C3%A1rio_de_Provas_Presenciais_da_Licenciatura_em_Inform%C3%A1tica_2015-2016',
    },
    {
        title: 'Calendário de Provas Presenciais da Licenciatura em Informática 2014-2015',
        url: 'https://wiki.dcet.uab.pt/files/index.php/Calend%C3%A1rio_de_Provas_Presenciais_da_Licenciatura_em_Inform%C3%A1tica_2014-2015',
    },
    {
        title: 'Calendário de Provas Presenciais da Licenciatura em Informática 2013-2014',
        url: 'https://wiki.dcet.uab.pt/files/index.php/Calend%C3%A1rio_de_Provas_Presenciais_da_Licenciatura_em_Inform%C3%A1tica_2013-2014',
    },
];

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-2xl'>
            <H1>Anos anteriores</H1>
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
