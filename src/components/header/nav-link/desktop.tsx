'use client'
import Link from "next/link"
import { ReactNode } from "react"
import { usePathname } from 'next/navigation'

interface LinkDesktopProps {
  href: string
  children: ReactNode
}

export default function LinkDesktop({ children, href }: LinkDesktopProps) {
  const pathname = usePathname()
  const isCurrentPage = pathname === href

  return (
    <li>
      <Link href={href} className={`group hover:text-gray-200 transition duration-300 ${isCurrentPage ? 'text-gray-200' : 'text-gra-300'}`}>
        {children}
        <span className={`block ${isCurrentPage ? 'max-w-full' : 'max-w-0'} group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-300`}></span>
      </Link>
    </li>
  )
}
