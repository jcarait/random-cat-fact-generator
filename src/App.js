import "./App.css";
import useFetch from "./api/useFetch";

function App() {
  const { data, isLoading, error } = useFetch("https://catfact.ninja/fact");

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Random Cat Fact Generator</h1>
        <p data-testid="cat-fact">{isLoading ? "Loading..." : data.fact}</p>
        <p>{error === true ? error : ""}</p>
      </header>
    </div>
  );
}

export default App;
