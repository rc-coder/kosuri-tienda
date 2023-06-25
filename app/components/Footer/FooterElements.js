import styled from 'styled-components';

export const FooterSection = styled.section`
  background-color: black;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FooterDesigner = styled.div`
  display: flex;
  justify-content: center;
  & span {
    transition: all 0.2s linear;
    &:hover {
      transform: scale(1.1);
      color: red;
    }
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  --b: 3px; /* border thickness */
  --s: 0.7em; /* size of the corner */
  --color: #373b44;

  padding: calc(0.2em + var(--s)) calc(1.2em + var(--s));
  color: #f4f4f4;
  --_p: var(--s);
  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      #0000 90deg,
      red 0
    )
    var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
    calc(100% - var(--b) - 2 * var(--_p));
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  & p {
    padding-right: 10px;
  }
  & .icon {
    border-left: 1px solid #f4f4f4;
    padding-left: 10px;
  }
`;
