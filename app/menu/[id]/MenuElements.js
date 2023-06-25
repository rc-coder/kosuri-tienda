'use client';

import styled from 'styled-components';

export const MenuContainer = styled.div`
  background-color: #f4f4f4;
`;

export const MenuBanner = styled.img`
  max-width: 100vw;
  max-height: 50vw;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const SectionsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 50px;
  border-bottom: 2px solid red;
  padding: 50px 0;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    padding-bottom: 90px;
    height: 100%;
  }

  & p {
    color: gray;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const ItemsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  padding: 0 50px;

  & .hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateY(30%);
    transition: all 0.5s;
  }

  & .show {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  gap: 10px;
  /* padding: 30px; */

  & h2 {
    text-transform: uppercase;
    text-align: center;
  }

  & h4 {
    color: gray;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      height: 1px;
      width: 99%;
      display: block;
      border-bottom: 1px solid silver;
      right: 100%;
      margin-right: 25px;
    }
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      height: 1px;
      width: 99%;
      display: block;
      border-bottom: 1px solid silver;
      left: 100%;
      margin-left: 25px;
    }
  }

  & p {
    text-align: center;
    color: darkgray;
  }

  & .priceContainer {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  & .priceBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  & .pieces {
    text-align: center;
    border: 2px dotted darkred;
    border-radius: 50%;
    padding: 10px;
  }

  & .price {
    font-weight: bold;
  }
`;
