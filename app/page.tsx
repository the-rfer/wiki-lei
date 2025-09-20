export default function Home() {
    return (
        <div>
            {/* <StickyHeader /> */}

            {/* Hero Section */}
            <header className='bg-gradient-to-b from-muted/30 to-background'>
                <div className='mx-auto px-4 py-16 text-center container'>
                    <div className='mx-auto max-w-4xl'>
                        <h1 className='mb-6 font-bold text-foreground text-4xl md:text-6xl text-balance'>
                            Recursos de Engenharia Informática
                        </h1>
                        <p className='mb-8 text-muted-foreground text-xl md:text-2xl text-pretty'>
                            Acesso rápido e organizado aos recursos da wiki da
                            UAB para estudantes de Engenharia Informática
                        </p>
                        {/* <SearchSection /> */}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className='space-y-16 mx-auto px-4 py-12 container'>
                <section>
                    <h2 className='mb-12 font-bold text-foreground text-3xl text-center'>
                        Conteúdo disponível
                    </h2>
                    {/* <TopicsGrid /> */}
                </section>
            </main>

            {/* <Footer /> */}
        </div>
    );
}
