import Card from '@/components/card'
import CardSocial from '@/components/card/social';
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { IGithubProfile } from '@/interfaces/IGithubProfile';
import Image from 'next/image'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IPinnedRepositoriesGithubApi } from '@/interfaces/PinnedRepositoriesGithubApi';

export default async function Home() {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const { data }: IPinnedRepositoriesGithubApi = await client.query({
    query: gql`
    {
      user(login: "leolive1506") {
        pinnedItems(first: 6) {
          totalCount
          edges {
            node {
              ... on Repository {
                id
                name
                url
                stargazerCount
                description
                nameWithOwner
                languages (first: 6) {
                  edges {
                    node {
                      id
                      name
                      color
                    }
                  }
                }
              }  
            }
            
          }
        }
      }
    }`
  })

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node)

  const response: IGithubProfile = await fetch('http://api.github.com/users/leolive1506').then(res => res.json())

  const bg = "bg-[#e34c26]";
  return (
    <main className="min-h-screen px-4 py-12 md:p-24 max-w-screen-xl mx-auto block">
      {/* <div className="my-12 grid grid-cols-1 md:grid-cols-[300px_minmax(400px,_1fr)] w-full md-w-auto"> */}
      <div className="my-12 flex flex-col md:flex-row w-full md:w-auto items-start">
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
        <Card className="mt-8 md:mt-0 md:ml-16">
          <div className="mb-32 grid text-center md:max-w-5xl md:w-full md:mb-0 md:grid-cols-3 md:text-left">
            {pinnedItems.map(item => {
              return (
                <a
                  key={item.id}
                  href={item.url}
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="mb-3 text-2xl font-semibold text-start">
                    {item.name}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 m-0 max-w-full text-sm opacity-50`}>
                    {item.languages.edges.map(
                      ({ node }) => node
                    ).map(language => {
                      return (
                        <div key={language.id} className="flex items-center justify-start">
                          <span className={`block w-2 h-2 rounded-full`} style={{ backgroundColor: language.color }}></span>
                          <span className="ml-2">{language.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </a>
              )
            })}
          </div>
        </Card>
      </div>
    </main>
  )
}
