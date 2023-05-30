import React from "react";
import { Link } from "react-router-dom";
import Signup from "./auth/Signup";

export default function ErrorPage() {
  return (
    <div>
      <h1>Page not found Error 404</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
