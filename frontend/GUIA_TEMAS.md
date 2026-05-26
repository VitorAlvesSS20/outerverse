# Sistema de Temas - Outerverse

## O que foi implementado

✅ **Sistema de temas com 3 cores principais:**
- 🔴 **Vermelho** (padrão) - `#C41E3A`
- 🔵 **Azul** - `#1E5AA0`
- 🟢 **Verde** - `#2D7A4D`

✅ **Seletor visual de temas** - Botões com cores na página inicial

✅ **Persistência de dados** - O tema escolhido fica salvo no `localStorage`

✅ **Transições suaves** - As cores mudam com efeito de transição

✅ **Correção do scroll mobile** - Agora sempre começa no topo da página

---

## Como funciona

### Arquivos criados/modificados:

1. **`src/context/ThemeContext.tsx`** - Gerencia o estado do tema
   - Salva a escolha do usuário no `localStorage`
   - Fornece hook `useTheme()` para usar em qualquer componente

2. **`src/components/ThemeToggle.tsx`** - Botão seletor de temas
   - Mostra 3 botões com pontos coloridos
   - Fica visível no topo da página

3. **`src/styles/ThemeToggle.module.css`** - Estilos dos botões
   - Responsivo para mobile
   - Efeitos visuais ao hover/select

4. **`src/styles/global.css`** - Variáveis CSS dos temas
   - Adicionados atributos `[data-theme="blue"]` e `[data-theme="green"]`
   - Cores primárias, secundárias e derivadas para cada tema

5. **`src/hooks/useScrollToTop.ts`** - Hook para scroll
   - Reseta o scroll para o topo ao mudar de página
   - Usado em `Home.tsx` e `BookPage.tsx`

6. **`src/App.tsx`** - Wrappado com `ThemeProvider`

---

## Como usar em novos componentes

Se você quiser acessar o tema em um componente:

```tsx
import { useTheme } from '../context/ThemeContext';

export default function MeuComponente() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Tema atual: {theme}</p>
      <button onClick={() => setTheme('blue')}>Mudar para Azul</button>
    </div>
  );
}
```

---

## Como adicionar uma nova cor de tema

1. Adicione as variáveis de cor em `global.css`:

```css
/* TEMA ROXO (exemplo) */
[data-theme="purple"] {
  --color-primary: #7B2CBF;
  --color-primary-light: #9D4EDD;
  --color-primary-dark: #5A189A;
}
```

2. Atualize `ThemeContext.tsx` para incluir o novo tipo:

```typescript
export type Theme = 'red' | 'blue' | 'green' | 'purple';
```

3. Adicione o tema no `ThemeToggle.tsx`:

```typescript
const themes = [
  // ... temas existentes
  { value: 'purple', label: 'Roxo', color: '#7B2CBF' },
];
```

---

## Variáveis CSS disponíveis

Todos esses temas usam as mesmas variáveis que mudam apenas a cor:

- `--color-primary` - Cor principal (muda por tema)
- `--color-primary-light` - Versão clara (muda por tema)
- `--color-primary-dark` - Versão escura (muda por tema)
- `--color-accent` - Cor de destaque (mantém igual em todos)
- `--color-abyss`, `--color-graphite`, etc. - Cores de fundo (igual em todos)

---

## Problema do scroll mobile - Resolvido

### O que foi feito:

1. Criado hook `useScrollToTop()` que reseta o scroll ao mudar de página
2. Adicionado `scroll-behavior: smooth` no HTML/Body
3. Adicionado `scroll-padding-top: 0` para garantir início no topo
4. Aplicado em `Home.tsx` e `BookPage.tsx`

### Como funciona:

Quando o usuário navega para `Home` ou `BookPage`, o `useScrollToTop()` é chamado e executa `window.scrollTo(0, 0)`, garantindo que a página comece sempre no topo.

---

## Checklist

- [ ] Página carrega e mostra os 3 botões de tema no topo
- [ ] Clicando em um botão, a cor muda em todo o site
- [ ] Ao recarregar, o tema anterior é mantido
- [ ] Ao navegar entre Home e Livro, o scroll começa no topo
- [ ] Todas as cores estão aplicadas corretamente

Bom trabalho! 🎨
