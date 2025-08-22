import React, { useState, useEffect } from "react";
import styles from "../styles/module/Header.module.css";
import { ReactComponent as Logo } from "../assets/icon/Logo.svg";

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = `${styles.header} ${isActive ? styles.headerActive : ""}`;

  return (
    <>
      <header className={headerClasses}>
        <a href="#">
          <Logo className={styles.logo} />
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

export default Header;
