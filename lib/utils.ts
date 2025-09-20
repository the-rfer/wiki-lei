import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isIos(): boolean {
    if (typeof navigator === 'undefined') return false;

    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;

    return /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
}
