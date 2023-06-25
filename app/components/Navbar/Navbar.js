'use client';

import styled from 'styled-components';
import React, { useState } from 'react';
import Image from 'next/image';
import kosuriLogo from '../../../public/assets/kosuri-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  CtaButton,
  MenuContainer,
  MenuLink,
  NavbarLink,
  NavbarLogo,
  NavbarMenu,
  SocialContainer,
  NavbarStyled,
} from './NavbarElements';
import { menuItems } from '@/public/assets/data/menulist';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <NavbarStyled>
        <NavbarLogo>
          <NavbarLink href="/">
            <Image
              src={kosuriLogo}
              width={200}
              // height={50}
              alt="kosuri logo"
            ></Image>
          </NavbarLink>
        </NavbarLogo>

        <NavbarMenu>
          <CtaButton href={''}>
            <h2>Hacé tu pedido</h2>
          </CtaButton>
          <div className="links">
            <NavbarLink
              href={''}
              onMouseEnter={() => setShow(true)}
              onClick={() => setShow(!show)}
            >
              Menú
            </NavbarLink>
            <NavbarLink href={'#Sucursales'}>Sucursales</NavbarLink>
            <NavbarLink href={'#Promos'}>Promos</NavbarLink>
            <SocialContainer>
              <NavbarLink href={''}>
                <FontAwesomeIcon icon={faInstagram} />
              </NavbarLink>
            </SocialContainer>
          </div>
        </NavbarMenu>
      </NavbarStyled>
      <MenuContainer show={show} onMouseLeave={() => setShow(false)}>
        {menuItems.map((item) => (
          <MenuLink href={item.url} key={item.id}>
            {item.sectionName}
          </MenuLink>
        ))}
      </MenuContainer>
    </>
  );
};

export default Navbar;
