/* =========================================
   BLOG MODERNO - LÓGICA (JS)
   ========================================= */

const STORAGE_KEY_POSTS = "blog_posts";
const STORAGE_KEY_TAGS = "blog_tags";
const STORAGE_KEY_ADMIN = "blog_admin";

// Dados iniciais (seed) caso não haja nada no localStorage
const SEED_POSTS = [
  {
    id: "1",
    title: "O futuro do design web em 2026",
    slug: "futuro-design-web-2026",
    excerpt:
      "Explore as tendências que vão moldar a web nos próximos anos: glassmorphism, IA generativa e interfaces imersivas.",
    content: `
      <p>O design web nunca estagnou, mas 2026 promete ser um ponto de inflexão. Com o avanço da inteligência artificial generativa, novas ferramentas e expectativas de usuários, estamos entrando em uma era de interfaces mais humanas, fluidas e inteligentes.</p>
      <h2>1. Glassmorphism e profundidade</h2>
      <p>O efeito de vidro fosco continua em alta, trazendo camadas visuais que criam hierarquia sem poluir a interface. Transparências sutis, borrões de fundo e bordas delicadas dão uma sensação de tridimensionalidade.</p>
      <h2>2. IA generativa no creation de interfaces</h2>
      <p>Ferramentas de IA agora geram componentes inteiros a partir de descrições em linguagem natural. Isso acelera o processo de prototipagem e permite que designers foquem na estratégia, não apenas na execução.</p>
      <h2>3. Acessibilidade como padrão</h2>
      <p>Não é mais um "extra". Sites que não são acessíveis perdem relevância e público. Contraste, navegação por teclado e leitores de tela são requisitos básicos.</p>
      <p>Prepare-se: o futuro da web é visualmente rico, tecnicamente avançado e, acima de tudo, centrado nas pessoas.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    author: "Equipe Blog",
    date: "2026-01-15",
    tags: ["design", "tendências", "web"],
    published: true,
    featured: true
  },
  {
    id: "2",
    title: "Como criar conteúdo que engaja de verdade",
    slug: "conteudo-que-engaja",
    excerpt:
      "Dicas práticas para escrever artigos que prendem a atenção do leitor do início ao fim e geram conversão real.",
    content: `
      <p>Criar conteúdo não é apenas escrever. É capturar atenção, manter o interesse e entregar valor genuíno. Em um mundo saturado de informações, se destacar exige estratégia.</p>
      <h2>Conheça sua persona</h2>
      <p>Antes de escrever qualquer palavra, você precisa saber para quem está escrevendo. Quais são as dores, desejos e perguntas do seu público?</p>
      <h2>Estruture para leitura rápida</h2>
      <p>Use subtítulos, listas, parágrafos curtos e destaques. A maioria das pessoas escaneia o conteúdo antes de decidir se vai ler por completo.</p>
      <h2>Chamadas para ação claras</h2>
      <p>Todo conteúdo deve ter um propósito. Quer que o leitor se inscreva na newsletter? Compre um produto? Compartilhe? Deixe isso claro.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    author: "Equipe Blog",
    date: "2026-02-03",
    tags: ["marketing", "conteúdo", "copywriting"],
    published: true,
    featured: true
  },
  {
    id: "3",
    title: "Deploy no Vercel: guia rápido para iniciantes",
    slug: "deploy-vercel-guia",
    excerpt:
      "Aprenda a hospedar seu site estático ou aplicação no Vercel em poucos minutos, com domínio customizado e HTTPS automático.",
    content: `
      <p>O Vercel se tornou uma das plataformas preferidas para hospedar projetos frontend. Seja um blog em HTML puro, um React, Next.js ou Vue, o deploy é simples e rápido.</p>
      <h2>Passo 1: Conecte seu repositório</h2>
      <p>Importe seu projeto do GitHub, GitLab ou Bitbucket. O Vercel detecta automaticamente o framework e as configurações de build.</p>
      <h2>Passo 2: Configure variáveis de ambiente</h2>
      <p>Se seu projeto usa chaves de API, adicione-as nas configurações do projeto no painel do Vercel.</p>
      <h2>Passo 3: Publique</h2>
      <p>Cada push no repositório gera um novo deploy automático. Você recebe URLs de preview para cada pull request.</p>
      <p>Pronto! Seu site está online com HTTPS, CDN global e otimizações de performance incluídas.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1555086775-52274c2065ff?w=1200&q=80",
    author: "Equipe Blog",
    date: "2026-02-20",
    tags: ["vercel", "deploy", "tutoriais"],
    published: true,
    featured: false
  },
  {
    id: "4",
    title: "Minimalismo digital: menos é mais",
    slug: "minimalismo-digital",
    excerpt:
      "Reflexões sobre simplificar a vida digital, reduzir ruídos e focar no que realmente importa online.",
    content: `
      <p>Vivemos em uma era de notificações constantes, infinitas abas abertas e distrações digitais. O minimalismo digital propõe um caminho de volta ao foco.</p>
      <h2>Desligue o que não agrega</h2>
      <p>Avalie quais aplicativos, newsletters e redes sociais realmente trazem valor. O resto pode ser removido sem culpa.</p>
      <h2>Crie espaços de atenção profunda</h2>
      <p>Reserve blocos de tempo sem telas para leitura, escrita ou pensamento profundo. Sua produtividade vai agradecer.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    author: "Equipe Blog",
    date: "2026-03-10",
    tags: ["estilo de vida", "produtividade", "reflexão"],
    published: true,
    featured: false
  }
];

