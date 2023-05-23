import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase-config";

export default function Welcome() {
  const [logStatus, setLogStatus] = useState(true);
  const [navigate, setNavigate] = useState(false);

  const logout = async () => {
    try {
      let result = await signOut(auth);
      setLogStatus(false);
      console.log(result);
      setNavigate(true);
      alert("Log out success! Please log in again");
    } catch (err) {
      console.log(err);
    }
  };

  if (navigate) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {logStatus ? <h1>Logged in</h1> : <h1>Logged out</h1>}
      <button onClick={logout} value={logStatus}>
        Log Out
      </button>
    </>
  );
}
