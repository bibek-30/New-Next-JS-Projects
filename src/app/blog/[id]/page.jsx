import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import { PageNotFoundError } from "next/dist/shared/lib/utils";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  if (!res.ok) {
    return new PageNotFoundError();
  }
  return res.json();
}

const BlogPost = async ({ params }) => {
  console.log("params", params)
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {" "}
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className={styles.desc}>{data.title}</p>
          <div
            className={styles.author}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Image src="/profile.png" height={40} width={40} alt="" />
            <span className={styles.name} style={{ marginLeft: "10px" }}>
              Jhone Doe
            </span>
          </div>
        </div>
        <div className={styles.imgcontainer}>
          <Image
            src="/blog-post.jpg"
            className={styles.images}
            fill={true}
            // width={400}
            // height={300}
            alt=""
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          dolore, doloremque, dolor dicta laudantium, cupiditate magni ea
          quisquam ducimus totam officia neque ullam voluptas corporis amet id
          vero beatae quis. In enim aperiam adipisci est cum tempore quisquam
          dolor dolores ullam quos rem deleniti labore voluptatum quibusdam
          error et vel distinctio accusamus iure, aut porro commodi tenetur
          culpa! Ipsam, a nisi. Blanditiis modi laborum ut magni, laudantium
          cupiditate consequatur fugiat repellat quia hic. Harum nesciunt autem
          cupiditate labore repellendus reprehenderit! Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Molestiae veritatis saepe ab quo
          commodi voluptas. In, fugiat assumenda a itaque autem ut atque nihil
          dolorem, iure voluptas fuga possimus ad. Deleniti at quos vel!
          Deleniti ut eligendi distinctio odio voluptatibus saepe dignissimos
          quisquam libero, maxime, obcaecati a. Neque, saepe, aut debitis
          voluptate laudantium officia hic consequuntur quae, beatae error
          adipisci? Suscipit quo nisi a et consequuntur aliquid dicta ab, ut
          asperiores, dolorem ad id culpa exercitationem sequi. Sunt suscipit
          rem laboriosam impedit nihil velit tempora in vel, dolores quaerat
          aspernatur. Earum doloremque a quam, quos nihil quod magnam sed
          recusandae assumenda necessitatibus quis laboriosam aperiam totam ea.
          Optio rem eum, qui beatae nam molestias quia blanditiis cupiditate,
          recusandae aliquid dolorum! Eius quae consequatur ex quos animi. Nemo,
          incidunt obcaecati ut fugiat excepturi nisi ab explicabo reiciendis
          quasi alias nostrum cum voluptate repellendus similique ad id fugit
          unde quam doloribus labore. Odit omnis modi obcaecati adipisci unde
          sit est at expedita possimus nesciunt? Dolorum, illo minus laborum
          error quisquam laudantium! Cumque sit praesentium beatae dolorem ea
          ratione, non dignissimos placeat fuga. Doloremque doloribus ut eveniet
          cumque debitis atque veniam porro voluptas unde, repudiandae, fugiat
          totam quam non vel ducimus provident. Eveniet molestiae nulla fugit
          libero. Explicabo ipsum nesciunt quis rerum perspiciatis! Explicabo
          totam sequi rerum harum, eveniet repellat vitae, quaerat fugiat vel
          eos atque obcaecati iusto, maiores optio labore odio soluta quasi qui.
          Culpa nihil ducimus consequatur sunt dolorem reprehenderit optio.
          Fugiat, aperiam. Explicabo obcaecati velit iusto voluptatum aut
          provident rem officia repellendus soluta. Incidunt quasi alias
          corporis impedit debitis quisquam numquam, similique itaque modi quos
          odio reprehenderit dolorum recusandae illo. Cupiditate, harum
          accusamus reprehenderit rerum repudiandae facilis tempora culpa
          temporibus ab quaerat quam praesentium molestiae voluptas ad ex,
          numquam corporis nisi necessitatibus aspernatur omnis. Quod nihil
          similique facilis laudantium fugiat.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
