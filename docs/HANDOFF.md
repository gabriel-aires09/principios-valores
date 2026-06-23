# HANDOFF — Portfólio Acadêmico · Gabriel Aires

> Documento de continuidade. Atualizado em cada sessão de desenvolvimento.
> Última atualização: 2026-06-23 (sessão 4)

---

## O que é este projeto

Portfólio acadêmico estático (HTML/CSS/JS puro, sem framework) para a disciplina **Relação: Princípios e Valores** do curso de Engenharia de Software no Centro Universitário Católica do Tocantins (UniCatólica), Palmas – TO.

**Autor:** Gabriel Aires  


---

## Estrutura de arquivos

```
portfolio/
├── index.html                    # Página inicial (hero + grade de unidades)
├── pages/
│   ├── sobre-mim/index.html      # Perfil, trajetória acadêmica, hobbies
│   ├── instituicao/index.html    # UniCatólica: história, missão, visão, valores
│   ├── atividades/index.html     # Atividades em aula (foto, carrossel, poema) ← NOVO
│   ├── unidade-1/index.html      # Projeto de Vida (4 tópicos, 4 imagens reais)
│   ├── unidade-2/index.html      # Ética e Felicidade (4 tópicos completos)
│   ├── unidade-3/index.html      # Competências (4 tópicos completos)
│   ├── unidade-4/index.html      # Habilidades Acadêmicas (4 tópicos completos)
│   └── unidade-5/index.html      # Espiritualidade Existencial (4 tópicos completos)
├── css/
│   └── style.css                 # Folha única compartilhada por todas as páginas
├── js/
│   └── main.js                   # Script único (scroll reveal, nav, tema, dropdown, carrossel, lightbox)
├── assets/
│   ├── eu.png                    # Ilustração anime do Gabriel (peace sign)
│   ├── catolica.jpg              # Foto da fachada da UniCatólica
│   ├── atividades/               # Fotos das atividades em aula
│   │   ├── computador.jpeg       # Foto do computador (atividade 1)
│   │   ├── ah.jpeg               # Pixel art (atividade 2)
│   │   ├── game.jpeg
│   │   ├── kobeni.jpeg
│   │   ├── naruta.jpeg
│   │   ├── peko-modernista.jpeg
│   │   └── torta-prazer.jpeg
│   └── unidade-I/                # Imagens da Unidade I (já inseridas)
│       ├── percurso-pessoal.png
│       ├── trajetoria-academica.png
│       ├── condicao-humana.png
│       └── quatro-relacoes.png
└── docs/
    └── HANDOFF.md
```

> Todas as páginas estão no nav global via dropdown "Relação: Princípios e Valores".

---

## Design system

### Fontes (Google Fonts)
- **Playfair Display** — títulos, citações, números de unidade
- **Inter** — corpo, labels, navegação

### Variáveis CSS (tema escuro — padrão)
Definidas em `:root` no início de `style.css`:

| Variável | Valor | Uso |
|---|---|---|
| `--bg` | `#0C1A28` | Fundo geral |
| `--bg-card` | `#0F2035` | Fundo de cards |
| `--gold` | `#C9A84C` | Cor de destaque principal |
| `--gold-dim` | `rgba(201,168,76,0.10)` | Fundo sutil dourado |
| `--gold-line` | `rgba(201,168,76,0.18)` | Bordas |
| `--text` | `#E8D5B0` | Texto principal |
| `--text-muted` | `#7A8FA8` | Texto secundário |
| `--teal` | `#7AADA4` | Eyebrows, rótulos de estado |

### Tema claro (`[data-theme="light"]`)
Sobrescreve as variáveis acima com paleta creme/navy:

| Variável | Valor light |
|---|---|
| `--bg` | `#F2EDE4` |
| `--bg-card` | `#FFFFFF` |
| `--gold` | `#8B6914` |
| `--text` | `#1C2B3A` |
| `--text-muted` | `#4A6070` |
| `--teal` | `#2A7A72` |

Também sobrescreve hardcodes: cor do `nav`, hover de `.unit-card--active`, fundo de `.img-slot`, cor de borda do `.topic` e separadores de `.mindset-col ul li`.

### Border-radius (estilo Apple, definido nesta sessão)
| Elemento | Raio |
|---|---|
| `.unit-card` | 16px |
| `.inst-banner` | 18px |
| `.profile-photo` | 20px |
| `.img-slot` | 16px |
| `.concept-box`, `.rel-card`, `.mindset-wrap`, `.hobby-card`, `.inst-block`, `.value-card` | 12px |
| `.info-tag` | 8px |

