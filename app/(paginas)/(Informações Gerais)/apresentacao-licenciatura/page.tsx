import { H1, P } from '@/components/typography';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Apresentação da Licenciatura - Wiki Lei',
    description: '',
    keywords: ['Wiki Lei'],
    openGraph: {
        title: 'Apresentação da Licenciatura - Wiki Lei',
        description: '',
        url: '',
        siteName: 'Wiki Lei',
    },
};

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-3xl'>
            <H1>
                Apresentação sobre a Licenciatura em Informática, pelo antigo
                aluno Ricardo Dias Marques
            </H1>
            <P>
                <Link
                    href={
                        'https://wiki.dcet.uab.pt/files/index.php/Utilizador:1100281'
                    }
                    target='_blank'
                    className='font-bold hover:underline'
                >
                    Ricardo Dias Marques
                </Link>{' '}
                (Licenciado em Informática pela UAb) deu uma Apresentação, no
                evento &quot;
                <Link
                    href={'https://sites.google.com/site/inforaberta2017/'}
                    target='_blank'
                    className='font-bold hover:underline'
                >
                    InforAbERTA 2017
                </Link>
                &quot;, sobre o percurso, desse antigo aluno, na &quot;LI&quot;
                (&quot;Licenciatura em Informática&quot;) da UAb (a LI foi
                substituída, mais tarde, pela Licenciatura em Engenharia
                Informática).
            </P>

            <P>
                A apresentação chama-se “
                <Link
                    href={
                        'https://drive.google.com/file/d/0B4wTVnDumNoNY1VGemZuNE9HdVk/view'
                    }
                    target='_blank'
                    className='font-bold hover:underline'
                >
                    Testemunho de um Recém-Licenciado em Informática pela
                    Universidade Aberta ( ... com uma 1a Licenciatura noutra
                    Universidade )
                </Link>
                ”
            </P>

            <P>
                A apresentação fornece várias informações incluindo, entre
                outras, múltiplos conselhos (para os Estudantes; para os
                Professores; para a Coordenação da Licenciatura em Informática;
                para a própria Universidade ... ) e estatísticas de conclusão de
                UCs (Unidades Curriculares) e de conclusão da Licenciatura em
                Informática, por parte dos Estudantes.
            </P>

            <P>
                A apresentação está disponível em{' '}
                <Link
                    href={
                        'https://drive.google.com/file/d/0B4wTVnDumNoNY1VGemZuNE9HdVk/view'
                    }
                    target='_blank'
                    className='font-bold hover:underline'
                >
                    https://drive.google.com/file/d/0B4wTVnDumNoNY1VGemZuNE9HdVk/view
                </Link>{' '}
                - e é acessível a partir da página de &quot;
                <Link
                    href={
                        'https://sites.google.com/site/inforaberta2017/apresentacoes'
                    }
                    target='_blank'
                    className='font-bold hover:underline'
                >
                    Comunicações
                </Link>
                &quot; da &quot;InforAberta 2017&quot; -
                <Link
                    href={
                        'https://sites.google.com/site/inforaberta2017/apresentacoes'
                    }
                    target='_blank'
                    className='font-bold hover:underline'
                >
                    https://sites.google.com/site/inforaberta2017/apresentacoes
                </Link>
            </P>
        </div>
    );
}
