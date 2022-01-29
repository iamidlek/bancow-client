import React, { Component } from "react";
import styled from "styled-components";
import questionData from "./data/questionData.json";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 65px;
`;

export const QuestionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 722px;
  height: 83px;
  border-top: 1px solid ${(props) => props.theme.colors.gray3};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray3};
`;

export const MdKeyboardArrowDownStyle = styled(MdKeyboardArrowDown)`
  width: 24px;
  height: 24px;
`;

// class QuetionLoad extends Component {
//   constructor() {
//     super();
//     this.state = {
//       questionList = []
//     };
//   }
// };

// componentDidMount() {

// }

const Question = () => {
  return (
    <Wrapper>
      <QuestionBox>
        <MdKeyboardArrowDownStyle />
      </QuestionBox>
    </Wrapper>
  );
};

export default Question;
