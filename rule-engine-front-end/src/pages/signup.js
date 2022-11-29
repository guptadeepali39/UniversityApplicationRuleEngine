import React, { useState } from "react";
import SignUp from "../components/SignUp";
import ScrollToTop from "../services/scrollToTop";

const SignUpPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  // const signedIn = () => {
  //   alert("User not found.");
  // };

  return (
    <>
      <ScrollToTop />
      <SignUp />
    </>
  );
};

export default SignUpPage;
