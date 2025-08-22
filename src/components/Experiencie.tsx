import styles from "../styles/module/Experiencie.module.css";

import React from "react";
import { experiences } from "../data";

export const Experience = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.title}>Experiência Profissional</h2>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.role}>{exp.role}</h3>
            <span className={styles.companyAndPeriod}>
              {exp.company} • {exp.period}
            </span>
            <p className={styles.description}>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
