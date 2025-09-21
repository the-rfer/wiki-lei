'use server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
const CONTRIBUTE_URL = process.env.CONTRIBUTE_URL!;

export type Contributor = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    user_view_type: string;
    site_admin: boolean;
    contributions: number;
}[];

export async function getContributors(): Promise<Contributor> {
    const res = await fetch(CONTRIBUTE_URL, {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: 'application/vnd.github+json',
        },
        next: { revalidate: 60 * 60 * 24 }, // Cache 24h
    });

    if (!res.ok) throw new Error('Failed to fetch contributors');
    return res.json();
}
