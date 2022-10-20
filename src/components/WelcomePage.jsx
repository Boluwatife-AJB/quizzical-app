import React from 'react';
import { IoRocketOutline } from 'react-icons/io5';

const WelcomePage = () => {
  return (
    <div className="app__welcomePage">
      <h1>Quizzical App</h1>
      <p>Take a test of 7 question. Test your knowledge capacity.</p>
      <button className="custom__button">
        Start quiz <IoRocketOutline />
      </button>
    </div>
  );
};

export default WelcomePage;