const SEED_TAGS = ["design", "tendências", "web", "marketing", "conteúdo", "copywriting", "vercel", "deploy", "tutoriais", "estilo de vida", "produtividade", "reflexão"];

// ===== Inicialização do estado =====
function initStorage() {
  if (!localStorage.getItem(STORAGE_KEY_POSTS)) {
    localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(SEED_POSTS));
  }
  if (!localStorage.getItem(STORAGE_KEY_TAGS)) {
    localStorage.setItem(STORAGE_KEY_TAGS, JSON.stringify(SEED_TAGS));
  }
  if (!localStorage.getItem(STORAGE_KEY_ADMIN)) {
    localStorage.setItem(STORAGE_KEY_ADMIN, JSON.stringify([{ user: "admin", pass: "admin123" }]));
  }
}

function getPosts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY_POSTS) || "[]");
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(posts));
}

function getTags() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY_TAGS) || "[]");
}

function saveTags(tags) {
  localStorage.setItem(STORAGE_KEY_TAGS, JSON.stringify(tags));
}

function getAdmins() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY_ADMIN) || "[]");
}

// ===== Utilitários =====
function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== Router simples =====
const router = {
  routes: {},
  init() {
    window.addEventListener("popstate", () => this.resolve());
    this.resolve();
  },
  navigate(path) {
    window.history.pushState({}, "", path);
    this.resolve();
  },
  resolve() {
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    const isAdmin = path.startsWith("/admin");
    const isPost = path.startsWith("/post/");

    if (isAdmin) {
      renderAdmin();
    } else if (isPost) {
      const slug = path.split("/")[2];
      renderPost(slug);
    } else {
      renderHome();
    }
  },
};

