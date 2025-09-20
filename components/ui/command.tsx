'use client';

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

function Command({
    className,
    ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
    return (
        <CommandPrimitive
            data-slot='command'
            className={cn(
                'flex flex-col bg-popover rounded-md w-full h-full overflow-hidden text-popover-foreground',
                className
            )}
            {...props}
        />
    );
}

function CommandDialog({
    title = 'Command Palette',
    description = 'Search for a command to run...',
    children,
    className,
    showCloseButton = true,
    ...props
}: React.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
    className?: string;
    showCloseButton?: boolean;
}) {
    return (
        <Dialog {...props}>
            <DialogHeader className='sr-only'>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <DialogContent
                className={cn('p-0 overflow-hidden', className)}
                showCloseButton={showCloseButton}
            >
                <Command className='[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
                    {children}
                </Command>
            </DialogContent>
        </Dialog>
    );
}

function CommandInput({
    className,
    ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
    return (
        <div
            data-slot='command-input-wrapper'
            className='flex items-center gap-2 px-3 border-b h-9'
        >
            <SearchIcon className='opacity-50 size-4 shrink-0' />
            <CommandPrimitive.Input
                data-slot='command-input'
                className={cn(
                    'flex bg-transparent disabled:opacity-50 py-3 rounded-md outline-hidden w-full h-10 text-sm disabled:cursor-not-allowed',
                    className
                )}
                {...props}
            />
        </div>
    );
}

function CommandList({
    className,
    ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
    return (
        <CommandPrimitive.List
            data-slot='command-list'
            className={cn(
                'max-h-[300px] overflow-x-hidden overflow-y-auto scroll-py-1',
                className
            )}
            {...props}
        />
    );
}

function CommandEmpty({
    ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
    return (
        <CommandPrimitive.Empty
            data-slot='command-empty'
            className='py-6 text-sm text-center'
            {...props}
        />
    );
}

function CommandGroup({
    className,
    ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
    return (
        <CommandPrimitive.Group
            data-slot='command-group'
            className={cn(
                'p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 overflow-hidden [&_[cmdk-group-heading]]:font-medium text-foreground [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs',
                className
            )}
            {...props}
        />
    );
}

function CommandSeparator({
    className,
    ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
    return (
        <CommandPrimitive.Separator
            data-slot='command-separator'
            className={cn('-mx-1 bg-border h-px', className)}
            {...props}
        />
    );
}

function CommandItem({
    className,
    ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
    return (
        <CommandPrimitive.Item
            data-slot='command-item'
            className={cn(
                "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className
            )}
            {...props}
        />
    );
}

function CommandShortcut({
    className,
    ...props
}: React.ComponentProps<'span'>) {
    return (
        <span
            data-slot='command-shortcut'
            className={cn(
                'ml-auto text-muted-foreground text-xs tracking-widest',
                className
            )}
            {...props}
        />
    );
}

export {
    Command,
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandShortcut,
    CommandSeparator,
};
