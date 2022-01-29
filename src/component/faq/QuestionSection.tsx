import React from "react";
import styled from "styled-components";
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


function Questions ({ questions }) {
  return (
    <div>
      <b>{questions.question}</b> <span>({questions.answer})</span>
    </div>
  );
}

function questionDate() {
  const questions = [
    {
      "id": 1,
      "faq_category": ["전체", "구매하기"],
      "question": "Q. 구매 금액은 어떻게 지불하나요?",
      "answer": "보유하고 계신 예치금에서 구매하신 지분 금액만큼 차감됩니다.",
      "create_date": "2022-01-25",
      "update_date": "2022-01-25"
    },
    {
      "id": 2,
      "faq_category": ["전체", "사육중"],
      "question": "Q. 구매 금액은 어떻게 지불하나요?",
      "answer": "보유하고 계신 예치금에서 구매하신 지분 금액만큼 차감됩니다.",
      "create_date": "2022-01-25",
      "update_date": "2022-01-25"
    },
    {
      "id": 3,
      "faq_category": ["전체", "사육중"],
      "question": "Q. 구매 금액은 어떻게 지불하나요?",
      "answer": "보유하고 계신 예치금에서 구매하신 지분 금액만큼 차감됩니다.",
      "create_date": "2022-01-25",
      "update_date": "2022-01-25"
    }
  ];
};

//   return (
//     <div>
//       {users.map((user) => (
//         <User user={user} key={user.id} />
//       ))}
//     </div>
//   );
// }

// export default UserList;

const Question = () => {

  return (
    <Wrapper>
      {questions.map((qs, as, id) => (
      <QuestionBox qs={questions.question} as={questions.answer} key={questions.id}>
        <MdKeyboardArrowDownStyle />
      </QuestionBox>
      )}
    </Wrapper>
  );
};

export default Question;

