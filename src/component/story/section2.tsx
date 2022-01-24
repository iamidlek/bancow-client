import React from "react";
import styled from "styled-components";

export const SectionBox = styled.div` 
  box-sizing: border-box;
  width:100%;
  height:1916px;


  @media ${(props) => props.theme.breakpoints.md} {
    height:658px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height:588px;
  }
`;

  export const Card = styled.div`
  width:1300px;
  height:500px;
  margin: 0 auto;
  margin-bottom:93px;
  border-radius: 20px;
  box-shadow: 0px 0px 32px 0px rgba(0,0,0,0.2);

  @media ${(props) => props.theme.breakpoints.md} {
    width:585px;  
    height:118px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width:308px;
    height:118px;
  }
  `
const Section2 = () => {
  return (
    <SectionBox>
      <Card>
        <div>하이</div>
      </Card>
      <Card>
        <div>하이</div>
      </Card>
      <Card>
        <div>하이</div>
      </Card>
    </SectionBox>
  )
}

export default Section2;