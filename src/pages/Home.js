import { Navigate } from "react-router-dom";
import Button from "../components/button/button";
import Card from "../components/card/card";
import catImage from "../images/cat.png";

export default function Home({ props, onClick }) {
  const { data, isLoading, error } = props;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Random Cat Fact Generator</h1>
        {isLoading && <p data-testid="loading">Loading...</p>}
        <div className="container">
          <img
            className="cat-image"
            src={catImage}
            alt="a cat raising its paw up"
          ></img>
          <Card data={!isLoading && data.fact} />
        </div>
        <Button label="refresh" onClick={onClick} />
      </header>
    </div>
  );
}
