import { set } from "lodash/fp";
import { SET_VALUE } from "../actions/forms.actions";

const formsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_VALUE:
      return set(action.payload.path, action.payload.value, state);
  }
  return state;
};

export default formsReducer;
