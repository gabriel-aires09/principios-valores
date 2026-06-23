# Portfólio — Relação: Princípios e Valores

Site de portfólio acadêmico desenvolvido para a disciplina **Relação: Princípios e Valores** da Católica do Tocantins. Reúne reflexões, atividades e aprendizados organizados em cinco unidades temáticas.


---

## Visão Geral

| Item | Detalhe |
|------|---------|
| Tipo | Site estático |
| Stack | HTML5 · CSS3 · JavaScript puro |
| Hospedagem | GitHub Pages (deploy automático via Actions) |
| Idioma | Português (pt-BR) |
| Modos | Dark (padrão) e Light |

---

## Estrutura de Arquivos

```
portfolio/
├── index.html                  # Página inicial (hero + grid de unidades)
├── css/
│   └── style.css               # Folha de estilos compartilhada
├── js/
│   └── main.js                 # Navegação, tema e animações
├── assets/
│   ├── favicon.svg
│   ├── eu.png                  # Ilustração do autor
│   ├── catolica.jpg
│   ├── atividades/             # Fotos das atividades (pixel art)
│   └── unidade-I … V/         # Imagens por unidade
├── pages/
│   ├── sobre-mim/index.html
│   ├── instituicao/index.html
│   ├── atividades/index.html
│   ├── unidade-1/index.html
│   ├── unidade-2/index.html
│   ├── unidade-3/index.html
│   ├── unidade-4/index.html
│   └── unidade-5/index.html
├── conteudo/                   # Rascunhos em Markdown
├── docs/                       # Design system e guias
├── .github/workflows/
│   └── deploy.yml              # Pipeline de publicação
└── claude.md                   # Briefing inicial do projeto
```

---

## Páginas

### Navegação principal

| Rota | Página |
|------|--------|
| `/` | Home — hero animado + cards das 5 unidades |
| `/pages/sobre-mim/` | Sobre Mim — trajetória, transição de carreira, hobbies |
| `/pages/instituicao/` | Instituição — Católica do Tocantins (história, missão, visão, valores) |

### Dropdown — Relação: Princípios e Valores

| Rota | Conteúdo |
|------|---------|
| `/pages/atividades/` | Atividades em aula (foto, carrossel pixel art, poema) |
| `/pages/unidade-1/` | **Unidade I** — Projeto de Vida e Condição Humana |
| `/pages/unidade-2/` | **Unidade II** — Ética e Felicidade |
| `/pages/unidade-3/` | **Unidade III** — Competências Acadêmicas |
| `/pages/unidade-4/` | **Unidade IV** — Habilidades Acadêmicas e Autoria |
| `/pages/unidade-5/` | **Unidade V** — Espiritualidade e Projeto de Vida |

---

## Funcionalidades

- **Animação SVG** — anéis concêntricos giratórios na hero da home
- **Alternância de tema** — dark/light com persistência via `localStorage`
- **Scroll reveal** — seções animam ao entrar no viewport (`IntersectionObserver`)
- **Dropdown de navegação** — menu expansível com tecla ESC para fechar
- **Carrossel** — galeria de pixel art com setas de navegação (3 visíveis no desktop, 2 no mobile)
- **Lightbox** — zoom em imagens com sobreposição e fechar por ESC
- **Design responsivo** — mobile (≤ 740 px), tablet e desktop (≥ 1024 px)

---

## Design System

### Paleta

| Token | Uso |
|-------|-----|
| `--gold` | Destaques, headings, ênfases |
| `--teal` | Links, acentos secundários |
| `--bg` | Fundo da página (dark/light) |
| `--text` | Texto principal |

### Tipografia

| Fonte | Uso |
|-------|-----|
| **Playfair Display** (serif) | Títulos, pull-quotes, elementos decorativos |
| **Inter** (sans-serif) | Corpo, navegação, labels de UI |

### Componentes CSS principais

| Classe | Descrição |
|--------|-----------|
| `.topic` | Seção de conteúdo com animação de entrada |
| `.pull-quote` | Citação em destaque com borda lateral |
| `.concept-box` | Callout de definição rotulada |
| `.img-slot` | Figura com proporção 16:6 e legenda |
| `.relations-grid` | Grade 2×2 de cards relacionais |
| `.hobby-card` | Card de hobbie com ícone emoji |
| `.values-grid` | Lista de cards de valores |

---

## Tecnologias

- **Sem frameworks ou bibliotecas** — zero dependências externas
- **Google Fonts** — Playfair Display + Inter (via `<link>` no `<head>`)
- **SVG inline** — todos os ícones escritos à mão, sem biblioteca de ícones
- **GitHub Actions** — deploy automático para GitHub Pages a cada `push` na branch `main`

---

## Desenvolvimento Local

Por ser um site estático puro, basta abrir qualquer arquivo HTML no navegador:

```bash
# Com Python (qualquer versão recente)
python -m http.server 5500

# Ou com Node.js
npx serve .
```

Acesse `http://localhost:5500` após iniciar o servidor.

---

## Documentação Interna

| Arquivo | Conteúdo |
|---------|---------|
| `docs/design-system.md` | Paleta completa, tipografia, espaçamento, border-radius e especificações de componentes |
| `docs/HANDOFF.md` | Registro de decisões técnicas e tarefas pendentes entre sessões de desenvolvimento |
| `docs/inserir-imagens.md` | Guia para inserção de imagens nas unidades |
| `claude.md` | Briefing inicial e requisitos do projeto |

---
