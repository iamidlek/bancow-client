import React from "react";
import styled from "styled-components";
import QstButton from "./components/QstButton";

export const Wrapper = styled.div`
  margin: 0 auto;
`

const Question = () => {
  return (
    <>
    <Wrapper>
      <QstButton />
      <QstButton />
      <QstButton />
      <QstButton />
      <QstButton />
      <QstButton />
    </Wrapper>
    </>
  )
}

export default Question;
