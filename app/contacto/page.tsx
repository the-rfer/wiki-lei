import SuggestionForm from '@/components/suggestion-form';
import { Suspense } from 'react';

export default function Page() {
    return (
        <div>
            page
            <Suspense fallback={<div>Carregando formulário...</div>}>
                <SuggestionForm />
            </Suspense>
        </div>
    );
}
