import Link from "next/link";
import React from "react";
import styled from "styled-components";
import AppleApp from "../../common/AppleApp";
import GoogleApp from "../../common/GoogleApp";
import ReviewsSlider from "./components/ReviewsSlider";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { change, DarkModeState } from "../../redux/thememode";

export const Section = styled.div`
  position: relative;
  height: 1850px;
  transition: ease all 0.5s;

  @media screen and (max-width: 1800px) {
    height: 1680px;
  }
  @media screen and (max-width: 1540px) {
    height: 1410px;
  }
  @media screen and (max-width: 1280px) {
    height: 1340px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 1100px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 1000px;
  }
`;

export const HeadLine2 = styled.h2`
  font-size: 58px;
  font-weight: 700;
  line-height: 1.45;

  @media screen and (max-width: 1280px) {
    font-size: 48px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const HeadLine2md = styled.h2`
  display: none;

  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
    font-size: 30px;
    font-weight: 400;
    line-height: 1.45;
    color: ${(props) => props.theme.colors.white};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 220px;
    color: ${(props) => props.theme.colors.white};
  }
`;

const MainImgBox = styled.div`
  height: 1600px;
  width: 1400px;
  border-radius: 50%;
  background-image: url("/mainpagecow.jpg");
  background-repeat: no-repeat;
  background-position: 50% 16%;
  background-size: cover;
  position: absolute;
  transform: translate(-446px, -200px);
  transition: ease all 0.5s;

  @media screen and (max-width: 1800px) {
    height: 1400px;
    width: 1200px;
    background-position: 49% 16%;
  }
  @media screen and (max-width: 1540px) {
    height: 1200px;
    width: 1000px;
    background-size: 160%;
    background-position: 40% 56%;
  }
  @media screen and (max-width: 1280px) {
    height: 1200px;
    width: 900px;
    background-size: 150%;
    background-position: 30% 56%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const Container = styled.div`
  width: 82%;
  margin: 0 auto;
  padding-top: 320px;
  padding-right: 8vw;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 1540px) {
    padding-top: 260px;
  }
  @media screen and (max-width: 1280px) {
    padding-right: 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: 46%;
    padding-top: 200px;

    background-color: ${(props) => props.theme.colors.point};
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-top: 120px;
    height: 40%;
  }
`;

export const Box = styled.div`
  position: relative;
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

export const HeadLine5 = styled.h5`
  font-size: 24px;
  color: ${(props) => props.theme.colors.subPoint};
  display: flex;
  align-items: center;
  svg {
    margin-left: 8px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    position: absolute;
    top: -20px;
    right: 0;
    color: ${(props) => props.theme.colors.subGray};
    text-decoration: underline;
    svg {
      display: none;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    top: -40px;
    right: 0;
  }
`;

export const Emphasis = styled.span`
  color: ${(props) => props.theme.colors.point};
`;

export const ToggleTheme = styled.div`
  position: absolute;
  width: 78px;
  height: 40px;
  right: -2vw;
  bottom: 0;
  background: ${(props) => props.theme.colors.subGray};
  border-radius: 40px;
  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 60px;
    height: 30px;
    right: 0;
    bottom: 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    right: -16vw;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.dark};
  transform: translate(4px, 3.5px);
  transition: all 0.2s linear;
  &.dark {
    background: ${(props) => props.theme.colors.white};
    transform: translate(40px, 3.5px);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 26px;
    height: 26px;
    transform: translate(3px, 2px);
    &.dark {
      transform: translate(30px, 2px);
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

const Section1 = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: DarkModeState) => state.isDark);

  const onClickHandler = () => {
    dispatch(change());
  };

  return (
    <Section style={{ overflow: "hidden" }}>
      <MainImgBox />
      <Container>
        <Box>
          <HeadLine2>
            누구나
            <br /> <Emphasis>4만원</Emphasis>부터
            <br /> <Emphasis>한우</Emphasis>를 <br />
            소유할 수 있다고요?
          </HeadLine2>
          <HeadLine2md>누구나 4만원부터 한우를 소유할 수 있다고요?</HeadLine2md>
          <AppLinkBox>
            <GoogleApp />
            <AppleApp />
          </AppLinkBox>
          <Link href="/howto">
            <a>
              <HeadLine5>
                자세히 보러가기 <IoIosArrowForward />
              </HeadLine5>
            </a>
          </Link>
          <ToggleTheme onClick={onClickHandler}>
            <Circle className={isDark ? "dark" : ""} />
          </ToggleTheme>
        </Box>
      </Container>
      <ReviewsSlider />
    </Section>
  );
};

export default Section1;
