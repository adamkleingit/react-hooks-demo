import React, { useState } from "react";
import { render } from "react-dom";
import { Provider } from "./hooks/redux.hooks";
import store from "./store";
import Home from "./components/Home";
import Toggle, { useToggleState } from "./components/Toggle";
import "./styles.css";

const App = () => {
  const toggleState = useToggleState(true);

  return (
    <Provider store={store}>
      <Toggle title={toggleState.isOpen ? "-" : "+"} {...toggleState}>
        <Home />
      </Toggle>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
