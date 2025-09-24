import { H1 } from '@/components/typography';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'História e evlução do curso - Wiki Lei',
    description: '',
    keywords: ['Wiki Lei'],
    openGraph: {
        title: 'História e evlução do curso - Wiki Lei',
        description: '',
        url: '',
        siteName: 'Wiki Lei',
    },
};

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-3xl'>
            <H1>Uma visão da LI 2016/2017 e a transição para a LEI</H1>
            <ul className='space-y-2 my-4 mt-4 list-disc list-inside'>
                <li>
                    <Link
                        href={
                            'https://wiki.dcet.uab.pt/files/images/a/a3/Uma_vis%C3%A3o_da_LI_20162017_e_a_transi%C3%A7%C3%A3o_para_a_LEI_-_Elizabeth_Carvalho.pdf'
                        }
                        target='_blank'
                        className='hover:underline'
                    >
                        Documento apresentado na InforAberta 2018
                    </Link>
                </li>
            </ul>
        </div>
    );
}
