import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import "./login.css";
import Nav from "./../../components/nav/nav";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div className="login">
      <Nav />
      <form onSubmit={handleLogin}>
        <div className="login-box">
          <div className="user-box">
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Email...."
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter Password...."
            />
            <label>Password</label>
          </div>
          {error ? <p className="error">{error}</p> : ""}
          <button type="submit">{loading ? "Loading..." : "Login"}</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
