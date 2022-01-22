import React from "react";
import styled, { Keyframes, keyframes } from "styled-components";

const animate = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(calc(-480px * 4));
  }
`;

const SlideGroup = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const Slider = styled.div`
  height: 300px;
  margin: 0 auto;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
`;

const SlideTrack = styled.div<{ delay?: number }>`
  display: flex;
  width: calc(480px * 8); // 카드 너비 * 카드 수 * 2
  animation: ${animate} 10s linear infinite;
  animation-delay: ${(props) => (props.delay ? props.delay + "s" : 0 + "s")};
`;

const ReviewCard = styled.div`
  width: 480px;
  height: 254px;
  margin: 15px;
  padding: 32px;
  background: white;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`;

const CardHeader = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
`;

const Profile = styled.div`
  // 백그라운드로 사진
  border: 1px solid blue;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 12px;
`;
const Title = styled.div`
  font-size: 26px;
  line-height: 1.5;
`;
const Content = styled.div`
  width: 96%;
  margin: 0 auto;
  padding-top: 16px;
  font-size: 20px;
  line-height: 1.4;
  color: ${(props) => props.theme.colors.gray1};
`;

const ReviewsSlider = () => {
  return (
    <SlideGroup>
      <Slider>
        <SlideTrack>
          <ReviewCard>
            <CardHeader>
              <Profile />
              <Title>제목입니다</Title>
            </CardHeader>
            <Content>
              주변에 한우목장들이 있어 산업이 유망하다고 알고는 있었는데, 저
              같은 일반 투자자도 이제 투자가 가능해졌네요.
            </Content>
          </ReviewCard>
          <ReviewCard>
            <CardHeader>
              <Profile />
              <Title>제목입니다</Title>
            </CardHeader>
          </ReviewCard>
          <ReviewCard>
            <CardHeader>
              <Profile />
              <Title>제목입니다</Title>
            </CardHeader>
          </ReviewCard>
          <ReviewCard>
            <CardHeader>
              <Profile />
              <Title>제목입니다</Title>
            </CardHeader>
          </ReviewCard>
          <ReviewCard>
            <CardHeader>
              <Profile />
              <Title>제목입니다</Title>
            </CardHeader>
          </ReviewCard>
          <ReviewCard>
            <CardHeader>
              <Profile />
              <Title>제목입니다</Title>
            </CardHeader>
          </ReviewCard>
          <ReviewCard>
            <CardHeader>
              <Profile />
              <Title>제목입니다</Title>
            </CardHeader>
          </ReviewCard>
          <ReviewCard>
            <CardHeader>
              <Profile />
              <Title>제목입니다</Title>
            </CardHeader>
          </ReviewCard>
        </SlideTrack>
      </Slider>
      <Slider>
        <SlideTrack delay={0.7}>
          <ReviewCard>A</ReviewCard>
          <ReviewCard>B</ReviewCard>
          <ReviewCard>C</ReviewCard>
          <ReviewCard>D</ReviewCard>
          <ReviewCard>A</ReviewCard>
          <ReviewCard>B</ReviewCard>
          <ReviewCard>C</ReviewCard>
          <ReviewCard>D</ReviewCard>
        </SlideTrack>
      </Slider>
    </SlideGroup>
  );
};

export default ReviewsSlider;
