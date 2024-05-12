import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './style/global.css';
import './style/default.css';
import StoreProvider from '../lib/storeProvider';

const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '400', '600', '500', '700', '800', '900']});

export const metadata: Metadata = {
  title: 'ONE. MODERN LIST',
  description: 'save your links'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>

   
  );
}
