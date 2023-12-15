import { FaHome } from "react-icons/fa";
import { FcAbout, FcContacts } from "react-icons/fc";
import { MdWorkHistory } from "react-icons/md";

import LinkMobile from "./nav-link/mobile";

export default function Mobile() {
  return (
    <div className="block md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        <LinkMobile href="/" icon={FaHome}>Home</LinkMobile>
        <LinkMobile href="/" icon={MdWorkHistory}>Work</LinkMobile>
        <LinkMobile href="/" icon={FcAbout}>About</LinkMobile>
        <LinkMobile href="/" icon={FcContacts}>Contact</LinkMobile>
      </div>
    </div>
  )
}
