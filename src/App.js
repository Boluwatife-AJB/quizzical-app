import './App.css';
import WelcomePage from './components/WelcomePage';
import yellowBlob from './assets/yellowBlob.svg';
import blueBlob from './assets/blueBlob.svg';
function App() {
  return (
    <div className="App">
      <img src={yellowBlob} alt="yellowBlob-img" className="yellowBlob" />
      <WelcomePage />
      <img src={blueBlob} alt="blueBlob-img" className="blueBlob" />
    </div>
  );
}

export default App;
