import styled from "styled-components";

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
`;
