import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Shop from "../components/Shop";

export default function Home() {
  const [section, setSection] = useState("landing");

  return (
    <>
      <Head>
        <title>Trivia App</title>
      </Head>
      {section === "landing" ? (
        <button
          className="btn-base"
          onClick={() => {
            setSection("shop");
          }}
        >
          See More
        </button>
      ) : null}
      {section === "shop" ? <Shop /> : null}
    </>
  );
}
