import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCatFact = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://catfact.ninja/fact");

      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }

      const result = await response.json();

      console.log(result.fact);
      setFact(result.fact);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  if (isLoading) {
    return <>Loading ...</>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Cat Fact Generator</h1>
        <p>{fact}</p>
      </header>
    </div>
  );
}

export default App;
