import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Main from '@/components/main'
import InfoProfile from '@/components/card/social/info-profile'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portifólio',
  description: 'Portifólio criado com next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className + " min-w-screen min-h-screen"}>
        <Header />
        <Main>
          <InfoProfile />
          {children}
        </Main>
      </body>
    </html>
  )
}
