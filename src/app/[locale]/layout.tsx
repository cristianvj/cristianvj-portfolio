import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

import { DarkContextProvider } from '../../context/darkMode.context';
import { ClientOnly, Navbar } from '../../components';

import '../globals.css';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Cristianvj',
  description: 'Cristian Villota - Portfolio',
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode,
  params: { locale: string }
}>) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <DarkContextProvider>
        <body className={`
          ${nunito.className}
        `}>
            <NextIntlClientProvider messages={messages}>
              <ClientOnly>
                <Navbar />
                {children}
              </ClientOnly>
            </NextIntlClientProvider>
        </body>
      </DarkContextProvider>
    </html>
  );
};
