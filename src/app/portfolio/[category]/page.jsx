import React from "react";
import styles from "./category.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data";

const getData = (category) => {
  const data = items[category];
  console.log(data);
  if (data) {
    return data;
  }
  console.log("error");
  return []; // Return an empty array if data is not found to avoid errors when mapping
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          {" "}
          {/* Add a unique key for each mapped item */}
          <div className={styles.content}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              src={item.image}
              alt="Category Banner"
              className={styles.images}
              // width={400}
              // height={400}
              fill={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
