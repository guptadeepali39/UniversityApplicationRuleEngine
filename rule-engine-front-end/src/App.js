import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SignInPage />} exact />
        <Route path="/" component={Home} exact />
        <Route path="/" component={Home} exact />
      </Routes>
    </Router>
  );
}

export default App;
