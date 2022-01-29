import React from "react";
import { SlideGroup, Slider, SlideTrack } from "./ReviewsSliderStyle";
import SlideCard from "./SlideCard";

const mockData = [
  {
    url: "https://via.placeholder.com/45",
    title: "제목입니다제목입니다",
    content:
      " 주변에 한우목장들이 있어 산업이 유망하다고 알고는 있었는데, 저 같은 일반 투자자도 이제 투자가 가능해졌네요."
  },
  {
    url: "https://via.placeholder.com/45",
    title: "제목입니다제목입니다",
    content:
      " 주변에 한우목장들이 있어 산업이 유망하다고 알고는 있었는데, 저 같은 일반 투자자도 이제 투자가 가능해졌네요."
  },
  {
    url: "https://via.placeholder.com/45",
    title: "제목입니다제목입니다",
    content:
      " 주변에 한우목장들이 있어 산업이 유망하다고 알고는 있었는데, 저 같은 일반 투자자도 이제 투자가 가능해졌네요."
  },
  {
    url: "https://via.placeholder.com/45",
    title: "제목입니다제목입니다",
    content:
      " 주변에 한우목장들이 있어 산업이 유망하다고 알고는 있었는데, 저 같은 일반 투자자도 이제 투자가 가능해졌네요."
  }
];

const ReviewsSlider = () => {
  return (
    <SlideGroup>
      <Slider>
        <SlideTrack>
          {mockData.map((data, idx) => (
            <SlideCard key={idx} {...data} />
          ))}
          {mockData.map((data, idx) => (
            <SlideCard key={idx} {...data} />
          ))}
        </SlideTrack>
      </Slider>
      <Slider delay={-200}>
        <SlideTrack>
          {mockData.map((data, idx) => (
            <SlideCard key={idx} {...data} />
          ))}
          {mockData.map((data, idx) => (
            <SlideCard key={idx} {...data} />
          ))}
        </SlideTrack>
      </Slider>
    </SlideGroup>
  );
};

export default ReviewsSlider;
