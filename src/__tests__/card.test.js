import { render, screen, mount } from "@testing-library/react";
import Card from "../components/card/card";

describe("<Card />", () => {
  it("should render correctly", () => {
    render(<Card data="Random cat fact" />);
    expect(screen.getByTestId("card")).toHaveTextContent("Random cat fact");
  });

  it("should have <div> with card class", () => {
    render(<Card data="Random cat fact" />);
    expect(screen.getByTestId("card")).toHaveClass("card");
  });
});
