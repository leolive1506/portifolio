import Card from '@/components/card'
import { IPinnedRepositoriesGithubApi } from '@/interfaces/PinnedRepositoriesGithubApi';
import { getApolloClient, queryPinnedItems } from '@/services/apollo';

export default async function Work() {
  const client = getApolloClient();

  const { data }: IPinnedRepositoriesGithubApi = await client.query({
    query: queryPinnedItems()
  })

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node)

  return (
    <Card className="mt-8 md:mt-0 md:ml-14">
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
  )
}