// ===== Renderização: Home =====
function renderHome() {
  const app = document.getElementById("app");
  if (!app) return;

  const posts = getPosts().filter((p) => p.published);
  const tags = getTags();
  const featured = posts.filter((p) => p.featured);
  const regular = posts.filter((p) => !p.featured);

  // Detecta filtro por tag na URL (?tag=...)
  const urlParams = new URLSearchParams(window.location.search);
  const filterTag = urlParams.get("tag");
  const searchQuery = urlParams.get("q");

  let filtered = posts;
  if (filterTag) {
    filtered = filtered.filter((p) => p.tags && p.tags.includes(filterTag));
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        (p.excerpt || "").toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  }

  const activeTag = filterTag ? tags.find((t) => t === filterTag) : null;

  app.innerHTML = `
    <nav class="navbar">
      <div class="nav-container">
        <a href="/" class="logo" data-nav>Blog <span>Moderno</span></a>
        <ul class="nav-links">
          <li><a href="/" data-nav>Início</a></li>
          <li><a href="#sobre" data-nav>Sobre</a></li>
          <li><a href="#contato" data-nav>Contato</a></li>
        </ul>
        <a href="/admin.html" class="btn-login">Entrar</a>
      </div>
    </nav>

    <section class="hero">
      <h1>Conteúdo que engaja, ideias que inspiram.</h1>
      <p>Um blog moderno, responsivo e feito para leitores curiosos. Explore artigos sobre design, tecnologia, marketing e muito mais.</p>
      <div class="search-container">
        <input type="text" id="searchInput" placeholder="Buscar artigos..." />
      </div>
    </section>

    <section class="tags-section">
      <h3>Tópicos</h3>
      <div class="tag-list">
        ${tags
          .map(
            (tag) =>
              `<button class="tag-btn ${filterTag === tag ? "active" : ""}" onclick="filterByTag('${escapeHtml(tag)}')">${escapeHtml(tag)}</button>`
          )
          .join("")}
      </div>
    </section>

    <section class="posts-grid" id="postsGrid">
      ${renderPostsGrid(filtered, activeTag)}
    </section>

    <script>
      document.getElementById('searchInput').addEventListener('input', function() {
        const q = this.value.trim();
        const base = window.location.pathname;
        const url = q ? base + '?q=' + encodeURIComponent(q) : base;
        window.history.pushState({}, '', url);
        renderHome();
      });
    </script>
  `;
}

