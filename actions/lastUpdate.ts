'use server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
const LAST_UPDATE_URL = process.env.LAST_UPDATE_URL!;

export async function getLastCommitDate() {
    const res = await fetch(LAST_UPDATE_URL, {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: 'application/vnd.github+json',
        },
        next: { revalidate: 86400 },
    });

    if (!res.ok) throw new Error('Failed to fetch commit data');

    const data = await res.json();
    return {
        date: data.commit.author.date,
    };
}
