import { FaHome } from "react-icons/fa";
import { FcAbout, FcContacts } from "react-icons/fc";
import { MdWorkHistory } from "react-icons/md";

const className = "w-6 h-6"

export const NAVIGATION = [
  { href: '/', key: 'route-home', label: 'Home', icon: <FaHome className={className} /> },
  { href: '/work', key: 'route-work', label: 'Work', icon: <MdWorkHistory className={className} /> },
  { href: '/about', key: 'route-about', label: 'About', icon: <FcAbout className={className} /> },
  { href: '/contact', key: 'route-contact', label: 'Contact', icon: <FcContacts className={className} /> },
]