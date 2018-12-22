import React, { useState, useMemo } from "react";

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmailValid(email) {
  console.count("compute");
  return !email.length || re.test(String(email).toLowerCase());
}

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isValid = useMemo(() => isEmailValid(email), [email]);

  return (
    <div className="login-form">
      <form className="panel">
        <input
          className={isValid ? "valid" : "invalid"}
          placeholder="Your email address"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          placeholder="Your password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>login</button>
      </form>
    </div>
  );
};
export default Home;
