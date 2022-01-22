import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 130px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100px;
  }
`;

const AppleApp = () => {
  return (
    <a
      data-testid="linkElement"
      href="https://apps.apple.com/us/app/%EB%B1%85%EC%B9%B4%EC%9A%B0/id1588858780"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Box>
        <svg
          preserveAspectRatio="xMidYMid meet"
          data-bbox="0.5 0.5 207 61"
          viewBox="0 0 208 62"
          xmlns="http://www.w3.org/2000/svg"
          data-type="ugc"
          role="presentation"
          aria-hidden="true"
          aria-labelledby="svgcid-s5t2fzhx6h78"
        >
          <title id="svgcid-s5t2fzhx6h78"></title>
          <g>
            <path
              d="M.5 51.5v-41c0-.7.1-1.3.2-2 .1-.6.3-1.2.6-1.8s.6-1.2.9-1.7c.4-.6.8-1.1 1.2-1.6.5-.5 1-.9 1.5-1.2.5-.4 1.1-.7 1.7-.9C7.3 1 7.9.8 8.5.7s1.3-.2 2-.2h187c.7 0 1.3.1 2 .2.6.1 1.3.3 1.9.6.6.3 1.2.6 1.7.9.5.4 1.1.8 1.5 1.2.5.5.9 1 1.2 1.5.4.5.7 1.1.9 1.7.3.6.4 1.2.6 1.9.1.6.2 1.3.2 2v41c0 .7-.1 1.3-.2 2-.1.6-.3 1.3-.6 1.9-.3.6-.6 1.2-.9 1.7s-.8 1.1-1.2 1.5c-.5.5-1 .9-1.5 1.2-.5.4-1.1.7-1.7.9-.6.3-1.2.4-1.9.6s-1.3.2-2 .2h-187c-.7 0-1.3-.1-2-.2s-1.2-.3-1.8-.6c-.6-.3-1.2-.6-1.7-.9-.5-.4-1.1-.8-1.5-1.2-.5-.5-.9-1-1.2-1.5s-.7-1.1-.9-1.7c-.3-.6-.4-1.2-.6-1.9-.2-.7-.3-1.3-.3-2z"
              fill="#ffffff"
            ></path>
            <path
              d="M.5 52V10c0-.6.1-1.2.2-1.9.1-.6.3-1.2.5-1.7.2-.6.5-1.1.9-1.6s.7-1 1.2-1.4.9-.8 1.4-1.2 1.1-.6 1.6-.9C6.9 1 7.5.8 8.1.7S9.4.5 10 .5h188c.6 0 1.2.1 1.9.2s1.2.3 1.8.5c.6.2 1.1.5 1.6.9s1 .7 1.4 1.2c.4.4.8.9 1.2 1.4s.6 1.1.9 1.6c.2.6.4 1.2.5 1.8.1.6.2 1.2.2 1.9v42c0 .6-.1 1.2-.2 1.9s-.3 1.2-.5 1.8c-.2.6-.5 1.1-.9 1.6-.3.5-.7 1-1.2 1.4-.4.4-.9.8-1.4 1.2-.5.3-1.1.6-1.6.9-.6.2-1.2.4-1.8.5-.6.1-1.2.2-1.9.2H10c-.6 0-1.2-.1-1.9-.2-.6-.1-1.2-.3-1.8-.5s-1.1-.5-1.6-.9c-.5-.3-1-.7-1.4-1.2-.4-.4-.8-.9-1.2-1.4s-.6-1.1-.9-1.6c-.2-.6-.4-1.2-.5-1.8-.1-.7-.2-1.3-.2-1.9z"
              fill="none"
              stroke="#a5a5a5"
            ></path>
            <path d="M54.2 32.1c0-4.4 3.6-6.5 3.8-6.6-2.1-3-5.3-3.4-6.4-3.4-2.7-.3-5.3 1.6-6.7 1.6-1.4 0-3.5-1.6-5.8-1.5-2.9 0-5.7 1.7-7.2 4.4-3.1 5.4-.8 13.2 2.2 17.5 1.5 2.1 3.2 4.5 5.5 4.4 2.2-.1 3-1.4 5.7-1.4s3.4 1.4 5.7 1.4c2.4 0 3.9-2.1 5.3-4.3 1.7-2.4 2.4-4.8 2.4-4.9.1-.2-4.5-1.9-4.5-7.2z"></path>
            <path d="M49.8 19.2c1.2-1.5 2-3.5 1.8-5.6-1.7.1-3.9 1.2-5.1 2.7-1.1 1.3-2.1 3.4-1.8 5.4 1.9.1 3.9-1.1 5.1-2.5z"></path>
            <path d="M89.1 35.1h-6.2l-1.5 4.4h-2.6l5.9-16.3h2.7l5.9 16.3h-2.7l-1.5-4.4zm-5.6-2h4.9L86 25.9h-.1l-2.4 7.2z"></path>
            <path d="M106 33.6c0 3.7-2 6.1-5 6.1-1.7 0-3-.8-3.7-2.1h-.1v5.9h-2.4V27.6h2.4v2c.7-1.3 2.1-2.1 3.8-2.1 3 0 5 2.4 5 6.1zm-2.5 0c0-2.4-1.2-4-3.1-4-1.9 0-3.1 1.6-3.1 4s1.3 4 3.1 4 3.1-1.6 3.1-4z"></path>
            <path d="M119.1 33.6c0 3.7-2 6.1-5 6.1-1.7 0-3-.8-3.7-2.1h-.1v5.9h-2.4V27.6h2.4v2c.7-1.3 2.1-2.1 3.8-2.1 3 0 5 2.4 5 6.1zm-2.5 0c0-2.4-1.2-4-3.1-4-1.9 0-3.1 1.6-3.1 4s1.3 4 3.1 4 3.1-1.6 3.1-4z"></path>
            <path d="M127.8 35c.2 1.6 1.8 2.7 3.9 2.7 2.1 0 3.5-1.1 3.5-2.5 0-1.3-.9-2-3-2.5l-2.1-.5c-3-.7-4.4-2.1-4.4-4.4 0-2.8 2.5-4.7 5.9-4.7 3.4 0 5.8 1.9 5.9 4.7H135c-.1-1.6-1.5-2.6-3.5-2.6s-3.3 1-3.3 2.4c0 1.2.9 1.8 3 2.4l1.8.4c3.3.8 4.7 2.1 4.7 4.5 0 3.1-2.4 5-6.3 5-3.6 0-6.1-1.9-6.2-4.8h2.6z"></path>
            <path d="M143.1 24.8v2.8h2.3v1.9h-2.3v6.6c0 1 .5 1.5 1.4 1.5.2 0 .6 0 .8-.1v1.9c-.3.1-.8.1-1.4.1-2.4 0-3.3-.9-3.3-3.2v-6.8h-1.7v-1.9h1.7v-2.8h2.5z"></path>
            <path d="M146.7 33.6c0-3.7 2.2-6.1 5.6-6.1 3.4 0 5.6 2.4 5.6 6.1 0 3.8-2.2 6.1-5.6 6.1s-5.6-2.4-5.6-6.1zm8.8 0c0-2.6-1.2-4.1-3.2-4.1s-3.2 1.5-3.2 4.1c0 2.6 1.2 4.1 3.2 4.1s3.2-1.5 3.2-4.1z"></path>
            <path d="M160 27.6h2.3v2h.1c.4-1.3 1.5-2.1 2.9-2.1.4 0 .6 0 .8.1v2.3c-.2-.1-.6-.1-1.1-.1-1.6 0-2.5 1.1-2.5 2.7v7.1H160v-12z"></path>
            <path d="M177.3 36c-.3 2.2-2.4 3.6-5.1 3.6-3.5 0-5.6-2.3-5.6-6s2.2-6.2 5.5-6.2 5.4 2.3 5.4 5.9v.8h-8.4v.1c0 2 1.3 3.4 3.2 3.4 1.4 0 2.4-.6 2.7-1.7h2.3zm-8.2-3.5h5.9c-.1-1.8-1.2-3-2.9-3s-2.9 1.2-3 3z"></path>
          </g>
        </svg>
      </Box>
    </a>
  );
};

export default AppleApp;
