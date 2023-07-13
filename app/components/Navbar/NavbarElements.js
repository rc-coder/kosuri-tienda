import Link from 'next/link';
import styled from 'styled-components';

export const NavbarStyled = styled.div`
  /* position: fixed; */
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: black;
  width: 100%;
  z-index: 999;
  border-bottom: 3px solid red;
`;

export const NavbarLogoContainer = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f4f4;
  width: 100%;
  z-index: 20;
  transition: all 0.5s;

  & .menuIcon {
    display: none;
    padding-right: 10px;
    @media screen and (max-width: 700px) {
      display: block;
    }
  }

  @media screen and (max-width: 700px) {
    justify-content: space-between;
  }
`;

export const NavbarMenu = styled.div`
  display: flex;
  width: 100%;
  background-color: black;
  padding: 10px;
  align-items: center;
  justify-content: space-evenly;
  z-index: 100;

  @media screen and (max-width: 700px) {
    position: absolute;
    right: 0;
    flex-direction: column;
    width: 80%;
    height: 80vh;
    border-bottom-left-radius: 20px;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition-property: transform;
    transition-duration: 0.5s;
    overflow-x: hidden;
    & .menu {
      display: none;
    }
  }

  & .links {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
      margin-top: -10px;
    }
  }
`;

export const NavbarLink = styled(Link)`
  color: #f4f4f4;
  background-color: transparent;
  padding: 0 10px;

  @media screen and (max-width: 700px) {
    font-size: 5vw;
    padding: 10px 10px;
  }
`;

export const SocialContainer = styled.div`
  border-left: 1px solid #f4f4f4;
  padding-left: 20px;

  @media screen and (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: none;
    margin-top: 20px;
    border-top: 1px solid #f4f4f4;
    padding-left: 0;
  }
`;

export const CtaButton = styled(Link)`
  --b: 3px; /* border thickness */
  --s: 0.5em; /* size of the corner */
  --color: #373b44;

  padding: calc(0.5em + var(--s)) calc(4em + var(--s));
  color: #f4f4f4;
  --_p: var(--s);
  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      #0000 90deg,
      red 0
    )
    var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
    calc(100% - var(--b) - 2 * var(--_p));
  transition: 0.3s linear, color 0.3s, background-color 0.3s;
  outline: var(--b) solid #0000;
  outline-offset: 0.6em;
  font-size: 16px;
  text-align: center;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover,
  :focus-visible {
    --_p: 0px;
    outline-color: red;
    outline-offset: 0.2em;
    color: black;
    background-color: #f4f4f4;
  }

  &:active {
    background: var(--color);
    color: #fff;
  }

  @media screen and (max-width: 700px) {
    font-size: 18.5px;
    padding: calc(0.5em + var(--s)) calc(1em + var(--s));
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  background-color: grey;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 25px;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  position: absolute;
  transition: 0.3s linear;
  z-index: 60;
`;

export const MenuLink = styled(Link)`
  color: black;
  font-weight: bold;
  transition: 0.2s linear;

  &:hover {
    transform: translateX(5px);
    color: #f4f4f4;
  }
`;

// export const Logo = styled.img`
//   max-width: 200px;
//   height: auto;
//   @media screen and (max-width: 700px) {
//     max-width: 150px;
//   }
// `;

//Mobile Menu

export const Dropdown = styled.div`
  display: none;
  @media screen and (max-width: 700px) {
    display: block;
  }
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  padding: 10px;
  color: gray;
  display: ${({ open }) => (open ? 'block' : 'none')};
  font-size: 4vw;
`;

export const DropdownTrigger = styled.div`
  color: #f4f4f4;
  background-color: transparent;
  padding: 10px 10px;
  font-size: 5vw;
`;

export const DropdownItem = styled.a`
  list-style: none;
`;
