import Image from 'next/image';
import styles from './page.module.css';
import { Carousel } from './components/Carousel/Carousel';
import { Promos } from './components/Promos/Promos';
import { Sucursales } from './components/Sucursales/Sucursales';
import { Footer } from './components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Carousel />
      <Promos />
      <Sucursales />
    </>
  );
}
