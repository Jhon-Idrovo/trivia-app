import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [userInputs, setUserInputs] = useState({ name: "", age: "" });

  const handleClick = (e) => {
    e.preventDefault();
    //send the data to some API
    router.push("/categories");
  };
  const handleChange = (e) => {
    console.log(e);
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUserInputs({ ...userInputs, inputName: inputValue });
  };

  return (
    <>
      <Head>
        <title>Trivia App</title>
      </Head>
    </>
  );
}
