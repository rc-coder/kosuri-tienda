import Link from 'next/link';
import styled from 'styled-components';

export const NavbarStyled = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: black;
  width: 100%;
  z-index: 999;
  /* border-bottom: 3px solid #e5edef; */
`;

export const NavbarLogo = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f4f4;
  width: 100%;
`;

export const NavbarMenu = styled.div`
  display: flex;
  width: 100%;
  background-color: black;
  padding: 10px;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 30px 10px;
  }

  & .links {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 600px) {
      margin-top: 20px;
      width: 100%;
    }
  }
`;

export const NavbarLink = styled(Link)`
  color: #f4f4f4;
  background-color: transparent;
  padding: 0 10px;
`;

export const SocialContainer = styled.div`
  border-left: 1px solid #f4f4f4;
  padding-left: 20px;
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
  z-index: 9999;
  /* transition-property: opacity;
  transition-duration: 0.5s; */
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
//   @media screen and (max-width: 600px) {
//     max-width: 150px;
//   }
// `;
