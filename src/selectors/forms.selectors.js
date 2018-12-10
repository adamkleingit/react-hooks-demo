import { get } from "lodash/fp";

export const selectFormValue = (state, path) => get(path, state.forms);
