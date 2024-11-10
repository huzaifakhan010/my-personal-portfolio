import React from 'react';
import Navbar from './Navbar';
import styles from '../app/styles/Hero.module.css';

const Hero = () => {
  return (
    <div id="hero" className={styles.heroSection}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.hiddenOnLg}></div>
        <div className={styles.heroText}>
          <div>
            <p data-aos="zoom-in-down">I am</p>
            <p data-aos="zoom-in-down">Muhammad</p>
            <p data-aos="zoom-in-down">Huzefa Khan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;