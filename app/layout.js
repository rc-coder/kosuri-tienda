import StyledComponentsRegistry from '@/registry';
import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Footer } from './components/Footer/Footer';
config.autoAddCss = false;

const nunito = Nunito({ weight: '300', subsets: ['latin'] });

export const metadata = {
  title: 'Kosuri',
  description: 'Kosuri Web App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
