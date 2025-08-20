# Guia de Estudo (Final): Componente Header Completo

**Objetivo:** Ter um componente `Header` totalmente funcional, responsivo, com efeito de scroll e menu mobile, construído com base nos princípios de Código Limpo.

**Ficheiros:**
* `src/components/Header.tsx`
* `src/styles/module/Header.module.css`

---

### **1. Código Final para `Header.module.css`**

Este ficheiro contém todas as classes de estilo necessárias para o `Header`, incluindo os estados de scroll e o menu mobile. Estas classes são aplicadas usando a diretiva `@apply` do Tailwind CSS, mantendo o nosso CSS semântico e organizado.

**Ação:** Copie este conteúdo para o seu ficheiro `src/styles/module/Header.module.css`.

```css
/* src/styles/module/Header.module.css */

.header {
  @apply w-full p-6 flex justify-between items-center fixed top-0 left-0 z-50 transition-colors duration-300;
}

.logo {
  @apply text-2xl font-bold text-white;
}

.menuButton {
  @apply md:hidden z-50 cursor-pointer;
}

.nav {
  @apply hidden md:flex gap-8;
}

.navLink {
  @apply text-lg text-gray-300 hover:text-white transition-colors;
}

/* Classe para o header quando a página é rolada */
.headerActive {
  @apply bg-gray-800 shadow-lg;
}

/* Classe para o menu mobile que ocupa o ecrã todo */
.mobileNav {
  @apply fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center gap-8 md:hidden;
}
```

---

### **2. Código Final para `Header.tsx`**

Este é o código completo e funcional para o seu componente. Ele inclui a estrutura, a lógica dos estados, os efeitos e a parte visual (JSX).

**Ação:** Substitua todo o conteúdo do seu ficheiro `src/components/Header.tsx` por este código.

```typescript
import React, { useState, useEffect } from 'react';
import styles from '../styles/module/Header.module.css';

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Experiência", href: "#experience" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `${styles.header} ${isActive ? styles.headerActive : ''}`;

  return (
    <>
      <header className={headerClasses}>
        <a href="#">
          <span className={styles.logo}>Kadu Dev</span>
        </a>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <div className="w-8 h-6 flex flex-col justify-between">
            <span className="block w-full h-0.5 bg-white"></span>
            <span className="block w-full h-0.5 bg-white"></span>
            <span className="block w-full h-0.5 bg-white"></span>
          </div>
        </button>
      </header>

      {isOpen && (
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-3xl text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
};
```

---

### **3. Explicação Detalhada do Código (`Header.tsx`)**

#### **Parte A: Estrutura e Dados**

* **`import ...`**: Importamos as ferramentas do React (`useState`, `useEffect`) e o nosso ficheiro de estilos. É o ponto de partida para qualquer componente.
* **`const navItems = [...]`**: Definimos os nossos links de navegação num array. Esta é uma prática de "Código Limpo", pois separa os **dados** da **lógica de apresentação**. Se amanhã quiser adicionar um novo link, só precisa de mexer neste array, sem tocar no JSX.

#### **Parte B: A Lógica (O "Cérebro" do Componente)**

* **`const [isOpen, setIsOpen] = useState(false);`**: Cria a "memória" para o menu mobile. `isOpen` guarda se o menu está aberto (`true`) ou fechado (`false`). `setIsOpen` é a única função que pode alterar este valor. Começa como `false`.
* **`const [isActive, setIsActive] = useState(false);`**: Cria a "memória" para o efeito de scroll. `isActive` guarda se o fundo do header deve aparecer ou não. Começa como `false`.
* **`useEffect(() => { ... }, []);`**: Cria um "ouvinte" que observa a rolagem da página. Quando o utilizador rola mais de 50 pixels, ele chama `setIsActive(true)` para atualizar a memória do componente. O `[]` no final garante que este "ouvinte" só é criado uma vez, evitando trabalho desnecessário. A função de `return` é uma boa prática de "limpeza", que remove o ouvinte quando o componente já não é necessário.

#### **Parte C: A Apresentação (O Visual em JSX)**

* **`const headerClasses = ...`**: Para manter o JSX limpo, criamos uma variável que constrói a string de classes CSS. Ela sempre inclui a classe base `.header` e, se `isActive` for `true`, adiciona a classe `.headerActive` do nosso ficheiro CSS.
* **`return (<> ... </>);`**: Um componente React só pode devolver um elemento "pai". Como temos o `<header>` e a `<nav>` do menu mobile no mesmo nível, envolvemo-los num Fragmento (`<>...</>`), que é um invólucro invisível.
* **`<nav className={styles.nav}>`**: A nossa navegação para desktop. O `.map()` percorre o array `navItems` e cria um link `<a>` para cada item, evitando código repetido e facilitando a manutenção.
* **`<button onClick={() => setIsOpen(!isOpen)}>`**: O botão do menu mobile. Quando clicado (`onClick`), ele executa a função `setIsOpen` e inverte o valor de `isOpen` (se era `false`, vira `true`, e vice-versa), mostrando ou escondendo o menu mobile.
* **`{isOpen && ( ... )}`**: Esta é a sintaxe para **renderização condicional**. O bloco `<nav>` do menu mobile só será desenhado no ecrã **SE** a variável `isOpen` for `true`.
* **`onClick={() => setIsOpen(false)}`**: Dentro dos links do menu mobile, adicionamos um `onClick` que força o menu a fechar (`setIsOpen(false)`) quando um link é clicado, melhorando a usabilidade.