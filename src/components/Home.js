import React from "react";

export default () => {
  return (
    <div className="login-form">
      <form>
        <input placeholder="Your email address" type="email" />
        <input placeholder="Your password" type="password" />
        <button>login</button>
      </form>
    </div>
  );
};
