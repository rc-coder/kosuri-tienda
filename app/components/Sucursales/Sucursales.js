'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faComment,
  faComments,
  faMap,
} from '@fortawesome/free-regular-svg-icons';
import {
  SucursalesCard,
  SucursalesCardContainer,
  SucursalesMainText,
  SucursalesSection,
} from './SucursalesElements';
import {
  faEnvelopeCircleCheck,
  faMapLocation,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export const Sucursales = () => {
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
    <SucursalesSection id="Sucursales">
      <SucursalesMainText>
        <h2>¡Ven a visitarnos!</h2>
      </SucursalesMainText>
      <SucursalesCardContainer>
        <>
          <div className="card hidden">
            <SucursalesCard>
              <div className="nombre">
                <h5>Sucursal</h5>
                <h3>Santos Lugares</h3>
              </div>
              <div className="section">
                <span className="icon">
                  <FontAwesomeIcon icon={faMapLocation} size="2x" />
                </span>
                <span className="info">
                  <h4>Dirección</h4>
                  <p>Av. siempreviva 123</p>
                </span>
              </div>
              <div className="section">
                <span className="icon">
                  <FontAwesomeIcon icon={faComments} size="2x" />
                </span>
                <span className="info">
                  <h4>Escribenos</h4>
                  <p>123456</p>
                  <p>5484.5748754.8</p>
                </span>
              </div>
              <div className="section">
                <span className="icon">
                  <FontAwesomeIcon icon={faClock} size="2x" />
                </span>
                <span className="info">
                  <h4>Horario</h4>
                  <p>Mar. a Jue. y Dom. 19.00 a 23.00</p>
                  <p>Vier. y Sab. 19.00 a 23.30 </p>
                </span>
              </div>
              <div className="section">
                <span className="icon">
                  <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="2x" />
                </span>
                <span className="info">
                  <h4>Email</h4>
                  <p>Kosuri@sushi.com</p>
                </span>
              </div>
            </SucursalesCard>
          </div>
          <div className="card hidden">
            <SucursalesCard>
              <div className="nombre">
                <h5>Sucursal</h5>
                <h3>Santos Lugares</h3>
              </div>
              <div className="section">
                <span className="icon">
                  <FontAwesomeIcon icon={faMapLocation} size="2x" />
                </span>
                <span className="info">
                  <h4>Dirección</h4>
                  <p>Av. siempreviva 123</p>
                </span>
              </div>
              <div className="section">
                <span className="icon">
                  <FontAwesomeIcon icon={faComments} size="2x" />
                </span>
                <span className="info">
                  <h4>Escribenos</h4>
                  <p>123456</p>
                  <p>5484.5748754.8</p>
                </span>
              </div>
              <div className="section">
                <span className="icon">
                  <FontAwesomeIcon icon={faClock} size="2x" />
                </span>
                <span className="info">
                  <h4>Horario</h4>
                  <p>Mar. a Jue. y Dom. 19.00 a 23.00</p>
                  <p>Vier. y Sab. 19.00 a 23.30 </p>
                </span>
              </div>
              <div className="section">
                <span className="icon">
                  <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="2x" />
                </span>
                <span className="info">
                  <h4>Email</h4>
                  <p>Kosuri@sushi.com</p>
                </span>
              </div>
            </SucursalesCard>
          </div>
          <div className="card hidden">
            <SucursalesCard>
              <div className="nombre">
                <h5>Sucursal</h5>
                <h3>Santos Lugares</h3>
              </div>
              <div className="section">
                <span className="icon">
                  <FontAwesomeIcon icon={faMapLocation} size="2x" />
                </span>
                <span className="info">
                  <h4>Dirección</h4>
                  <p>Av. siempreviva 123</p>
                </span>
              </div>
              <div className="section">
                <span className="icon">
                  <FontAwesomeIcon icon={faComments} size="2x" />
                </span>
                <span className="info">
                  <h4>Escribenos</h4>
                  <p>123456</p>
                  <p>5484.5748754.8</p>
                </span>
              </div>
              <div className="section">
                <span className="icon">
                  <FontAwesomeIcon icon={faClock} size="2x" />
                </span>
                <span className="info">
                  <h4>Horario</h4>
                  <p>Mar. a Jue. y Dom. 19.00 a 23.00</p>
                  <p>Vier. y Sab. 19.00 a 23.30 </p>
                </span>
              </div>
              <div className="section">
                <span className="icon">
                  <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="2x" />
                </span>
                <span className="info">
                  <h4>Email</h4>
                  <p>Kosuri@sushi.com</p>
                </span>
              </div>
            </SucursalesCard>
          </div>
        </>
      </SucursalesCardContainer>
    </SucursalesSection>
  );
};
