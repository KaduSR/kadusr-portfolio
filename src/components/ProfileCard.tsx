import React from "react";
import styles from "../styles/module/ProfileCard.module.css";
import { profileData, technologies } from "../data";
import minhaFoto from "../assets/minha-foto.png";

export const ProfileCard = () => {
  return (
    <section id="profile" className={styles.card}>
      <img
<<<<<<< HEAD
        src={minhaFoto}
=======
        src="../assets/minha-foto.png"
>>>>>>> b2f5407 (docs: add About section to portfolio)
        alt={profileData.name}
        className={styles.avatar}
      />

      <h1 className={styles.name}>{profileData.name}</h1>
      <p className={styles.handle}>{profileData.handle}</p>
      <p className={styles.title}>{profileData.title}</p>
      <p className={styles.title}>{profileData.currentRole}</p>

      <div className={styles.location}>
        {/* TODO: Add a map icon */}
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
