import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLink2,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            {/* <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems> */}
            {/* <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
            </FooterLinkItems> */}
            <FooterLinkItems>
              <FooterLinkTitle>Team</FooterLinkTitle>
              <FooterLink2
                target="_blank"
                href="https://www.linkedin.com/in/mridulkhanna/">
                Mridul Khanna
              </FooterLink2>
              <FooterLink2
                target="_blank"
                href="https://www.linkedin.com/in/deepali-gupta22/">
                Deepali Gupta
              </FooterLink2>
              <FooterLink2
                target="_blank"
                href="https://www.linkedin.com/in/riddhishrdesai/">
                Riddhish Desai
              </FooterLink2>
              <FooterLink2
                target="_blank"
                href="https://www.linkedin.com/in/sai-aparna-chandrika-nakkella/">
                Sai Aparna Chandrika Nakkella
              </FooterLink2>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Other Links</FooterLinkTitle>
              <FooterLink2
                target="_blank"
                href="https://github.com/guptadeepali39/UniversityApplicationRuleEngine">
                Github
              </FooterLink2>
              {/* <FooterLink2 target="_blank" href="">
                Weekly Reports
              </FooterLink2>
              <FooterLink2 target="_blank" href="">
                Feedback Document
              </FooterLink2>
              <FooterLink2 target="_blank" href="">
                Moodle
              </FooterLink2>
              <FooterLink2 target="_blank" href="">
                Architecture
              </FooterLink2> */}
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Rule Engine
            </SocialLogo>
            <WebsiteRights>
              Rule Engine &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://github.com/guptadeepali39/UniversityApplicationRuleEngine"
                target="_blank"
                aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              {/* <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com/"
                target="_blank"
                aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
