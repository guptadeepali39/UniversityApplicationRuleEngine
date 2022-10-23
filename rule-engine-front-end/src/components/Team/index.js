import React from "react";
import {
  TeamCard,
  TeamContainer,
  TeamH1,
  TeamH2,
  TeamIcon,
  TeamP,
  TeamWrapper,
} from "./TeamElements";
import Icon1 from "../../images/mridulkhanna.jpeg";
import Icon2 from "../../images/deepaligupta.jpeg";
import Icon3 from "../../images/riddhishdesai.jpeg";
// import Icon4 from "../../images/riddhishdesai.jpeg";

const Team = () => {
  return (
    <TeamContainer id="team">
      <TeamH1>Meet the team</TeamH1>
      <TeamWrapper>
        <TeamCard>
          <TeamIcon src={Icon1} />
          <TeamH2>Coffee Designer</TeamH2>
          <TeamP>Mridul is our lead UI developer and is responsible for all things frontend.</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Icon2} />
          <TeamH2>Ingredient Expert</TeamH2>
          <TeamP>Deepali is our lead backend developer and is responsible for all things backend.</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Icon3} />
          <TeamH2>Inventory Manager</TeamH2>
          <TeamP>Riddhish is our lead database developer and is responsible for all things database.</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon />
          <TeamH2>Caffeine Inspector</TeamH2>
          <TeamP>Chandrika is our lead backend developer and is responsible for testing the application.</TeamP>
        </TeamCard>
      </TeamWrapper>
    </TeamContainer>
  );
};

export default Team;
