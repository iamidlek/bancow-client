import React from "react";
import styled from "styled-components";

export const Section = styled.div`
  position: relative;
  height: 1520px;
  overflow: hidden;
  transition: ease all 0.5s;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 1440px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 1400px;
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

export const RowFlex = styled(Row)`
  display: flex;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
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

export const HeadLine4w = styled.h4`
  font-size: 33px;
  font-weight: bold;
  padding-top: 50px;
  padding-left: 45px;
  color: ${(props) => props.theme.colors.white};
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 50px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 23px;
  }
`;

export const HeadLine42 = styled.h4`
  font-size: 33px;
  font-weight: bold;
  position: absolute;
  left: 48px;
  bottom: 45px;
  @media screen and (max-width: 1340px) {
    font-size: 30px;
  }
  @media screen and (max-width: 1110px) {
    font-size: 26px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 22px;
  }
`;

export const HeadLine3 = styled.h3`
  font-size: 47px;
  font-weight: Bold;
  @media screen and (max-width: 1340px) {
    font-size: 38px;
  }
  @media screen and (max-width: 1220px) {
    font-size: 30px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 32px;
  }
`;
export const HeadLine2 = styled.h2`
  font-size: 58px;
  font-weight: Bold;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 50px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
  }
`;
export const Emphasis = styled.span`
  color: ${(props) => props.theme.colors.point};
`;
export const Img1 = styled.div`
  width: 520px;
  height: 471px;
  background-image: url("/mainpage/mainpagesection3-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 300px;
    height: 471px;
    background-size: 110%;
    background-position: 25% 55%;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    width: 300px;
    height: 272px;
  }
`;

export const TextBox = styled.div`
  flex-grow: 1;
  max-width: 726px;
  min-width: 370px;
  height: 471px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding-left: 90px;

  @media screen and (max-width: 1340px) {
    padding-left: 80px;
  }
  @media screen and (max-width: 1220px) {
    padding-left: 70px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 0;
    justify-content: center;
    height: 200px;
    margin-top: 10px;
  }
`;

export const TextBox2 = styled.div`
  width: 416px;
  height: 471px;
  background-color: #000;
  border-radius: 20px;
  position: relative;
  @media screen and (max-width: 870px) {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;

export const Img2 = styled.div`
  width: 200px;
  height: 167px;
  background-image: url("/mainpage/mainpagesection3-2.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  right: 40px;
  bottom: 60px;
`;

export const TextBox3 = styled.div`
  flex-grow: 1;
  height: 471px;
  max-width: 800px;
  min-width: 370px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-left: 30px;
  position: relative;
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 171px;
    margin-left: 0px;
    margin-top: 20px;
  }
`;

export const Img3 = styled.div`
  width: 384px;
  height: 260px;
  background-image: url("/mainpage/mainpagesection3-3.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 40%;
  @media screen and (max-width: 1340px) {
    width: 250px;
    height: 190px;
  }
  @media screen and (max-width: 1110px) {
    left: 20%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

const Section3 = () => {
  return (
    <Section>
      <Row mt={80}>
        <HeadLine4>1. 구매하기</HeadLine4>
        <HeadLine2>
          유전지수와
          <br />
          농가지수로 구매 결정
        </HeadLine2>
      </Row>
      <RowFlex mt={110}>
        <Img1 />
        <TextBox>
          <HeadLine3>
            <Emphasis>유전지수</Emphasis>로 유전자를
            <br /> <Emphasis>농가지수</Emphasis>로 농가등급을
            <br /> 간단히 확인해요.
          </HeadLine3>
        </TextBox>
      </RowFlex>
      <RowFlex mt={38}>
        <TextBox2>
          <HeadLine4w>
            출금가능금액은
            <br />
            출금등록으로
            <br />
            빠르게.
          </HeadLine4w>
          <Img2 />
        </TextBox2>
        <TextBox3>
          <HeadLine42>
            사진, 건강검진 내역, 체중으로
            <br /> <Emphasis>내 소의 성장</Emphasis>을 실시간
            <br /> 확인해보아요.
          </HeadLine42>
          <Img3 />
        </TextBox3>
      </RowFlex>
    </Section>
  );
};

export default Section3;
