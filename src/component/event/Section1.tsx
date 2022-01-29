import React from "react";
import styled from "styled-components";
import { HeadLine4, HeadLine5 } from "../../common/typography";

const Section = styled.div`
  background-color: ${(props) => props.theme.alt.backgroud7};
  height: 249px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 180px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 130px;
  }
`;

const HeadLine4Style = styled(HeadLine4)`
  margin-bottom: 16px;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 22px;
    margin-bottom: 10px;
  }
`;

const HeadLine5Style = styled(HeadLine5)`
  color: ${(props) => props.theme.alt.text2};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    width: 210px;
    text-align: center;
  }
`;

const Section1 = () => {
  return (
    <Section>
      <HeadLine4Style>이벤트</HeadLine4Style>
      <HeadLine5Style>
        뱅카우 내 다양한 이벤트 정보를 한눈에 알아가요.
      </HeadLine5Style>
    </Section>
  );
};

export default Section1;
