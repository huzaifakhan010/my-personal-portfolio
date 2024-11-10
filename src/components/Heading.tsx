import React from 'react';
import styles from '../app/styles/Heading.module.css';

interface PropsType {
  title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
  return (
    <div className={styles.headingContainer}>
      <p className={styles.headingText}>{title}</p>
    </div>
  );
}

export default Heading;