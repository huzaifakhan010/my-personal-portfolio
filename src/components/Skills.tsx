import React from 'react';
import { SiTypescript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import '../app/styles/Skills.module.css'; // Import the custom CSS file

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        {/* Left Section - Description */}
        <div className="skills-text" data-aos="zoom-in-down">
          <h2 className="skills-heading">Technologies I work with</h2>
          <p className="skills-description">
            I bring expertise in HTML, CSS, JavaScript, TypeScript, React JS, and Next JS. Crafting seamless user experiences, I bridge the gap between innovation and functionality. With a passion for modern web development, I build scalable and efficient applications. Transforming visions into reality, one line of code at a time.
          </p>
        </div>

        {/* Right Section - Icons */}
        <div className="skills-icons">
          <div className="skills-icons-column">
            <h2 data-aos="zoom-in-down"><SiTypescript /></h2>
            <h2 data-aos="zoom-in-down"><RiReactjsLine /></h2>
            <h2 data-aos="zoom-in-down"><SiNextdotjs /></h2>
          </div>
          <div className="skills-icons-column">
            <h2 data-aos="zoom-in-down"><FaCss3Alt /></h2>
            <h2 data-aos="zoom-in-down"><SiTailwindcss /></h2>
            <h2 data-aos="zoom-in-down"><FaNodeJs /></h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;