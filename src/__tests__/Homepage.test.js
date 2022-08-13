import renderer from "react-test-renderer";
import Home from "../pages/Home";

describe("<HomePage />", () => {
  it("renders correctly", () => {
    const data = {
      fact: "Random cat fact",
    };
    const loading = false;
    const error = "";

    const tree = renderer
      .create(<Home props={{ data, loading, error }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
