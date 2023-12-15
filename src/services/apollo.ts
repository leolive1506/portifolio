import { ApolloClient, InMemoryCache, createHttpLink, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.GITHUB_API_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    }
  }
});

export function getApolloClient() {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
}

export function queryPinnedItems() {
  return gql`
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
}