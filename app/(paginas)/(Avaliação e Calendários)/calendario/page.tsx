import { H1 } from '@/components/typography';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Calendário Académico - Wiki Lei',
    description: '',
    keywords: ['Wiki Lei'],
    openGraph: {
        title: 'Calendário Académico - Wiki Lei',
        description: '',
        url: '',
        siteName: 'Wiki Lei',
    },
};

const pageData = [
    {
        title: 'Mapa Lei_24/25, 2º Semestre ( atualizado a 21-02-2024)',
        url: 'https://wiki.dcet.uab.pt/files/images/9/9a/Mapa_LEI_-_24_25_2%C2%BA_semestre.pdf',
    },
    {
        title: 'Mapa Lei_24/25, 1º Semestre ( atualizado a 21-09-2024)',
        url: 'https://wiki.dcet.uab.pt/files/images/f/fd/Mapa_LEI_-_24_25_1%C2%BA_semestre.pdf',
    },
    {
        title: 'Calendário Provas Wiseflow (Atualizado a 17-09-2024)',
        url: 'https://wiki.dcet.uab.pt/files/images/a/ac/CALENDARIO_GERAL_20242025_V2.pdf',
    },
    {
        title: 'Mapa Lei_23/24, 1º Semestre - Atualizado (27-09-2023)',
        url: 'https://wiki.dcet.uab.pt/files/images/c/c8/Mapa_LEI_23_24_-_1%C2%BA_semestre-4.pdf',
    },
    {
        title: 'Calendário Provas Presenciais 2023-2024 (Atualizado a 08-08-2023)',
        url: 'https://wiki.dcet.uab.pt/files/images/6/6b/CalendarioGeral_2324.pdf',
    },
    {
        title: 'Calendário Oficial 2023-2024',
        url: 'https://wiki.dcet.uab.pt/files/images/8/84/Calendario-Letivo-202324_1o-ciclo.pdf',
    },
    {
        title: 'Calendário Provas Presenciais 2022-2023 (Actualizado a 17-03-2023)',
        url: 'https://wiki.dcet.uab.pt/files/images/e/e4/CalendarioGeral_2223_6Act.pdf',
    },
    {
        title: 'Despacho Provas de Avaliação (30-09-2022)',
        url: 'https://wiki.dcet.uab.pt/files/images/e/e2/Informa%C3%A7%C3%A3o_30-09-2022.pdf',
    },
    {
        title: 'Mapa Lei 22-23 1º semestre (26-09-2022)',
        url: 'https://wiki.dcet.uab.pt/files/images/d/df/Mapa_LEI_22_23_-_1%C2%BA_semestre-3.pdf',
    },
    {
        title: 'Calendário Provas Presenciais 2022-2023 (Actualizado a 15-09-2022)',
        url: 'https://wiki.dcet.uab.pt/files/images/3/38/CalendarioGeral_2223_1Act.pdf',
    },
    {
        title: 'Calendário Provas Presenciais 2021-2022 (Actualizado a 23-05-2022)',
        url: 'https://wiki.dcet.uab.pt/files/images/8/87/CalendarioGeral_2122_4Act.pdf',
    },
    {
        title: 'Calendário Provas Presenciais 2020-2021 (Actualizado a 03-12-2020)',
        url: 'https://wiki.dcet.uab.pt/files/images/b/b6/CALENDARIOGERAL_202021_03122020.pdf',
    },
    {
        title: 'Calendário Provas Presenciais 2020-2021 (Actualizado a 16-07-2020)',
        url: 'https://wiki.dcet.uab.pt/files/images/f/f4/CALENDARIOGERAL_2020_2021_16072020.pdf',
    },
    {
        title: 'Datas de Provas Presenciais 2019-2020(atualizado a 06-02-2020)',
        url: 'https://wiki.dcet.uab.pt/files/images/2/23/CALENDARIOGERAL_2019_2020_06022020.pdf',
    },
    {
        title: 'Provas Especias 2020',
        url: 'https://wiki.dcet.uab.pt/files/images/f/fa/D86-R-2020_Diretivas_para_o_ano_letivo_2019-2020.pdf',
    },
    {
        title: 'Provas escritas de Setembro 2020',
        url: 'https://wiki.dcet.uab.pt/files/images/4/42/Provas_escritas_ext_setembro_2020.pdf',
    },
];

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-2xl'>
            <H1>Calendário de Provas Presenciais e Online</H1>
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
