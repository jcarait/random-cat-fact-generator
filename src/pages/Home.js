import BeatLoader from "react-spinners/BeatLoader";

import Button from "../components/button/Button";
import Card from "../components/card/Card";
import Count from "../components/count/Count";
import catImage from "../images/cat.png";

export default function Home({ props, onClick }) {
  const { isLoading, data, count, error } = props;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Random Cat Fact Generator</h1>
      </header>
      <div className="container">
        <div className="container--cat-with-count">
          <img
            className="cat-image"
            src={catImage}
            alt="a cat raising its paw up"
          ></img>
          <Count value={count} />
        </div>
        {isLoading && (
          <p data-testid="loading">
            <BeatLoader loading={isLoading} size={20} />
          </p>
        )}
        {!isLoading && data && <Card data={data.fact} />}
        {error && !data && <Card data={`Something went wrong... ${error}`} />}
      </div>
      <div className="container">
        <Button label="New cat fact" onClick={onClick} />
      </div>
    </div>
  );
}
