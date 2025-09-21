import { getContributors } from '@/actions/contributors';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default async function ContributeCta() {
    const contributors = await getContributors();

    if (!contributors || contributors.length === 0) return null;

    const maxVisible = 6;
    const visibleContributors = contributors.slice(0, maxVisible);
    const remaining = contributors.length - maxVisible;

    return (
        <Link
            className='relative flex items-center bg-background shadow-[inset_0_-8px_10px_var(--card)] hover:shadow-[inset_0_-5px_10px_var(--accent)] mx-auto mb-8 p-1 px-4 py-1.5 border border-transparent rounded-full w-fit transition-shadow duration-500 ease-out'
            href={'https://github.com/the-rfer/wiki-lei'}
            target='_blank'
        >
            <span
                className={cn(
                    'block absolute inset-0 bg-[length:300%_100%] bg-gradient-to-r from-primary/80 via-accent/80 to-card/80 p-[1px] rounded-[inherit] w-full h-full animate-gradient'
                )}
                style={{
                    WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'destination-out',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'subtract',
                    WebkitClipPath: 'padding-box',
                }}
            />
            <div className='flex -space-x-1.5'>
                {visibleContributors.map((contributor) => (
                    <div key={contributor.id}>
                        <Avatar className='border-2 border-background w-8 h-8'>
                            <AvatarImage
                                src={contributor.avatar_url}
                                alt={contributor.login}
                            />
                            <AvatarFallback>
                                {contributor.login.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                ))}
                {remaining > 0 && (
                    <div className='flex justify-center items-center bg-secondary hover:bg-secondary border-2 border-background rounded-full ring-2 ring-background w-8 h-8 text-muted-foreground hover:text-foreground text-xs'>
                        +{remaining}
                    </div>
                )}
            </div>

            <p className='flex items-center px-2 text-muted-foreground text-xs'>
                Colabora na manutenção deste projeto
                <ArrowUpRight className='ml-2 w-4 h-4' />
            </p>
        </Link>
    );
}
