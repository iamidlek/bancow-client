import styled from "styled-components";

export const HeadLine2 = styled.h2`
  font-style: Bold;
  font-size: 58px;
  @media ${(props) => props.theme.breakpoints.lg} {
    // 만들어 보다가 폰트 사이즈를 브라우저 차에 따라 조정해야 할 경우 작성
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
export const HeadLine3 = styled.h3`
  font-style: Bold;
  font-size: 47px;
  @media ${(props) => props.theme.breakpoints.lg} {
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const HeadLine4 = styled.h4`
  font-size: 33px;
  @media ${(props) => props.theme.breakpoints.lg} {
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
