import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Signup or Login</h1>
      <div id="homepage">
        <Link to="/">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
