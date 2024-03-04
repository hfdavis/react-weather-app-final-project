import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by Holly Davis and is open sourced on{" "}
          <a
            href="https://github.com/hfdavis/react-weather-app-final-project"
            target="blank"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
