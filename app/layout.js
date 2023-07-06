import StyledComponentsRegistry from '@/registry';
import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Footer } from './components/Footer/Footer';
import { ScrollButton } from './utils/ScrollButton';
config.autoAddCss = false;

const poppins = Poppins({
  weight: '300',
  style: ['italic', 'normal'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Kosuri',
  description: 'Kosuri Web App',
  // icons: {
  //   icon: '/public/assets/icon-kosuri-sushi-100x100.png',
  //   apple: '/public/assets/icon-kosuri-sushi-100x100.png',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
          <ScrollButton />
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
