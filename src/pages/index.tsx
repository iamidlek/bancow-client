import type { NextPage } from "next";
import Footer from "../common/global/Footer";
import Section1 from "../component/home/Section1";
import Section2 from "../component/home/Section2";
import Section3 from "../component/home/Section3";
import Section4 from "../component/home/Section4";
import Section5 from "../component/home/Section5";
import Section6 from "../component/home/Section6";
import Section7 from "../component/home/Section7";
import Section8 from "../component/home/Section8";

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
      <Section8 />
      <Footer />
    </>
  );
};

export default Home;
