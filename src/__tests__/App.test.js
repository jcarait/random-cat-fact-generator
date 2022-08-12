import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../App";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

afterEach(() => {
  cleanup();
});

it("renders app with div element without crashing", () => {
  const div = document.createElement("div");
  render(<App />, div);
});

it("should show loading", () => {
  render(<App />);
  expect(screen.getByTestId("loading")).toHaveTextContent("Loading...");
});

it("should display data", async () => {
  render(<App />);

  expect(screen.getByTestId("loading")).toHaveTextContent("Loading...");
  (await waitFor(() => expect(screen.getByTestId("data")))).toBeInTheDocument();
  (await waitFor(() => expect(screen.queryByTestId("Loading...")))).toBeNull();
});

it("returns error message on fail", async () => {
  function fetchMock(url) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          status: 404,
          ok: false,
        });
      }, 300)
    );
  }

  jest.spyOn(global, "fetch").mockImplementation(fetchMock);

  render(<App />);

  expect(screen.getByTestId("loading")).toHaveTextContent("Loading...");
  await act(async () => await sleep(500));
  expect(screen.getByTestId("error-page")).toBeInTheDocument();
});
