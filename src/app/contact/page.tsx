import Card from "@/components/card";
import { CONTACTS } from "@/constants/contact";

export default function Contact() {
  return (
    <Card className="mt-8 md:mt-0 md:ml-14">
      <section className="rounded">
        <div className="container px-6 py-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {CONTACTS.map(({ key, label, icon: Icon, info, description, href }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                className="max-w-full linewrap border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 rounded-md"
              >
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <Icon className="w-6 h-6" />
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">{label}</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{description}</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400 block max-w-full break-words">{info}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Card>
  )
}
