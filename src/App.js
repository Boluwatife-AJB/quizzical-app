import './App.css';
import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import yellowBlob from './assets/yellowBlob.svg';
import blueBlob from './assets/blueBlob.svg';
import { IoRocketOutline } from 'react-icons/io5';

import { fetchQuizQuestions } from './api';
import Questions from './components/Questions';
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
      <img src={yellowBlob} alt="yellowBlob-img" className="yellowBlob" />
      {/* WELCOME PAGE */}

      {startQuiz ? (
        <Questions question="How are you today?" />
      ) : (
        <div className="app__welcomePage">
          <h1>Quizzical App</h1>
          <p>Take a test of 7 question. Test your knowledge capacity.</p>
          <button className="custom__button" onClick={handleClick}>
            Start quiz <IoRocketOutline />
          </button>
        </div>
      )}

      <img src={blueBlob} alt="blueBlob-img" className="blueBlob" />
    </div>
  );
};

export default App;
