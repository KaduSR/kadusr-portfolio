import React from "react";
import styles from "../styles/module/ProfileCard.module.css";
import { profileData, technologies } from "../data";
import minhaFoto from "../assets/minha-foto.png";
import iconMap from "../assets/icons/map.svg"; 

export const ProfileCard = () => {
  return (
    <section id="profile" className={styles.card}>
      <img
        src={minhaFoto}
        alt={profileData.name}
        className={styles.avatar}
      />

      <h1 className={styles.name}>{profileData.name}</h1>
      <p className={styles.handle}>{profileData.handle}</p>
      <p className={styles.title}>{profileData.title}</p>
      <p className={styles.title}>{profileData.currentRole}</p>

      <div className={styles.location}>
        <img src={iconMap} alt="Localização" className={styles.icon} />
        <span>{profileData.location}</span>
      </div>

      <div className={styles.techPillsContainer}>
        {technologies.map((tech) => (
          <div className={styles.techPill} key={tech.name}>
            {/* TODO: adicionar o SVG do ícone da tecnologia aqui*/}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