### Tipografia base
`html { font-size: 19px; }` — aumentado de 16px em sessão anterior. Todos os tamanhos usam `rem`, então escalam automaticamente.

### Topbar (sessão 4)
Cada página tem um `<header class="topbar">` fixo no topo (52px, `z-index: 102`). Estrutura interna:
- **`.topbar-left`**: contém o hamburger (`#sidebarToggle`, `.topbar-hamburger`) + link de marca (`.topbar-brand` com `.topbar-brand-icon` e `.topbar-brand-text "Portfólio"`)
- **`.theme-toggle`**: botão de tema, alinhado à direita

O `#sidebarToggle` tem dupla função: em desktop (>740px) colapsa/expande a sidebar; em mobile (≤740px) abre o overlay.

### Sidebar (substituiu a topnav na sessão 3; atualizada na sessão 4)
A nav horizontal foi removida. Cada página agora tem um `<aside class="sidebar">` fixo à esquerda com dois estados: **expanded** (240px, ícone + texto) e **collapsed** (64px, apenas ícones centrados). O estado persiste via `localStorage` com chave `'portfolio-sidebar'`.

Na **sessão 4** o `sidebar-header` (que continha hamburger + logo "Portfólio") foi removido da sidebar. O logo e o hamburger foram movidos para a topbar. A sidebar começa direto com `<nav class="sidebar-nav">`.

Variáveis CSS adicionadas ao `:root`:
```css
--sidebar-w: 240px;
--sidebar-w-col: 64px;
```

`body` tem `padding-left: var(--sidebar-w)` que reduz para `var(--sidebar-w-col)` quando `[data-sidebar-state="collapsed"]` está no `<html>`.

---

## Sidebar (sessão 3)

### Estados
| Estado | Atributo no `<html>` | Largura |
|---|---|---|
| Expandido | `data-sidebar-state="expanded"` | `240px` |
| Colapsado | `data-sidebar-state="collapsed"` | `64px` |

O estado é persistido em `localStorage` com chave `'portfolio-sidebar'` e aplicado antes do primeiro render pelo script inline no `<head>` (ver seção "Sistema de temas").

### Classes CSS
| Classe | Descrição |
|---|---|
| `.topbar` | `<header>` fixo no topo, altura `--topbar-h` (52px), `z-index: 102` |
| `.topbar-left` | Flex container à esquerda da topbar (hamburger + brand) |
| `.topbar-hamburger` | Botão `#sidebarToggle`; em desktop colapsa/expande; em mobile abre overlay |
| `.topbar-brand` | Link "Portfólio" com ícone circular e texto, em Playfair Display dourado |
| `.topbar-brand-icon` | `<img>` do favicon SVG (1.4rem) |
| `.topbar-brand-text` | Span com o texto "Portfólio" |
| `.sidebar` | `<aside>` fixo à esquerda, `overflow: hidden` para animar a largura |
| `.sidebar-nav` | `<nav>` interno com a lista de links |
| `.sidebar-links` | `<ul>` raiz dos links |
| `.sidebar-link` | Link individual; `.active` marca a página atual |
| `.sidebar-icon` | Span com SVG do ícone |
| `.sidebar-roman` | Variante do ícone com numeral romano (Unidades I–V) |
| `.sidebar-text` | Label do link — some com `max-width: 0 / opacity: 0` no colapsado |
| `.sidebar-group` | `<li>` com submenu; `.open` abre o submenu, `.active` marca grupo ativo |
| `.sidebar-group-toggle` | Botão que expande/colapsa o grupo "Relação: P&V" |
| `.dd-chevron` | Seta do grupo — rotaciona 180° quando `.open` |
| `.sidebar-submenu` | `<ul>` dos sublinks (Atividades + Unidades) |
| `.sidebar-sublink` | Sublink; `.active` marca a página atual |
| `.sidebar-footer` | Rodapé da sidebar — botão de tema |
| `.sidebar-overlay` | Overlay escuro para mobile (`#sidebarOverlay`) |
| `.sidebar-mobile-btn` | Botão hamburger para mobile (`#mobileSidebarBtn`) |

### Estado ativo por página
| Página | Classe no link | Classe no grupo |
|---|---|---|
| Home | `sidebar-link active` no link Home | — |
| Sobre Mim | `sidebar-link active` no link Sobre Mim | — |
| Instituição | `sidebar-link active` no link Instituição | — |
| Atividades | `sidebar-sublink active` no link Atividades | `sidebar-group open active` |
| Unidade I–V | `sidebar-sublink active` no link correspondente | `sidebar-group open active` |

