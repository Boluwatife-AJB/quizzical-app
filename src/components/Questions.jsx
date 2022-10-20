import React from 'react';
import { nanoid } from 'nanoid';
const Questions = ({ question, answer, callback, userAnswer }) => {
  const options = {
    option1: 'Blue',
    option2: 'Black',
    option3: 'Brown',
    option4: 'Green',
    id: nanoid(),
  };
  // const optionOutput = options.map((options) => console.log(option1));

  // const handleClick = (e, key) => {
  //   console.log(e);
  //   console.log(key);
  //   console.log(`${key}, I was clicked`);
  // };
  return (
    <div className="app__questions">
      <p className="app__question">{question}</p>
      <div className="app__question-options">
        <button
          className="question-option"
          // onClick={handleClick}
          key={options.id}
        >
          Blue
        </button>
        <button
          className="question-option"
          // onClick={handleClick}
          key={options.id}
        >
          Green
        </button>
        <button
          className="question-option"
          // onClick={handleClick}
          key={options.id}
        >
          Crimson
        </button>
        <button
          className="question-option"
          // onClick={handleClick}
          key={options.id}
        >
          Brown
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Questions;
