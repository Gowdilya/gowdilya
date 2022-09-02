import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";
import { useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

type BackgroundColour = "bg-slate-300" | "bg-orange-600" | "bg-green-500";
type TextColour = "text-black" | "text-red-200";

export type NavBarProps = {
  bgColour: BackgroundColour;
  textColour: TextColour;
};

const baseSpan = css`
  background-color: rgb(0 0 0);
  height: 0.25rem; /* 4px */
  width: 100%;
  border-radius: 0.5rem; /* 8px */
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;
const top = css`
  transform: ${(props) => props.open && "translateY(0.875rem) rotate(45deg)"};
`;

const middle = css`
  width: ${(props) => (props.open ? "0%" : "100%")};
`;

const bottom = css`
  transform: ${(props) => props.open && "translateY(-0.875rem) rotate(-45deg)"};
`;

const TopSpan = styled.span`
  ${baseSpan}
  ${top}
`;

const MidSpan = styled.span`
  ${baseSpan}
  ${middle}
`;

const BottomSpan = styled.span`
  ${baseSpan}
  ${bottom}
`;
const HamBurgerButton = styled.div`
  z-index: 50;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 2rem; /* 32px */
  height: 2rem; /* 32px */
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    visiblity: hidden;
    display: none;
  }
`;

const TopNav = styled.div`
  visibility: hidden;
  display: none;
  @media (min-width: 768px) {
    display: flex;
    visibility: visible;
    justify-content: flex-end;
    align: end;
    width: 75%;
  }
`;

const MenuBar = styled.div`
  display: flex;
  width: 75%;
  justify-content: flex-end;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
`;

const StyledNav = styled.nav`
  z-index: 30;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  align-items: center;
  padding: 1rem; /* 16px */
  height: 5rem; /* 80px */
  display: flex;
  background-color: #ea580c;
`;

export default function Navbar({ bgColour, textColour }: NavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <StyledNav>
      <MobileNav
        open={open}
        setOpen={setOpen}
        bgColour={bgColour}
        textColour={textColour}
      />
      <LogoContainer>
        <a href="/">
          <Image
            priority
            src="/images/gowdilya.png"
            height={144}
            width={144}
            alt={"Gowdilya"}
          />
        </a>
      </LogoContainer>
      <MenuBar>
        <HamBurgerButton
          onClick={() => {
            setOpen(!open);
          }}
        >
          <TopSpan open={open} />
          <MidSpan open={open} />
          <BottomSpan open={open} />
        </HamBurgerButton>
        <TopNav>
          <NavLink to="/contact" textColour={textColour}>
            CONTACT
          </NavLink>
          <NavLink to="/about" textColour={textColour}>
            ABOUT
          </NavLink>
        </TopNav>
      </MenuBar>
    </StyledNav>
  );
}
