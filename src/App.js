import "./App.css";
import "./useFetch";
import { useFetch } from "./useFetch";

function App() {
  const { data, isLoading, error } = useFetch();

  console.log(isLoading, data, error);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Cat Fact Generator</h1>
        <p data-testid="cat-fact">{isLoading ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
