import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Emphasis, HeadLine5 } from "../../../common/typography";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${(props) => props.theme.alt.backgroud1};
`;

const Title = styled(HeadLine5)`
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 40px 10px;
`;

const SubText = styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  margin: 0 40px 20px;
  color: ${(props) => props.theme.colors.gray1};
`;

const Desc = styled(SubText)`
  margin-top: 20px;
  height: 63px;
  overflow: hidden;
  width: 300px;
`;

const Img = styled.div`
  width: 350px;
  height: 220px;
  background-image: url("https://via.placeholder.com/350x220");
  background-repeat: no-repeat;
  background-size: cover;
`;

const EventDetail = () => {
  const { query } = useRouter();
  console.log(query.eventID); // 추가 정보요청
  return (
    <Section>
      <div>
        <Title>풍차돌리기 이벤트</Title>
        <SubText>마감</SubText>
      </div>
      <Img />
      <Desc>
        풍차돌리기란, 적금 또는 예금 통장을 1년 동안 매달 만드는 방법을 일컫는
        말이에요. 풍차돌리기란, 적금 또는 예금 통장을 1년 동안 매달 만드는
        방법을 일컫는 말이에요.풍차돌리기란, 적금 또는 예금 통장을 1년 동안 매달
        만드는 방법을 일컫는 말이에요.
      </Desc>
      <SubText>
        <Link href="/event" scroll={false}>
          <a>
            <Emphasis>돌아가기</Emphasis>
          </a>
        </Link>
      </SubText>
    </Section>
  );
};

export default EventDetail;
