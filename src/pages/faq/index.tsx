import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HeadLine4 } from '../../common/typography';

const Faq = () => {
  return (
    <div>
      <section>
        <HeadLine4>궁금한 점이 있으신가요?</HeadLine4>
        <form>
          <AiOutlineSearch />
          <label htmlFor='keyword'></label>
          <input
            type='text'
            id='keyword'
            placeholder='검색어를 입력하시고 엔터를 눌러주세요.'
          />
        </form>
      </section>
    </div>
  );
};

export default Faq;
