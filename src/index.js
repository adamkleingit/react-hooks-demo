import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import Spinner from "./components/Spinner";
import "./styles.css";

const People = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/People")), 2000);
  });
});

const Pages = {
  home: Home,
  people: People
};
const App = () => {
  const [page, setPage] = useState("home");
  const Page = Pages[page];
  const [count, setCount] = useState(1);
  const test = () => setCount(count + 1);

  return (
    <Provider store={store}>
      <nav>
        <a onClick={test}>Test</a>
        <a onClick={() => setPage("home")}>Login</a>
        <a onClick={() => setPage("people")}>People</a>
      </nav>
      <Suspense fallback={<Spinner />}>{<Page />}</Suspense>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
