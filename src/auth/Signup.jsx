import "../App.css";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { Navigate, Link } from "react-router-dom";
import React from "react";

function Signup() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setNavigate(true);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
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
