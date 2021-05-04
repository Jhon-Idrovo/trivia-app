import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trivia App</title>
      </Head>
      <section>
        <div className="sec-1">
          <h1 className="text-9xl font-medium">
            PURE HONEY <br /> NOT <br /> JUNK
          </h1>
          <button className="btn-base text-5xl mt-8">Taste Now</button>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="heading-2">We seek purity</h1>
          <p className="pr-36 pl-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, sunt fuga. Nobis soluta pariatur, eveniet delectus
            eaque alias eligendi, earum quia facilis quasi voluptas aliquam!
            Praesentium eaque sed quae ullam? Esse id perferendis, dolorem
            maxime ullam cupiditate ex blanditiis exercitationem totam qui nobis
            reprehenderit aliquam ipsa sit incidunt laborum a ut dolores impedit
            corporis tempore quam beatae modi sapiente? Laudantium? Ab, non! Non
            ex dolorum eum delectus fugit, nulla magnam excepturi iure nemo ea
            culpa accusamus provident tenetur! Repudiandae voluptatibus nesciunt
            autem labore, commodi perspiciatis consectetur molestias enim cum
            facilis! Excepturi eius ab impedit possimus, ipsum eaque fugit
            distinctio quos dolores mollitia placeat repellendus vitae modi
            tenetur voluptatibus quam fuga hic velit labore rerum quod sed
            commodi et earum. Labore. Quod, provident aut ab adipisci voluptas
            autem ducimus tenetur aspernatur, numquam deserunt assumenda error,
            velit inventore nostrum consequatur quisquam molestiae amet iste
            praesentium iusto nobis obcaecati animi eos. Eligendi, repudiandae.
          </p>
          <button className="btn-base text-2xl w-max">Read More</button>
        </div>
      </section>
    </>
  );
}
