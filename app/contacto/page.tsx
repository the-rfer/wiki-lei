import SuggestionForm from '@/components/suggestion-form';
import { Suspense } from 'react';
import { H1 } from '@/components/typography';
import Link from 'next/link';

export default function Page() {
    return (
        <section className='flex mx-auto'>
            <div className='w-full'>
                <H1 className='mt-4'>Contacto</H1>
                <div className='mt-6'>
                    <p>
                        Encontrou algum problema na wiki ou tem alguma sugestão?
                        Envie-nos uma mensagem!
                    </p>
                    <p>
                        Ao enviar uma mensagem está a criar um issue no
                        respositório deste projeto. <br />
                        Pode acompanhar todas as mensagens enviadas que se
                        encontrem em aberto{' '}
                        <Link
                            href='https://github.com/the-rfer/wiki-lei/issues'
                            target='_blank'
                            className='hover:underline'
                        >
                            clicando aqui
                        </Link>
                        .
                    </p>
                </div>
                <Suspense fallback={<div>Carregando formulário...</div>}>
                    <SuggestionForm />
                </Suspense>
            </div>
        </section>
    );
}

// https://github.com/the-rfer/wiki-lei/issues
