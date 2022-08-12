import "./App.css";
import Button from "./components/button/button";
import useFetch from "./api/useFetch";

function App() {
  const { data, isLoading, error } = useFetch("https://catfact.ninja/fact");

  if (error) {
    return (
      <div>
        <p data-testid="error-page">{error}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Random Cat Fact Generator</h1>
        <p data-testid="loading">{isLoading && "Loading..."}</p>
        <p data-testid="data">{data && data.fact}</p>
        <Button label="refresh" />
      </header>
    </div>
  );
}

export default App;
