import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import useFetch from "./api/useFetch";

function App() {
  const [isClicked, setIsClicked] = useState(true);
  const { isLoading, data, error } = useFetch(
    "https://catfact.ninja/fact",
    isClicked
  );

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              props={{ data, isLoading, error }}
              onClick={() => setIsClicked(!isClicked)}
            />
          }
        ></Route>
        <Route></Route>
        <Route
          exact
          path="/404"
          element={<PageNotFound errorMessage={error} />}
        ></Route>
        <Route exact path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
