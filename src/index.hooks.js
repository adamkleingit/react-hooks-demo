import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import Home from "./components/Home";
import Spinner from "./components/Spinner";
import "./styles.css";

const VideoPage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/VideoPage")), 2000);
  });
});

const App = () => {
  const [isHome, setIsHome] = useState(true);
  return (
    <div>
      <nav>
        <span onClick={() => setIsHome(true)}>Home</span>
        <span onClick={() => setIsHome(false)}>Video</span>
      </nav>

      <Suspense fallback={<Spinner />}>
        {isHome ? <Home /> : <VideoPage />}
      </Suspense>
    </div>
  );
};

render(<App />, document.getElementById("root"));
