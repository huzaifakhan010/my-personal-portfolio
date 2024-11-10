import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styles from '../app/styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.brand}>MHK</div>
        <ul className={styles.menu}>
          <li className={styles.menuLink}><a href="#hero">HOME</a></li>
          <li className={styles.menuLink}><a href="#projects">PROJECTS</a></li>
          <li className={styles.menuLink}><a href="#skills">SKILLS</a></li>
          <li className={styles.menuLink}><a href="#contact">CONTACT</a></li>
          <li className={styles.menuLink}><a href="#about">ABOUT</a></li>
        </ul>
        <div className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {isMenuOpen && (
        <ul className={styles.mobileMenu}>
          <li className={styles.menuLink}><a href="#hero" onClick={toggleMenu}>Home</a></li>
          <li className={styles.menuLink}><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li className={styles.menuLink}><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li className={styles.menuLink}><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          <li className={styles.menuLink}><a href="#about" onClick={toggleMenu}>About</a></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;