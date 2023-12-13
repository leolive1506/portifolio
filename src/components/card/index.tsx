import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={"w-full md:w-auto col-span-1 p-4 group rounded-lg border transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 " + className ?? ''}>
      { children }
    </div>
  )
}
