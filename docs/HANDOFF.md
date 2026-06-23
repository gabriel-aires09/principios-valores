# HANDOFF — Portfólio Acadêmico · Gabriel Aires

> Documento de continuidade. Atualizado em cada sessão de desenvolvimento.
> Última atualização: 2026-06-23 (sessão 2)

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

### Nav links (ajustado na sessão 2)
| Propriedade | Valor anterior | Valor atual |
|---|---|---|
| `font-size` | `0.82rem` | `0.7rem` |
| `letter-spacing` | `0.12em` | `0.08em` |
| `gap` (`.nav-links`) | `2rem` | `1.1rem` |

Reduzido porque com 9 itens em uppercase a nav quebrava linha em 1920×1080.

---

## Dropdown de navegação (sessão 2)

### Estrutura
As páginas Atividades e Unidade I–V foram agrupadas num único item de nav com dropdown, com label **"Relação: Princípios e Valores"**. O dropdown substitui os 7 `<li>` individuais que causavam overflow na nav.

### Classes CSS
| Classe | Descrição |
|---|---|
| `.nav-dropdown` | Container `<li>` com `position: relative` |
| `.nav-dropdown-toggle` | Botão que abre/fecha o menu |
| `.dd-chevron` | SVG do ícone de seta (rotaciona 180° quando aberto) |
| `.nav-dropdown-menu` | Lista flutuante com `position: absolute` |

### Estado ativo
- O `.nav-dropdown-toggle` recebe `class="active"` quando a página atual é filha do dropdown (dourado visível na nav).
- O link da página atual dentro do menu recebe `class="active"`.

### JS (em `main.js`)
- Click no toggle → abre/fecha; fecha todos os outros dropdowns abertos.
- Click fora do dropdown → fecha.
- `Escape` → fecha.
- `aria-expanded` é atualizado junto com o estado.

### Ao criar nova página filha do dropdown
Usar o template abaixo no `<ul class="nav-links">`, ajustando o `href` ativo:
```html
<li class="nav-dropdown">
  <button class="nav-dropdown-toggle active" aria-haspopup="true" aria-expanded="false">
    Relação: Princípios e Valores
    <svg class="dd-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
  </button>
  <ul class="nav-dropdown-menu">
    <li><a href="../atividades/">Atividades</a></li>
    <li><a href="../unidade-1/">Unidade I</a></li>
    <li><a href="../unidade-2/">Unidade II</a></li>
    <li><a href="../unidade-3/">Unidade III</a></li>
    <li><a href="../unidade-4/">Unidade IV</a></li>
    <li><a href="../unidade-5/" class="active">Unidade V</a></li>
  </ul>
</li>
```

---

## Sistema de temas (claro/escuro)

### Funcionamento
1. **Anti-flash:** cada `<head>` tem um script inline que lê `localStorage.getItem('portfolio-theme')` e aplica `data-theme` no `<html>` antes do render.
2. **Toggle:** botão `.theme-toggle` no extremo direito de cada nav (após o `</ul>`), com ícone lua (modo escuro) e sol (modo claro).
3. **Persistência:** `localStorage` com chave `'portfolio-theme'`. Default: `'dark'`.
4. **Lógica:** em `js/main.js`, no topo do arquivo.

### Ao criar uma nova página (ex.: `unidade-2/index.html`)
Copiar o bloco abaixo no `<head>` **depois** do link do CSS:
```html
<script>(function(){var t=localStorage.getItem('portfolio-theme')||'dark';document.documentElement.setAttribute('data-theme',t);})();</script>
```

E adicionar o botão de tema no nav **depois do `</ul>`**:
```html
<button class="theme-toggle" aria-label="Alternar tema">
  <svg class="icon-moon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
  <svg class="icon-sun" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
</button>
```

O botão fica automaticamente no extremo direito porque o nav usa `justify-content: space-between` entre `.nav-logo`, `.nav-links` e o botão. Não muda com novos links.

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

3. **Revisar dropdown em mobile:** o dropdown de nav não tem comportamento definido para telas pequenas (`max-width: 740px`). Avaliar se deve ser acessível via menu hamburger ou mantido como scroll horizontal.

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
- **Nav dropdown agrupa Atividades + Unidade I–V:** label fixo "Relação: Princípios e Valores". Não reverter para itens individuais — eles não cabem em 1920×1080 com 9 itens uppercase.
- **JS do carrossel e lightbox é inline na página de atividades**, não em `main.js` — decisão intencional para não poluir o script global com lógica de página específica. O `main.js` só contém o código do dropdown (que é global).
- **`.act-photo-wrap` vs `.img-slot`:** usar `.act-photo-wrap` quando a imagem é uma foto de atividade sem ratio forçado; usar `.img-slot` quando o aspecto 16/6 (banner) faz sentido.

---

## Convenções do código

- Sem framework, sem build step — abrir qualquer `.html` diretamente no browser funciona.
- CSS e JS são **únicos e compartilhados** — não criar arquivos separados por página.
- Novos componentes CSS vão no `style.css` com comentário de seção `/* ── NOME ── */`.
- O JS usa `IntersectionObserver` para reveal de `.topic` — qualquer nova seção que use `.topic` já funciona automaticamente.
- Sem comentários de código além de marcadores de seção estrutural.
