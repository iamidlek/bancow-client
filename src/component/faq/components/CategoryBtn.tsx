import React from "react";
import styled from 'styled-components';

export const CategoryBtn = styled.li`
  display: inline-block;
  padding: 10px;
  margin-right: 15px;
  border: 0.5px solid rgba(0, 75, 250, 0.5);
  border-radius: 6px;
  width: 63px;
  height: 54px;
  font-size: 23px;
  background-color: ${(props) => props.theme.colors.white};

  @media ${(props) => props.theme.breakpoints.md} {
    border: 0.5px solid rgba(0, 75, 250, 0.5);
    border-radius: 6px;
    width: 46px;
    height: 35px;
    font-size: 18px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;

  }
`

const QstButton = () => {
  const CATEGORYDATA = ['전체', '구매하기', '사육중', '출하 및 경매', '회원 관련']

  return (
    {CATEGORYDATA.map(cate => (
      <CategoryBtn>{cate}</CategoryBtn>
     ))}
  )
}

export default QstButton;
