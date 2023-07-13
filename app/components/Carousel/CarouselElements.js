import Image from 'next/image';
import styled from 'styled-components';
import css from 'styled-jsx/css';

export const CarouselStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ImageStyled = styled(Image)`
  max-width: 100vw;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

export const PromoText = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.45);

  & h2 {
    opacity: 0;
    transition: 1s;
    font-size: 11vw;
    &.loaded {
      opacity: 1;
    }
  }
`;

export const DotContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5%;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, 0);
`;

export const Dot = styled.div`
  width: 20px;
  height: 5px;
  /* border-radius: 50%; */
  cursor: pointer;
  ${(props) =>
    props.active === true
      ? css`
          background-color: white;
        `
      : css`
          background-color: grey;
        `}
`;

// export const CarouselButtonContainer = styled.div`
//   width: 100%;
//   height: auto;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
// `;
