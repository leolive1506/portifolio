import Card from '@/components/card'
import CardSocial from '@/components/card/social';
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { IGithubProfile } from '@/interfaces/IGithubProfile';
import Image from 'next/image'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


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

  const { data } = await client.query({
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
  console.log(pinnedItems[0])

  const response: IGithubProfile = await fetch('http://api.github.com/users/leolive1506').then(res => res.json())

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-12 md:p-24 max-w-screen-xl	mx-auto">
      <div className="my-12 grid grid-cols-1 md:grid-cols-[300px_minmax(400px,_1fr)] w-full md-w-auto">
        <Card>
          <div className="flex justify-center items-center flex-col">
            <div className="mt-[-50%]">
              <Image src={response.avatar_url} alt="leonardo" width={200} height={200} className="rounded-xl object-cover" />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-extrabold text-center">{response.name}</h2>
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
          {pinnedItems.map(item => {
            return (
              <div>
                <a key={item.id} href={item.url}>{item.name}</a>
                <br></br>
              </div>
            )
          })}
        </Card>
      </div>
    </main>
  )
}
