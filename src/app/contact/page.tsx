import Card from "@/components/card";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneForwarded } from "react-icons/fi";



export default function Contact() {
  return (
    <Card className="mt-8 md:mt-0 md:ml-14">
      {/* <section className="bg-white dark:bg-gray-900 rounded"> */}
      <section className="rounded">
        <div className="container px-6 py-4 mx-auto">
          {/* <div>
            <h3 className="text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h3>
            <p className="mt-3 text-gray-500 dark:text-gray-400">Always here to talk.</p>
          </div> */}

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="leonardolivelopes2@gmail.com"
              target="_blank"
              className="max-w-full linewrap border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 rounded-md"
            >
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <MdOutlineMailOutline className="w-6 h-6"/>
              </span> 

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Clique para me enviar um email</p>
              <p className="mt-2 text-blue-500 dark:text-blue-400 block max-w-full break-words">leonardolivelopes2@gmail.com</p>
            </a>

            <a
              href="https://www.google.com/maps/place/Uberl%C3%A2ndia,+MG/data=!4m2!3m1!1s0x94a4450c10bbbaef:0xae370c93616d5c9c?sa=X&ved=2ahUKEwjp8u-BrJKDAxXlppUCHXEEDNEQ8gF6BAgKEAA"
              target="_blank"
              className="border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 rounded-md"
            >
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <IoLocationOutline className="w-6 h-6" />
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">My location</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">I currently live in the city</p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">Uberlândia - Minas Gerais in Brazil</p>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5534984168590&text=Hi%2C%20my%20name%20is%20____%2C%20I%20came%20from%20your%20portfolio%20website"
              target="_blank"
              className="border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 rounded-md">
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <FiPhoneForwarded className="w-6 h-6" />
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Phone</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Just click and call me on whatsapp</p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">+55 (34) 98416-8590</p>
            </a>
          </div>
        </div>
      </section>
    </Card>
  )
}
