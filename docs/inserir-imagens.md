# Como inserir imagens no portfólio

O portfólio tem **4 slots de imagem** pré-configurados. Enquanto não inserir a imagem real, cada slot exibe um placeholder visual com legenda descritiva. Quando estiver pronto, basta trocar o placeholder pela imagem.

---

## Localização dos slots no `index.html`

| ID do slot         | Seção                 | Linha de busca no código               |
|--------------------|-----------------------|----------------------------------------|
| `#img-percurso`    | Percurso Pessoal      | `IMAGEM 1 — Percurso Pessoal`          |
| `#img-academica`   | Trajetória Acadêmica  | `IMAGEM 2 — Trajetória Acadêmica`      |
| `#img-condicao`    | A Condição Humana     | `IMAGEM 3 — A Condição Humana`         |
| `#img-relacoes`    | As Quatro Relações    | `IMAGEM 4 — As Quatro Relações`        |

---

## Passo a passo para inserir uma imagem

### 1. Salve o arquivo de imagem

Crie uma pasta `imagens/` dentro da pasta `portfolio/` e coloque o arquivo lá:

```
portfolio/
  index.html
  imagens/
    percurso-pessoal.jpg      ← aqui
    trajetoria-academica.jpg
    condicao-humana.jpg
    quatro-relacoes.jpg
```

Formatos recomendados: **JPG** (fotos) ou **PNG** (ilustrações com transparência)  
Tamanho ideal: largura mínima de **1400px**, altura livre (o CSS vai recortar para 16:6)

---

### 2. Edite o `index.html`

Para cada slot, localize o bloco correspondente (busque pelo comentário `IMAGEM N`) e faça duas coisas:

**a) Remova o bloco do placeholder** (do `<div class="img-placeholder">` até o `</div>` de fechamento):

```html
<!-- ANTES — apague este bloco inteiro: -->
<div class="img-placeholder" aria-hidden="true">
  <svg ...>...</svg>
  <span class="ph-id">Imagem 1 · Percurso Pessoal</span>
  <span class="ph-desc">Uma trilha ou caminho...</span>
</div>
```

**b) Descomente a linha `<img>`** (remova o `<!--` e o `-->`):

```html
<!-- ANTES: -->
<!-- <img src="imagens/percurso-pessoal.jpg" alt="..."> -->

<!-- DEPOIS: -->
<img src="imagens/percurso-pessoal.jpg" alt="Trilha sinuosa representando a trajetória pessoal de vida">
```

Pronto. A imagem vai aparecer no lugar do placeholder, com a legenda (`<figcaption>`) já configurada abaixo.

---

### 3. Usando uma URL externa (sem baixar o arquivo)

Se preferir usar uma imagem hospedada em outro lugar (Google Drive público, Unsplash, etc.), basta apontar a URL diretamente:

```html
<img src="https://exemplo.com/minha-imagem.jpg" alt="Descrição da imagem">
```

> Atenção: se o link quebrar no futuro, o slot ficará vazio. Prefira arquivos locais para garantir que o portfólio funcione offline ou sem internet.

---

## Prompts de IA para gerar as imagens

Use estes prompts em ferramentas como **Midjourney**, **DALL-E 3**, **Adobe Firefly** ou **Stable Diffusion**.  
Dica: comece pelo prompt em inglês (gera resultados mais consistentes) e ajuste o estilo conforme necessário.

---

### Imagem 1 · Percurso Pessoal (`#img-percurso`)

**Tema:** caminho pessoal, memória, jornada de vida

**Prompt EN:**
```
aerial view of a winding path through misty terrain, dark navy and soft warm gold tones,
minimalist digital art, no people, no text, cinematic mood, subtle fog, quiet atmosphere
```

**Prompt PT:**
```
vista aérea de uma trilha sinuosa em terreno com névoa leve, tons azul-marinho escuro e dourado suave,
arte digital minimalista, sem pessoas, sem texto, atmosfera contemplativa
```

**Palavras-chave alternativas:** `winding road`, `life path`, `journey`, `fog`, `top view`

---

### Imagem 2 · Trajetória Acadêmica (`#img-academica`)

**Tema:** universidade, saber, formação, escolha

**Prompt EN:**
```
interior of a grand library or university corridor, light streaming through tall arched windows,
dark moody tones, architectural photography style, no people, no text, golden hour light,
deep shadows, atmospheric dust particles
```

**Prompt PT:**
```
interior de biblioteca ou corredor universitário imponente, luz entrando por janelas altas em arco,
tons escuros e atmosféricos, estilo fotografia de arquitetura, sem pessoas, sem texto,
partículas de poeira visíveis na luz
```

**Palavras-chave alternativas:** `university hall`, `library interior`, `academic`, `knowledge`, `architecture`

---

### Imagem 3 · A Condição Humana (`#img-condicao`)

**Tema:** rede de relações, conexão, caráter relacional do ser humano

**Prompt EN:**
```
glowing network of light threads connecting nodes in deep darkness, like neurons or star constellations,
dark navy background with warm gold and teal accents, abstract, no human figures, no text,
ultra-wide cinematic composition
```

**Prompt PT:**
```
rede brilhante de fios de luz conectando nós no escuro profundo, como neurônios ou constelações,
fundo azul-marinho escuro com acentos dourados e verde-azulados, abstrato, sem figuras humanas,
sem texto, composição cinematográfica ultra-wide
```

**Palavras-chave alternativas:** `neural network`, `constellation`, `connection`, `nodes`, `light threads`

---

### Imagem 4 · As Quatro Relações (`#img-relacoes`)

**Tema:** perspectiva, escala, transcendência, o ser diante do todo

**Prompt EN:**
```
aerial view of a tiny silhouette standing at the edge of a vast ocean or mountain landscape,
cool dark tones with a single warm gold horizon line, sense of immense scale and transcendence,
minimalist, no text, cinematic wide format
```

**Prompt PT:**
```
vista aérea de uma silhueta pequena à beira de oceano vasto ou paisagem montanhosa,
tons frios e escuros com uma linha de horizonte dourada e quente, sensação de escala e transcendência,
minimalista, sem texto, formato wide cinematográfico
```

**Palavras-chave alternativas:** `vast landscape`, `lone figure`, `ocean horizon`, `transcendence`, `aerial`

---

## Dicas gerais

- **Proporção:** o CSS usa `aspect-ratio: 16 / 6` — imagens mais largas que altas ficam melhores. Paisagens e panorâmicas funcionam bem.
- **Estilo:** mantenha consistência visual entre as 4 imagens (mesma paleta, mesmo "mood"). Isso dá coesão ao portfólio.
- **Dark mode:** como o portfólio tem fundo escuro, prefira imagens com tons médios a escuros. Imagens muito claras vão contrastar demais.
- **Alt text:** o atributo `alt` da `<img>` já vem preenchido com uma descrição acessível. Sinta-se livre para editar se a imagem que escolher for diferente da sugestão.
- **Legenda:** o texto da `<figcaption>` abaixo de cada imagem também pode ser editado livremente.

---

## Onde gerar imagens gratuitamente

| Ferramenta        | Link                          | Observação                              |
|-------------------|-------------------------------|-----------------------------------------|
| Adobe Firefly     | firefly.adobe.com             | Boa qualidade, sem custo inicial        |
| DALL-E 3          | chat.openai.com               | Disponível no ChatGPT Plus              |
| Midjourney        | midjourney.com                | Melhor qualidade, plano pago            |
| Stable Diffusion  | stablediffusionweb.com        | Gratuito, resultados variáveis          |
| Unsplash          | unsplash.com                  | Fotos reais gratuitas (busque em EN)    |
