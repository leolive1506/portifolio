import { ReactNode } from 'react'
import { IconType } from 'react-icons'

interface LinkMobileProps {
  icon: IconType,
  href: string,
  children: ReactNode
}

export default function LinkMobile({ icon: Icon, href, children }: LinkMobileProps) {
  return (
    <a href={href} className="inline-flex flex-col items-center justify-center px-5 group">
      <Icon className="w-6 h-6"/>
      <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200">
        {children}
      </span>
    </a>
  )
}
