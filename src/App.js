import './App.css';
import React, { useState } from 'react';

import yellowBlob from './assets/yellowBlob.svg';
import blueBlob from './assets/blueBlob.svg';
import { IoRocketOutline } from 'react-icons/io5';

import { fetchQuizQuestions } from './api';
import Questions from './components/Questions';
import Result from './components/Result';
const App = () => {
  const [questions, setQuestions] = useState([]);
  const [startQuiz, setStartQuiz] = useState(false);
  const difficulty = {
    easy: 'easy',
    medium: 'medium',
    hard: 'hard',
  };

  const handleClick = () => {
    setStartQuiz((prevState) => !prevState);
    console.log('Quiz started!');
  };

  console.log(fetchQuizQuestions(7, difficulty.easy));
  const startTrivial = async () => {};
  return (
    <div className="App">
      {/* WELCOME PAGE */}

      {startQuiz ? (
        <div className="app__question-container">
          <img src={yellowBlob} alt="yellowBlob-img" className="yellowBlob" />
          <div className="question__container">
            <Questions question="How are you today?" />
            <Questions question="What year did Nigeria gain it independence?" />
            <Questions question="How are you today?" />
            <Questions question="How are you today?" />
            <Questions question="How are you today?" />
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
