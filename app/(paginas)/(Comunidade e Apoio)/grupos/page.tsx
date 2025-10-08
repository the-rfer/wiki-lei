import { H1, H4, P } from '@/components/typography';

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Grupos e Canais Sociais - Wiki Lei',
    description: '',
    keywords: ['Wiki Lei'],
    openGraph: {
        title: 'Grupos e Canais Sociais - Wiki Lei',
        description: '',
        url: '',
        siteName: 'Wiki Lei',
    },
};

const pageData = [
    {
        title: 'Associação Académica da Universidade Aberta',
        url: 'http://www.aauab.pt/',
    },
    {
        title: 'Chat de alunos alternativo na Rede Social WhatsApp',
        url: 'https://chat.whatsapp.com/DkmzR6znDQj3wgHsREbqTN',
    },
    {
        title: 'Chat de alunos alternativo na Rede Social Telegram',
        url: 'https://t.me/joinchat/RMAQoaFCNpNtBtlX',
    },
    {
        title: 'Chat de alunos alternativo na Rede Social Discord',
        url: 'https://discord.gg/hhHXXY6aBM',
    },
    {
        title: 'Chat de alunos alternativo na Rede Social Discord Caloiros 23/24',
        url: 'https://discord.gg/BaNHChsjXS',
    },

    {
        title: 'Equipa de LEI no Microsoft Teams (conta Office da UAb)',
        url: 'https://www.microsoft.com/pt-pt/microsoft-teams/log-in?market=pt',
    },
    {
        title: 'Grupo "UAb - INFORMÁTICA/ MATEMÁTICA" no Facebook',
        url: 'https://www.facebook.com/groups/UAB.INFORMATICA/',
        notes: () => (
            <>
                <div className='my-2'>
                    <P>
                        É necessário facultar o número de estudante e URL para a
                        página do perfil no moodle ao fazer o pedido. Para
                        saberes qual é o URL do teu perfil no Moodle, vai a
                        https://elearning.uab.pt/my e depois clica na tua foto
                        (no canto superior direito da página), escolhe
                        &quot;Perfil&quot; e copia o link que está na barra do
                        browser.
                    </P>
                    <P>
                        Atenção: O URL do perfil no moodle tem o seguinte
                        formato:
                        &apos;https://elearning.uab.pt/user/profile.php?id=xxxxx&apos;
                        (em que &apos;xxxxx&apos; tipicamente é um número com 5
                        algarismos). Se na barra do browser o endereço não
                        terminar com algarismos, deves ter uma opção por baixo
                        da foto de perfil para &quot;Restaurar página para os
                        valores predefinidos&quot;. Clica nessa opção que o URL
                        fica completo.
                    </P>
                </div>
                <hr />
            </>
        ),
    },
    {
        title: 'Rocket (chat) dos alunos da LEI (Licenciatura em Engenharia Informática) e da LMeA ("Licenciatura em Matemática e Aplicações")',
        url: 'https://chat.estudarnauab.pt/register/qEKy8e5EvAKYS8X3q',
        notes: () => (
            <div className='my-2'>
                <P>
                    Caros colegas, tenham em atenção que os colegas que
                    administram o Rocket Chat são estudantes como vocês. Têm
                    famílias para se dedicarem e UCs para estudarem. Assim
                    sendo, por favor, respeitem o seu pouco tempo livre e{' '}
                    <b>
                        não se esqueçam de indicar o perfil do Moodle na razão
                        de inscrição!
                    </b>
                </P>
                <P>
                    Para te registares no Rocket Chat, preenche o seguinte
                    formulário:
                    https://chat.estudarnauab.pt/register/qEKy8e5EvAKYS8X3q (em
                    vigor a partir de 2022.04.16)
                </P>
                <P>
                    Nesse formulário de registo que aparece, toma atenção ao
                    seguinte:
                </P>
                <ul>
                    <li>
                        No campo de &quot;Email&quot; coloca o teu endereço de
                        e-mail da UAb que tem o formato
                        número-de-estudante@estudante.uab.pt
                    </li>
                    <li>
                        <P>
                            No último campo que é o campo de &quot;&apos;Link do
                            perfil da plataforma obrigatório ou Reason to join
                            ou similar&apos;&quot; coloca o URL para o teu
                            perfil no Moodle (&quot;PlataformAberta&quot;) da
                            UAb. Para saberes qual é o URL do teu perfil no
                            Moodle, vai a https://elearning.uab.pt/my e depois
                            clica na tua foto (no canto superior direito da
                            página), seleciona Preferências, clica em Editar
                            Perfil e copia o link com o id ou só o id que está
                            na barra do browser e constrói o URL com o formato
                            abaixo indicado. (Caso não apareça o número do id,
                            clicar na foto)
                        </P>
                        <P>
                            Atenção: O URL do perfil no moodle tem o seguinte
                            formato:
                            &apos;https://elearning.uab.pt/user/profile.php?id=xxxxx&apos;
                            (em que &apos;xxxxx&apos; tipicamente é um número
                            com 5 algarismos)
                        </P>
                    </li>
                </ul>
                <H4 className='mt-4'>Participar no Rocket Chat</H4>
                <P>
                    Quando o teu registo no Rocket chat for aceite, poderás
                    participar na página: https://chat.estudarnauab.pt/
                </P>
                <P>
                    Existem aplicações móveis para Android e iOS do Rocket.Chat
                    :
                </P>
                <P>Android:</P>
                <div className='flex flex-col gap-2'>
                    <Link href='https://play.google.com/store/apps/details?id=chat.rocket.android&hl=pt_PT&gl=US'>
                        &quot;Rocket.Chat&quot;
                    </Link>
                    <Link href='https://play.google.com/store/apps/details?id=chat.rocket.reactnative&hl=pt_PT&gl=US'>
                        &quot;Rocket.Chat Experimental&quot;
                    </Link>
                </div>
                <P>iOS:</P>
                <Link href='https://apps.apple.com/us/app/rocket-chat/id1148741252'>
                    &quot;Rocket.Chat&quot;
                </Link>
            </div>
        ),
    },
];

export default function Page() {
    return (
        <div className='mx-auto p-4 max-w-2xl'>
            <H1>Grupos e Canais Sociais</H1>
            <ul className='space-y-2 my-4 list-disc list-inside'>
                {pageData.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.url}
                            target='_blank'
                            className='hover:underline'
                        >
                            {item.title}
                        </Link>
                        {item.notes && item.notes()}
                    </li>
                ))}
            </ul>
        </div>
    );
}
