import styles from "../styles/module/About.module.css";
import { profileData } from "../data";
import React, { useState } from "react";

export const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.title}>Um pouco sobre mim:</h2>

      <p className={styles.text}>
        {isExpanded ? profileData.about.long : profileData.about.short}
      </p>

      <button
        className={styles.readMoreButton}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Ler menos" : "Ler mais"}
      </button>
    </section>
  );
};
