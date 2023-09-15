import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import about from "../../../public/about.jpeg";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={about} alt="About Us" className={styles.img} />
        <div className={styles.imageText}>
          <h1>Digital Storytellers</h1>
          <h4>Handcrafting award winning digital experience.</h4>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.items}>
          <h1>Wo are you?</h1>
          <p className={styles.desc}>
            Emmet Abbreviation Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus illum inventore minus ex aperiam et
            esse placeat eos eligendi, harum dicta deserunt sequi alias?
            <br></br>
            <br></br>
            Odit explicabo iure debitis ullam adipisci. Modi atque dolor
            obcaecati officia qui magni nulla sunt maiores itaque ea distinctio
            voluptatum dicta tenetur vitae illum, ducimus libero dolorum
            voluptatem at assumenda. Doloremque blanditiis voluptates dicta
            corrupti maxime. Qui labore maxime voluptates unde quo quis eius
            modi amet nihil, ullam possimus in minima rem est nisi iusto
            perferendis sint atque debitis quae! Quas sed reprehenderit nam
            rerum etc. debitis dolore sint cumque quasi temporibus mollitia
            dignissimos accusantium, velit laudantium facilis eius sed eaque
            magnam veniam asperiores?
            <br></br>
            <br></br>
            <br></br>
            Laborum ad error nemo, non obcaecati atque! Porro provident quis
            dignissimos atque at consectetur, quia magni dolor, suscipit quo
            culpa deleniti nihil vitae esse autem. Excepturi, sint explicabo!
            Explicabo, odit.
          </p>
        </div>
        <div className={styles.items}>
          <h1>What do we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quasi
            quisquam. Officiis temporibus obcaecati totam illo tempora quas
            laboriosam, minus in, expedita perspiciatis molestiae earum laborum
            blanditiis ut quidem quia. Debitis quos temporibus iure minus,
            repellendus quis incidunt facere, nulla architecto eius delectus
            adipisci commodi nam eum? Id accusantium repudiandae recusandae
            nulla autem, ducimus vel, soluta mollitia iure ipsum quam. Modi,
            quam neque totam libero culpa aliquam mollitia eligendi doloribus
            incidunt eum molestiae alias maiores ad impedit iusto vero veniam
            consequatur, corrupti reprehenderit, rerum necessitatibus. Molestias
            nemo fugit fugiat hic. Molestiae provident quis quas. Nihil,
            corporis placeat alias quo totam facere quibusdam reprehenderit
            officiis repellat, harum impedit repellendus minima, quasi
            laudantium quos provident natus sapiente minus odit fuga. Sit, vel!
            <br></br>
            <br></br>
            -Dicta voluptates<br></br>
            -provident quisquam<br></br>
            -dolorem animi odit
            <br></br> -placeat explicabo nisi,
            <br></br> -corrupti nihil eum
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
