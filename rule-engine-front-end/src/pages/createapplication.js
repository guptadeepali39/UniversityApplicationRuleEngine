import React, { useState } from "react";
import CreateApplication from "../components/CreateApplication";
import ScrollToTop from "../services/scrollToTop";

const CreateApplicationPage = () => {
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
      <CreateApplication />
    </>
  );
};

export default CreateApplicationPage;
