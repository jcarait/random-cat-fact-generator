import { render, screen, renderHook, cleanup } from "@testing-library/react";
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
  cleanup();
});

// const mockUseFetchComponent = jest.fn();
// jest.mock("../useFetch.js", () => (url, click) => {
//   mockUseFetchComponent(url, click);
//   return <mockUseFetchComponent />;
// });

// test("If ParentComponent has passed url prop, ChildComponent is called with url prop", () => {
//   render(<TestComponent url="https://mockurl.com" />);
//   expect(mockUseFetchComponent).toHaveBeenCalledWith(
//     expect.stringContaining("https://mockurl.com")
//   );
// });

it("returns data and renders data on success", async () => {
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

  const testFetch = jest.fn(fetchMock("https://mockurl.com"));

  act(() => {
    render(<TestComponent url="https://mockurl.com" />, container);
  });

  expect(screen.getByTestId("loading")).toHaveTextContent("Loading...");
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
    render(<TestComponent url="https://mockurl.com" />, container);
  });

  expect(screen.getByTestId("loading")).toHaveTextContent("Loading...");
  await act(async () => await sleep(500));
  expect(screen.getByTestId("error-page")).toBeInTheDocument("error");
});

function TestComponent({ url }) {
  const { data, isLoading, error } = useFetch(url);

  if (isLoading) {
    return <p data-testid="loading">Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p data-testid="error-page">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <p data-testid="data">{JSON.stringify(data?.data)}</p>
    </div>
  );
}
