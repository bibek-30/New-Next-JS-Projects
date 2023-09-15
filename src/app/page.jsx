import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.items}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your ideas into reality. We bring together the teams from the
          gobal tech industry.
        </p>
        <Button url="/portfolio" text="See Our Work" />
      </div>
      <div className={styles.items}>
        <Image src={Hero} alt="Hero Images" className={styles.img} />
      </div>
    </div>
  );
}
