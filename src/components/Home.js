import React, { memo } from "react";

export default memo(() => {
  console.log("render");
  return (
    <div className="login-form">
      <form className="panel">
        <input placeholder="Your email address" type="email" />
        <input placeholder="Your password" type="password" />
        <button>login</button>
      </form>
    </div>
  );
});
