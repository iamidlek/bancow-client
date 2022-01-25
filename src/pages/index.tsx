import type { NextPage } from "next";
import Section1 from "../component/home/Section1";
import Section2 from "../component/home/Section2";
import Section3 from "../component/home/Section3";
import Section4 from "../component/home/Section4";
import Section5 from "../component/home/Section5";
import Section6 from "../component/home/Section6";
import Section7 from "../component/home/Section7";

const Home: NextPage = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <div style={{ height: "1100px", border: "1px solid red" }}>
        자주 묻는 질문
      </div>
      <div style={{ height: "624px", border: "1px solid red" }}>footer</div>
    </>
  );
};

export default Home;
