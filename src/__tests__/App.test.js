import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import renderer from "react-test-renderer";

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});

it("should show loading", () => {
  render(<App />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

it("should update isClicked state when button is clicked", () => {
  const setIsClicked = jest.fn();
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementationOnce((isClicked) => [isClicked, setIsClicked]);
  render(<App onClick={handleClick} />);

  fireEvent.click(screen.getByText("refresh"));
  expect(setIsClicked).toHaveBeenCalled();
});
