# Imoveis Teresina

Site estatico para anuncios de imoveis em Teresina-PI, com foco em:

- paginas individuais por imovel
- contato rapido por telefone e WhatsApp
- SEO local
- painel administrativo em `/admin`
- deploy simples no GitHub + Netlify

## Stack

- Astro
- Conteudo em Markdown (`src/content`)
- Decap CMS com Git Gateway
- Netlify para deploy

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura principal

- `src/content/imoveis`: anuncios dos imoveis
- `src/content/blog`: artigos para SEO local
- `public/admin`: painel administrativo
- `public/uploads`: imagens enviadas pelo CMS

## Publicacao no Netlify

1. Conecte o repositorio `ronaldomelofz/imoveis` a um novo site na Netlify.
2. Confirme o comando de build `npm run build`.
3. Confirme o diretorio publicado `dist`.
4. Ative **Identity** e depois **Git Gateway** no painel da Netlify.
5. Crie o primeiro usuario administrador do CMS.
6. Acesse `/admin` para cadastrar imoveis e artigos.

## SEO local recomendado apos deploy

1. Cadastrar o dominio no Google Search Console.
2. Enviar o sitemap gerado pelo Astro.
3. Criar e otimizar o Google Business Profile.
4. Publicar novos anuncios e artigos com frequencia.
5. Conseguir citacoes locais e backlinks regionais.

## Observacao importante

O projeto ja fica tecnicamente preparado para SEO, mas nenhuma aplicacao consegue garantir automaticamente primeiras posicoes no Google. O ranking depende de autoridade do dominio, concorrencia, consistencia de conteudo, Search Console, perfil local e tempo de indexacao.
