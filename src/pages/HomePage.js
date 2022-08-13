import { Navigate } from "react-router-dom";
import Button from "../components/button/button";
import Card from "../components/card/card";

export default function Home({ props, onClick }) {
  const { data, isLoading, error } = props;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Random Cat Fact Generator</h1>
        <p data-testid="loading">{isLoading && "Loading..."}</p>
        <Card data={!isLoading && data.fact} />
        <Button label="refresh" onClick={onClick} />
      </header>
      {error && <Navigate to="/404" replace={true} />}
    </div>
  );
}
