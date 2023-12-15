import { FaHome } from "react-icons/fa";
import { FcAbout, FcContacts } from "react-icons/fc";
import { MdWorkHistory } from "react-icons/md";

const className = "w-6 h-6"

export enum ROUTES {
  home = '/',
  work = '/work',
  about = '/abount',
  contact = '/contact'
}

export enum LABELS {
  home = 'Home',
  work = 'Work',
  about = 'About',
  contact = 'Contact',
}

export const NAVIGATION = [
  { href: ROUTES.home, key: 'route-home', label: LABELS.home, icon: <FaHome className={className} /> },
  { href: ROUTES.work, key: 'route-work', label: LABELS.work, icon: <MdWorkHistory className={className} /> },
  { href: ROUTES.about, key: 'route-about', label: LABELS.about, icon: <FcAbout className={className} /> },
  { href: ROUTES.contact, key: 'route-contact', label: LABELS.contact, icon: <FcContacts className={className} /> },
]