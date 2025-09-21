'use server';

import z from 'zod';
import { formSchema } from '@/components/suggestion-form';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
const ISSUES_URL = process.env.ISSUES_URL!;

export async function createGithubIssue(formData: z.infer<typeof formSchema>) {
    const { prefix, title, description } = formData;

    const fullTitle = `[${prefix}]: ${title}`;

    const response = await fetch(ISSUES_URL, {
        method: 'POST',
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: 'application/vnd.github+json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: fullTitle, body: description }),
    });

    if (!response.ok) {
        const data = await response.json();

        console.error('Error creating GitHub issue:', data.message);

        return {
            error: 'Houve um erro ao enviar a mensagem. Tente novamente mais tarde.',
        };
    }

    const data = await response.json();

    return {
        success: true,
        link: data.html_url,
    };
}
