import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import axios from "axios";
import PubCard from "../components/PubCard";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";

export default function Home() {
  const [section, setSection] = useState("topstories");
  const [pubs, setPubs] = useState("");

  useEffect(() => {
    getPubs(section);
  }, [section]);

  const changeSection = (newSec) => {
    setSection(newSec);
  };
  const getPubs = async (section) => {
    const IDs = await axios.get(
      `https://hacker-news.firebaseio.com/v0/${section}.json`
    );
    const first = IDs.data.slice(0, 20);
    const second = IDs.data.slice(20, 40);

    const promises = first.map((id) => {
      return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    });
    const pubs = await Promise.all(promises);
    const parsedPubs = pubs.map((pub) => pub.data);
    // IDs.data.map(async (id) => {
    //   const pub = await axios.get(
    //     `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    //   );
    //   console.log(pub.data);
    //   setPubs((pubs) => {
    //     pubs ? [...pubs, pub.data] : [pub.data];
    //   });
    //   console.log("last line");
    // });
    setPubs(parsedPubs);
    console.log("first part done");
  };

  console.log("outside", pubs);
  return (
    <>
      <Head>
        <title>Trivia App</title>
      </Head>

      <NavBar section={section} changeSection={changeSection} />
      <main>
        {pubs ? (
          pubs.map((pub, index) => {
            return <PubCard key={index} {...pub} />;
          })
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
}