### JS (em `main.js`)
- `#sidebarToggle` click → se `window.innerWidth > 740`: alterna `expanded`/`collapsed` no `<html>` e persiste. Se `≤ 740`: chama `openMobileSidebar()`.
- `.sidebar-group-toggle` click → se sidebar colapsada, expande-a primeiro; então abre/fecha o grupo.
- Click no overlay ou `Escape` → fecha a sidebar mobile (`closeMobileSidebar()`).
- Não existe mais `#mobileSidebarBtn` — o `#sidebarToggle` da topbar serve para ambos os contextos.

### Mobile
Abaixo de `740px` a sidebar fica oculta com `transform: translateX(-100%)`. O botão `#mobileSidebarBtn` (hamburger) aparece fixo no topo. `.mobile-open` na sidebar + `.visible` no overlay formam o menu deslizante.

### Anti-flash (atualizado na sessão 3)
O script inline no `<head>` agora define **tanto** `data-theme` quanto `data-sidebar-state`:
```html
<script>(function(){var t=localStorage.getItem('portfolio-theme')||'dark';var s=localStorage.getItem('portfolio-sidebar')||'expanded';document.documentElement.setAttribute('data-theme',t);document.documentElement.setAttribute('data-sidebar-state',s);})();</script>
```

### Template da topbar para novas páginas (subpáginas com `../../`)
```html
<header class="topbar">
  <div class="topbar-left">
    <button class="topbar-hamburger" id="sidebarToggle" aria-label="Alternar menu">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
    <a href="../../" class="topbar-brand">
      <img src="../../assets/favicon.svg" class="topbar-brand-icon" alt="" aria-hidden="true">
      <span class="topbar-brand-text">Portfólio</span>
    </a>
  </div>
  <button class="theme-toggle" aria-label="Alternar tema">
    <svg class="icon-moon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
    <svg class="icon-sun" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
  </button>
</header>
```

### Template da sidebar para novas páginas (subpáginas com `../../`)
```html
<aside class="sidebar" id="sidebar">
  <nav class="sidebar-nav" aria-label="Navegação principal">
    <ul class="sidebar-links">
      <li>
        <a href="../../" class="sidebar-link" title="Home">
          <span class="sidebar-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
          <span class="sidebar-text">Home</span>
        </a>
      </li>
      <li>
        <a href="../sobre-mim/" class="sidebar-link" title="Sobre Mim">
          <span class="sidebar-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
          <span class="sidebar-text">Sobre Mim</span>
        </a>
      </li>
      <li>
        <a href="../instituicao/" class="sidebar-link" title="Instituição">
          <span class="sidebar-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 22V12h6v10"/><path d="M3 9h18"/></svg></span>
          <span class="sidebar-text">Instituição</span>
        </a>
      </li>
      <!-- Para página filha do grupo: sidebar-group open active + aria-expanded="true" + active no sublink -->
      <!-- Para página fora do grupo: sidebar-group (sem open/active) + aria-expanded="false" -->
      <li class="sidebar-group [open active]">
        <button class="sidebar-group-toggle" aria-expanded="[false|true]" title="Relação: P&V">
          <span class="sidebar-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></span>
          <span class="sidebar-text">Relação: P&V</span>
          <svg class="dd-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <ul class="sidebar-submenu">
          <li><a href="../atividades/" class="sidebar-link sidebar-sublink [active]"><span class="sidebar-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg></span><span class="sidebar-text">Atividades</span></a></li>
          <li><a href="../unidade-1/" class="sidebar-link sidebar-sublink [active]"><span class="sidebar-icon sidebar-roman">I</span><span class="sidebar-text">Unidade I</span></a></li>
          <li><a href="../unidade-2/" class="sidebar-link sidebar-sublink [active]"><span class="sidebar-icon sidebar-roman">II</span><span class="sidebar-text">Unidade II</span></a></li>
          <li><a href="../unidade-3/" class="sidebar-link sidebar-sublink [active]"><span class="sidebar-icon sidebar-roman">III</span><span class="sidebar-text">Unidade III</span></a></li>
          <li><a href="../unidade-4/" class="sidebar-link sidebar-sublink [active]"><span class="sidebar-icon sidebar-roman">IV</span><span class="sidebar-text">Unidade IV</span></a></li>
          <li><a href="../unidade-5/" class="sidebar-link sidebar-sublink [active]"><span class="sidebar-icon sidebar-roman">V</span><span class="sidebar-text">Unidade V</span></a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <div class="sidebar-footer">
    <button class="theme-toggle" aria-label="Alternar tema">
      <svg class="icon-moon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      <svg class="icon-sun" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
    </button>
  </div>
</aside>
<button class="sidebar-mobile-btn" id="mobileSidebarBtn" aria-label="Abrir menu">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
</button>
<div class="sidebar-overlay" id="sidebarOverlay"></div>
```

