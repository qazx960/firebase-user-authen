import "../App.css";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { Navigate, Link } from "react-router-dom";
import React from "react";

export const Nav = () => {
  return <div>App</div>;
};

function Signup() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      let success = await createUserWithEmailAndPassword(auth, user, password);

      //check if signed in with user
      // console.log(auth.currentUser.user);
      console.log(success);
      setUser("");
      setPassword("");
      setMatchPassword("");
      setNavigate(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (navigate) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <form onSubmit={handleSumbit}>
        <h1>Sign up</h1>

        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={user}
          type="email"
          onChange={(e) => setUser(e.target.value)}
          autoComplete="off"
          placeholder="email@local.com"
        />
        <label htmlFor="password">password</label>

        <input
          id="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
          placeholder="6 characters +"
        />

        <input
          value={matchPassword}
          type="password"
          onChange={(e) => setMatchPassword(e.target.value)}
        />

        <input type="submit" />
        <Link to="/login">
          <span>Already a user? Login</span>
        </Link>
      </form>
    </div>
  );
}

export default Signup;
