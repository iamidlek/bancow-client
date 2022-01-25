import React from "react";
import styled from "styled-components";

export const Section = styled.div`
  position: relative;
  height: 2044px;
  overflow: hidden;
  transition: ease all 0.5s;
  @media screen and (max-width: 1350px) {
    height: 1860px;
  }
  @media screen and (max-width: 850px) {
    height: 1700px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 1240px;
  }
`;
export const Row = styled.div<{ mt?: number }>`
  width: 80%;
  margin: 0 auto;
  position: relative;
  margin-top: ${({ mt }) => (mt ? mt + "px" : 0 + "px")};
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: ${({ mt }) => (mt ? mt / 2 + "px" : 0 + "px")};
  }
`;
export const HeadLine4 = styled.h4`
  font-size: 33px;
  margin-bottom: 60px;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 50px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 23px;
    margin-bottom: 30px;
  }
`;
export const HeadLine4sub = styled.h4`
  font-size: 33px;
  margin-bottom: 90px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const HeadLine2 = styled.h2`
  font-size: 58px;
  font-weight: Bold;
  margin-bottom: 30px;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 50px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
  }
`;

export const Rowinside = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img1 = styled.div`
  width: 553px;
  height: 696px;
  background-image: url("/mainpage/mainpagesection6-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  @media screen and (max-width: 1350px) {
    width: 492px;
    height: 620px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const Img2 = styled.div`
  width: 553px;
  height: 706px;
  background-image: url("/mainpage/mainpagesection6-2.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  margin-top: 64px;
  @media screen and (max-width: 1350px) {
    margin-top: 40px;
    width: 485px;
    height: 620px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const TextBox = styled.div`
  width: 552px;
  height: 1465px;
  margin-left: 60px;
  border-radius: 20px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1350px) {
    height: 1282px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 0;
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 600px;
    height: 1000px;
    position: absolute;
  }
`;

export const Emphasis = styled.span`
  color: ${(props) => props.theme.colors.subPoint};
`;

export const Text = styled.div`
  font-size: 33px;
  color: ${(props) => props.theme.colors.white};
  margin: 80px auto 0;
  text-align: right;
  @media screen and (max-width: 1350px) {
    font-size: 24px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    margin-top: 40px;
  }
`;

export const Img3 = styled.div`
  width: 411px;
  height: 835px;
  margin: 120px auto;
  background-image: url("/mainpage/mainpagesection6-3.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1350px) {
    width: 344px;
    height: 700px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 344px;
    height: 700px;
    margin: 40px auto;
  }
`;

export const Text2 = styled.div`
  font-size: 33px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.white};
  @media screen and (max-width: 1350px) {
    font-size: 24px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;

const Section6 = () => {
  return (
    <Section>
      <Row mt={110}>
        <HeadLine4>4. 경매완료</HeadLine4>
        <HeadLine2>
          나만의 소가
          <br />
          캐시카우로 바뀌어요
        </HeadLine2>
        <HeadLine4sub>판정 후 등급별 경매가 이루어져요</HeadLine4sub>
        <Rowinside>
          <Col>
            <Img1 />
            <Img2 />
          </Col>
          <TextBox>
            <Text>
              <Emphasis>도축 판정 결과</Emphasis>서
              <br />
              나온 등급으로 경매가 이루어져요
              <br />
              상세페이지에서 확인가능
            </Text>
            <Img3 />
            <Text2>
              경매가 끝나면 <Emphasis>나의 투자결과</Emphasis>를
              <br />
              확인 할 수 있어요
            </Text2>
          </TextBox>
        </Rowinside>
      </Row>
    </Section>
  );
};

export default Section6;
