import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
      <body className={inter.className + " bg-gradient-to-br from-gray-700 via-gray-900 to-black"}>
        {children}
      </body>
    </html>
  )
}