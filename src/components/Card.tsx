import Image from 'next/image';
import React from 'react';
import styles from '../app/styles/Card.module.css';

interface PropsType {
   title: string;
   desc: string;
   img: string;
   tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  return (
    <div className={styles.cardContainer} data-aos="zoom-in-down">
        <div>
            <Image 
                data-aos="zoom-in-down" 
                className={styles.image}
                src={img}
                width={350}
                height={350}
                alt={title}
            />
        </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{desc}</div>
        <div>
            {tags.map((el) => (
                <div className={styles.tags} key={el}>
                    {el}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Card;