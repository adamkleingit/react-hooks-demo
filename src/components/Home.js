import React, { useEffect } from "react";
import { useActions, useSelector } from "../hooks/redux.hooks";
import * as formsActions from "../actions/forms.actions";
import { useFormField } from "../hooks/forms.hooks";

export default () => {
  const emailField = useFormField("user.email", "adam@500tech.com");
  const passwordField = useFormField("user.password");

  return (
    <div className="login-form">
      <form>
        <input placeholder="Your email address" type="email" {...emailField} />
        <input placeholder="Your password" type="password" {...passwordField} />
        <button>login</button>
      </form>
    </div>
  );
};
