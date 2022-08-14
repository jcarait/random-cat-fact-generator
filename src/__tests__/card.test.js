import { render, screen, mount } from "@testing-library/react";
import Card from "../components/card/Card";

describe("<Card />", () => {
  it("should render correctly", () => {
    render(<Card data="Random cat fact" />);
    expect(screen.getByTestId("card")).toHaveTextContent("Random cat fact");
  });

  it("should have <div> with className of card", () => {
    render(<Card data="Random cat fact" />);
    expect(screen.getByTestId("card")).toHaveClass("card");
  });
  it("should not render if no data", () => {
    const data = null;
    render(<Card data={data} />);
    expect(screen.queryAllByTestId("card")).toHaveLength(0);
  });
});
