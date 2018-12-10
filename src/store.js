import { createStore, combineReducers } from "redux";
import formsReducer from "./reducers/forms.reducer";

const store = createStore(
  combineReducers({
    forms: formsReducer
  }),
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
