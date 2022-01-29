import { useRouter } from "next/router";
import React, { useState } from "react";
import EventDetail from "../../component/event/components/EventDetail";
import Section1 from "../../component/event/Section1";
import Section2 from "../../component/event/Section2";
import Section3 from "../../component/event/Section3";

const Event = () => {
  const { query } = useRouter();
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Section1 />
      {query.eventID ? (
        <EventDetail />
      ) : (
        <>
          <Section2 isEnd={isEnd} setIsEnd={setIsEnd} />
          <Section3 isEnd={isEnd} />
        </>
      )}
    </div>
  );
};

export default Event;
