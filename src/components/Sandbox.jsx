import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

const Sandbox = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(
      'https://opentdb.com/api.php?amount=4&category=18&difficulty=easy&type=multiple'
    )
      .then((res) => res.json())
      .then((data1) => {
        console.log(data1.results);
        setQuestions(data1.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  questions.map((question) => {
    question.id = nanoid();
  });

  const shuffleArray = (array) => [array].sort(() => Math.random() - 0.5);

  return (
    <div>
      {questions.map((question) => {
        return (
          <div className="question__card" key={question.id}>
            <h3>{question.question}</h3>
            <p>
              {shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer,
              ])}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Sandbox;
