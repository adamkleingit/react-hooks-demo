import { get } from "lodash/fp";
import { useEffect } from "react";
import { useActions, useSelector } from "../hooks/redux.hooks";
import * as formActions from "../actions/forms.actions";

export const useFormField = (path, initialValue) => {
  const value = useSelector(state => get(path, state.forms)) || "";
  const [setValue] = useActions(formActions.setValue);
  useEffect(() => {
    setValue(path, initialValue);

    return () => setValue(path, undefined);
  }, []);

  return {
    value,
    onChange: e => setValue(path, e.target.value)
  };
};
