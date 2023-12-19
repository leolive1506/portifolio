import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneForwarded } from "react-icons/fi";

export const CONTACTS = [
  { key: "contact_key_phone", label: 'Phone', info: '+55 (34) 98416-8590', icon: FiPhoneForwarded, description: 'Just click and call me on whatsapp', href: 'https://api.whatsapp.com/send?phone=5534984168590&text=Hi%2C%20my%20name%20is%20____%2C%20I%20came%20from%20your%20portfolio%20website'},
  { key: "contact_key_email", label: 'Email', info: 'leonardolivelopes2@gmail.com', icon: MdOutlineMailOutline, description: 'Clique para me enviar um e-mail', href: 'mailto:leonardolivelopes2@gmail.com'},
  { key: "contact_key_location", label: 'My location', info: 'Uberlândia - Minas Gerais in Brazil', icon: IoLocationOutline, description: 'I currently live in the city', href: 'https://www.google.com/maps/place/Uberl%C3%A2ndia,+MG/data=!4m2!3m1!1s0x94a4450c10bbbaef:0xae370c93616d5c9c?sa=X&ved=2ahUKEwjp8u-BrJKDAxXlppUCHXEEDNEQ8gF6BAgKEAA'},
]