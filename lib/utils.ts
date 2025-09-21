/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { NAV_LINKS, type NavItem } from '@/static/nav-links';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// returns boolean based on OS running the app.
export function isIos(): boolean {
    if (typeof navigator === 'undefined') return false;

    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;

    return /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
}

function humanize(slug: string) {
    return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function findLabel(slug: string, links: NavItem[]): string | null {
    for (const link of links) {
        if (link.url && link.url.replace(/^\//, '') === slug) {
            return link.title;
        }

        if (link.items) {
            const nested = findLabel(slug, link.items);
            if (nested) return nested;
        }
    }

    return null;
}

// returns labels for breadcrumbs
export function getLabel(slug: string) {
    return findLabel(slug, NAV_LINKS) || humanize(slug);
}
