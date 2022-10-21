import './App.css';
import React, { useState } from 'react';

import yellowBlob from './assets/yellowBlob.svg';
import blueBlob from './assets/blueBlob.svg';
import { IoRocketOutline } from 'react-icons/io5';

import Questions from './components/Questions';
import Result from './components/Result';
import Sandbox from './components/Sandbox';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [startQuiz, setStartQuiz] = useState(false);

  const handleClick = () => {
    setStartQuiz((prevState) => !prevState);
    console.log('Quiz started!');
  };
  // fetch(
  //   'https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple'
  // )
  //   .then((response) => response.json())
  //   .then((data) => setQuestions(data));

  // Test Api

  return (
    <div className="App">
      <Sandbox />
      {/* {startQuiz ? (
        <div className="app__question-container">
          <img src={yellowBlob} alt="yellowBlob-img" className="yellowBlob" />
          <div className="question__container">
            <div className="question__section">
              <Questions question="How are you today?" />
              <Questions question="What year did Nigeria gain it independence?" />
              <Questions question="Who was the first woman to drive a car in Nigeria" />
              <Questions question="What lead to the historic protest of Nigerian youth on October 2020?" />
              <Questions question="Who discovered the river Niger?" />
            </div>
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
      )} */}
    </div>
  );
};

export default App;

/* TODO: Fix the overflow on mobile screens and tab, pass the questions as props to the question component, make the app mobile responsive, add timer, add counter before start, display the result on another page, show their answer and the corrected answer  */
