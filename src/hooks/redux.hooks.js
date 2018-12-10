import React, { useState, useContext, useEffect } from "react";

const ReactReduxContext = React.createContext(null);

export const Provider = ({ store, children }) => (
  <ReactReduxContext.Provider value={store}>
    {children}
  </ReactReduxContext.Provider>
);

export const useStore = () => {
  return useContext(ReactReduxContext);
};

export const useActions = (...actions) => {
  const store = useStore();

  return actions.map(action => (...args) => store.dispatch(action(...args)));
};

const firstTime = Symbol("firstTime");

export const useSelector = (selectorFn, ...args) => {
  const store = useStore();
  let [curResult, setCurResult] = useState(firstTime);

  if (curResult === firstTime) {
    curResult = selectorFn(store.getState(), ...args);
  }

  useEffect(() => {
    return store.subscribe(() => {
      const nextResult = selectorFn(store.getState(), ...args);

      if (nextResult !== curResult) {
        curResult = nextResult; // for this function closure
        setCurResult(nextResult); // for the component
      }
    });
  }, []);

  return curResult;
};
