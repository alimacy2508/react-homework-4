import "./App.css";
import SearchEngine from "./SearchEngine.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Weather App</h1>
        <SearchEngine />
      </header>
      <footer>
        open sourced on{" "}
        <a
          href="https://github.com/alimacy2508/react-homework-4"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and{" "}
        <a
          href="https://basicweatherreactapp.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
