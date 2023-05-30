import "../App.css";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
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

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setNav(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setStatus(true);
      });
  };

  const signWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setNav(true);

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

  if (nav) {
    return <Navigate to="/main" />;
  }

  if (status) {
    alert("Please check email or password!");
  }

  return (
    <div>
      <div className="container">
        <form autoComplete="off" onSubmit={handleLogin}>
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
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
          <input
            type="submit"
            className="submit"
            disabled={!email || !password}
          />
          <img
            src={image}
            onClick={signWithGoogle}
            alt="google"
            className="img"
          />

          <Link to="/">
            <span>Don't have an account? Signup</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
