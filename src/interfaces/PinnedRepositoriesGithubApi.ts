export interface IPinnedRepositoriesGithubApi {
  data: {
    user: {
      pinnedItems: {
        totalCount: number,
        edges: IPinnedItemResponse[],
      }
    }

  }
}


interface IPinnedItemResponse {
  node: {
    id: string,
    name: string,
    url: string,
    description: string | null,
    nameWithOwner: string,
    languages: {
      edges: IPinnedLanguages[]
    }
  }
}

export type IPinnedItem = IPinnedItemResponse['node'];

export interface IPinnedLanguages {
  node: {
    id: string,
    name: string,
    color: string,
  }
}