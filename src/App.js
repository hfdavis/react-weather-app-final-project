import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
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
