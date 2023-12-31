import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cypherslopps website',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
