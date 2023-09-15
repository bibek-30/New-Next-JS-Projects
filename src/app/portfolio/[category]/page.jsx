import React from "react";
import styles from "./category.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Creative Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            unde. Corporis molestiae ipsum iste voluptas. Optio quisquam odio
            cumque provident, sapiente quas quae in voluptate quos hic ullam
            dolorum dicta.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/creative.jpg"
            alt="Category Banner"
            className={styles.images}
            // width={400}
            // height={400}
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Creative Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            unde. Corporis molestiae ipsum iste voluptas. Optio quisquam odio
            cumque provident, sapiente quas quae in voluptate quos hic ullam
            dolorum dicta.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/creative.jpg"
            alt="Category Banner"
            className={styles.images}
            // width={400}
            // height={400}
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Creative Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            unde. Corporis molestiae ipsum iste voluptas. Optio quisquam odio
            cumque provident, sapiente quas quae in voluptate quos hic ullam
            dolorum dicta.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/creative.jpg"
            alt="Category Banner"
            className={styles.images}
            // width={400}
            // height={400}
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
