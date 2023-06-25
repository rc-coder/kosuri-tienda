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
        <Image
          src={`/assets/icon-kosuri-sushi-100x100.png`}
          width={70}
          height={70}
          alt="Kosuri Logo"
        ></Image>
      </FooterLogo>
      <FooterSocial>
        <p>Seguinos</p>
        <Link href={''}>
          <FontAwesomeIcon
            icon={faInstagram}
            className="icon"
          ></FontAwesomeIcon>
        </Link>
      </FooterSocial>
    </FooterSection>
  );
};
