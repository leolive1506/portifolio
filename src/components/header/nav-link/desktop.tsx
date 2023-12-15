import Link from "next/link"
import { ReactNode } from "react"

interface LinkDesktopProps {
  href: string
  children: ReactNode
}

export default function LinkDesktop({ children, href }: LinkDesktopProps) {
  return (
    <li>
      <Link href={href} className="group text-gray-300 hover:text-gray-200 transition duration-300">
        {children}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-300"></span>
      </Link>
    </li>
  )
}
