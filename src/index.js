import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
// import { Provider } from './hooks/redux.hooks';
import store from "./store";
import Home from "./components/Home";
import Toggle from "./components/Toggle";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
