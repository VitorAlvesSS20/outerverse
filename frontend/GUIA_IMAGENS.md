# Guia de Otimização de Imagens - Outerverse

## O que foi melhorado no CSS

✅ Mudei de `object-fit: cover` para `object-fit: contain` para que as imagens NÃO sejam cortadas
✅ Adicionei `object-position: center` para centralizar as imagens corretamente
✅ Adicionei fundo escuro `#1a1a1f` para ficar melhor quando a imagem não preenche o espaço
✅ Adicionei `border-radius` nas imagens dos capítulos para melhor apresentação

---

## Como preparar suas imagens para o site

### 1. Tamanho recomendado das imagens

**Para capas de livros** (na home):
- Largura: **400px** (ele vai escalar automaticamente)
- Altura: **600px** (proporção 2:3 como um livro)
- Formato: WebP ou JPEG

**Para imagens dentro dos capítulos**:
- Largura: **800px** (máximo recomendado)
- Altura: até **560px** (conforme configurado)
- Formato: WebP ou JPEG

### 2. Formatos recomendados (em ordem de preferência)

1. **WebP** - Melhor qualidade + menor tamanho (moderno)
2. **JPEG** - Boa qualidade + tamanho pequeno (compatibilidade universal)
3. ❌ PNG - Use apenas para imagens com fundo transparente

### 3. Como compactar suas imagens

#### Opção 1: Ferramentas Online Gratuitas
- [TinyPNG](https://tinypng.com/) - Excelente para PNG/JPEG
- [Squoosh (Google)](https://squoosh.app/) - Converte para WebP
- [CloudConvert](https://cloudconvert.com/) - Conversor universal

#### Opção 2: Linha de comando (ImageMagick)
```bash
# Reduzir tamanho de JPEG
convert imagem.jpg -resize 400x600 -quality 85 imagem-otimizado.jpg

# Converter para WebP
convert imagem.jpg -resize 400x600 -quality 85 imagem.webp
```

#### Opção 3: No Windows (PowerShell)
Instale ImageMagick e use o comando acima, ou use a ferramenta online do Google (Squoosh).

### 4. Dicas para melhor qualidade

- **Qualidade JPEG**: Use 80-85% (bom balanço entre qualidade e tamanho)
- **WebP**: Use qualidade 75-80% (mais eficiente que JPEG)
- **Mantenha o aspect ratio**: Não distorça as imagens
- **Teste no site**: Veja como ficam antes de usar em produção

### 5. Onde colocar as imagens

- **Capas dos livros**: `src/assets/images/` (depois referencie em `data/books.ts`)
- **Imagens dos capítulos**: Mesma pasta ou use URL externa

### 6. Como adicionar as imagens no código

No arquivo `src/data/books.ts`, adicione o caminho das imagens:

```typescript
const books = [
  {
    id: 1,
    title: "Seu Título",
    coverImage: "/src/assets/images/capa-livro-1.webp", // ou .jpg
    // ... resto dos dados
  }
]
```

Para imagens dentro dos capítulos, adicione em `chapters[].sections[].inserts[]`:

```typescript
{
  type: 'image',
  src: '/src/assets/images/imagem-capitulo.webp',
  alt: 'Descrição da imagem',
  caption: 'Legenda opcional'
}
```

---

## Resumo das mudanças no CSS

| Componente | Antes | Depois |
|-----------|-------|--------|
| **Capas de livros** | `object-fit: cover` (cortava) | `object-fit: contain` (completa) |
| **Imagens capítulos** | `object-fit: cover` (cortava) | `object-fit: contain` (completa) |
| **Fundo** | Preto sólido (#000) | Cinza escuro (#1a1a1f) mais refinado |
| **Bordas** | Sem borda nos capítulos | Com `border-radius` para suavidade |

---

## Checklist antes de usar uma imagem

- [ ] Imagem tem o tamanho recomendado?
- [ ] Imagem foi compactada?
- [ ] Arquivo é WebP ou JPEG?
- [ ] Tamanho do arquivo é menor que 200KB?
- [ ] Testei a visualização no site?

Bom trabalho! 🎬
