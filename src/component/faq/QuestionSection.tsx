import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 65px;
`;

const QuestionBox = styled.div`
  width: 722px;
  height: 83px;
  border-top: 1px solid ${(props) => props.theme.colors.gray3};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray3};
`;

const Question = () => {
  return (
    <Wrapper>
      <QuestionBox></QuestionBox>
    </Wrapper>
  );
};

export default Question;
