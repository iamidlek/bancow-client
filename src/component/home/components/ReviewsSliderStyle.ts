import styled, { keyframes } from "styled-components";
import { FlexVerticalBox } from "./common";

const animate = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(calc(-480px * 4)); // - 카드 너비 * 카드 수 
  }
`;

const animatesm = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(calc(-346px * 4)); // - 카드 너비 * 카드 수 
  }
`;

export const SlideGroup = styled(FlexVerticalBox)`
  position: absolute;
  bottom: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    top: 408px;
  }
`;

export const Slider = styled.div<{ delay?: number }>`
  transform: ${({ delay }) => delay && `translateX(${delay}px);`};
`;

export const SlideTrack = styled.div`
  display: flex;
  width: calc(480px * 8); // 카드 너비 * 카드 수 * 2
  height: 300px;
  animation: ${animate} 26s linear infinite;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(346px * 8);
    animation: ${animatesm} 26s linear infinite;
  }
`;
