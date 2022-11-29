import React, { useState, useEffect } from "react";
import {
  HomepageContainer,
  HomepageBg,
  VideoBg,
  HomepageContent,
  HomepageBtnWrapper,
  HomepageH1,
  HomepageP,
  ArrowForward,
  ArrowRight,
} from "./homepageElements";
import { Button } from "../buttonElements";
import Video from "../../videos/video1.mp4";

const Homepage = () => {
  const [hover, setHover] = useState(false);

  var [isSignedIn, setIsSignedIn] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  useEffect(() => {
    // window.addEventListener("scroll", changeNav);
    isSignedIn = localStorage.getItem("user")
      ? setIsSignedIn(true)
      : setIsSignedIn(false);
  }, []);

  return (
    <HomepageContainer id="home">
      <HomepageBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HomepageBg>
      <HomepageContent>
        <HomepageH1> Live your university dream today! </HomepageH1>
        {isSignedIn ? (
          <HomepageP>
            Go to application page and check your eligibility instantly.
          </HomepageP>
        ) : (
          <>
            <HomepageP>
              Sign up with your details and check your eligibility instantly.
            </HomepageP>
            <HomepageBtnWrapper>
              <Button
                to="/signin"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                duration={500}
                exact="true"
                offset={-80}>
                Get started {hover ? <ArrowRight /> : <ArrowForward />}
              </Button>
            </HomepageBtnWrapper>
          </>
        )}
      </HomepageContent>
    </HomepageContainer>
  );
};

export default Homepage;
