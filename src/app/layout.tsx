import { ClientOnly, Navbar } from './components'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Cristianvj',
  description: 'Cristian Villota - Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-white dark:bg-gray-900`}>
        <ClientOnly>
          <Navbar />
          <main className="pt-[7rem]">
            {children}
          </main>
        </ClientOnly>
      </body>
    </html>
  )
}
