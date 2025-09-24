import { H1, H3 } from '@/components/typography';
import type { Metadata } from 'next';
import Link from 'next/link';
import ImageWrapper from '@/components/image-wrapper';

export const metadata: Metadata = {
    title: 'Regulamento e critérios de Avaliação - Wiki Lei',
    description: '',
    keywords: ['Wiki Lei'],
    openGraph: {
        title: 'Regulamento e critérios de Avaliação - Wiki Lei',
        description: '',
        url: '',
        siteName: 'Wiki Lei',
    },
};

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-2xl'>
            <H1>Avaliação</H1>
            <p className='mt-4 leading-7'>
                No início do semestre (primeiras três semanas), pode-se optar
                entre dois tipos de avaliação, avaliação continua e avaliação
                exame. Na avaliação continua, terá de fazer dois efólios
                (online) e no final um efólio global (online). Caso opte por
                avaliação exame, terá apenas um exame (presencial ou em
                WiseFlow) no final do semestre. Caso não selecione uma opção de
                avaliação, será automaticamente selecionada a avaliação
                continua. Para mais informações, consulte{' '}
                <Link
                    href='http://portal.uab.pt/avaliacao/'
                    target='_blank'
                    className='hover:underline'
                >
                    Portal UAb.
                </Link>
            </p>
            <H3 className='mt-4'>Versão 2024-2025</H3>
            <ImageWrapper
                src='https://wiki.dcet.uab.pt/files/images/4/4d/Avalia%C3%A7%C3%A3o_2024-2025.png'
                alt='Fluxograma do processo de avaliação uab para o 1º ciclo'
                height={800}
                width={800}
            />
            <hr className='bg-muted-foreground/50 my-4 rounded h-1' />
            <H3 className='mt-4'>Versão antiga</H3>
            <ImageWrapper
                src='https://wiki.dcet.uab.pt/files/images/d/d8/Avalia%C3%A7%C3%A3o2022.png'
                alt='Fluxograma do processo de avaliação uab para o 1º ciclo - antigo'
                height={800}
                width={800}
            />
        </div>
    );
}
