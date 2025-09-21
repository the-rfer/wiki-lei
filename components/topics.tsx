import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Calendar,
    GraduationCap,
    Users,
    Wrench,
    Info,
    Award,
} from 'lucide-react';

const topics = [
    {
        id: 'informacoes-gerais',
        title: 'Informações Gerais',
        description:
            'Guia Informativo Oficial, apresentação da licenciatura, história e evolução do curso (LI → LEI)',
        icon: Info,
        items: [
            'Guia Informativo Oficial',
            'Apresentação da Licenciatura',
            'História e evolução do curso',
        ],
        href: '#',
    },
    {
        id: 'estrutura-curso',
        title: 'Estrutura do Curso',
        description:
            'Plano de Estudos completo (1º, 2º, 3º ano) e precedências de unidades curriculares',
        icon: GraduationCap,
        items: ['Plano de Estudos', 'Precedências de UCs'],
        href: '#',
    },
    {
        id: 'avaliacao-calendarios',
        title: 'Avaliação e Calendários',
        description:
            'Regulamento de avaliação, calendário académico e arquivo de calendários anteriores',
        icon: Calendar,
        items: [
            'Regulamento de Avaliação',
            'Calendário Académico',
            'Provas Presenciais e Online',
        ],
        href: '#',
    },
    {
        id: 'recursos-estudantes',
        title: 'Recursos para Estudantes',
        description:
            'Módulo de Ambientação Online (MAO), ferramentas de estudo e dicas úteis',
        icon: Wrench,
        items: [
            'Módulo de Ambientação Online',
            'Ferramentas de Estudo',
            'Dicas e Informações Úteis',
        ],
        href: '#',
    },
    {
        id: 'comunidade-apoio',
        title: 'Comunidade e Apoio',
        description:
            'FAQ, apoio e motivação, grupos sociais (Rocket.Chat, Telegram, Discord, Teams)',
        icon: Users,
        items: [
            'FAQ',
            'Apoio e Motivação',
            'Associação Académica',
            'Grupos Sociais',
        ],
        href: '#',
    },
    {
        id: 'beneficios-servicos',
        title: 'Benefícios e Serviços',
        description:
            'Descontos para estudantes e outros apoios institucionais disponíveis',
        icon: Award,
        items: ['Descontos', 'Apoios Institucionais', 'Serviços Estudantis'],
        href: '#',
    },
];

export default function TopicsGrid() {
    return (
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {topics.map((topic) => {
                const IconComponent = topic.icon;
                return (
                    <Card
                        key={topic.id}
                        className='group bg-card hover:shadow-lg border-border h-full hover:scale-105 transition-all duration-200 cursor-pointer'
                    >
                        <CardHeader className='pb-4 text-center'>
                            <div className='bg-primary/10 group-hover:bg-primary/20 mx-auto mb-4 p-3 rounded-full w-fit transition-colors'>
                                <IconComponent className='w-8 h-8 text-primary' />
                            </div>
                            <CardTitle className='text-card-foreground group-hover:text-primary text-lg transition-colors'>
                                {topic.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='space-y-4 pt-0'>
                            <CardDescription className='text-muted-foreground text-sm leading-relaxed'>
                                {topic.description}
                            </CardDescription>
                            <div className='space-y-1'>
                                {topic.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className='flex items-center gap-2 text-muted-foreground text-xs'
                                    >
                                        <div className='flex-shrink-0 bg-accent rounded-full w-1 h-1' />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
