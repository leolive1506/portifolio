import Image from "next/image";
import NavLink from "./nav-link/desktop";
import { NAVIGATION } from "@/constants/header/links";

export default function Desktop() {
  return (
    <header className="hidden md:block mt-2 max-w-screen-xl mx-auto rounded-md text-white w-full border px-5 py-2 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
      <nav className="flex justify-between">
        <div className="flex justify-center items-center">
          <Image
            className="rounded-full"
            src="/logo.svg"
            alt="Santam Logo"
            width={40}
            height={40}
            priority
          />
        </div>
        <ul className="flex gap-4 justify-center items-center">
          {NAVIGATION.map(nav => (
            <NavLink key={nav.key} href={nav.href}>{nav.label}</NavLink>
          ))}
        </ul>
        <div className="px-4 py-2 rounded-lg text-sm relative">
          {/* <div className="absolute w-full h-full right-0 top-0 blur-md">my profile</div> */}
          <div className="z-10 flex gap-2 items-center justify-center">
            <svg className="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
              <circle cx="3" cy="3" r="3" />
            </svg>
            Avaliable to working
          </div>
        </div>
      </nav>
    </header>
  )
}
