import { render, screen, act } from "@testing-library/react";
import App from "../App";

test("renders app with div element without crashing", () => {
  const div = document.createElement("div");
  render(<App />, div);
});
