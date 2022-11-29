import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import CreateApplicationPage from "./pages/createapplication.js";

function App() {
  var isSignedIn = false;
  useEffect(() => {
    isSignedIn = localStorage.getItem("user") ? true : false;
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SignInPage />} exact />
        <Route path="/signup" element={<SignUpPage />} exact />
        <Route path="/application" element={<CreateApplicationPage />} exact />
        {/* <Route path="/" component={Home} exact />
        <Route path="/" component={Home} exact /> */}
      </Routes>
    </Router>
  );
}

export default App;
