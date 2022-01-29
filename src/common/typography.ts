import styled from "styled-components";

export const HeadLine2 = styled.h2`
  font-weight: 700;
  font-size: 58px;
  line-height: 1.45;
  color: ${(props) => props.theme.alt.text1};
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
export const HeadLine3 = styled.h3`
  font-weight: 700;
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
  color: ${(props) => props.theme.alt.text1};

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const HeadLine5 = styled.h5`
  font-size: 23px;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
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

export const Emphasis = styled.span`
  color: ${(props) => props.theme.colors.point};
`;

export const EmphasisSub = styled.span`
  color: ${(props) => props.theme.colors.subPoint};
`;
