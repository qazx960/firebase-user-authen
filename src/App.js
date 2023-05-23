import React from "react";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import ErrorPage from "./ErrorPage";
import Welcome from "./Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Welcome />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
