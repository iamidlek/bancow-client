import React from "react";
import styled from "styled-components";

export const Section = styled.div`
  height: 1070px;
  overflow: hidden;
  transition: ease all 0.5s;
  //Todo 차트에 따라 변경 가능성 있음
  /* @media screen and (max-width: 1350px) {
    height: 1860px;
  }
  @media screen and (max-width: 850px) {
    height: 1700px;
  }*/
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 900px;
  }
`;

export const Row = styled.div<{ mt?: number }>`
  width: 80%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${({ mt }) => (mt ? mt + "px" : 0 + "px")};
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: ${({ mt }) => (mt ? mt / 2 + "px" : 0 + "px")};
  }
`;

export const HeadLine2 = styled.h2`
  font-size: 58px;
  font-weight: Bold;
  margin-bottom: 30px;
  @media screen and (max-width: 1160px) {
    font-size: 50px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 46px;
    width: 460px;
    padding-left: 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
export const HeadLine2sm = styled.h2`
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    text-align: center;
  }
`;

export const Emphasis = styled.span`
  color: ${(props) => props.theme.colors.point};
`;

export const ChartBox = styled.div`
  width: 100%;
  height: 700px;
  background-color: purple;
  opacity: 0.5;
  transition: ease all 0.5s;
`;

const Section7 = () => {
  return (
    <Section>
      <Row mt={120}>
        <HeadLine2>
          <Emphasis>캐시카우가 되는 순간, 설레지 않나요?</Emphasis>
        </HeadLine2>
        <HeadLine2sm>
          <Emphasis>
            캐시카우가 되는 순간,
            <br />
            설레지 않나요?
          </Emphasis>
        </HeadLine2sm>
        <ChartBox />
      </Row>
    </Section>
  );
};

export default Section7;
