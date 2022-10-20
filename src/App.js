import './App.css';
import WelcomePage from './components/WelcomePage';
import yellowBlob from './assets/yellowBlob.svg';
import blueBlob from './assets/blueBlob.svg';

import { fetchQuizQuestions } from './api';
function App() {
  const difficulty = {
    easy: 'easy',
    medium: 'medium',
    hard: 'hard',
  };
  // console.log(difficulty.medium);
  console.log(fetchQuizQuestions(7, difficulty.easy));
  const startTrivial = async () => {};
  return (
    <div className="App">
      <img src={yellowBlob} alt="yellowBlob-img" className="yellowBlob" />
      <WelcomePage />
      {/* <h1>{question}</h1> */}
      <img src={blueBlob} alt="blueBlob-img" className="blueBlob" />
    </div>
  );
}

export default App;
