import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HeadLine6 } from "../typography";
import styled from "styled-components";
import Logo from "../Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import ModeToggle from "../ModeToggle";

export const NavBox = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  @media ${(props) => props.theme.breakpoints.md} {
    background-color: ${(props) => props.theme.colors.point};
  }
`;

export const Nav = styled.nav`
  width: 82%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 68px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
    height: 50px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 88%;
  }
`;

export const MenuArea = styled.div`
  display: flex;
  gap: 34px;
  div {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    gap: 14px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 8px;
    a {
      display: none;
    }
    div {
      display: block;
    }
  }
`;

const GNB = () => {
  const router = useRouter();
  return (
    <NavBox>
      <Nav>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <MenuArea>
          <Link href="/story">
            <a className={router.pathname === "/story" ? "active" : ""}>
              <HeadLine6>뱅카우정보</HeadLine6>
            </a>
          </Link>
          <Link href="/howto">
            <a className={router.pathname === "/howto" ? "active" : ""}>
              <HeadLine6>이용방법</HeadLine6>
            </a>
          </Link>
          <Link href="/notice">
            <a className={router.pathname === "/notice" ? "active" : ""}>
              <HeadLine6>공지</HeadLine6>
            </a>
          </Link>
          <Link href="/event">
            <a className={router.pathname === "/event" ? "active" : ""}>
              <HeadLine6>이벤트</HeadLine6>
            </a>
          </Link>
          <Link href="/faq">
            <a className={router.pathname === "/faq" ? "active" : ""}>
              <HeadLine6>FAQ</HeadLine6>
            </a>
          </Link>
          <Link href="/farmer">
            <a className={router.pathname === "/farmer" ? "active" : ""}>
              <HeadLine6>입점문의</HeadLine6>
            </a>
          </Link>
          <ModeToggle />
          <div>
            <GiHamburgerMenu
              style={{ color: "white", fontSize: "28px", marginTop: "2px" }}
            />
          </div>
        </MenuArea>
      </Nav>
    </NavBox>
  );
};

export default GNB;
