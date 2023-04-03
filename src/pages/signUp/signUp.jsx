import React, { useState } from "react";
import { useSignUp } from "../../hooks/useSignUp";
import Nav from "./../../components/nav/nav";
import "./signUp.css";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signUp, error, loading } = useSignUp();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      await signUp(email, password, displayName);
      if (!error) {
        setDisplayName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        console.log(error);
      }
    } else {
      console.log("Passwords do not match.... ", password, confirmPassword);
    }
  };
  return (
    <div className="login">
      <Nav />
      <form onSubmit={handleSignUp}>
        <div className="login-box">
          <div className="user-box">
            <input
              type="text"
              onChange={(e) => {
                setDisplayName(e.target.value);
              }}
              value={displayName}
              placeholder="Enter UserName...."
            />
            <label>Username</label>
          </div>

          <div className="user-box">
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="Enter Email...."
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              placeholder="Enter Password...."
            />
            <label>Password</label>
          </div>

          <div className="user-box">
            <input
              type="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              value={confirmPassword}
              placeholder="Confirm Password...."
            />
            <label>Confirm Password</label>
          </div>

          <button type="submit">{loading ? "Loading..." : "Sign Up"}</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
