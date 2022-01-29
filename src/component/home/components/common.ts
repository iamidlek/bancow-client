import styled from "styled-components";
import { HeadLine2, HeadLine4 } from "../../../common/typography";

export const Radius30WhiteBox = styled.div`
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.2);
`;

export const FlexVerticalBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexVerticalCenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HorizontalCenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container80 = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Row = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
`;

export const BackgroundImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
`;

export const UseOrder = styled(HeadLine4)`
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

export const DescText = styled(HeadLine2)`
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 50px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
  }
`;

export const DescTextmt30 = styled(DescText)`
  margin-bottom: 30px;
`;

export const SubDescText = styled(HeadLine4)`
  @media screen and (max-width: 850px) {
    display: none;
  }
`;
