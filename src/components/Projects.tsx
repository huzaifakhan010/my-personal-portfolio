import React from 'react';
import Heading from './Heading';
import Card from './Card';
import styles from '../app/styles/Projects.module.css';

const data = [
  {
    id: 0,
    title: "Todo List",
    desc: "Typescript based app for managing and organizing",
    img: "/todolist.jpg",
    tags: ["Node", "Typescript"]
  },
  {
    id: 1,
    title: "Simple ATM",
    desc: "Typescript based app for managing and organizing",
    img: "/atm.jpg",
    tags: ["Node", "Typescript"]
  },
  {
    id: 2,
    title: "Management System",
    desc: "Typescript based app for managing and organizing Student data",
    img: "/sms.jpg",
    tags: ["Node", "Typescript"]
  },
  {
    id: 3,
    title: "Word Counter",
    desc: "Typescript based app for word counting",
    img: "/wordcounter.jpg",
    tags: ["Node", "Typescript"]
  },
  {
    id: 4,
    title: "Currency Converter",
    desc: "Typescript based app for currency converting",
    img: "/currencyconverter.jpg",
    tags: ["Node", "Typescript"]
  },
  {
    id: 5,
    title: "Simple Calculator",
    desc: "Typescript based app for simple calculation",
    img: "/calculator.jpg",
    tags: ["Node", "Typescript"]
  },
];

const Projects = () => {
  return (
    <div id="projects" className={styles.container}>
      <Heading title="Projects" />
      <div className={styles.cardWrapper}>
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;