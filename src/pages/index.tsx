import type { NextPage } from "next";
import Section1 from "../component/home/Section1";
import Section2 from "../component/home/Section2";
import Section3 from "../component/home/Section3";

const Home: NextPage = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <div style={{ height: "1120px", border: "1px solid red" }}>2사육하기</div>
      <div style={{ height: "1334px", border: "1px solid red" }}>3출하하기</div>
      <div style={{ height: "2044px", border: "1px solid red" }}>4결제완료</div>
      <div style={{ height: "1070px", border: "1px solid red" }}>
        설레는 순간 + 차트
      </div>
      <div style={{ height: "1100px", border: "1px solid red" }}>
        자주 묻는 질문
      </div>
      <div style={{ height: "624px", border: "1px solid red" }}>footer</div>
    </>
  );
};

export default Home;
