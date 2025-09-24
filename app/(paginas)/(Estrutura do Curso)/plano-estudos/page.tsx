import Link from 'next/link';
import type { Metadata } from 'next';
import { H1 } from '@/components/typography';
import { Fragment } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

export const metadata: Metadata = {
    title: 'Plano de Estudos - Wiki Lei',
    description: '',
    keywords: ['Wiki Lei'],
    openGraph: {
        title: 'Plano de Estudos - Wiki Lei',
        description: '',
        url: '',
        siteName: 'Wiki Lei',
    },
};

type Course = {
    cod: string;
    desc: string;
    link: string;
};

type YearData = {
    ano: string;
    rows: Course[][];
};

const tableData = [
    {
        ano: '1º Ano',
        rows: [
            [
                {
                    cod: '21002',
                    desc: 'Álgebra Linear l',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/%C3%81lgebra_Linear_l',
                },
                {
                    cod: '21177',
                    desc: 'Modelação de Sistemas de Informação',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Modela%C3%A7%C3%A3o_de_Sistemas_de_Informa%C3%A7%C3%A3o',
                },
            ],
            [
                {
                    cod: '21010',
                    desc: 'Arquitectura de Computadores',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Arquitectura_de_Computadores',
                },
                {
                    cod: '21037',
                    desc: 'Elementos de Probabilidades e Estatística',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Elementos_de_Probabilidades_e_Estat%C3%ADstica',
                },
            ],
            [
                {
                    cod: '21173',
                    desc: 'Introdução à Programação',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Introdu%C3%A7%C3%A3o_%C3%A0_Programa%C3%A7%C3%A3o',
                },
                {
                    cod: '21082',
                    desc: 'Matemática Finita',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Matem%C3%A1tica_Finita',
                },
            ],
            [
                {
                    cod: '21174',
                    desc: 'Sistemas Computacionais',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Sistemas_Computacionais',
                },
                {
                    cod: '21178',
                    desc: 'Laboratório de Programação',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Laborat%C3%B3rio_de_Programa%C3%A7%C3%A3o',
                },
            ],
            [
                {
                    cod: '21175',
                    desc: 'Análise Infinitesimal',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/An%C3%A1lise_Infinitesimal',
                },
                {
                    cod: '21111',
                    desc: 'Sistemas Operativos',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Sistemas_Operativos',
                },
            ],
            [
                {
                    cod: '21176',
                    desc: 'Ética e Práticas de Engenharia',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/%C3%89tica_e_Pr%C3%A1ticas_de_Engenharia',
                },
                {
                    cod: '',
                    desc: '',
                    link: '',
                },
            ],
        ],
    },
    {
        ano: '2º Ano',
        rows: [
            [
                {
                    cod: '21048',
                    desc: 'Física Geral',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/F%C3%ADsica_Geral',
                },
                {
                    cod: '21179',
                    desc: 'Laboratório de Desenvolvimento de Software',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Laborat%C3%B3rio_de_Desenvolvimento_de_Software',
                },
            ],
            [
                {
                    cod: '21053',
                    desc: 'Fundamentos de Bases de Dados',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Fundamentos_de_Bases_de_Dados',
                },
                {
                    cod: '21046',
                    desc: 'Estruturas de Dados e Algoritmos Fundamentais',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Estruturas_de_Dados_e_Algoritmos_Fundamentais',
                },
            ],
            [
                {
                    cod: '21078',
                    desc: 'Linguagens e Computação',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Linguagens_e_Computa%C3%A7%C3%A3o',
                },
                {
                    cod: '21071',
                    desc: 'Introdução à Inteligência Artificial',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Introdu%C3%A7%C3%A3o_%C3%A0_Intelig%C3%AAncia_Artificial',
                },
            ],
            [
                {
                    cod: '21093',
                    desc: 'Programação por Objetos',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Programa%C3%A7%C3%A3o_por_Objetos',
                },
                {
                    cod: '21076',
                    desc: 'Investigação Operacional',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Investiga%C3%A7%C3%A3o_Operacional',
                },
            ],
            [
                {
                    cod: '21106',
                    desc: 'Sistemas em Rede',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Sistemas_em_Rede',
                },
                {
                    cod: '21077',
                    desc: 'Linguagens de Programação',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Linguagens_de_Programa%C3%A7%C3%A3o',
                },
            ],
        ],
    },
    {
        ano: '3º Ano',
        rows: [
            [
                {
                    cod: '21020',
                    desc: 'Computação Gráfica',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Computa%C3%A7%C3%A3o_Gr%C3%A1fica',
                },
                {
                    cod: '21182',
                    desc: 'Laboratório de Sistemas e Serviços Web',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Laborat%C3%B3rio_de_Sistemas_e_Servi%C3%A7os_Web',
                },
            ],
            [
                {
                    cod: '21180',
                    desc: 'Computação Numérica',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Computa%C3%A7%C3%A3o_Num%C3%A9rica',
                },
                {
                    cod: '21018',
                    desc: 'Compilação',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Compila%C3%A7%C3%A3o',
                },
            ],
            [
                {
                    cod: '21103',
                    desc: 'Sistemas de Gestão de Bases de Dados',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Sistemas_de_Gest%C3%A3o_de_Bases_de_Dados',
                },
                {
                    cod: '21184',
                    desc: 'Projeto de Engenharia Informática',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Projeto_de_Engenharia_Inform%C3%A1tica',
                },
            ],
            [
                {
                    cod: '21062',
                    desc: 'Gestão de Projetos Informáticos',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Gest%C3%A3o_de_Projetos_Inform%C3%A1ticos',
                },
                {
                    cod: '21097',
                    desc: 'Raciocínio e Representação do Conhecimento',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Racioc%C3%ADnio_e_Representa%C3%A7%C3%A3o_do_Conhecimento',
                },
            ],
            [
                {
                    cod: '21110',
                    desc: 'Sistemas Multimédia',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Sistemas_Multim%C3%A9dia',
                },
                {
                    cod: '21108',
                    desc: 'Sistemas Distribuídos',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Sistemas_Distribu%C3%ADdos',
                },
            ],
            [
                {
                    cod: '21181',
                    desc: 'Segurança em Redes e Computadores',
                    link: 'https://wiki.dcet.uab.pt/files/index.php/Seguran%C3%A7a_em_Redes_e_Computadores',
                },
                {
                    cod: '',
                    desc: '',
                    link: '',
                },
            ],
        ],
    },
];

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-3xl'>
            <H1>Plano de Estudos</H1>
            <p className='mt-4 leading-7'>
                De forma a apoiar os Alunos na componente de matemática, a UAb
                criou a disciplina opcional de{' '}
                <Link
                    href='https://wiki.dcet.uab.pt/files/index.php/Matem%C3%A1tica_Preparat%C3%B3ria'
                    target='_blank'
                    className='font-bold hover:underline'
                >
                    Matemática Preparatória
                </Link>
            </p>
            <div>
                {tableData.map((year: YearData) => (
                    <div
                        key={year.ano}
                        className='shadow-sm my-8 border rounded-xl'
                    >
                        <h2 className='p-4 font-semibold text-xl'>
                            {year.ano}
                        </h2>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead
                                        className='text-center'
                                        colSpan={2}
                                    >
                                        1º Semestre
                                    </TableHead>
                                    <TableHead
                                        className='text-center'
                                        colSpan={2}
                                    >
                                        2º Semestre
                                    </TableHead>
                                </TableRow>
                                <TableRow>
                                    <TableHead className='font-bold'>
                                        Cód UC
                                    </TableHead>
                                    <TableHead className='font-bold'>
                                        Descrição
                                    </TableHead>
                                    <TableHead className='font-bold'>
                                        Cód UC
                                    </TableHead>
                                    <TableHead className='font-bold'>
                                        Descrição
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {year.rows.map((content, index) => (
                                    <TableRow key={index}>
                                        {content.map((row) => {
                                            return (
                                                <Fragment key={row.cod}>
                                                    <TableCell>
                                                        {row.cod}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Link
                                                            href={row.link}
                                                            target='_blank'
                                                            className='hover:underline'
                                                        >
                                                            {row.desc}
                                                        </Link>
                                                    </TableCell>
                                                </Fragment>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                ))}
            </div>
        </div>
    );
}
