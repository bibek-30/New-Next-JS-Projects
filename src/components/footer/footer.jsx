import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Lamalia @2023. All rights are reserved.</div>
      <div className={styles.social}>
        <Link
          target="_blank"
          href={"https://www.facebook.com/profile.php?id=100037486671298"}
        >
          <Image
            src="/1.png"
            className={styles.icons}
            alt="facebook"
            width={20}
            height={20}
          />
        </Link>
        <Link
          target="_blank"
          href={"https://www.instagram.com/bibek.stha.735/"}
        >
          <Image
            src="/2.png"
            className={styles.icons}
            alt="Instagram"
            width={20}
            height={20}
          />
        </Link>
        <Image
          src="/3.png"
          className={styles.icons}
          alt="Twitter"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Footer;
