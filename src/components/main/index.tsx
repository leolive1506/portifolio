'use client'
import { ROUTES } from "@/constants/header/links"
import { PAGE_TITLES } from "@/constants/title/page-titles"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface MainProps {
  children: ReactNode
}
export default function Main({ children }: MainProps) {
  const pathname = usePathname();
  return (
    <main className="min-h-screen px-4 py-12 md:p-24 max-w-screen-xl mx-auto block">
      <div className="p-2 grid md:grid-cols-[300px_minmax(400px,_1fr)] w-full md:w-auto items-start justify-center">
        <h2 className="col-span-1"></h2>
        <h2 className="text-4xl font-extrabold md:ml-10">{PAGE_TITLES[pathname as ROUTES]}</h2>
      </div>
      {/* <div className="my-12 flex flex-col md:flex-row w-full md:w-auto items-start"> */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-[auto_minmax(400px,_1fr)] w-full md:w-auto items-start">
        {children}
      </div>
    </main>
  )
}
