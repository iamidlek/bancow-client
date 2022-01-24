import React from "react";
import styled from "styled-components";

export const Section = styled.div`
  position: relative;
  height: 1694px;
  overflow: hidden;
  transition: ease all 0.5s;
  @media screen and (max-width: 1400px) {
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Row = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
`;

export const HeadLine4 = styled.h4`
  font-size: 33px;
  margin-top: 110px;
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
export const HeadLine2 = styled.h2`
  font-size: 58px;
  font-weight: Bold;
  margin-top: 80px;
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Img1 = styled.div`
  width: 520px;
  height: 471px;
  background-image: url("/mainpage/mainpagesection3-1.png");
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1400px) {
    /* display: none; */
  }
`;

const Section3 = () => {
  return (
    <Section>
      <Row>
        <HeadLine4>1. 구매하기</HeadLine4>
        <HeadLine2>
          유전지수와
          <br />
          농가지수로 구매 결정
        </HeadLine2>
      </Row>
      <Row>
        <Img1 />
      </Row>
      <Row></Row>
    </Section>
  );
};

export default Section3;
