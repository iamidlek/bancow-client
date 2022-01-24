import styled from "styled-components";

export const HeadLine2 = styled.h2`
  font-weight: Bold;
  font-size: 58px;

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
export const HeadLine3 = styled.h3`
  font-weight: Bold;
  font-size: 47px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 19px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`;

export const HeadLine4 = styled.h4`
  font-size: 33px;

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const HeadLine6 = styled.h6`
  font-size: 20px;
  a.active & {
    color: ${(props) => props.theme.colors.point};
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    color: ${(props) => props.theme.colors.white};
    a.active & {
      color: ${(props) => props.theme.colors.gray4};
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
