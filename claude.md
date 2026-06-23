# Criação de um Portfólio Acadêmico

## Contexto

Este portfólio é para a matéria institucional **Relação: Princípios e Valores**. Quero transformar o conteúdo dessas aulas em um portfólio web, começando pelos assuntos da pasta `conteudo/unidade-1`.

A ideia é que esse portfólio cresça por unidade: a cada nova pasta de conteúdo que eu adicionar (`unidade-2`, `unidade-3`...), você deve gerar uma nova seção/página, mantendo a mesma identidade visual e estrutura.

Extraia: tópicos principais, conceitos-chave, valores/princípios discutidos, e qualquer exemplo ou estudo de caso relevante. Se algo não estiver claro, pesquise na web para complementar com uma explicação correta e atualizada — mas mantenha o texto curto e na minha voz (reflexão pessoal, não cópia de fonte).

## Objetivo

Criar um portfólio **conciso, visualmente interessante e bem fundamentado**, que demonstre reflexão real sobre os princípios e valores discutidos na matéria — sem virar um resumo de slide chato. Pense nisso como uma versão "site pessoal de reflexão acadêmica" — algo que eu entregaria/mostraria com orgulho, não uma apostila reescrita.

## Estrutura sugerida do site

1. **Hero / Intro** — quem sou eu, contexto da matéria (Relação: Princípios e Valores), proposta do portfólio.
2. **Seção por unidade** — um bloco (ou página) por unidade de conteúdo:
   - Título do tema/princípio abordado
   - Resumo conceitual curto (2–4 parágrafos)
   - Um visual quando o conceito tiver estrutura clara (ex.: pirâmide de valores, ciclo de relações interpessoais, esquema de tomada de decisão ética)
   - Uma reflexão pessoal — como esse princípio se conecta com situações reais (trabalho, vida acadêmica, convivência)
3. **Estudos de caso / exemplos** (opcional, se eu pedir depois) — espaço reservado para casos práticos discutidos em aula.

## Requisitos de conteúdo

- Não copiar trechos de fontes externas — sempre reescrever com minhas palavras.
- Priorizar clareza sobre densidade: cada seção deve ser lida em menos de 2 minutos.
- Quando pesquisar conceitos na web para enriquecer o texto, confirme que a explicação está tecnicamente correta antes de simplificar.
- Incluir pelo menos um exemplo concreto ou analogia por conceito complexo.

## Tecnologias para deploy no GitHub Pages

GitHub Pages serve apenas **arquivos estáticos** (HTML/CSS/JS) — não há backend, então qualquer stack escolhida precisa compilar para estático ou já ser estática por natureza. Abaixo, as opções mais adequadas ao meu perfil (já trabalho com React/Node):

| Opção | Quando usar | Observações |
|---|---|---|
| **HTML/CSS/JS puro** | Site pequeno, poucas páginas, sem necessidade de componentização | Mais simples de hospedar: zero build step, só commitar e habilitar Pages. Ideal se o portfólio tiver só 4–6 seções. |
| **Astro** | Quero performance máxima e ainda usar componentes (inclusive React dentro dele) | Gera HTML estático por padrão ("ilhas" de interatividade só onde precisa). Ótimo para portfólios — mais leve que um SPA React puro. |
| **Vite + React** | Já domino React e quero manter o mesmo workflow do trabalho | Precisa configurar `base` no `vite.config` para o nome do repo, e usar `gh-pages` (pacote npm) ou GitHub Actions para publicar o `dist/`. |
| **Next.js (export estático)** | Caso eu queira algo mais robusto/SEO-friendly no futuro | Funciona com `next export`, mas tem mais peças móveis que o necessário para um portfólio simples. |

**Recomendação para este caso:** como o foco é "conciso e rápido de entregar", sugiro **Astro** (ou HTML/CSS/JS puro se preferir zero build). Astro dá:
- Deploy trivial via GitHub Actions (workflow oficial `withastro/action`)
- Suporte nativo a Markdown — o que combina bem com o fato de o conteúdo de origem já estar em `.md`
- Performance estática real, sem overhead de um framework JS pesado

### Pipeline de deploy sugerido (GitHub Actions)
1. Repositório com branch `main`.
2. Workflow `.github/workflows/deploy.yml` que builda o site a cada push e publica na branch `gh-pages` (ou direto via Pages Actions, sem branch separada).
3. Habilitar GitHub Pages nas configurações do repo, apontando para "GitHub Actions" como fonte.

## Visual / Design

Aplicar a skill `frontend-design` para definir:
- Tipografia e paleta de cores com identidade própria (evitar visual "template Bootstrap genérico")
- Hierarquia visual clara entre título de unidade, resumo e destaques
- Dark mode, se fizer sentido com a paleta escolhida
- Responsividade mobile-first (testar em telas pequenas)

## Próximos passos (para a IA executar)

1. Ler todos os arquivos da pasta `unidade-1` quando ela for enviada.
2. Propor a stack final entre as opções acima (perguntar se eu confirmo Astro ou se prefiro HTML puro).
3. Estruturar o projeto localmente, com componentes/seções por tema da unidade-1.
4. Aplicar a skill `frontend-design` no resultado.
5. Gerar o workflow de deploy do GitHub Pages.
6. Me entregar instruções claras de como subir o repositório e ativar o Pages.
