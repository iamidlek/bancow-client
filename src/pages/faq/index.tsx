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
    width: 90%;
    height: 50px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    width: 88%;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 35%;
`;

export const SearchBar = styled.input`
  border: none;
  width: 382px;
  &:focus {
    outline: none;
    text-align: left;
  }
`;

const Faq = () => {
  return (
    <SearchArea>
      <Section>
        <HeadLine4 style={{ marginBottom: '35px' }}>
          궁금한 점이 있으신가요?
        </HeadLine4>
        {/* // TODO: api 연결 */}
        <SearchForm>
          <SearchWrapper>
            <AiOutlineSearch
              style={{ fontSize: '34px', margin: '0 23px 0 20px' }}
            />
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
