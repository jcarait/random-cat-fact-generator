import { render, screen, renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";
import useFetch from "../useFetch";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let container = null;

beforeEach(() => {
  // set up a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("returns data on success", async () => {
  function fetchMock(url) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          status: 200,
          ok: true,
          json: () =>
            Promise.resolve({
              data: "data from api",
            }),
        });
      }, 300)
    );
  }

  jest.spyOn(global, "fetch").mockImplementation(fetchMock);

  act(() => {
    render(<TestComponent url="https://catfact.ninja/fact" />, container);
  });

  expect(screen.getByTestId("loading")).toHaveTextContent("loading");
  await act(async () => await sleep(500));
  expect(screen.getByTestId("data")).toHaveTextContent("data from api");
});

it("returns error on fail", async () => {
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

  act(() => {
    render(<TestComponent url="https://catfact.ninja/fact" />, container);
  });

  expect(screen.getByTestId("loading")).toHaveTextContent("loading");
  await act(async () => await sleep(500));
  expect(screen.getByTestId("error")).toHaveTextContent("error");
  screen.debug();
});

function TestComponent({ url }) {
  const { data, isLoading, error } = useFetch(url);

  if (isLoading) {
    return <p data-testid="loading">loading</p>;
  }

  return (
    <div>
      <p data-testid="data">{JSON.stringify(data?.data)}</p>
      <p data-testid="error">{error ? "error" : ""}</p>
    </div>
  );
}