---

## Sistema de temas (claro/escuro)

### Funcionamento
1. **Anti-flash:** cada `<head>` tem um script inline que lê `localStorage` e aplica `data-theme` **e** `data-sidebar-state` no `<html>` antes do render.
2. **Toggle:** botão `.theme-toggle` no `.sidebar-footer` (rodapé da sidebar), com ícone lua (modo escuro) e sol (modo claro).
3. **Persistência:** `localStorage` com chave `'portfolio-theme'`. Default: `'dark'`.
4. **Lógica:** em `js/main.js`.

### Ao criar uma nova página
Copiar o bloco abaixo no `<head>` **depois** do link do CSS:
```html
<script>(function(){var t=localStorage.getItem('portfolio-theme')||'dark';var s=localStorage.getItem('portfolio-sidebar')||'expanded';document.documentElement.setAttribute('data-theme',t);document.documentElement.setAttribute('data-sidebar-state',s);})();</script>
```

O botão de tema já está embutido no template da sidebar (`.sidebar-footer`). Não adicionar em outro lugar.

---

## Componentes e classes reutilizáveis

| Classe | Onde usar |
|---|---|
| `.page-header` | Cabeçalho de cada subpágina (breadcrumb + título) |
| `.page-content` | Wrapper do conteúdo (`max-width: 1200px`, `padding: 0 4vw`) |
| `.topic` | Seção de conteúdo com reveal no scroll (adiciona `.visible` via IntersectionObserver) |
| `.topic-num` | Rótulo numerado `"01 · Nome da seção"` |
| `.topic-title` | H2 de cada tópico |
| `.pull-quote` | Citação com borda dourada à esquerda |
| `.concept-box` | Caixa de destaque com fundo dourado suave |
| `.img-slot` | Container de imagem com `figcaption` (aspect-ratio 16/6 por padrão) |
| `.act-photo-wrap` | Container de foto de atividade (`max-height: 480px`, sem ratio forçado) |
| `.relations-grid` | Grid 2×2 para os rel-cards |
| `.mindset-wrap` | Tabela comparativa dois colunas |
| `.values-grid` | Grid de 1 coluna (uma unidade por linha) para value-cards |
| `.carousel-outer` | Container do carrossel com setas externas (padding: 0 5rem) |
| `.poem-card` | Card estilizado para poema com aspas decorativas e Playfair Display |

---

## Imagens pendentes

### Unidade I — ✅ Concluída
Todas as 4 imagens inseridas em `assets/unidade-I/`. Placeholders removidos.

### Unidade II
Ainda com placeholders. Quando as imagens estiverem prontas:
1. Remover o `<div class="img-placeholder">` dentro do `<figure class="img-slot">`
2. Inserir `<img src="../../assets/unidade-II/nome.png" alt="...">`

| ID do slot | Tema sugerido |
|---|---|
| `#img-etica` | Balança de justiça — tons azul-marinho e dourado |
| `#img-felicidade` | Luz entrando por janela em quarto escuro — tom dourado suave |
| `#img-projeto` | Bússola antiga sobre mesa de madeira — tons quentes |

---

## Próximos passos prioritários

1. **Inserir imagens nas Unidades II–V:** criar pasta `assets/unidade-II/` etc. e seguir instrução acima.

2. **Revisar tema claro em mobile:** o tema claro foi implementado mas não foi testado em telas pequenas. Verificar breakpoint `@media (max-width: 740px)` com `data-theme="light"`.

3. **Testar sidebar em mobile:** a sidebar usa `transform: translateX(-100%)` abaixo de `740px` e desliza como overlay ao clicar o hamburger. Verificar comportamento no iOS Safari (especialmente scroll-lock e tap no overlay).

---

## Página de Atividades (`pages/atividades/index.html`)

Criada na sessão 2. Três seções, cada uma com componentes próprios:

### Atividade 1 — Foto do computador
Usa `.act-photo-wrap` (não `.img-slot`) para não forçar aspect-ratio de banner.
```html
<figure class="act-photo-wrap">
  <img src="../../assets/atividades/computador.jpeg" alt="...">
  <figcaption>...</figcaption>
</figure>
```

