import React from 'react';

const Questions = ({ question, answer, callback, userAnswer }) => {
  return (
    <div className="app__questions">
      <p className="app__question">{question}</p>
      {/* <p dangerouslySetInnerHTML={{ question }} /> */}
    </div>
  );
};

export default Questions;
