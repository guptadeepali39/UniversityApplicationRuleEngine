import React, { useState } from "react";
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
    const onHover = () => {
        setHover(!hover);
    };

    return ( <HomepageContainer id = "home">
        <HomepageBg>
        <VideoBg autoPlay loop muted src = { Video }
        type = "video/mp4" > </VideoBg>
        </HomepageBg>
        <HomepageContent>
        <HomepageH1 > Live your university dream today! </HomepageH1>
        <HomepageP >
        Sign up with your details and check your eligibility instantly.
        </HomepageP> <HomepageBtnWrapper>
        <Button to="home"
        onMouseEnter = { onHover }
        onMouseLeave = { onHover }
        primary = "true"
        dark = "true"
        smooth={true} duration={500} spy={true} exact='true' offset={-80}>
        Get started { hover ? <ArrowRight /> : <ArrowForward /> } </Button>
        </HomepageBtnWrapper>
        </HomepageContent>
        </HomepageContainer>
    );
};

export default Homepage;