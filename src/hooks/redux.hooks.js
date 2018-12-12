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

export const useSelector = selectorFn => {
  const store = useStore();
  let [curResult, setCurResult] = useState(() => selectorFn(store.getState()));

  useEffect(() => {
    return store.subscribe(() => {
      const nextResult = selectorFn(store.getState());

      if (nextResult !== curResult) {
        curResult = nextResult; // for this function closure
        setCurResult(nextResult); // for the component
      }
    });
  }, []);

  return curResult;
};
