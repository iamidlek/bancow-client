import React from "react";
import styled from "styled-components";

export const Section = styled.div`
  position: relative;
  height: 1110px;
  overflow: hidden;
  transition: ease all 0.5s;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 1090px;
  }
  @media screen and (max-width: 850px) {
    height: 960px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 820px;
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
  margin-bottom: 80px;
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
  height: 516px;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;

export const ImgBox = styled.div`
  width: 378px;
  height: 516px;
  border-radius: 20px;
  margin-right: 30px;
  background-color: ${(props) => props.theme.colors.gray1};
  @media screen and (max-width: 1420px) {
    display: none;
  }
`;
export const Img = styled.div`
  width: 325px;
  height: 516px;
  margin: 0 auto;
  background-image: url("/mainpage/mainpagesection4-1.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Img2 = styled.div`
  width: 336px;
  height: 516px;
  margin-left: 60px;
  background-image: url("/mainpage/mainpagesection4-2.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 980px) {
    margin: 50px auto;
    border-radius: 20px;
    background-size: 116%;
    background-position-y: 18%;
    background-position-x: 24%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 300px;
    background-size: 144%;
    background-position-y: 19%;
    margin-bottom: 40px;
  }
`;

export const TextBox = styled.div`
  width: 880px;
  height: 516px;
  border-radius: 20px;
  margin-right: 30px;
  background-color: #000;
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    height: 540px;
    margin-right: 0px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    position: absolute;
  }
`;

export const Text = styled.div`
  font-size: 33px;
  color: ${(props) => props.theme.colors.white};
  margin-left: 46px;
  margin-bottom: 60px;
  @media screen and (max-width: 980px) {
    margin-left: 0px;
    margin-bottom: 40px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
  }
`;

export const Emphasis = styled.span`
  color: ${(props) => props.theme.colors.subPoint};
`;

const Section4 = () => {
  return (
    <Section>
      <Row mt={80}>
        <HeadLine4>2. 사육하기</HeadLine4>
        <HeadLine2>
          4만원부터
          <br />
          한우를 소유가능
        </HeadLine2>
        <HeadLine4sub>
          보기도 어려운 차트로 정신 없진 않으신가요?
          <br />
          귀여운 송아지에 투자하여 키우는 재미도 느껴요!
        </HeadLine4sub>
        <Rowinside>
          <ImgBox>
            <Img />
          </ImgBox>
          <TextBox>
            <Img2 />
            <Text>
              실시간 업로드되는
              <br /> 실물사진,
              <br />
              <br /> 지금 바로 <Emphasis>뱅카우</Emphasis>에서
              <br /> 확인해보세요
            </Text>
          </TextBox>
        </Rowinside>
      </Row>
    </Section>
  );
};

export default Section4;
