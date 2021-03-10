import logo from "./logo.svg";
import "./App.css";
import Weather from "./weather.js";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather city="London" />
    </div>
  );
}

export default App;
