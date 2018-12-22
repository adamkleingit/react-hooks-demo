import React from "react";
import { render } from "react-dom";
import Home from "./components/Home";
import VideoPage from "./components/VideoPage";
import Spinner from "./components/Spinner";
import "./styles.css";

const App = () => {
  return (
    <div>
      <VideoPage />
    </div>
  );
};

render(<App />, document.getElementById("root"));
