import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HeadLine6 } from "../typography";
import styled from "styled-components";
import Logo from "../Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import ModeToggle from "../ModeToggle";
import MobileMenu from "./MobileMenu";

export const NavBox = styled.div`
  background-color: ${(props) => props.theme.alt.backgroud5};
  @media ${(props) => props.theme.breakpoints.md} {
    background-color: ${(props) => props.theme.alt.backgroud2};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
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

export const LinkTab = styled(HeadLine6)`
  font-size: 20px;
  color: ${(props) => props.theme.alt.text1};
  a.active & {
    color: ${(props) => props.theme.alt.text5};
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    color: ${(props) => props.theme.colors.white};
    a.active & {
      color: ${(props) => props.theme.colors.gray4};
    }
  }
`;

const GNB = () => {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
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
            <a className={pathname === "/story" ? "active" : ""}>
              <LinkTab>뱅카우정보</LinkTab>
            </a>
          </Link>
          <Link href="/howto">
            <a className={pathname === "/howto" ? "active" : ""}>
              <LinkTab>이용방법</LinkTab>
            </a>
          </Link>
          <Link href="/notice">
            <a className={pathname === "/notice" ? "active" : ""}>
              <LinkTab>공지</LinkTab>
            </a>
          </Link>
          <Link href="/event">
            <a className={pathname.includes("/event") ? "active" : ""}>
              <LinkTab>이벤트</LinkTab>
            </a>
          </Link>
          <Link href="/faq">
            <a className={pathname === "/faq" ? "active" : ""}>
              <LinkTab>FAQ</LinkTab>
            </a>
          </Link>
          <Link href="/farmer">
            <a className={pathname === "/farmer" ? "active" : ""}>
              <LinkTab>입점문의</LinkTab>
            </a>
          </Link>
          <ModeToggle />
          <div>
            <GiHamburgerMenu
              onClick={() => setIsOpen(true)}
              style={{
                color: "white",
                fontSize: "28px",
                marginTop: "2px"
              }}
            />
          </div>
        </MenuArea>
      </Nav>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </NavBox>
  );
};

export default GNB;
