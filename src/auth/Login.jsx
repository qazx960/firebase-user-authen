import "../App.css";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import {
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase-config";
// import { useAuthState } from "react-firebase-hooks/auth";

import image from "../glogin.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nav, setNav] = useState(false);
  const [status, setStatus] = useState(false);
  //checks to see if user exists in firebase
  //   const [user, loading] = useAuthState(auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const success = await signInWithEmailAndPassword(auth, email, password);

      //   setEmail("");
      //   setPassword("");
      setNav(true);
      console.log(success);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      setStatus(true);
    }
  };

  const signWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setNav(true);
      console.log(result);

      //check if signed in with Google Email
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  if (nav) {
    return <Navigate to="/main" />;
  }

  if (status) {
    alert("Please check email or password!");
  }

  const logout = async () => {
    try {
      let result = await signOut(auth);

      setEmail("");
      setPassword("");

      console.log(result);
      //   console.log(auth.currentUser.email);
      //   console.log(auth.currentUser.user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="container">
        <form autoComplete="off" onSubmit={handleLogin}>
          <h1>Login</h1>
          <label htmlFor="email">Username</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
          <label htmlFor="loginPass">password</label>
          <input
            id="loginPass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" />
          <img
            src={image}
            onClick={signWithGoogle}
            alt="google"
            className="img"
          />

          <button onClick={logout}>Log out</button>
          <Link to="/">
            <span>Not registed? Signup</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
