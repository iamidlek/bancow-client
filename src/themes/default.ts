import { DefaultTheme } from "styled-components";

export const themeDefault: DefaultTheme = {
  fonts: {
    main: "Noto Sans KR, sans-serif",
  },
  colors: {
    point: "#0048FA",
    subPoint: "#6B96FF",
    subGray: "#E8E8E8",
    gray1: "#AAAAB1",
    gray2: "#AAAAB1",
    gray3: "#B9B9C1",
    gray4: "#D5D5DB",
    dark: "#353639",
    white: "#FFFFFF",
  },
  breakpoints: {
    sm: "screen and (max-width: 576px)", // 보다 작을때
    md: "screen and (max-width: 768px)", // 보다 작을때
    lg: "screen and (max-width: 992px)", // 보다 작을때
  },
};
