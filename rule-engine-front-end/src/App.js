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



// import {GoogleLoginButton} from 'react-social-login-buttons';
// import {LoginSocialGoogle} from 'reactjs-social-login';

{/* <LoginSocialGoogle
      client_id={'574239648970-70jrb5es9jna7l9c08a19nh7c33moudh.apps.googleusercontent.com'}
      scope='openid profile email'
      discoveryDocs='claims_supported'
      access_type='offline'
      onResolve={({
        provider, data
      })=>{
        console.log(provider, data);
      }}
      onReject={(err)=>{
        console.log(err)
      }}>
        <GoogleLoginButton />
      </LoginSocialGoogle> */
      /* <Home /> */}