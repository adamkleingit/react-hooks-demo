import React from "react";
import { useFormField } from "../hooks/forms.hooks";

export default () => {
  const emailField = useFormField("user.email", "adam@500tech.com");
  const passwordField = useFormField("user.password");

  return (
    <div className="login-form">
      <form>
        <input {...emailField} placeholder="Your email address" type="email" />
        <input {...passwordField} placeholder="Your password" type="password" />
        <button>login</button>
      </form>
    </div>
  );
};
