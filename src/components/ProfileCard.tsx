import styles from "@/styles/ProfileCard.module.css";
import React from "react";
import { profileData, technologies } from "../data";

export const ProfileCard = () => {
    return (
      <section className={styles.card}>
        <img
          src="./assets/minha-foto.png"
          alt={profileData.name}
          className={styles.avatar}
        />

        <h1 className="{styles.name}">{profileData.name}</h1>
        <p className="{styles.handle}">{profileData.handle}</p>
        <p className="{styles.title}">{profileData.title}</p>
        <div className="{styles.location}">
          {/* TODO: Add a map icon */}
          <span>{profileData.location}</span>
        </div>
        <div className="{styles.techPillsContainer">
          {technologies.map((tech) => (
            <div className="{styles.techPill}" key={tech.name}>
              {/* TODO: adicionar o SVG do ícone da tecnologia aqui*/}
              <span> {tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    );
};



