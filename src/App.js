import './App.css';
import WelcomePage from './components/WelcomePage';
import yellowBlob from './assets/yellowBlob.svg';
import blueBlob from './assets/blueBlob.svg';
function App() {
  const getTrivialApi = async function () {
    const res = await fetch('https://opentdb.com/api.php?amount=7&category=9');

    const data = await res.json();

    const values = data.results;

    const questions = values.map((value) => value.question);

    console.log(questions);
  };

  getTrivialApi();
  return (
    <div className="App">
      <img src={yellowBlob} alt="yellowBlob-img" className="yellowBlob" />
      <WelcomePage />
      <img src={blueBlob} alt="blueBlob-img" className="blueBlob" />
    </div>
  );
}

export default App;
