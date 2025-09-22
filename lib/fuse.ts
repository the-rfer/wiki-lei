'use client';

import Fuse from 'fuse.js';
import { ALL_PAGES as pages } from '@/static/search-data';

export type SearchWikiResult =
    | {
          results: {
              id: string;
              type: string;
              title: string;
              url: string;
              snippets: string[];
          }[];
      }
    | {
          results: [];
      };

/**
 * Procurar conteúdo em toda a wiki
 * @param query string para dar match
 */
export function searchWiki(query: string): SearchWikiResult {
    if (!query.trim()) return { results: [] };

    const fuse = new Fuse(pages, {
        keys: ['title', 'content'],
        includeMatches: true,
        threshold: 0,
        minMatchCharLength: query.length,
        ignoreDiacritics: true,
        shouldSort: true,
        findAllMatches: false,
        ignoreLocation: true,
    });

    const results = fuse.search(query, { limit: 10 });

    return {
        results: results.map((result) => {
            const { item, matches } = result;

            const snippets: string[] = [];

            matches?.forEach((m) => {
                if (m.value && m.indices) {
                    const highlighted = highlightIndices(m.value, m.indices);
                    snippets.push(highlighted);
                }
            });

            return {
                id: `${item.url}-${result.refIndex}`,
                type: 'page',
                title: item.title,
                url: item.url,
                snippets: [
                    ...snippets.slice(0, 3),
                    ...(snippets.length > 3
                        ? [`+${snippets.length - 3} resultados nesta página.`]
                        : []),
                ],
            };
        }),
    };
}

function highlightIndices(
    value: string,
    indices: readonly [number, number][]
): string {
    if (!indices || !indices.length) return value;

    let result = '';
    let lastIndex = 0;

    for (const [start, end] of indices) {
        result += value.slice(lastIndex, start);
        result += `<mark>${value.slice(start, end + 1)}</mark>`;
        lastIndex = end + 1;
    }

    result += value.slice(lastIndex);

    return result;
}
