import Fuse from 'fuse.js';
import { NAV_LINKS as links } from '@/static/nav-links';

//TODO: adicionar todo o conteudo das páginas
const fuse = new Fuse(links, {
    keys: ['title', 'items.title'],
    includeMatches: true, // gives us positions of matches
    threshold: 0.3,
});

export function searchWiki(query: string) {
    const results = fuse.search(query);

    return results.map((result) => {
        const { item, matches } = result;

        const snippets: string[] = [];

        matches?.forEach((m) => {
            const text = item.title;

            m.indices.forEach(([start, end]) => {
                // Get surrounding sentence
                const before = text.lastIndexOf('.', start) + 1;
                const after = text.indexOf('.', end);
                const sentence = text.slice(before, after + 1).trim();

                // Highlight the matched substring
                const highlighted =
                    sentence.slice(0, start - before) +
                    `<mark>` +
                    sentence.slice(start - before, end - before + 1) +
                    `</mark>` +
                    sentence.slice(end - before + 1);

                snippets.push(highlighted);
            });
        });

        return {
            id: item.url,
            title: item.title,
            snippets: [...new Set(snippets)], // remove duplicates
        };
    });
}
