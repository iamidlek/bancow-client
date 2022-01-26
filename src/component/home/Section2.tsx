import React from "react";
import styled from "styled-components";
import AppleApp from "../../common/AppleApp";
import GoogleApp from "../../common/GoogleApp";

export const Section = styled.div`
  position: relative;
  height: 1100px;
  overflow: hidden;
  transition: ease all 0.5s;
  background-color: ${(props) => props.theme.colors.point};
  @media screen and (max-width: 1400px) {
    height: 1000px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 900px;
    background-color: ${(props) => props.theme.colors.subPoint};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 780px;
  }
`;

export const Container = styled.div`
  width: 86%;
  height: 100%;
  margin: 0 auto;
  position: relative;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 800px;
  }
`;

export const TextBox = styled.div`
  position: absolute;
  left: 6%;
  top: 20%;
  @media ${(props) => props.theme.breakpoints.sm} {
    top: 12%;
  }
`;

export const HeadLine2 = styled.div`
  font-weight: Bold;
  font-size: 58px;
  margin-top: 16px;
  margin-bottom: 80px;
  color: ${(props) => props.theme.colors.white};
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 40px;
    margin-top: 12px;
    margin-bottom: 36px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 300px;
  }
`;

export const HeadLine6 = styled.h6`
  padding-left: 2px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.white};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 14px;
  }
`;

export const AppLinkBox = styled.div`
  display: flex;
  gap: 34px;
  margin: 36px auto 50px;
  @media ${(props) => props.theme.breakpoints.md} {
    gap: 20px;
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 14px;
  }
`;

export const Img1 = styled.div`
  width: 291px;
  height: 616px;
  background-image: url("mainpageiphone1.png");
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;
  top: 380px;
  left: 50%;

  border-radius: 38.23px;
  box-shadow: 6px 66px 91px 17px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 6px 66px 91px 17px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 6px 66px 91px 17px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 1400px) {
    display: none;
  }
`;
export const Img2 = styled.div`
  width: 291px;
  height: 616px;
  background-image: url("mainpageiphone2.png");
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;
  top: 180px;
  left: 76%;
  border-radius: 38.23px;
  box-shadow: 6px 66px 91px 17px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 6px 66px 91px 17px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 6px 66px 91px 17px rgba(0, 0, 0, 0.25);
  @media ${(props) => props.theme.breakpoints.md} {
    background-image: url("mainpageiphone3.png");

    width: 417px;
    height: 626px;
    top: 220px;
    left: 50%;
    border-radius: 0px;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  @media screen and (max-width: 800px) {
    top: 240px;
    left: 36%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 266.45px;
    height: 400px;
    left: 8%;
    top: 42%;
  }
`;

const Section2 = () => {
  return (
    <Section>
      <Container>
        <TextBox>
          <HeadLine6>내 소가 캐시가 된다</HeadLine6>
          <HeadLine2>한우자산플랫폼 뱅카우</HeadLine2>
          <AppLinkBox>
            <GoogleApp />
            <AppleApp />
          </AppLinkBox>
        </TextBox>
        <Img1 />
        <Img2 />
      </Container>
    </Section>
  );
};

export default Section2;
