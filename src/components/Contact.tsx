import React from 'react';
import { BsMailboxFlag } from "react-icons/bs";
import styles from '../app/styles/Contact.module.css';

const Contact = () => {
  return (
    <div id="contact" className={styles.contactSection}>
      <div className={styles.gridContainer}>
        <div className="space-y-8"> 
          <h2 className={styles.contactTitle} data-aos="zoom-in-down">Contact info.</h2>
          <p className={styles.contactText} data-aos="zoom-in-down">
              Kindly, submit the form.
          </p>
          <div className={styles.contactItem} data-aos="zoom-in-down">
            <BsMailboxFlag size={30}/> huzefakhancorp@gmail.com
          </div>
        </div>
        
        <div className="space-y-8">
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" className={styles.inputField} id="name"/>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="text" className={styles.inputField} id="email"/>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="msg">Message</label>
            <textarea className={styles.textareaField} id="msg" rows={8}></textarea>
          </div>
          
          <button className={styles.sendButton} data-aos="zoom-in-down">SEND</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;