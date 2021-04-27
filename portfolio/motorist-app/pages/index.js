import Head from "next/head";
import { useState } from "react";
import Timespace from "../components/Timespace";

let APIresponse = [
  { time: "8:00-AM", motorists: 8 },
  { time: "8:30-AM", motorists: 1 },
  { time: "9:00-AM", motorists: 0 },
  // { time: "9:30-AM", motorists: 5 },
  // { time: "10:00-AM", motorists: 0 },
  // { time: "11:30-AM", motorists: 5 },
  // { time: "12:00-AM", motorists: 0 },
  // { time: "12:30-AM", motorists: 5 },
  // { time: "1:00-PM", motorists: 0 },
  // { time: "1:30-PM", motorists: 5 },
  // { time: "2:00-PM", motorists: 0 },
  // { time: "2:30-PM", motorists: 5 },
  // { time: "3:00-PM", motorists: 0 },
  // { time: "3:30-PM", motorists: 5 },
  // { time: "4:00-PM", motorists: 0 },
  // { time: "4:30-PM", motorists: 5 },
  // { time: "5:00-PM", motorists: 0 },
  // { time: "5:30-PM", motorists: 5 },
  // { time: "6:00-PM", motorists: 0 },
  // { time: "6:30-PM", motorists: 5 },
  // { time: "7:00-PM", motorists: 0 },
  // { time: "7:30-PM", motorists: 5 },
  // { time: "8:00-PM", motorists: 0 },
];

export default function Home() {
  const [timespaces, setTimespaces] = useState(
    APIresponse.map((timespace) => {
      timespace.isSelected = false;
      return timespace;
    })
  );

  const handleChange = (target, motoristIndex) => {
    console.log(motoristIndex, target.checked);
    let newTimespaces = JSON.parse(JSON.stringify(timespaces));
    let newTimespace = newTimespaces[motoristIndex];
    if (target.checked) {
      newTimespace.isSelected = true;
      newTimespace.motorists--;
    } else {
      newTimespace.isSelected = false;
      newTimespace.motorists++;
    }
    console.log(newTimespaces, newTimespace);

    setTimespaces(newTimespaces);
  };

  const checkForEmpty = () => {};
  return (
    <>
      <Head>
        <title>Motorists App</title>
      </Head>
      {timespaces.map((timespace, index) => {
        return (
          <Timespace
            key={index}
            motoristIndex={index}
            timespace={timespace}
            handleChange={handleChange}
          />
        );
      })}
    </>
  );
}
