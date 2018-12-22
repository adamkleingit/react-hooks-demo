import React from "react";

const Home = () => {
  return (
    <div className="login-form">
      <form className="panel">
        <input placeholder="Your email address" type="email" />
        <input placeholder="Your password" type="password" />
        <button>login</button>
      </form>
    </div>
  );
};
export default Home;
