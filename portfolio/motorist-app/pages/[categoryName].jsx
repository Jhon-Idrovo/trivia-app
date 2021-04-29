import React from "react";
import { getCategoryCode } from "../lib/trivia";
import Question from "../components/Question";
import { useState } from "react";

import axios from "axios";

function Trivia({ questions }) {
  const [question, setQuestion] = useState(0);
  const [bar, setBar] = useState(questions.map((q) => " "));

  const handleClick = (e, selection) => {
    /*note that if the user doesn't select any option
      false will be passed as selection. 
    */
    parseInt(selection) === questions[question].answerIndex
      ? updatePgrsBar(" correct")
      : updatePgrsBar(" incorrect");
    console.log(questions.length);
    if (question < questions.length - 1) {
      setQuestion((question) => question + 1);
    }
  };
  const updatePgrsBar = (signal) => {
    let newBar = [...bar];
    newBar[question] = signal;
    setBar(newBar);
  };

  const nextQuestion = () => {};

  return (
    <div>
      <div className="pgrs-bar">
        {bar.map((status, index) => {
          return (
            <span className={`pgrs-bar-item ${status}`} key={index}></span>
          );
        })}
      </div>
      <Question {...questions[question]} handleClick={handleClick} />
    </div>
  );
}

export default Trivia;

export async function getServerSideProps({ params }) {
  const diff = "easy";
  const code = getCategoryCode(params.categoryName);
  const url = `https://opentdb.com/api.php?amount=20&category=${code}&difficulty=${diff}&type=multiple`;
  console.log(url);

  const questions = await axios.get(url).then((res) => {
    const questions = res.data.results;

    const formattedQuestions = questions.map((q) => {
      let options = q.incorrect_answers;
      //to render the randomly
      const len = options.length;
      const randIndex = Math.floor(Math.random() * (len + 1));

      options.splice(randIndex, 0, q.correct_answer);

      return { question: q.question, options: options, answerIndex: randIndex };
    });

    return formattedQuestions;
  });

  return { props: { questions } };
}
