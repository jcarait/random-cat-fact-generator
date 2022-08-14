import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Home from "../pages/Home";

describe("<HomePage />", () => {
  it("renders correctly", () => {
    //Props for home component
    const data = {
      fact: "Random cat fact",
    };
    const isLoading = false;
    const error = "";

    const tree = renderer
      .create(<Home props={{ data, isLoading, error }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should show loading when no api data is available", () => {
    const data = {};
    const isLoading = true;
    const error = "";

    render(<Home props={{ data, isLoading, error }} />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
