import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import TimeslotCard from "../components/TimeslotCard";

export default function Home({ timeSlots }) {
  const [selection, setSelection] = useState(null);
  const handleSubmit = (e) => {
    //send to the API
  };

  const handleClick = (key, isSelected) => {
    if (isSelected) {
      timeSlots[key]++;
      return setSelection(null);
    }

    //if the key is not selected:
    //1. we have another key seleted
    //2. we don't have another key selected
    selection ? timeSlots[selection]++ : null;
    timeSlots[key]--;
    setSelection(key);
  };

  return (
    <>
      <div className="card sticky top-0 py-0 bg-secondary ">
        <h2 className="m-auto font-semibold w-min">Available Motorists</h2>
        <h2 className="m-auto font-semibold">Time</h2>
      </div>
      {Object.keys(timeSlots).map((key) => (
        <TimeslotCard
          time={key}
          motorists={timeSlots[key]}
          key={key}
          handleClick={handleClick}
          isSelected={selection === key}
        />
      ))}
      <button
        className="bg-primary text-txt-primary w-32 py-2 mx-auto my-2 table hover:-skew-y-1"
        type="submit"
        onClick={handleSubmit}
      >
        Save
      </button>
    </>
  );
}

export async function getServerSideProps(context) {
  //api call
  // const timeSlots = [
  //   { time: "08:00", motorists: 8 },
  //   { time: "08:30", motorists: 8 },
  // ];

  const timeSlots = {
    "08:00": 7,
    "08:30": 8,
    "09:00": 7,
    "09:30": 0,
    "10:00": 1,
  };
  return {
    props: { timeSlots }, // will be passed to the page component as props
  };
}
