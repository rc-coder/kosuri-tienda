'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import kosuriLogo from '/public/assets/kosuri-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  CtaButton,
  MenuContainer,
  MenuLink,
  NavbarLink,
  NavbarLogoContainer,
  NavbarMenu,
  SocialContainer,
  NavbarStyled,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
} from './NavbarElements';
import { menuItems } from '@/public/assets/data/menulist';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [openSide, setOpenSide] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const sideNavHandler = () => {
    setOpenSide(!openSide);
  };

  return (
    <>
      <NavbarStyled>
        <NavbarLogoContainer>
          <NavbarLink href="/">
            <Image
              src={kosuriLogo}
              // width={200}
              // height={50}
              alt="kosuri logo"
              style={{ maxWidth: '250px', height: 'auto' }}
            ></Image>
          </NavbarLink>
          <FontAwesomeIcon
            className="menuIcon"
            icon={openSide ? faBarsStaggered : faBars}
            color="black"
            size="xl"
            onClick={sideNavHandler}
          ></FontAwesomeIcon>
        </NavbarLogoContainer>
      </NavbarStyled>
      <NavbarMenu open={openSide}>
        <CtaButton href={'https://app.menuapp.com.ar/sucursales/kosurisushi'}>
          <h2>Hacé tu pedido</h2>
        </CtaButton>
        <div className="links">
          <NavbarLink
            href={''}
            onMouseEnter={() => setShow(true)}
            onClick={() => setShow(!show)}
            className="menu"
          >
            Menú
          </NavbarLink>
          <Dropdown>
            <DropdownTrigger
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              Menú {openMenu ? '-' : '+'}
            </DropdownTrigger>
            <DropdownMenu open={openMenu}>
              <ul>
                {menuItems.map((item) => (
                  <DropdownItem href={item.url} key={item.id}>
                    <li>{item.sectionName}</li>
                  </DropdownItem>
                ))}
              </ul>
            </DropdownMenu>
          </Dropdown>

          <NavbarLink href={'#Sucursales'} onClick={sideNavHandler}>
            Sucursales
          </NavbarLink>
          <NavbarLink href={'#Promos'} onClick={sideNavHandler}>
            Promos
          </NavbarLink>
          <NavbarLink href={''} onClick={sideNavHandler}>
            Eventos
          </NavbarLink>
          <SocialContainer>
            <NavbarLink
              href={'https://www.instagram.com/kosuri_tienda/'}
              target="blanc"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </NavbarLink>
          </SocialContainer>
        </div>
      </NavbarMenu>
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
