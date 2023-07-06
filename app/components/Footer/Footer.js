'use client';

import Image from 'next/image';
import {
  FooterDesigner,
  FooterLogo,
  FooterSection,
  FooterSocial,
} from './FooterElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import KosuriIcon from '/public/assets/icon-kosuri-sushi-100x100.png';

export const Footer = () => {
  return (
    <FooterSection>
      <FooterDesigner>
        <h5>
          Diseño por
          <Link href={''}>
            <span> Ricardo Campelo</span>
          </Link>
        </h5>
      </FooterDesigner>
      <FooterLogo>
        <Image src={KosuriIcon} alt="Kosuri Icon"></Image>
      </FooterLogo>
      <FooterSocial>
        <p>Seguinos</p>
        <Link href={'https://www.instagram.com/kosuri_tienda/'} target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            className="icon"
          ></FontAwesomeIcon>
        </Link>
      </FooterSocial>
    </FooterSection>
  );
};
