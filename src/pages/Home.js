import Button from "../components/button/Button";
import Card from "../components/card/Card";
import catImage from "../images/cat.png";
import BeatLoader from "react-spinners/BeatLoader";

export default function Home({ props, onClick }) {
  const { isLoading, data, error } = props;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Random Cat Fact Generator</h1>
      </header>
      <div className="container">
        <img
          className="cat-image"
          src={catImage}
          alt="a cat raising its paw up"
        ></img>
        {isLoading && (
          <p data-testid="loading">
            <BeatLoader loading={isLoading} size={20} />
          </p>
        )}
        {!isLoading && data && <Card data={data.fact} />}
        {error && !data && <Card data={`Something went wrong... ${error}`} />}
      </div>
      <div className="container">
        <Button label="refresh" onClick={onClick} />
      </div>
    </div>
  );
}
