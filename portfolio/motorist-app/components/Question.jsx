import { useState, useEffect } from "react";

function Question({ question, handleClick }) {
  const [selection, setSelection] = useState(false);
  const handleSelection = (e) => {
    const selectionIndex = e.target.id.split("").pop();
    setSelection(selectionIndex);
  };
  useEffect(() => {});
  return (
    <form className="question">
      <p className="question-prompt">{question.question}</p>
      {question.options.map((option, index) => {
        return (
          <div className="option-container" key={index}>
            <input
              type="radio"
              name="option"
              id={`option-${index}`}
              className="question-option"
              onChange={handleSelection}
            />
            <label
              htmlFor={`option-${index}`}
              className="question-option-label"
            >
              {option}
            </label>
          </div>
        );
      })}
      <input
        type="reset"
        onClick={(e) => handleClick(e, selection)}
        className="form-btn question-submit"
        value="Next!"
      ></input>
    </form>
  );
}

export default Question;
