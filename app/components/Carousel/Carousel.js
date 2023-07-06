'use client';

import { useEffect, useState } from 'react';
import {
  CarouselStyled,
  Dot,
  DotContainer,
  ImageStyled,
} from './CarouselElements';

export const Carousel = () => {
  const imageList = ['platos.jpg', 'entradas.jpg', 'entradas2.jpg'];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(imageList[0]);
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
        <ImageStyled
          src={`/assets/${selectedImage}`}
          width={500}
          height={500}
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
