# Guia de Estudo: Componente About

**Objetivo:** Criar uma secção "Sobre" que apresenta um resumo profissional e permite ao utilizador expandir para ler um texto mais detalhado.

**Ficheiros a Modificar/Criar:**
* `src/components/About.tsx`
* `src/styles/module/About.module.css`

---

### **1. O Ficheiro de Estilos (`About.module.css`)**

Este ficheiro estiliza o contentor da secção, o título, o parágrafo de texto e o botão "Ler mais".

**Ação:** Crie/atualize o ficheiro `src/styles/module/About.module.css` com este conteúdo.

```css
/* src/styles/module/About.module.css */

.aboutSection {
  @apply w-full text-center px-4 py-16;
}

.title {
  @apply text-3xl font-bold mb-4;
}

.text {
  /* Limita a largura do texto para melhor legibilidade e centra-o */
  @apply max-w-2xl mx-auto text-gray-300 leading-relaxed;
}

.readMoreButton {
  /* Estilo para o botão "Ler mais", com um hover subtil */
  @apply text-green-400 font-semibold mt-4 inline-block hover:text-green-300 transition-colors;
}
```

#### **Explicação Detalhada do `About.module.css`**

* **`.aboutSection`**: Define o contentor principal, com espaçamentos verticais (`py-16`) e horizontais (`px-4`) para que o conteúdo "respire".
* **`.title`**: Estilo para o título da secção, com margem inferior (`mb-4`).
* **`.text`**: Garante que o parágrafo do seu resumo tenha uma largura máxima (`max-w-2xl`) e esteja centrado (`mx-auto`), o que melhora muito a legibilidade. `leading-relaxed` aumenta o espaçamento entre as linhas do texto.
* **`.readMoreButton`**: Estilo para o nosso botão "Ler mais", com a cor verde de destaque e um efeito de transição suave na cor ao passar o rato.

---

### **2. O Ficheiro do Componente (`About.tsx`)**

Este código cria a estrutura e a lógica de interatividade para a secção "Sobre".

**Ação:** Este deve ser o conteúdo final do seu ficheiro `src/components/About.tsx`.

```typescript
import React, { useState } from 'react';
import styles from '../styles/module/About.module.css';
import { profileData } from '../data';

export const About = () => {
  // Estado para controlar se o texto está expandido ou não.
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.title}>Sobre Mim</h2>

      <p className={styles.text}>
        {/* Lógica condicional: Se 'isExpanded' for true, mostra o texto longo, senão, o curto. */}
        {isExpanded ? profileData.about.long : profileData.about.short}
      </p>

      <button
        className={styles.readMoreButton}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Ler menos' : 'Ler mais'}
      </button>
    </section>
  );
};
```

---

### **3. Explicação Detalhada do Código (`About.tsx`)**

#### **Parte A: Estrutura e Lógica**

* **`import { profileData } from '../data';`**: Importamos os seus dados pessoais, especificamente os resumos curto e longo do seu ficheiro `data.ts`.
* **`const [isExpanded, setIsExpanded] = useState(false);`**: Criamos uma "memória" (`estado`) para o componente `About`. A variável `isExpanded` irá guardar se o texto está expandido (`true`) ou não (`false`). Começa como `false`, mostrando o texto curto por defeito.

#### **Parte B: A Apresentação (O Visual em JSX)**

* **`<section id="about" ...>`**: Adicionamos a `id="about"` para que a navegação do nosso `Header` saiba para onde rolar.
* **`{isExpanded ? profileData.about.long : profileData.about.short}`**: Esta é uma **renderização condicional** usando um operador ternário. Ele lê o estado `isExpanded` e decide qual texto mostrar:
    * **SE** `isExpanded` for `true`, ele mostra `profileData.about.long`.
    * **SENÃO**, ele mostra `profileData.about.short`.
* **`<button onClick={() => setIsExpanded(!isExpanded)}>`**: O nosso botão de ação. Quando clicado (`onClick`), ele chama a função `setIsExpanded` e inverte o valor de `isExpanded`. Isto faz com que tanto o parágrafo do resumo como o texto do próprio botão (`Ler menos` / `Ler mais`) mudem dinamicamente.