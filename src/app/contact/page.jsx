import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import contact from "../../../public/contact.png";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Let's Keep in Touch.</h1>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactImages}>
          <Image
            src={contact}
            alt="Contact Images"
            className={styles.images}
            // width={400}
            // height={400}
            fill={true}
          />
        </div>
        <form className={styles.contactForm}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            name="message"
            className={styles.textarea}
            placeholder="message"
            cols="20"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
