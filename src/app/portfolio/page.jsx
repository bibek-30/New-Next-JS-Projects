import React from "react";
import styles from "./portfolio.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustration" className={styles.item}>
          <span className={styles.CardTitle}>Illustration</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.CardTitle}>Websites</span>
        </Link>
        <Link href="/portfolio/apps" className={styles.item}>
          <span className={styles.CardTitle}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
