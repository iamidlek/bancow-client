import { NextPage } from "next";
import React from "react";
import Section1 from "../../component/story/Section1";
import Section2 from "../../component/story/Section2";
import Section3 from "../../component/story/Section3";
import Section4 from "../../component/story/Section4";

const Story: NextPage = () => {
  return (
    <>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </>
  );
};

export default Story;
