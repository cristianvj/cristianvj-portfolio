import { DarkContextProvider } from '../context/darkMode.context';
import { ClientOnly, Navbar } from '../components';

import './globals.css';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Cristianvj',
  description: 'Cristian Villota - Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <DarkContextProvider>
        <body className={`
          ${nunito.className}
        `}>
          <ClientOnly>
            <Navbar />

            {children}

          </ClientOnly>
        </body>
      </DarkContextProvider>
    </html>
  );
};
