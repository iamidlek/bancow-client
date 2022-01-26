import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

export const Section = styled.div`
  position: relative;
  height: 1100px;
  overflow: hidden;
  transition: ease all 0.5s;

  @media screen and (max-width: 1550px) {
    height: 960px;
  }
  @media screen and (max-width: 1270px) {
    height: 860px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 1220px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 1680px;
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

export const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadLine2 = styled.h2`
  font-size: 58px;
  font-weight: Bold;
  margin-bottom: 30px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 50px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
  }
`;

export const HeadLine4 = styled.h4`
  font-size: 33px;
  margin-bottom: 20px;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 50px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 23px;
    margin-bottom: 30px;
  }
`;

export const CardBox = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 440px;
    flex-wrap: wrap;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    width: 100%;
    align-items: center;
    flex-wrap: nowrap;
  }
`;

export const Card = styled.div`
  width: 340px;
  height: 500px;
  display: flex;
  border-radius: 14px;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1800px) {
    width: 300px;
    height: 460px;
  }
  @media screen and (max-width: 1550px) {
    width: 240px;
    height: 400px;
  }
  @media screen and (max-width: 1270px) {
    width: 200px;
    height: 300px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 40px;
  }
`;

export const Emphasis = styled.span`
  color: ${(props) => props.theme.colors.subPoint};
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
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const HeadLine42 = styled.h4`
  font-size: 33px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 70px;
  @media screen and (max-width: 1270px) {
    font-size: 28px;
    margin-top: 50px;
    margin-bottom: 28px;
  }
`;

export const HeadLine6 = styled.h6`
  font-size: 19px;
  color: ${(props) => props.theme.colors.point};
  text-align: center;
  @media screen and (max-width: 1270px) {
    font-size: 16px;
  }
`;

export const SubLine = styled.p`
  font-size: 16px;
  text-align: center;
  line-height: 1.3;
  margin: 20px;
  @media screen and (max-width: 1270px) {
    font-size: 14px;
  }
`;

const Section8 = () => {
  return (
    <Section>
      <Row mt={80}>
        <CenterBox>
          <HeadLine2>자주 묻는 질문</HeadLine2>
          <HeadLine4>
            뱅카우를 처음 시작하시나요?
            <br />
            가장 자주 묻는 질문을
            <br />
            간추려 보았어요
          </HeadLine4>
          <Link href="/howto">
            <a>
              <HeadLine5>
                자세히 보러가기 <IoIosArrowForward />
              </HeadLine5>
            </a>
          </Link>
        </CenterBox>
        <CardBox>
          <Card>
            <HeadLine42>구매하기</HeadLine42>
            <HeadLine6>
              구매금액은 어떻게
              <br />
              지불하나요?
            </HeadLine6>
            <SubLine>
              보유하고 계신 예치금에서
              <br />
              구매하신 지분 금액만큼
              <br />
              차감됩니다.
            </SubLine>
          </Card>
          <Card>
            <HeadLine42>사육중</HeadLine42>
            <HeadLine6>
              상품이 죽거나 다치면
              <br />
              어떻게 되나요?
            </HeadLine6>
            <SubLine>
              상품의 손실 및 손상을
              <br />
              방지하기 위하여 모든
              <br />
              상품은 가축보험에
              <br />
              가입되어 있습니다.
            </SubLine>
          </Card>
          <Card>
            <HeadLine42>출하 및 경매</HeadLine42>
            <HeadLine6>
              구매부터 출하까지 얼마나
              <br />
              기간이 소요되나요?
            </HeadLine6>
            <SubLine>
              일반적으로 한우는
              <br />
              30개월령까지 성장한 뒤
              <br />
              출하됩니다.
            </SubLine>
          </Card>
          <Card>
            <HeadLine42>회원 관련</HeadLine42>
            <HeadLine6>
              개인정보는 어디서
              <br />
              변경하나요?
            </HeadLine6>
            <SubLine>
              내정보-내정보수정에서
              <br />
              회원님의 정보를
              <br />
              수정가능합니다.
            </SubLine>
          </Card>
        </CardBox>
      </Row>
    </Section>
  );
};

export default Section8;
