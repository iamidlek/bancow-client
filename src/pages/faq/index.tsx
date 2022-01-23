import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HeadLine4 } from '../../common/typography';
import styled from 'styled-components';

export const SearchArea = styled.div`
  background-color: ${props => props.theme.colors.subGray};
  height: 249px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  margin: 0 auto;
  text-align: center;
`;

export const HeadLine4Style = styled(HeadLine4)`
  margin-bottom: 35px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: ;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: ;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 718px;
  height: 72px;
  background-color: white;
  border: none white;
  border-radius: 6px;

  @media ${props => props.theme.breakpoints.md} {
    width: 500px;
    height: 60px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    width: 160.06px;
    height: 16.06px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 35%;
`;

export const AiOutlineSearchStyle = styled(AiOutlineSearch)`
  width: 40px;
  height: 40px;
  margin: 0 23px 0 20px;

  @media ${props => props.theme.breakpoints.md} {
    width: 17.38px;
    height: 17.38px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    width: 6.98px;
    height: 6.98px;
  }
`;

export const SearchBar = styled.input`
  border: none;
  width: 382px;
  &::placeholder {
    line-height: 34px;
  }
  &:focus {
    outline: none;
    text-align: left;
  }

  @media ${props => props.theme.breakpoints.md} {
    width: 166.08px;
    height: 14.78px;
    &::placeholder {
      line-height: 14.78px;
    }
  }
  @media ${props => props.theme.breakpoints.sm} {
    width: 85.16px;
    height: 7.58px;
    &::placeholder {
      line-height: 7.58px;
    }
  }
`;

// TODO: Form에 검색 api 연결
const Faq = () => {
  return (
    <SearchArea>
      <Section>
        <HeadLine4>궁금한 점이 있으신가요?</HeadLine4>
        <SearchForm>
          <SearchWrapper>
            <AiOutlineSearchStyle />
            <label htmlFor='keyword'></label>
            <SearchBar
              type='text'
              id='keyword'
              placeholder='검색어를 입력하시고 엔터를 눌러주세요.'
            />
          </SearchWrapper>
        </SearchForm>
      </Section>
    </SearchArea>
  );
};

export default Faq;
