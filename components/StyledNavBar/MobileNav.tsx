import styled, { css } from "styled-components";

const NavAnchor = styled.a`
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  font-weight: 400;
  margin: auto;
  margin-top: 1rem; /* 16px */
  margin-bottom: 1rem; /* 16px */
  color: ${(props) => props.color};
`;
const NavHeader = styled.a`
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  font-weight: 600;
  color: ${(props) => props.color};
`;

const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem; /* 16px */
`;

const NavContainer = styled.div`
    @media (min-width: 768px) {
        visibility: hidden;
    }
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transition-property: transform;
  transform: ${(props) =>
    props.open ? "translateY(-0px);" : "translateX(-100%);"};

  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07));
  drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  background-color: ${(props) => props.bgColor};
`;

const NavTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07));
  height: 5rem; /* 80px */
  background-color: ${(props) => props.bgColor};
`;

export function MobileNav({ open, setOpen, bgColor, textColor }) {
  return (
    <NavContainer open={open} bgColor={bgColor}>
      <NavTop bgColor={bgColor}>
        {" "}
        {/*logo container*/}
        <NavHeader color={textColor} href="/">
          Menu
        </NavHeader>
      </NavTop>
      <ColDiv>
        <NavAnchor
          color={textColor}
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </NavAnchor>
        <NavAnchor
          color={textColor}
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </NavAnchor>
      </ColDiv>
    </NavContainer>
  );
}
