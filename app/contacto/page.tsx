import SuggestionForm from '@/components/suggestion-form';
import { H1, P } from '@/components/typography';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Page() {
    return (
        <section className='flex mx-auto'>
            <div className='w-full'>
                <H1 className='mt-4'>Contacto</H1>
                <div className='mt-6'>
                    <P>
                        Encontrou algum problema na wiki ou tem alguma sugestão?
                        Envie-nos uma mensagem!
                    </P>
                    <P>
                        Ao enviar uma mensagem está a criar um issue no
                        respositório deste projeto. <br />
                        Pode acompanhar todas as mensagens enviadas que se
                        encontrem em aberto{' '}
                        <Link
                            href='https://github.com/the-rfer/wiki-lei/issues'
                            target='_blank'
                            className='font-bold hover:underline'
                        >
                            clicando aqui
                        </Link>
                        .
                    </P>
                </div>
                <Suspense fallback={<div>Carregando formulário...</div>}>
                    <SuggestionForm />
                </Suspense>
            </div>
        </section>
    );
}
