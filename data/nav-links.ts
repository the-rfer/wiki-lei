export type NavItem = {
    title: string;
    url: string;
    size?: string;
    items?: NavItem[];
};

export const NAV_LINKS: NavItem[] = [
    {
        title: 'Informações Gerais',
        url: '#',
        items: [
            {
                title: 'Guia Informativo Oficial',
                url: '/guia-informativo',
            },
            {
                title: 'Apresentação da Licenciatura',
                url: '/apresentacao-licenciatura',
                size: 'lg',
            },
            {
                title: 'História e evolução do curso',
                url: '/historia-curso',
                size: 'lg',
            },
        ],
    },
    {
        title: 'Estrutura do Curso',
        url: '#',
        items: [
            {
                title: 'Plano de Estudos',
                url: '/plano-estudos',
            },
            {
                title: 'Precedências de Unidades Curriculares',
                url: '/precedencias-uc',
                size: 'lg',
            },
        ],
    },
    {
        title: 'Avaliação e Calendários',
        url: '#',
        items: [
            {
                title: 'Regulamento e critérios de Avaliação',
                url: '/regulamento',
                size: 'lg',
            },
            {
                title: 'Calendário Académico',
                url: '/calendario',
            },
            {
                title: 'Arquivo de calendários anteriores',
                url: '/arquivo',
                size: 'lg',
            },
        ],
    },
    {
        title: 'Recursos para Estudantes',
        url: '#',
        items: [
            {
                title: 'Módulo de Ambientação Online (MAO)',
                url: '/mao',
                size: 'lg',
            },
            {
                title: 'Ferramentas de estudo e apoio',
                url: '/ferramentas',
                size: 'lg',
            },
            {
                title: 'Dicas e informações úteis',
                url: '/dicas',
            },
        ],
    },
    {
        title: 'Comunidade e Apoio',
        url: '#',
        items: [
            {
                title: 'Perguntas Frequentes',
                url: '/faq',
            },
            {
                title: 'Apoio e Motivação',
                url: '/apoio',
            },
            {
                title: 'Grupos e Canais Sociais',
                url: '/grupos',
            },
        ],
    },
    {
        title: 'Benefícios e Serviços',
        url: '#',
        items: [
            {
                title: 'Descontos',
                url: '/descontos',
            },
            {
                title: 'Outros apoios institucionais',
                url: '/outros-apoios',
                size: 'lg',
            },
        ],
    },
];
