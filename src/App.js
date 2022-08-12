import { useState } from "react";
import "./App.css";
import Button from "./components/button/button";
import useFetch from "./api/useFetch";

function App() {
  const [isClicked, setIsClicked] = useState(true);

  const { data, isLoading, error } = useFetch(
    "https://catfact.ninja/fact",
    isClicked
  );

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
        <p data-testid="data">{!isLoading && data.fact}</p>
        <Button label="refresh" onClick={() => setIsClicked(!isClicked)} />
      </header>
    </div>
  );
}

export default App;
