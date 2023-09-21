import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(res)
    throw new Error("Failed to retrive the data!");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((items) => (
        <div className={styles.container} key={items.id}>
          <Link href='/blog/{items.id}'>
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <Image
                  src="/creative.jpg"
                  alt="Category Banner"
                  className={styles.images}
                  width={400}
                  height={250}
                />
              </div>
              <div className={styles.content}>
                <h1>{items.title}</h1>
                <p>{items.desc}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
