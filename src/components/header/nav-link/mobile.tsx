'use client'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface LinkMobileProps {
  icon: ReactNode,
  href: string,
  children: ReactNode
}

export default function LinkMobile({ icon: Icon, href, children }: LinkMobileProps) {
  const pathname = usePathname()
  const isCurrentPage = pathname === href

  return (
    <a href={href} className="inline-flex flex-col items-center justify-center px-5 group">
      {Icon}
      <span className={`text-sm ${isCurrentPage ? 'group:text-gray-700 dark:group:text-gray-200' : 'text-gray-500 dark:text-gray-400'}  group-hover:text-gray-700 dark:group-hover:text-gray-200`}>
        {children}
      </span>
    </a>
  )
}
