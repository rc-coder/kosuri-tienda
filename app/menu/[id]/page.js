'use client';

import { rolls } from '@/public/assets/data/menuItems';
import { entradas } from '@/public/assets/data/menuItems';
import {
  BottomBanner,
  ButtonContainer,
  CardItem,
  Divider,
  ItemsContainer,
  MenuBanner,
  MenuContainer,
  SectionsContainer,
  SectionsTags,
} from './MenuElements';
import Image from 'next/image';
import { formatPrice } from '@/app/utils/priceFormatter';
import { useEffect, useState } from 'react';
import { CtaButton } from '@/app/components/Navbar/NavbarElements';

export default function Menu({ params }) {
  //   Eliminar duplicados con Set

  //   const subSections = rolls.map((rolls) => rolls.subSection);
  //   const newArray = [...new Set(subSections)];
  //   const subSections = [...new Set(rolls.map((rolls) => rolls.subSection))];

  //    Eliminar duplicados con reduce

  const subSections = rolls
    .map((roll) => roll.subSection)
    .reduce((acc, sub) => {
      if (!acc.includes(sub)) {
        acc.push(sub);
      }
      return acc;
    }, []);

  //Filto de sections

  const [section, setSection] = useState('');
  let displayItems = rolls;

  //   const clasicos = rolls.filter((roll) => roll.subSection === 'Clasicos');

  //Scroll animation

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  });

  return (
    <>
      <MenuContainer>
        <MenuBanner
          src={`/assets/${params.id}.jpg`}
          alt={`Imagen ${params.id}`}
        />
        <Divider>
          <SectionsContainer>
            <SectionsTags
              onClick={() => setSection('')}
              selected={section === ''}
            >
              Todos
            </SectionsTags>
            {subSections.map((subs) => (
              <SectionsTags
                key={subs}
                onClick={() => setSection(subs)}
                selected={subs === section}
              >
                {subs}
              </SectionsTags>
            ))}
          </SectionsContainer>
        </Divider>

        <ItemsContainer>
          {displayItems
            .filter((item) => {
              return section === '' ? item : item.subSection.includes(section);
            })
            .map((item) => (
              <div key={item.id} className="hidden">
                <CardItem>
                  <Image
                    src="/assets/rolls-icon.png"
                    width={300}
                    height={300}
                    alt="Imagen Roll"
                  ></Image>
                  {/* <img src="/assets/rolls-icon.png" /> */}
                  <h2>{item.name}</h2>
                  <h4>{item.subSection}</h4>
                  <p>{item.description}</p>
                  <div className="priceContainer">
                    <div className="priceBox">
                      <span className="pieces">4p</span>
                      <span className="price">
                        {formatPrice(item.priceMed)}
                      </span>
                    </div>
                    <div className="priceBox">
                      <span className="pieces">8p</span>
                      <span className="price">
                        {formatPrice(item.pricePorc)}
                      </span>
                    </div>
                  </div>
                </CardItem>
              </div>
            ))}
        </ItemsContainer>
      </MenuContainer>
      <ButtonContainer>
        <CtaButton href={''}>
          <h2>Hacé tu pedido</h2>
        </CtaButton>
      </ButtonContainer>
      <BottomBanner>
        <img src={'/assets/kosuri-sushi-y-cocina-oriental.png'}></img>
      </BottomBanner>
    </>
  );
}
