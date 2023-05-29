'use client';

import styled from 'styled-components';
import React from 'react';

const NavbarStyled = styled.div`
  padding: 10px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f4f4f4;
  width: 100%;
  z-index: 999;
  border-bottom: 3px solid #e5edef;
`;

const Navbar = () => {
  return (
    <NavbarStyled>
      <h1 style={{ color: 'red' }}>Navbar</h1>
    </NavbarStyled>
  );
};

export default Navbar;
