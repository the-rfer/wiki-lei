# Guia de Contribuição para o Wiki

## Desenvolvimento - Quickstart

Para iniciar o projeto localmente, siga estes passos:

1. Clone o repositório:

```bash
git clone https://github.com/the-rfer/wiki-lei.git
```

2. Entre na pasta do projeto:

```bash
cd wiki-lei
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra o navegador em `http://localhost:3000` para ver a aplicação.

## Como contribuir para o conteúdo do Wiki

Para garantir que o wiki se mantém atualizado e pesquisável, siga estas instruções ao criar, atualizar ou apagar conteúdo.

### Atualização de Conteúdo

1. **Página:** Todo o conteúdo deve ser atualizado no ficheiro da página correspondente, normalmente chamado `page.tsx`.
2. **Ficheiro de Dados:** Para que a pesquisa fuzzy funcione corretamente, atualize também o ficheiro de dados correspondente (`data.ts`).

    - O ficheiro de dados deve exportar **uma constante default** com o nome `<pagename>Data`.
    - Esta constante deve respeitar o tipo `FuseWikiDataType`.
    - O conteúdo deve ser uma **array de todas as frases** presentes no texto atualizado.
    - Se estiver a criar um **novo ficheiro `data.ts`**, deve também importá-lo em `data/search-data.ts` e garantir que seja adicionado ao **array de exportação `ALL_PAGES`**.

3. **Boas práticas:**

    - Garantir consistência entre o conteúdo da página e o ficheiro de dados.
    - Atualizações, deleções ou novas criações devem ser refletidas em ambos os ficheiros.

### Contribuições de Código

1. **Fork e Branch:**

    - Faça fork do repositório.
    - Crie uma branch que indique o tipo de atualização (ex: `update-conteudo-2025`).

2. **Pull Request:**

    - Crie uma PR descrevendo claramente o que foi alterado.
    - Sempre siga as melhores práticas de **TypeScript** e **Next.js**.

3. **Boas práticas de código:**

    - Evite atualizar dependências sem referência explícita na PR.
    - Refatores e alterações estruturais são bem-vindas, desde que sejam **bem documentadas** e **melhorem a experiência de desenvolvimento** para todos os colaboradores.

### Resumo

-   Todo o conteúdo deve estar **sincronizado** entre `page.tsx` e `data.ts`.
-   Use **constantes default** e **arrays de frases** para os ficheiros de dados.
-   Se criar novos ficheiros de dados, **importá-los em `data/search-data.ts`** e adicioná-los a `ALL_PAGES`.
-   Contribuições de código devem respeitar **TS/Next.js**, ser bem documentadas e seguir boas práticas.

Obrigado por contribuir e ajudar a manter o Wiki organizado e funcional!
