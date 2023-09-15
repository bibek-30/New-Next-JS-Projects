import React from "react";
import styles from "./darkmode.module.css";

const Darkmode = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>🌛</div>
      <div className={styles.icons}>☀️</div>
      <div className={styles.ball} />
    </div>
  );
};

export default Darkmode;
