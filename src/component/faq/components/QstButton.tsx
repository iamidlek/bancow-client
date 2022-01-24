import React from "react";
import styled from 'styled-components';

export const CategoryBtn = styled.button`
  border: 0.5px solid rgba(0, 75, 250, 0.5);
  border-radius: 6px;
  width: 63px;
  height: 54px;
  font-size: 23px;
  background-color: ${(props) => props.theme.colors.white};

  @media ${(props) => props.theme.breakpoints.md} {
    border: 0.5px solid rgba(0, 75, 250, 0.5);
    border-radius: 6px;
    width: 28px;
    height: 23.48px;
    font-size: 10px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    border: 0.11px solid rgba(0, 75, 250, 0.5);
    border-radius: 1.34px;
    width: 14.04px;
    height: 12.04px;
    font-size: 10px;
  }
`

const QstButton = () => {
  return (
    <CategoryBtn>btn</CategoryBtn>
  )
}

export default QstButton;
