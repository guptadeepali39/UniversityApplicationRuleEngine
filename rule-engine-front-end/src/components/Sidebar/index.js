import React, { useEffect, useState } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  ApplicationRoute,
} from "./sidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  var [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // window.addEventListener("scroll", changeNav);
    isSignedIn = localStorage.getItem("user")
      ? setIsSignedIn(true)
      : setIsSignedIn(false);
  }, []);

  const logoutCall = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="howItWorks" onClick={toggle}>
            How it works
          </SidebarLink>
          <SidebarLink to="team" onClick={toggle}>
            Team
          </SidebarLink>
          {isSignedIn ? (
            <ApplicationRoute to="/application">Application</ApplicationRoute>
          ) : (
            ""
          )}
        </SidebarMenu>
        {isSignedIn ? (
          <SideBtnWrap>
            <SidebarRoute onClick={logoutCall}>Logout</SidebarRoute>
          </SideBtnWrap>
        ) : (
          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideBtnWrap>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
