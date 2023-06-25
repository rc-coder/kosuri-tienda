import styled from 'styled-components';

export const SucursalesSection = styled.section`
  background-color: darkred;
  height: auto;
  padding: 60px;
`;

export const SucursalesCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 50px;

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

export const SucursalesMainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 50px 90px 50px;
  color: #f4f4f4;
  line-height: 2em;
  text-align: center;

  & h2 {
    font-weight: bold;
    font-size: 2.5em;
    margin-bottom: 10px;
  }
  & h3 {
    color: grey;
  }
  & p {
    font-size: 1.1em;
    color: darkgray;
  }
`;

export const SucursalesCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & .nombre {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & h5 {
    font-size: 1em;
    padding-bottom: 20px;
  }

  & h3 {
    font-size: 2em;
    padding-bottom: 10px;
  }

  & .section {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & .icon {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
  }

  & .info {
    width: 50%;
    padding-left: 10px;
  }
`;
