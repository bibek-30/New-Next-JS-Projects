import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link href="/blog/testId">
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
              <h1>Creative Portfolio</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, unde. Corporis molestiae ipsum iste voluptas. Optio
                quisquam odio cumque provident, sapiente quas quae in voluptate
                quos hic ullam dolorum dicta.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.container}>
        <Link href="/blog/testId">
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
              <h1>Creative Portfolio</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, unde. Corporis molestiae ipsum iste voluptas. Optio
                quisquam odio cumque provident, sapiente quas quae in voluptate
                quos hic ullam dolorum dicta.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.container}>
        <Link href="/blog/testId">
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
              <h1>Creative Portfolio</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, unde. Corporis molestiae ipsum iste voluptas. Optio
                quisquam odio cumque provident, sapiente quas quae in voluptate
                quos hic ullam dolorum dicta.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
