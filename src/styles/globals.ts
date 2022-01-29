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
    position:relative;
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
  .swiper{
    width:100%;
    height:500px;
    padding:0 30px;
    @media ${(props) => props.theme.breakpoints.md} {
      // margin-top:-40px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      height:460px;
      // padding:0 50px;
    }
  }
  .swiper-slide{
    background:#fff;
    max-width:300px;
    // min-width: 240px;
    height:70%;
    border-radius:30px;
    margin-top:80px;
    box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.2);
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.md} {
      // max-width:200px;
  
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      // max-width:280px;
      // min-width:220px;
      font-size: 200px;
      height:70%;
    }
`;
