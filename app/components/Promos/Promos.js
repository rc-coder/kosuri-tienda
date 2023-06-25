'use client';

import { useEffect } from 'react';
import {
  PromoCard,
  Promo,
  PromosSection,
  PromosCardContainer,
  PromosMainText,
} from './PromosElements';

export const Promos = () => {
  //Scroll animation

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  });

  return (
    <PromosSection>
      <PromosMainText id="Promos" className="prueba">
        <h2>¡Dejate tentar por nuestras promos!</h2>
        <h3>Disfruta con nosotros toda la semana </h3>
        <p>
          Válido con todos los medios de pago solo para compras por web o app,
          no acumulable con otras promociones.
        </p>
      </PromosMainText>
      <PromosCardContainer>
        <>
          <div className="card hidden">
            <PromoCard>
              <h2>50% off</h2>
              <Promo>
                <p>Chicken wok</p>
                <div>
                  <span className="prev">
                    <strike>2000$</strike>
                  </span>
                  <span>
                    <strong className="new">1000$</strong>
                  </span>
                </div>
              </Promo>
              <Promo>
                <p>Chicken wok</p>
                <div>
                  <span className="prev">
                    <strike>2000$</strike>
                  </span>
                  <span>
                    <strong className="new">1000$</strong>
                  </span>
                </div>
              </Promo>
            </PromoCard>
          </div>
          <div className="card hidden">
            <PromoCard>
              <h2>50% off</h2>
              <Promo>
                <p>Chicken wok</p>
                <div>
                  <span className="prev">
                    <strike>2000$</strike>
                  </span>
                  <span>
                    <strong className="new">1000$</strong>
                  </span>
                </div>
              </Promo>
            </PromoCard>
          </div>
          <div className="card hidden">
            <PromoCard>
              <h2>50% off</h2>
              <Promo>
                <p>Chicken wok</p>
                <div>
                  <span className="prev">
                    <strike>2000$</strike>
                  </span>
                  <span>
                    <strong className="new">1000$</strong>
                  </span>
                </div>
              </Promo>
            </PromoCard>
          </div>
        </>
      </PromosCardContainer>
    </PromosSection>
  );
};
