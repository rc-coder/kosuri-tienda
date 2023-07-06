import styled from 'styled-components';

export const FooterSection = styled.section`
  background-color: black;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    justify-content: space-between;
    padding: 10px;
  }
`;

export const FooterDesigner = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
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

  & img {
    max-width: 100px;
    @media screen and (max-width: 600px) {
      max-width: 60px;
      height: auto;
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 30%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
  & p {
    padding-right: 10px;
    @media screen and (max-width: 600px) {
      padding-right: 0;
    }
  }
  & .icon {
    border-left: 1px solid #f4f4f4;
    padding-left: 10px;
    @media screen and (max-width: 600px) {
      padding-left: 0;
      margin-top: 5px;
      padding-top: 5px;
      border-left: none;
      border-top: 1px solid #f4f4f4;
      width: 80px;
    }
  }
`;