### Atividade 2 — Carrossel de pixel art (6 imagens)
- Container: `<div class="carousel-outer" data-carousel>`
- Setas posicionadas fora da área de imagens via `padding: 0 5rem` no `.carousel-outer`
- Setas em `position: absolute; left: 0` / `right: 0` dentro do `.carousel-outer`
- 3 imagens visíveis por vez em desktop, 2 em mobile (≤740px)
- Click na imagem → lightbox
- JS inline na própria página (não está em `main.js`)

### Atividade 3 — Card de poema
Usa `.poem-card` com `.poem-stanza` para cada estrofe. Aspas decorativas via `::before`.

### Lightbox
- HTML: `<div id="lightbox" hidden>` com `<div class="lightbox-inner">` e `<img id="lightbox-img">`
- Fecha ao clicar fora (click no overlay), no botão `#lightbox-close`, ou `Escape`
- JS inline na página de atividades

---

## Decisões acumuladas (contexto para não reverter)

- **`height: auto` nas imagens:** `.profile-photo` e `.inst-banner` não têm mais `height` fixo nem `object-fit: cover` — decisão intencional para não cortar a ilustração do Gabriel (peace sign) nem a fachada da UniCatólica.
- **`max-width: 1200px` no `.page-content`:** era 860px; aumentado porque o conteúdo ficava centralizado demais em telas largas.
- **`padding: 0 4vw`:** reduzido de `6vw` para dar mais espaço lateral ao conteúdo.
- **`font-size: 19px` no `html`:** era o padrão do browser (16px); aumentado a pedido do usuário.
- **`.values-grid` com `grid-template-columns: 1fr`:** os 5 cards de valores da página Instituição ficam um por linha, não em row.
- **`.page-header { padding-bottom: 1.5rem }`:** reduzido de `3rem` para aproximar o header da imagem de banner na página Instituição.
- **Tema claro usa `[data-theme="light"]` no `<html>`**, não uma classe no `<body>` — consistente com como o script inline aplica o tema.
- **`.units-grid` com `repeat(3, 1fr)`:** era `2fr 1fr 1fr` (primeiro card mais largo); uniformizado para que todos os cards tenham a mesma largura. O override responsivo `grid-column: 1 / -1` no primeiro card também foi removido.
- **Unidade II nomeada "Ética e Felicidade":** o conteúdo da pasta `conteudo/unidade-2-valores/` cobre ética, tradições filosóficas e felicidade como projeto existencial — não apenas "Ética e Moral" como estava no placeholder inicial.
- **Sidebar substituiu a topnav (sessão 3):** a `<nav>` horizontal foi removida de todas as 9 páginas. Não reverter — a nav não comportava 9 itens em uppercase mesmo em 1920×1080.
- **`overflow: hidden` na `.sidebar`:** necessário para animar a largura sem transbordamento de texto. Impede flyout/tooltip via CSS puro — por isso links colapsados usam atributo `title` nativo para tooltip do browser.
- **Clicar no grupo em estado colapsado expande a sidebar** (não abre flyout) — decisão deliberada pela limitação do `overflow: hidden`.
- **`sidebar-header` removido da sidebar (sessão 4):** o logo e o hamburger foram movidos para a topbar para eliminar o visual de "cabeçalho duplo". A sidebar começa direto com `<nav class="sidebar-nav">`. Não reverter.
- **`#sidebarToggle` unificado na topbar:** antes havia `#sidebarToggle` (desktop, dentro da sidebar) e `#mobileSidebarBtn` (mobile, dentro da topbar). Agora existe apenas `#sidebarToggle` na topbar — o JS decide o comportamento pelo `window.innerWidth`.
- **JS do carrossel e lightbox é inline na página de atividades**, não em `main.js` — decisão intencional para não poluir o script global com lógica de página específica.
- **`.act-photo-wrap` vs `.img-slot`:** usar `.act-photo-wrap` quando a imagem é uma foto de atividade sem ratio forçado; usar `.img-slot` quando o aspecto 16/6 (banner) faz sentido.

---

## Convenções do código

- Sem framework, sem build step — abrir qualquer `.html` diretamente no browser funciona.
- CSS e JS são **únicos e compartilhados** — não criar arquivos separados por página.
- Novos componentes CSS vão no `style.css` com comentário de seção `/* ── NOME ── */`.
- O JS usa `IntersectionObserver` para reveal de `.topic` — qualquer nova seção que use `.topic` já funciona automaticamente.
- Sem comentários de código além de marcadores de seção estrutural.
