import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/HomePage";
import useFetch from "./api/useFetch";

function App() {
  const [isClicked, setIsClicked] = useState(true);
  const { data, isLoading, error } = useFetch(
    "https://catfact.ninja/fact",
    isClicked
  );

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home props={{ data, isLoading, error }} onClick={handleClick} />
          }
        ></Route>
        <Route></Route>
        <Route
          exact
          path="/404"
          element={<PageNotFound errorMessage={error} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
