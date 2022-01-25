import React from "react";
import styled from "styled-components";

export const Section = styled.div`
  position: relative;
  height: 1334px;
  overflow: hidden;
  transition: ease all 0.5s;
  @media screen and (max-width: 1550px) {
    height: 1640px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 1610px;
  }
  @media screen and (max-width: 980px) {
    height: 1540px;
  }
  @media screen and (max-width: 850px) {
    height: 1300px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 1140px;
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
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img1 = styled.div`
  width: 430px;
  height: 346px;
  margin-right: 50px;
  background-image: url("/mainpage/mainpagesection5-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1100px) {
    width: 320px;
    height: 220px;
    margin-top: 60px;
  }
  @media screen and (max-width: 980px) {
    margin: 0;
    border-radius: 20px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 270px;
  }
`;

export const TextBox = styled.div`
  width: 100%;
  height: 346px;
  border-radius: 20px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 980px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 400px;
  }
`;

export const GrayBox = styled.div`
  width: 47%;
  height: 308px;
  border-radius: 20px;
  margin-right: 2%;
  background-color: ${(props) => props.theme.colors.gray2};
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  @media screen and (max-width: 1550px) {
    width: 78%;
    margin-right: 0;
  }
  @media screen and (max-width: 980px) {
    display: none;
  }
`;
export const GrayBox2 = styled.div`
  width: 51%;
  height: 308px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.gray2};
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  @media screen and (max-width: 1550px) {
    width: 78%;
  }
  @media screen and (max-width: 980px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: 460px;
    margin-right: 0px;
  }
`;

export const Text = styled.div`
  font-size: 33px;
  color: ${(props) => props.theme.colors.white};
  margin-top: 30px;
  margin-left: 34px;
  @media screen and (max-width: 980px) {
    margin: 0 0 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const Emphasis = styled.span`
  color: ${(props) => props.theme.colors.subPoint};
`;

export const RowFlex = styled.div`
  display: flex;
  margin-top: 28px;
  @media screen and (max-width: 1550px) {
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }
`;

export const Img2 = styled.div`
  width: 315px;
  height: 309px;
  margin-left: 20px;
  background-image: url("/mainpage/mainpagesection5-2.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Img3 = styled.div`
  width: 315px;
  height: 309px;
  margin-right: 20px;
  background-image: url("/mainpage/mainpagesection5-3.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 980px) {
    margin: 0;
    border-radius: 20px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 280px;
    margin-bottom: 12px;
  }
`;

export const Text2 = styled.div`
  font-size: 33px;
  line-height: 1.3;
  color: ${(props) => props.theme.colors.white};
  margin-top: 30px;
  padding-right: 90px;
`;

export const Text3 = styled.div`
  font-size: 33px;
  line-height: 1.3;
  color: ${(props) => props.theme.colors.white};
  margin: 30px 0 30px 30px;
  text-align: end;
  @media screen and (max-width: 980px) {
    margin: 0;
    text-align: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
    margin-top: 12px;
  }
`;

const Section4 = () => {
  return (
    <Section>
      <Row mt={110}>
        <HeadLine4>3. 출하하기</HeadLine4>
        <HeadLine2>
          30개월 되면
          <br />
          출하진행
        </HeadLine2>
        <HeadLine4sub>
          한우는 생후 26개월~34개월이 되면 출하가 이뤄져요.
          <br />
          이후 출하,도축,판정이 순서대로 진행돼요.
        </HeadLine4sub>
        <Rowinside>
          <TextBox>
            <Text>
              출하일이 확정되면
              <br />
              <Emphasis>출하, 도축, 판정순</Emphasis>으로
              <br /> 진행돼요
            </Text>
            <Img1 />
          </TextBox>
        </Rowinside>
        <RowFlex>
          <GrayBox>
            <Img2 />
            <Text2>
              출하정보
              <br />
              도축정보를
              <br />
              확인하세요
            </Text2>
          </GrayBox>
          <GrayBox2>
            <Text3>
              마지막 판정등급을
              <br />
              확인하면 완료!
            </Text3>
            <Img3 />
          </GrayBox2>
        </RowFlex>
      </Row>
    </Section>
  );
};

export default Section4;
