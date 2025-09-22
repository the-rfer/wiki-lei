import { SearchModal } from '@/components/search-modal';
import { Search } from 'lucide-react';
import TopicsGrid from '@/components/topics';
import ContributeCta from '@/components/contribute-cta';

export default function Home() {
    return (
        <>
            <div className='bg-gradient-to-b from-muted/30 to-background'>
                <div className='mx-auto px-4 py-16 text-center container'>
                    <div className='mx-auto max-w-4xl'>
                        <ContributeCta />
                        <h1 className='mb-6 font-bold text-foreground text-4xl md:text-6xl text-balance'>
                            Recursos de Engenharia Informática
                        </h1>
                        <p className='mb-8 text-muted-foreground text-xl md:text-2xl text-pretty'>
                            Acesso rápido e organizado aos recursos da wiki da
                            UAB para estudantes de Engenharia Informática
                        </p>

                        <SearchModal
                            useClass={false}
                            shouldKbdShortcutTrigger={false}
                        >
                            <div className='group flex items-center bg-card-background hover:bg-gradient-to-r hover:from-accent/50 hover:to-background/50 mx-auto px-2 border-1 rounded-md w-sm md:w-md lg:w-lg h-10 transition-colors duration-300 cursor-text'>
                                <p className='w-full text-center'>
                                    O que deseja encontrar?
                                </p>
                                <div className='group-hover:bg-accent my-2 ml-auto p-2 rounded-full transition-colors duration-300'>
                                    <Search className='w-4 h-4' />
                                </div>
                            </div>
                        </SearchModal>
                    </div>
                </div>
            </div>

            <main className='space-y-16 mx-auto px-8 py-12 container'>
                <section>
                    <h2 className='mb-12 font-bold text-foreground text-3xl text-center'>
                        Conteúdo disponível
                    </h2>
                    <TopicsGrid />
                </section>
            </main>
        </>
    );
}
