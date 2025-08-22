import React from "react";
import styles from "../styles/module/Links.module.css";
import { profileData } from "../data";

// TODO: Instalar lucide-react (npm install lucide-react) para os ícones
// import { Linkedin, Instagram, Github, Whatsapp } from 'lucide-react';

export const Links = () => {
  return (
    <div className={styles.linksSection}>
      <span className={styles.title}>Links e Redes Sociais</span>
      <div className={styles.iconContainer}>
        <a
          href={profileData.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          {/* <Linkedin size={28}/> */}
        </a>
        <a
          href={profileData.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          {/* <Instagram size={28}/> */}
        </a>
        <a
          href={profileData.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          {/* <Github size={28}/> */}
        </a>
        <a
          href={profileData.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          {/* <Whatsapp size={28}/> */}
        </a>
      </div>
    </div>
  );
};
