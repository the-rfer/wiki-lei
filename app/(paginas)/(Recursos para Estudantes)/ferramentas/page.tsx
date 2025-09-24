import { H1, H3, Muted, P } from '@/components/typography';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Ferramentas de estudo e apoio - Wiki Lei',
    description: '',
    keywords: ['Wiki Lei'],
    openGraph: {
        title: 'Ferramentas de estudo e apoio - Wiki Lei',
        description: '',
        url: '',
        siteName: 'Wiki Lei',
    },
};

const pageData = {
    apoio: [
        {
            title: 'LaTeX',
            url: 'https://wiki.dcet.uab.pt/files/index.php?title=LaTeX',
        },
        {
            title: 'Símbolos Matemáticos',
            url: 'https://wiki.dcet.uab.pt/files/images/0/03/S%C3%ADmbolos_Matem%C3%A1ticos-1.pdf',
        },
        {
            title: 'Curso Linux',
            url: 'https://wiki.dcet.uab.pt/files/images/8/8b/Curso_linux.pdf_%2B.pdf',
        },
        {
            title: 'Comandos Linux',
            url: 'https://wiki.dcet.uab.pt/files/images/d/df/Fwunixref-pt_br.pdf',
        },
        {
            title: 'Markdown pdf',
            url: 'https://wiki.dcet.uab.pt/files/images/b/ba/Markdown.pdf',
        },
        {
            title: 'Notion - app online para organização do estudo',
            url: 'https://www.notion.so/',
        },
        {
            title: 'PhET - Simulações Interativas área das Ciências e Matemática',
            url: 'https://phet.colorado.edu/pt_BR/',
        },
    ],
    outros: [
        {
            title: 'Núcleo de estudantes de engenharia de telecomunicações e informática',
            url: 'https://neeti.tecnico.ulisboa.pt/',
        },
        {
            title: 'Informações e videos sobre áreas chave da nossa licenciatura',
            url: 'http://blog.agupieware.com/2014/06/online-learning-intensive-bachelors.html',
        },
        {
            title: 'Trabalhos para a Licenciatura em Informática - António Manuel Dias Compilação de e-fólios realizados por António Manuel Dias (colega da Licenciatura em Informática)',
            url: 'https://ammdias.duckdns.org/',
        },
    ],
    util: [
        {
            title: 'Links úteis',
            url: 'https://wiki.dcet.uab.pt/files/index.php/Links_%C3%BAteis',
        },
    ],
};

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-3xl'>
            <H1>Ferramentas de estudo e apoio</H1>
            <P>Existem alguns recursos disponíveis para os estudantes da UAb</P>
            <H3 className='mt-8'>Email de estudante:</H3>
            <P>
                É possível obter um email de estudante, que permite depois
                acesso a ferramentas muito úteis. Para configurar o serviço,
                basta ver como{' '}
                <Link
                    href='https://www.youtube.com/watch?v=bbjOkRWrRGw'
                    target='_blank'
                    className='font-bold hover:underline'
                >
                    configurar um correio eletrónico de estudante UAB.
                </Link>
            </P>
            <H3 className='mt-8'>UAb Auto Signature</H3>
            <P>
                Extensão de configuração de assinatura automática para os
                formulários do moodle da UAb para o Google Chrome Ferramenta do
                colega Miguel Gadelha disponível aqui:{' '}
                <Link
                    href='https://chrome.google.com/webstore/detail/uab-auto-signature/lgokkkbgggejnenlgcokgadhcfgiddpd'
                    target='_blank'
                    className='font-bold hover:underline'
                >
                    UAb Auto Signature
                </Link>
            </P>
            <H3 className='mt-8'>Canal youtube da comunidade estudarnauab</H3>
            <P>
                <Link
                    href='https://www.youtube.com/user/estudarnauab'
                    target='_blank'
                    className='font-bold hover:underline'
                >
                    videos de apoio à edição de elementos na nossa wiki
                </Link>
            </P>
            <Muted>
                Nota: A referência acima é à wiki oficial. Caso querias editar
                esta wiki, podes faze-lo{' '}
                <Link
                    href={
                        'https://github.com/the-rfer/wiki-lei?tab=contributing-ov-file'
                    }
                    target='_black'
                    className='hover:underline'
                >
                    clicando aqui
                </Link>
            </Muted>
            <H3 className='mt-8'>Apoio ao Estudo</H3>
            <ul className='space-y-2 my-4 list-disc list-inside'>
                {pageData.apoio.map((item, index) => (
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
            <H3 className='mt-8'>Outros repositórios</H3>
            <ul className='space-y-2 my-4 list-disc list-inside'>
                {pageData.outros.map((item, index) => (
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
            <H3 className='mt-8'>Links úteis para recém-chegados</H3>
            <ul className='space-y-2 my-4 list-disc list-inside'>
                {pageData.util.map((item, index) => (
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
