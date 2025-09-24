import { H1, H3, P } from '@/components/typography';

import type { Metadata } from 'next';
import Link from 'next/link';
import ImageWrapper from '@/components/image-wrapper';

export const metadata: Metadata = {
    title: '',
    description: '',
    keywords: [''],
    openGraph: {
        title: '',
        description: '',
        url: '',
        siteName: '',
    },
};

const pageData = [
    {
        title: 'Plano de estudo Alternativo de 5 Anos',
        url: 'https://wiki.dcet.uab.pt/files/images/c/c0/LEI_Plano_alternativo_5_anos.pdf',
    },
    {
        title: 'Plano de estudos Engenharia Informática (Diário da República)',
        url: 'http://wiki.dcet.uab.pt/files/images/8/85/1780617808.pdf',
    },
    {
        title: 'Plano de transição',
        url: 'http://wiki.dcet.uab.pt/files/images/8/81/Plano_de_transi%C3%A7%C3%A3o.pdf',
    },
];

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-2xl'>
            <H1>Precedências de Unidades Curriculares Versão LEI</H1>
            <P>
                Embora seja possível a escolha de qualquer UC, no respetivo
                semestre, inclui-se abaixo um diagrama de precedências que ajuda
                a organizar as escolhas. Esse diagrama NÃO é um documento
                oficial (foi elaborado por alunos). NÃO existe um regime
                obrigatório de precedências entre UCs (Unidades Curriculares) -
                salvo o caso especial da UC de &quot;Projeto de Engenharia
                Informática&quot; que é descrito no parágrafo seguinte. Assim, o
                diagrama abaixo ilustra apenas &quot;precedências lógicas&quot;
                entre UCs (&quot;antes de frequentar a UC XPTO, convém ter
                frequentado primeiro a UC ABC...&quot;) A UC 21184 &quot;Projeto
                de Engenharia Informática&quot; tem um requisito especial. Assim
                - e conforme consta na secção de &quot;Observações&quot; da
                página da UC de &quot;
                <Link
                    href='https://www2.uab.pt/guiainformativo/detailuc.php?uc=1373'
                    target='_black'
                    className='font-bold hover:underline'
                >
                    Projeto de Engenharia Informática
                </Link>
                &quot; do &quot;Guia Informativo Oficial&quot; - &quot;Os
                estudantes deverão ter concluídas todas as UC do 1º ano e pelo
                menos 90 ECTS nas áreas científicas de Engenharia Informática e
                Tecnologias de Informação e Comunicação antes de se inscreverem
                nesta unidade curricular do 3º ano.&quot;
            </P>
            <ImageWrapper
                src='https://wiki.dcet.uab.pt/files/images/3/37/Precedencias_LEI.png'
                alt='Precedências do curso de Licenciatura em Engenharia Informática - Universidade Aberta'
                width={800}
                height={800}
                className='mt-4'
            />

            <H3 className='mt-4'>
                Licenciatura em Informática e Licenciatura em Engenharia
                Informática
            </H3>
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
            <ImageWrapper
                src='https://wiki.dcet.uab.pt/files/images/e/e6/LI_e_LEI.png'
                alt='Licenciatura em Informática e Licenciatura em Engenharia
                Informática'
                width={800}
                height={800}
                className='mt-4'
            />
        </div>
    );
}
