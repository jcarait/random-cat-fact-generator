import { render, screen, mount } from "@testing-library/react";
import Count from "../components/count/Count";

describe("<Count />", () => {
  it("should render correctly", () => {
    render(<Count value={1} />);
    expect(screen.getByTestId("count")).toHaveTextContent(1);
  });
});
