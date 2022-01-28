import React from "react";
import { Content, Header, Profile, ReviewCard, Title } from "./SlideCardStyle";

interface SlideCardProps {
  url: string;
  title: string;
  content: string;
}

const SlideCard: React.FC<SlideCardProps> = ({ url, title, content }) => {
  return (
    <ReviewCard>
      <Header>
        <Profile url={url} />
        <Title>{title}</Title>
      </Header>
      <Content>{content}</Content>
    </ReviewCard>
  );
};

export default SlideCard;
