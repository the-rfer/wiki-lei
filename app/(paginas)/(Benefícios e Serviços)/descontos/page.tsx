import { H1 } from '@/components/typography';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Descontos - Wiki Lei',
    description: '',
    keywords: ['Wiki Lei'],
    openGraph: {
        title: 'Descontos - Wiki Lei',
        description: '',
        url: '',
        siteName: 'Wiki Lei',
    },
};

const pageData = [
    {
        title: 'UAb - Serviços de Informática - SPSS, Microsoft Imagine, ArcGIS, Microsoft Office 365',
        url: 'https://portal.uab.pt/si/lista-software',
    },
    {
        title: 'ISIC - Cartão Internacional de Estudante',
        url: 'https://www.isic.pt/pt/',
    },
    {
        title: 'GitHub - Pack para estudantes',
        url: 'https://education.github.com/pack',
    },
    {
        title: 'JetBrains - Acesso grátis a todos os IDE para uso pessoal',
        url: 'https://www.jetbrains.com/community/education/#students',
    },
    {
        title: 'Spotify - Licença de estudante, desconto no valor e sem anúncios',
        url: 'https://www.spotify.com/pt/student/',
    },
    {
        title: 'UNiDAYS - Desconto na Apple Music',
        url: 'https://www.myunidays.com/PT/pt-PT',
    },
    {
        title: 'Amazon Prime Student - Desconto mensalidade (Não é válido em Portugal, mesmo Amazon.es só para residentes em Espanha (inf. 2023))',
        url: 'https://www.amazon.com/Amazon-Student/b?ie=UTF8&node=668781011',
    },
    {
        title: 'Youtube Premium - Vantagens no YouTube, YouTube Music e YouTube Kids',
        url: 'https://support.google.com/youtube/answer/9158808?hl=pt',
    },
    {
        title: 'Ordem dos Engenheiros - Membro estudante',
        url: 'https://www.ordemengenheiros.pt/pt/admissao-a-ordem/membro-estudante/',
    },
    {
        title: 'OnTheHub - Desconto em software',
        url: 'https://estore.onthehub.com/',
    },
    {
        title: 'miro - Conta de estudante com equipa até 10 utilizadores',
        url: 'https://www.miro.com/',
    },
    {
        title: 'Protocolos - Protocolos Nacionais',
        url: 'https://wiki.dcet.uab.pt/files/images/1/1f/DOC-20240116-WA0098.-1.pdf',
    },
];

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-2xl'>
            <H1>Descontos</H1>
            <p className='mt-4 leading-7'>
                Usando o vosso endereço de email de estudante, conseguem alguns
                descontos.
            </p>
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
