import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { DetailLinkText } from "./DetailLinkStyle";

const DetailLink = () => {
  return (
    <Link href="/howto">
      <a>
        <DetailLinkText>
          자세히 보러가기 <IoIosArrowForward />
        </DetailLinkText>
      </a>
    </Link>
  );
};

export default DetailLink;
