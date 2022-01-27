import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle<DefaultTheme>`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${(props) => props.theme.fonts.main};
    font-weight: 400;
    line-height: 1.5;
    vertical-align: top;
    letter-spacing: -0.5%;
  }
  button {
    font-family: ${(props) => props.theme.fonts.main};
  }
  a {
    text-decoration: none;
    color: #000;
  }
  li{
    list-style: none;
  }
  select{
    appearance: none;
    -webkit-appearance: none; /* 사파리, 크롬 하위버전용 */
    -moz-appearance: none; /* 사파리, 크롬 하위버전용 */
  }
  select::-ms-expand{ display: none; } /* 익스플로러용 */

`;
