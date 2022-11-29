import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
  ApplicationBtnLink,
  LogoutBtn,
} from "./navbarElements";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  var [isSignedIn, setIsSignedIn] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    isSignedIn = localStorage.getItem("user")
      ? setIsSignedIn(true)
      : setIsSignedIn(false);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const logoutCall = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Rule Engine
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active">
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="howItWorks"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active">
                  How it works
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="team"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active">
                  Team
                </NavLinks>
              </NavItem>
              <NavItem>
                {isSignedIn ? (
                  <ApplicationBtnLink to="/application">
                    Application
                  </ApplicationBtnLink>
                ) : (
                  ""
                )}
              </NavItem>
            </NavMenu>
            <NavBtn>
              {isSignedIn ? (
                <LogoutBtn onClick={logoutCall}>Logout</LogoutBtn>
              ) : (
                <NavBtnLink to="/signin">Sign in</NavBtnLink>
              )}
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
