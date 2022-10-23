import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage";
import Info from "../components/Info";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/data";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const signedIn = () => {
    alert("User not found.");
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Homepage />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Team />
      {/* <Info {...homeObjThree} /> */}
      <Footer />
    </>
  );
};

export default Home;
