import LinkMobile from "./nav-link/mobile";
import { NAVIGATION } from "@/constants/header/links";

export default function Mobile() {
  return (
    <div className="flex items-center justify-center md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="flex justify-between items-center">
        {NAVIGATION.map(nav => (
          <LinkMobile key={nav.key} href={nav.href} icon={nav.icon}>{nav.label}</LinkMobile>
        ))}
      </div>
    </div>
  )
}
