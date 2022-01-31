import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import Section1 from "../../component/story/Section1";
import Section2 from "../../component/story/Section2";
import Section3 from "../../component/story/Section3";
import Section4 from "../../component/story/Section4";
import Section6 from "../../component/story/Section6";

export const StoryContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.alt.backgroud1};
`;
const Story: NextPage = () => {
  return (
    <StoryContainer>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section6></Section6>
    </StoryContainer>
  );
};

export default Story;