function renderPostsGrid(posts, activeTag) {
  if (!posts || posts.length === 0) {
    return `
      <div class="empty-state">
        <h2>${activeTag ? `Nenhum post com a tag "${escapeHtml(activeTag)}"` : "Nenhum artigo encontrado"}</h2>
        <p>Tente outro tópico ou volte à página inicial.</p>
      </div>
    `;
  }

  return posts
    .map(
      (post) => `
      <article class="post-card" onclick="openPost('${escapeHtml(post.slug)}')">
        <div class="post-card-image" data-category="${escapeHtml(post.author || "Blog")}">
          <img src="${escapeHtml(post.coverImage || "")}" alt="${escapeHtml(post.title)}" loading="lazy" onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg, #1e293b 0%, #0f172a 100%)';">
        </div>
        <div class="post-card-body">
          <div class="post-card-tags">
            ${(post.tags || [])
              .map((t) => `<span>${escapeHtml(t)}</span>`)
              .join("")}
          </div>
          <h3>${escapeHtml(post.title)}</h3>
          <p>${escapeHtml(post.excerpt || "")}</p>
          <div class="post-card-meta">
            <span>${formatDate(post.date)}</span>
            <span class="read-more">Ler artigo →</span>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

window.filterByTag = function (tag) {
  const base = window.location.pathname;
  const url = tag ? base + "?tag=" + encodeURIComponent(tag) : base;
  window.history.pushState({}, "", url);
  renderHome();
};

window.openPost = function (slug) {
  router.navigate("/post/" + slug);
};

// ===== Renderização: Post individual =====
function renderPost(slug) {
  const app = document.getElementById("app");
  if (!app) return;

  const posts = getPosts();
  const post = posts.find((p) => p.slug === slug && p.published);

  if (!post) {
    app.innerHTML = `
      <nav class="navbar">
        <div class="nav-container">
          <a href="/" class="logo" data-nav>Blog <span>Moderno</span></a>
          <a href="/admin.html" class="btn-login">Entrar</a>
        </div>
      </nav>
      <div class="posts-grid" style="max-width: 600px;">
        <div class="empty-state">
          <h2>Artigo não encontrado</h2>
          <p>O artigo que você procura não existe ou não está publicado.</p>
          <a href="/" class="btn btn-primary" style="margin-top:1rem">Voltar ao início</a>
        </div>
      </div>
    `;
    return;
  }

  app.innerHTML = `
    <nav class="navbar">
      <div class="nav-container">
        <a href="/" class="logo" data-nav>Blog <span>Moderno</span></a>
        <a href="/admin.html" class="btn-login">Entrar</a>
      </div>
    </nav>

    <article class="post-page">
      <a href="/" class="back-link" data-nav>← Voltar ao início</a>
      <header class="post-header">
        <div class="post-tags">
          ${(post.tags || [])
            .map((t) => `<span>${escapeHtml(t)}</span>`)
            .join("")}
        </div>
        <h1>${escapeHtml(post.title)}</h1>
        <div class="post-meta">
          <span>Por ${escapeHtml(post.author || "Equipe Blog")}</span>
          <span>·</span>
          <span>${formatDate(post.date)}</span>
        </div>
      </header>
      <div class="post-content">
        ${post.content}
      </div>
    </article>
  `;

  document.title = `${post.title} - Blog Moderno`;
}

// ===== Renderização: Admin =====
function renderAdmin() {
  const app = document.getElementById("app");
  if (!app) return;

  const isLogged = sessionStorage.getItem("blog_admin_logged") === "true";

  if (!isLogged) {
    app.innerHTML = `
      <nav class="navbar">
        <div class="nav-container">
          <a href="/" class="logo" data-nav>Blog <span>Moderno</span></a>
        </div>
      </nav>
      <div class="login-box">
        <div class="login-card">
          <h2>Painel Administrativo</h2>
          <form id="loginForm">
            <div class="form-group">
              <label>Usuário</label>
              <input type="text" id="adminUser" required placeholder="admin" />
            </div>
            <div class="form-group">
              <label>Senha</label>
              <input type="password" id="adminPass" required placeholder="••••••••" />
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%">Entrar</button>
          </form>
          <p style="margin-top:1.5rem; font-size:0.85rem; color:var(--muted)">
            Credencial padrão: admin / admin123
          </p>
        </div>
      </div>
    `;

    document.getElementById("loginForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("adminUser").value;
      const pass = document.getElementById("adminPass").value;
      const admins = getAdmins();
      const match = admins.find((a) => a.user === user && a.pass === pass);
      if (match) {
        sessionStorage.setItem("blog_admin_logged", "true");
        showToast("Bem-vindo, admin!", "success");
        router.navigate("/admin.html");
      } else {
        showToast("Usuário ou senha incorretos", "error");
      }
    });
    return;
  }

  const posts = getPosts().sort((a, b) => new Date(b.date) - new Date(a.date));
  const tags = getTags();

  app.innerHTML = `
    <nav class="navbar">
      <div class="nav-container">
        <a href="/" class="logo" data-nav>Blog <span>Moderno</span></a>
        <ul class="nav-links">
          <li><a href="/" data-nav>Ver o blog</a></li>
        </ul>
        <button class="btn btn-danger btn-sm" onclick="logoutAdmin()">Sair</button>
      </div>
    </nav>

    <div class="admin-container">
      <div class="admin-card">
        <div class="admin-header">
          <h2>Painel Administrativo</h2>
          <button class="btn btn-primary" onclick="switchTab('new')">+ Novo post</button>
        </div>

        <div class="admin-tabs">
          <div class="admin-tab active" onclick="switchTab('list')">Posts</div>
          <div class="admin-tab" onclick="switchTab('tags')">Tags</div>
        </div>

        <!-- Lista de posts -->
        <div id="tab-list" class="admin-tab-content active">
          <div class="admin-posts-list">
            ${posts
              .map(
                (p) => `
              <div class="admin-post-item">
                <div>
                  <h4>${escapeHtml(p.title)}</h4>
                  <p>${formatDate(p.date)} · ${(p.tags || []).join(", ")} · ${p.published ? "Publicado" : "Rascunho"}</p>
                </div>
                <div class="admin-post-actions">
                  <button class="btn btn-outline btn-sm" onclick="editPost('${escapeHtml(p.id)}')">Editar</button>
                  <button class="btn btn-danger btn-sm" onclick="deletePost('${escapeHtml(p.id)}')">Excluir</button>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
          ${posts.length === 0 ? '<p style="color:var(--muted); text-align:center; padding:2rem">Nenhum post cadastrado.</p>' : ""}
        </div>

        <!-- Novo/Editar post -->
        <div id="tab-new" class="admin-tab-content">
          <form id="postForm">
            <input type="hidden" id="postId" />
            <div class="form-group">
              <label>Título</label>
              <input type="text" id="postTitle" required placeholder="Título do artigo" />
            </div>
            <div class="form-group">
              <label>Resumo (excerpt)</label>
              <textarea id="postExcerpt" required placeholder="Breve descrição do artigo"></textarea>
            </div>
            <div class="form-group">
              <label>Imagem de capa (URL)</label>
              <input type="url" id="postImage" placeholder="https://exemplo.com/imagem.jpg" />
            </div>
            <div class="form-group">
              <label>Autor</label>
              <input type="text" id="postAuthor" value="Equipe Blog" />
            </div>
            <div class="form-group">
              <label>Data</label>
              <input type="date" id="postDate" />
            </div>
            <div class="form-group">
              <label>Tags (separadas por vírgula)</label>
              <input type="text" id="postTags" placeholder="design, web, tutoriais" />
              <div style="margin-top:0.5rem; font-size:0.8rem; color:var(--muted)">Tags existentes: ${tags.join(", ")}</div>
            </div>
            <div class="form-group">
              <label>Conteúdo (HTML)</label>
              <textarea id="postContent" required style="min-height:300px" placeholder="Escreva o artigo aqui... Pode usar HTML."></textarea>
            </div>
            <div class="form-group" style="display:flex; align-items:center; gap:0.75rem;">
              <input type="checkbox" id="postFeatured" />
              <label for="postFeatured" style="margin:0; font-size:0.9rem; color:var(--muted)">Destaque na homepage</label>
            </div>
            <div class="form-group" style="display:flex; align-items:center; gap:0.75rem;">
              <input type="checkbox" id="postPublished" checked />
              <label for="postPublished" style="margin:0; font-size:0.9rem; color:var(--muted)">Publicar imediatamente</label>
            </div>
            <div style="display:flex; gap:0.75rem;">
              <button type="submit" class="btn btn-primary">Salvar post</button>
              <button type="button" class="btn btn-outline" onclick="switchTab('list')">Cancelar</button>
            </div>
          </form>
        </div>

        <!-- Gerenciar tags -->
        <div id="tab-tags" class="admin-tab-content">
          <div style="display:flex; gap:0.5rem; margin-bottom:1.5rem;">
            <input type="text" id="newTag" placeholder="Nova tag" />
            <button class="btn btn-primary btn-sm" onclick="addTag()">Adicionar</button>
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
            ${tags
              .map(
                (t) => `
              <span class="tag-chip">
                ${escapeHtml(t)}
                <button class="tag-remove" onclick="removeTag('${escapeHtml(t)}')">×</button>
              </span>
            `
              )
              .join("")}
          </div>
          ${tags.length === 0 ? '<p style="color:var(--muted)">Nenhuma tag cadastrada.</p>' : ""}
        </div>
      </div>
    </div>

    <script>
      function switchTab(tab) {
        document.querySelectorAll('.admin-tab-content').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.admin-tab').forEach(el => el.classList.remove('active'));
        document.getElementById('tab-' + tab).classList.add('active');
        document.querySelector('.admin-tab[onclick="switchTab(\'' + tab + '\')"]').classList.add('active');
      }

      document.getElementById('postDate').valueAsDate = new Date();
    </script>
  `;

  // Form de post
  const form = document.getElementById("postForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    savePostFromForm();
  });

  window.switchTab = switchTab;
  window.editPost = function (id) {
    const posts = getPosts();
    const p = posts.find((x) => x.id === id);
    if (!p) return;
    document.getElementById("postId").value = p.id;
    document.getElementById("postTitle").value = p.title;
    document.getElementById("postExcerpt").value = p.excerpt || "";
    document.getElementById("postImage").value = p.coverImage || "";
    document.getElementById("postAuthor").value = p.author || "";
    document.getElementById("postDate").value = p.date || "";
    document.getElementById("postTags").value = (p.tags || []).join(", ");
    document.getElementById("postContent").value = p.content || "";
    document.getElementById("postFeatured").checked = !!p.featured;
    document.getElementById("postPublished").checked = !!p.published;
    switchTab("new");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.deletePost = function (id) {
    if (!confirm("Tem certeza que deseja excluir este post?")) return;
    let posts = getPosts();
    posts = posts.filter((p) => p.id !== id);
    savePosts(posts);
    showToast("Post excluído com sucesso", "success");
    renderAdmin();
  };

  window.addTag = function () {
    const input = document.getElementById("newTag");
    const t = input.value.trim();
    if (!t) return;
    let tags = getTags();
    if (tags.includes(t)) {
      showToast("Tag já existe", "info");
      return;
    }
    tags.push(t);
    saveTags(tags);
    input.value = "";
    showToast("Tag adicionada", "success");
    renderAdmin();
  };

  window.removeTag = function (t) {
    let tags = getTags();
    tags = tags.filter((x) => x !== t);
    // Remove tag de posts que a usam
    let posts = getPosts();
    posts = posts.map((p) => ({ ...p, tags: (p.tags || []).filter((x) => x !== t) }));
    savePosts(posts);
    saveTags(tags);
    showToast("Tag removida", "success");
    renderAdmin();
  };

  function savePostFromForm() {
    const id = document.getElementById("postId").value;
    const title = document.getElementById("postTitle").value.trim();
    const excerpt = document.getElementById("postExcerpt").value.trim();
    const image = document.getElementById("postImage").value.trim();
    const author = document.getElementById("postAuthor").value.trim() || "Equipe Blog";
    const date = document.getElementById("postDate").value || new Date().toISOString().split("T")[0];
    const tagsRaw = document.getElementById("postTags").value;
    const tags = tagsRaw.split(",").map((t) => t.trim()).filter(Boolean);
    const content = document.getElementById("postContent").value.trim();
    const featured = document.getElementById("postFeatured").checked;
    const published = document.getElementById("postPublished").checked;

    if (!title || !excerpt || !content) {
      showToast("Preencha título, resumo e conteúdo", "error");
      return;
    }

    let posts = getPosts();
    const slug = slugify(title);
    const existing = posts.find((p) => p.slug === slug && p.id !== id);
    if (existing) {
      showToast("Já existe um post com este título", "error");
      return;
    }

    const post = {
      id: id || Date.now().toString(),
      title,
      slug,
      excerpt,
      coverImage: image,
      author,
      date,
      tags,
      content,
      featured,
      published,
    };

    if (id) {
      posts = posts.map((p) => (p.id === id ? post : p));
      showToast("Post atualizado com sucesso", "success");
    } else {
      posts.unshift(post);
      // Atualiza lista de tags com as novas usadas
      let allTags = getTags();
      tags.forEach((t) => {
        if (!allTags.includes(t)) allTags.push(t);
      });
      saveTags(allTags);
      showToast("Post criado com sucesso", "success");
    }

    savePosts(posts);
    document.getElementById("postForm").reset();
    document.getElementById("postId").value = "";
    document.getElementById("postPublished").checked = true;
    switchTab("list");
    renderAdmin();
  }

  window.logoutAdmin = function () {
    sessionStorage.removeItem("blog_admin_logged");
    showToast("Sessão encerrada", "info");
    router.navigate("/admin.html");
  };
}

// ===== Helpers =====
function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ===== Boot =====
initStorage();
router.init();
