import React from 'react'
import { IconType } from 'react-icons'

interface CardSocialProps {
  icon: IconType,
  href: string
}

export default function CardSocial({ icon: Icon, href }: CardSocialProps) {
  return (
    <div className="p-2 rounded-full border border-transparent transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
      <a href={href} target='_blank'>
        <Icon className="h-6 w-6" />
      </a>
    </div>
  )
}
