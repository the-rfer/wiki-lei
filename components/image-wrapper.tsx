'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

type ImageWrapperProps = {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
};

export default function ImageWrapper({
    src,
    alt,
    width = 800,
    height = 800,
    className,
}: ImageWrapperProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            onClick={() => window.open(src, '_blank')}
            className={cn('cursor-pointer', className)}
        />
    );
}
