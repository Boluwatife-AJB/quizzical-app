import './App.css';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import yellowBlob from './assets/yellowBlob.svg';
import blueBlob from './assets/blueBlob.svg';
import { IoRocketOutline } from 'react-icons/io5';
import Questions from './components/Questions';
import Result from './components/Result';
// import Sandbox from './components/Sandbox';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [startQuiz, setStartQuiz] = useState(false);

  const handleClick = () => {
    setStartQuiz((prevState) => !prevState);
    console.log('Quiz started!');
  };

  useEffect(() => {
    console.log('useEffect Ran!');
    fetch(
      'https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple'
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
    return (question.id = nanoid());
  });

  const shuffleArray = (array) => [array].sort(() => Math.random() - 0.5);

  return (
    <div className="App">
      {/* <Sandbox /> */}
      {startQuiz ? (
        <div className="app__question-container">
          <img src={yellowBlob} alt="yellowBlob-img" className="yellowBlob" />
          <div className="question__container">
            {questions.map((question) => {
              return (
                <div className="question__section" key={nanoid()}>
                  <Questions
                    question={question.question}
                    options={shuffleArray([
                      ...question.incorrect_answers,
                      question.correct_answer,
                    ])}
                  />
                </div>
              );
            })}

            <Result />
          </div>
          <img src={blueBlob} alt="blueBlob-img" className="blueBlob" />
        </div>
      ) : (
        <div className="app__welcomePage-container">
          <img src={yellowBlob} alt="yellowBlob-img" className="yellowBlob" />
          <div className="app__welcomePage">
            <h1>Quizzical App</h1>
            <p>Take a test of 7 question. Test your knowledge capacity.</p>
            <button className="custom__button" onClick={handleClick}>
              Start quiz <IoRocketOutline />
            </button>
          </div>
          <img src={blueBlob} alt="blueBlob-img" className="blueBlob" />
        </div>
      )}
    </div>
  );
};

export default App;

/* TODO: Fix the overflow on mobile screens and tab, pass the questions as props to the question component, make the app mobile responsive, add timer, add counter before start, display the result on another page, show their answer and the corrected answer  */
