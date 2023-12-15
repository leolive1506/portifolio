import Card from '@/components/card'
import CardSocial from '@/components/card/social';
import { IGithubProfile } from '@/interfaces/IGithubProfile';
import Image from 'next/image'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
interface InfoProfile {
  response: IGithubProfile
}
export default async function InfoProfile() {
  const response: IGithubProfile = await fetch(process.env.GITHUB_PROFILE_API_URL ?? "").then(res => res.json())

  return (
    <Card>
      <div className="flex justify-center items-center flex-col w-full px-2">
        <div className="mt-[-50%]">
          <Image src={response.avatar_url} alt="leonardo" width={200} height={200} className="rounded-xl object-cover" />
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-extrabold text-center whitespace-nowrap">{response.name}</h2>
          <a href={response.html_url} className="block text-center">@{response.login}</a>
        </div>
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"><div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"></div></div>
        <div className="mt-4 px-4 py-2 bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 w-full rounded text-center">
          Developer
        </div>
        <div className="mt-4 flex">
          <CardSocial icon={FaGithub} href={response.html_url} />
          <CardSocial icon={FaLinkedin} href="https://www.linkedin.com/in/leonardolopessantana/" />
          <CardSocial icon={FaInstagram} href="https://www.instagram.com/leo_1506_/" />
        </div>
      </div>
    </Card>
  )
}
