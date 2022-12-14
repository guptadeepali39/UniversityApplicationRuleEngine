import React, { useState } from "react";
import SignIn from "../components/SignIn";
import ScrollToTop from "../services/scrollToTop";

const SignInPage = () => {
  // const UserContext = createContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const signedIn = () => {
    alert("User not found.");
  };

  return (
    <>
      <ScrollToTop />
      <SignIn />
    </>
  );
};

export default SignInPage;
