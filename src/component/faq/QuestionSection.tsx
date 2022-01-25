import React from "react";
import styled from "styled-components";
import QstButton from "./components/QstButton";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const QstButtonStyle = styled(QstButton)` 
  margin-right: 15px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-right: 7px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-right: 4px;
  }
`

// TODO: 백오피스에서 faq crud 관리(api 호출)

const Question = () => {
  return (
    <>
    <Wrapper>
      <QstButtonStyle/>
      <QstButtonStyle />
      <QstButtonStyle />
      <QstButtonStyle />
      <QstButtonStyle />
    </Wrapper>
    </>
  )
}

export default Question;
