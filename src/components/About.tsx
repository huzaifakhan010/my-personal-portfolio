import React from 'react';
import styles from '../app/styles/About.module.css';

const About = () => {
  return (
    <div id="about" className={styles.aboutDiv} data-aos="zoom-in-down">
      <h2 className={styles.title} data-aos="zoom-in-down">About Me</h2>
      <p className={styles.description} data-aos="zoom-in-down">
        Currently diving into an immersive course in Artificial Intelligence, Web 3.0, and the Metaverse at GIAIC. Passionate about the future of technology, I am exploring groundbreaking skills that connect virtual worlds, decentralized systems, and intelligent machines. Eager to transform insights into real-world impact!
      </p>
    </div>
  );
}

export default About;