import React from 'react';
import { nanoid } from 'nanoid';
const Questions = ({ question, options }) => {
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
        {options.map((option) => {
          return option.map((item) => {
            // console.log(item);
            return (
              <button className="question-option" key={nanoid()}>
                {item}
              </button>
            );
          });
        })}
      </div>
      <hr />
    </div>
  );
};

export default Questions;
