import React from 'react';

const Questions = ({ question, answer, callback, userAnswer }) => {
  return (
    <div className="app__questions">
      <p className="app__question">{question}</p>
      <div className="app__question-options">
        <button className="question-option">Blue</button>
        <button className="question-option">Green</button>
        <button className="question-option">Crimson</button>
        <button className="question-option">Brown</button>
      </div>
      <hr />
    </div>
  );
};

export default Questions;
