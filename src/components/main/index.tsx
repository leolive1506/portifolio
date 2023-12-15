import { ReactNode } from "react"

interface MainProps {
  children: ReactNode
}
export default function Main({ children }: MainProps) {
  return (
    <main className="min-h-screen px-4 py-12 md:p-24 max-w-screen-xl mx-auto block">
      <div className="my-12 flex flex-col md:flex-row w-full md:w-auto items-start">
        {children}
      </div>
    </main>
  )
}
