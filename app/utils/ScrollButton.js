'use client';

import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';

const ScrollTopButton = styled.div`
  position: fixed;
  right: 10px;
  bottom: 140px;
  height: 20px;
  font-size: 2rem;
  z-index: 1;
  cursor: pointer;
  color: darkgray;

  & .icon {
    border-radius: 50%;
    border: 1px solid black;
  }
`;

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <ScrollTopButton
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <FontAwesomeIcon
        className="icon"
        icon={faCircleArrowUp}
      ></FontAwesomeIcon>
    </ScrollTopButton>
  );
};
