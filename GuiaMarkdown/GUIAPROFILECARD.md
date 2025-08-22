# Guia de Estudo (Final): Componente ProfileCard

**Objetivo:** Criar um cartão de apresentação visualmente atraente que mostre as informações principais do perfil, tecnologias e links de contacto, com base no ficheiro `data.ts`.

**Ficheiros:**
* `src/components/ProfileCard.tsx`
* `src/styles/module/ProfileCard.module.css`

---

### **1. O Ficheiro de Estilos (`ProfileCard.module.css`)**

Este ficheiro irá estilizar o cartão de perfil, a sua foto, os textos e as "pílulas" de tecnologia, replicando o design do Figma.

**Ação:** Copie este conteúdo para o seu ficheiro `src/styles/module/ProfileCard.module.css`.

```css
/* src/styles/module/ProfileCard.module.css */

.card {
  /* O pt-32 adiciona um espaçamento no topo para não ficar colado ao Header (que é fixo) */
  @apply pt-32 p-8 flex flex-col items-center text-center;
}

.avatar {
  @apply w-40 h-40 rounded-full border-4 border-green-500 object-cover mb-4;
}

.name {
  @apply text-3xl font-bold;
}

.handle {
  @apply text-gray-400 mt-1;
}

.title {
  @apply mt-2 max-w-xl;
}

.location {
  @apply flex items-center gap-2 mt-2 text-gray-400;
}

.techPillsContainer {
  @apply flex flex-wrap justify-center gap-2 mt-6;
}

.techPill {
  @apply bg-gray-700 text-gray-200 text-sm font-bold px-3 py-1 rounded-md flex items-center gap-2;
}
```

#### **Explicação Detalhada do `ProfileCard.module.css`**

* **`.card`**: Define o contentor principal. `pt-32` adiciona um espaçamento no topo para não ficar colado ao `Header` (que é fixo), `p-8` adiciona um espaçamento interno, e `flex flex-col items-center` é a chave para alinhar todo o conteúdo verticalmente e no centro.
* **`.avatar`**: Estiliza a sua foto. `w-40 h-40` define um tamanho fixo, `rounded-full` a torna perfeitamente circular, `border-4 border-green-500` cria a borda verde de destaque e `object-cover` garante que a sua foto preencha o círculo sem distorcer.
* **`.name`, `.handle`, `.title`, `.location`**: Classes para os textos, definindo tamanhos de fonte, cores e margens para criar uma hierarquia visual clara, exatamente como planeado no Figma.
* **`.techPillsContainer`**: O contentor para as suas tecnologias. `flex-wrap` é importante aqui, pois permite que as "pílulas" quebrem para a linha de baixo se não couberem todas na mesma linha em ecrãs mais pequenos.
* **`.techPill`**: A pílula de tecnologia individual, com um fundo escuro, texto claro e cantos arredondados.

---

### **2. O Ficheiro do Componente (`ProfileCard.tsx`)**

Este código irá importar os dados do seu ficheiro `data.ts` e usá-los para preencher a estrutura visual do cartão.

**Ação:** Este deve ser o conteúdo final do seu ficheiro `src/components/ProfileCard.tsx`.

```typescript
import React from 'react';
import styles from '../styles/module/ProfileCard.module.css';
import { profileData, technologies } from '../data';

// TODO: Instalar uma biblioteca de ícones (ex: lucide-react) para usar aqui.

export const ProfileCard = () => {
  return (
    <section id="profile" className={styles.card}>
      <img
        // TODO: Adicionar o caminho para a sua foto de perfil na pasta 'public'.
        src="/minha-foto.png"
        alt={profileData.name}
        className={styles.avatar}
      />

      <h1 className={styles.name}>{profileData.name}</h1>
      <p className={styles.handle}>{profileData.handle}</p>
      <p className={styles.title}>{profileData.title}</p>
      <p className={styles.title}>{profileData.currentRole}</p>

      <div className={styles.location}>
        {/* <MapPin size={16} /> */}
        <span>{profileData.location}</span>
      </div>

      <div className={styles.techPillsContainer}>
        {technologies.map((tech) => (
          <div key={tech.name} className={styles.techPill}>
            {/* <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> */}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
```

---

### **3. Explicação Detalhada do Código (`ProfileCard.tsx`)**

#### **Parte A: Estrutura e Dados**

* **`import styles from ...`**: Importamos o nosso ficheiro de estilos CSS Module. Cada classe CSS (ex: `.card`) torna-se uma propriedade do objeto `styles` (ex: `styles.card`).
* **`import { profileData, technologies } from '../data';`**: Aqui está a chave! Em vez de escrevermos o texto diretamente no componente, importamos os objetos `profileData` e `technologies` do seu ficheiro `data.ts`. Isto torna o nosso componente reutilizável e muito mais fácil de atualizar.

#### **Parte B: A Apresentação (O Visual em JSX)**

* **`<section id="profile" className={styles.card}>`**: Usamos a tag `<section>` para o nosso cartão e aplicamos a classe `.card` para o estilo principal. Adicionámos também um `id="profile"` que poderá ser útil para navegação no futuro.
* **`<img ... />`**: A imagem do seu perfil. O `src` deve apontar para a localização da sua foto na pasta `public`, e o `alt` (texto alternativo) usa o nome importado de `profileData` para acessibilidade.
* **`{profileData.name}`**, **`{profileData.handle}`**, etc.: Usamos chavetas `{}` para inserir os dados do nosso objeto `profileData` diretamente no JSX. Se precisar de atualizar o seu título, basta editar o ficheiro `data.ts`, e o site será atualizado automaticamente.
* **`{technologies.map((tech) => ...)}`**: Assim como no `Header`, usamos `.map()` para percorrer o array `technologies`. Para cada tecnologia no array, ele cria uma `div` com a classe `.techPill`, mostrando dinamicamente todas as suas tecnologias. O `key={tech.name}` é um atributo especial que o React usa para otimizar a renderização de listas.