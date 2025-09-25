import { Muted } from './typography';
import { getLastCommitDate } from '@/actions/lastUpdate';

export default async function LastUpdate() {
    const { date } = await getLastCommitDate();
    const formatted = new Date(date).toLocaleDateString('pt-PT');
    return (
        <Muted className='pt-2 text-xs'>Última atualização a {formatted}</Muted>
    );
}
