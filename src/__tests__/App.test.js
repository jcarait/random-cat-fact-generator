import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import renderer from "react-test-renderer";

describe("Testing for snapshot and changes to state", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should update isClicked state when button is clicked", () => {
    const setIsClicked = jest.fn();
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementationOnce((isClicked) => [
      isClicked,
      setIsClicked,
    ]);
    render(<App onClick={handleClick} />);

    fireEvent.click(screen.getByText("New cat fact"));
    expect(setIsClicked).toHaveBeenCalled();
  });
});
