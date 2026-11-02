# Blog Moderno - HTML, CSS e JS

Blog moderno, responsivo e engajador com suporte a tags, busca, páginas individuais de post e painel administrativo com login para publicação.

## Estrutura

```
blog/
├── index.html        # Página inicial (lista de posts, busca, tags)
├── post.html         # Página individual de um post
├── admin.html        # Painel admin (login, criar/editar/excluir posts)
├── style.css         # Estilos modernos e responsivos
├── app.js            # Lógica do blog (posts, tags, autenticação admin)
├── vercel.json       # Configuração para hospedar no Vercel
└── README.md         # Este arquivo
```

## Como usar localmente

Abra o arquivo `index.html` no navegador. Não precisa de servidor local.

## Como hospedar no Vercel

1. Envie esta pasta para um repositório no GitHub.
2. Acesse [vercel.com](https://vercel.com) e importe o repositório.
3. O Vercel detecta automaticamente que é um site estático. Publique.
4. O arquivo `vercel.json` já está configurado para rotear corretamente as páginas.

## Funcionalidades

- ✅ Página inicial com lista de posts em destaque
- ✅ Busca por título/conteúdo
- ✅ Filtro por tags
- ✅ Página individual de cada post
- ✅ Design responsivo (mobile-first)
- ✅ Painel administrativo com login
- ✅ Criar, editar e excluir posts
- ✅ Armazenamento no `localStorage` (não precisa de backend)
- ✅ Pronto para Vercel (site estático)

## Credenciais de admin padrão

- Usuário: `admin`
- Senha: `admin123`

Você pode alterar as credenciais no arquivo `app.js` ou criar um novo usuário pelo próprio painel após o primeiro login.
