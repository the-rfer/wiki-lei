import Link from 'next/link';
import LastUpdate from './last-update';

export default function Footer() {
    return (
        <footer className='bg-muted/30 border-t border-border'>
            <div className='mx-auto px-4 py-12 container'>
                <div className='border-border text-center'>
                    <p className='text-muted-foreground text-xs'>
                        Portal de Recursos LEI-UAB. Este é um projeto não
                        oficial criado por estudantes para estudantes.
                    </p>
                    <LastUpdate />

                    <div className='flex justify-center items-center mx-auto mt-2 w-full text-muted-foreground text-xs'>
                        <p>Encontrou um erro ou tem uma sugestão?</p>
                        <Link
                            href={'/contacto'}
                            className='ml-1 hover:underline'
                        >
                            Clique aqui
                        </Link>
                    </div>
                    <p className='mt-2 text-muted-foreground text-xs'>
                        <strong>Disclaimer:</strong> Este portal não substitui a
                        consulta oficial da wiki e documentos da UAb.
                    </p>
                </div>
            </div>
        </footer>
    );
}
