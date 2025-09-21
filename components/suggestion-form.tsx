'use client';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useActionState, useEffect } from 'react';
import { createGithubIssue } from '@/actions/issues';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const formSchema = z.object({
    prefix: z.string(),
    title: z.string().min(1, {
        message: 'Título é obrigatório',
    }),
    description: z.string().min(1, {
        message: 'Descrição é obrigatória',
    }),
});

type GithubIssueState =
    | {
          error: string;
      }
    | {
          error: undefined;
          success: boolean;
          link: string;
      };

export default function SuggestionForm() {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prefix: '',
            title: '',
            description: '',
        },
    });

    const [state, formAction, pending] = useActionState(
        async (
            _prevState: GithubIssueState,
            formData: z.infer<typeof formSchema>
        ) => {
            const result = await createGithubIssue(formData);

            if (result?.error) {
                toast.error(result.error);
                return { error: result.error };
            }
            toast.success(
                <>
                    <p>A sua mensagem foi enviada!</p>
                    <Link
                        href={result.link}
                        className='underline'
                        target='_blank'
                    >
                        Clique aqui para acompanhar o estado.
                    </Link>
                </>
            );
            return { success: true, link: result.link };
        },
        { success: false, error: undefined, link: undefined }
    );

    useEffect(() => {
        if (state.success) {
            router.push('/');
        }
    }, [state, router]);

    const buttonStates = pending ? 'Enviando...' : 'Enviar';

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(formAction)}
                className='space-y-8 mx-auto py-10 max-w-3xl'
            >
                <FormField
                    control={form.control}
                    name='prefix'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tipo</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder='Escolha o tipo de contacto' />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value='SUGESTÃO'>
                                        Sugestão
                                    </SelectItem>
                                    <SelectItem value='PROBLEMA'>
                                        Problema
                                    </SelectItem>
                                    <SelectItem value='ATUALIZAÇÃO'>
                                        Atualização
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='title'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Título</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='Adicionar xyz..'
                                    type='text'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='description'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descrição</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder='Existe um novo recurso xyz disponivel em https://...'
                                    className='resize-none'
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Descreva em detalhe a sua mensagem.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit'>{buttonStates}</Button>
            </form>
        </Form>
    );
}
