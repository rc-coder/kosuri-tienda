'use client';

import { useEffect, useState } from 'react';
import {
  CarouselStyled,
  Dot,
  DotContainer,
  ImageStyled,
  PromoText,
} from './CarouselElements';

export const Carousel = () => {
  const imageList = ['platos.jpg', 'entradas.jpg', 'entradas2.jpg'];
  const promoList = ['Promo 1', 'Promo 2', 'Promo 3'];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(imageList[0]);
  const [selectedPromo, setSelectedPromo] = useState(promoList[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, imageList);
    }, 2000);
    return () => clearInterval(interval);
  });

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < imageList.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : imageList.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedPromo(promoList[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, imageList, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, imageList);
  };

  return (
    <>
      <CarouselStyled>
        <PromoText className={loaded ? 'loaded' : ''}>
          <h2 className={loaded ? 'loaded' : ''}>{selectedPromo}</h2>
        </PromoText>
        <ImageStyled
          src={`/assets/${selectedImage}`}
          width={1000}
          height={1000}
          alt="kosuri logo"
          className={loaded ? 'loaded' : ''}
          onLoad={() => setLoaded(true)}
          priority
        ></ImageStyled>
        <DotContainer>
          {imageList.map((image, index) => (
            <Dot
              key={image}
              active={index === selectedIndex}
              onClick={() => {
                setSelectedImage(imageList[index]);
                setSelectedPromo(promoList[index]);
                setSelectedIndex(index);
              }}
            />
          ))}
        </DotContainer>
      </CarouselStyled>
      {/* <CarouselButtonContainer>
        <button onClick={previous}>{'<'}</button>
        <button onClick={next}>{'>'}</button>
      </CarouselButtonContainer> */}
    </>
  );
};
