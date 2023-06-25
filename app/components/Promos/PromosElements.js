import styled from 'styled-components';

export const PromosSection = styled.section`
  background-color: #f4f4f4;
  height: auto;
  padding: 60px;
`;

export const PromosCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;

  & .hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100%);
    transition: all 1s;
  }

  & .show {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }

  & .card:nth-child(2) {
    transition-delay: 200ms;
  }

  & .card:nth-child(3) {
    transition-delay: 300ms;
  }
`;

export const PromosMainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 50px 80px 50px;
  color: black;
  line-height: 2em;
  text-align: center;

  & h2 {
    font-weight: bold;
    font-size: 2.2em;
    margin-bottom: 10px;
  }
  & h3 {
    color: grey;
  }
  & p {
    font-size: 1em;
    color: darkgray;
  }
`;

export const PromoCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 20px;

  & h2 {
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f4f4f4;
    padding: 10px;
    font-weight: bold;
    font-size: 1.5em;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
`;

//Se pueden unir estos dos componentes

export const Promo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: black;
  height: 200px;
  line-height: 1.5em;
  & div {
    & .prev {
      font-size: 0.9em;
      color: darkgray;
      margin-right: 2px;
    }
    & .new {
      font-size: 1.1em;
      color: lightcoral;
      margin-left: 2px;
    }
  }
`;
