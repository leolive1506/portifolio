export interface IPinnedRepositoriesGithubApi {
  data: {
    user: {
      pinnedItems: {
        totalCount: number,
        edges: IPinnedItem[],
      }
    }

  }
}

interface IPinnedItem {
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

export interface IPinnedLanguages {
  node: {
    id: string,
    name: string,
    color: string,
  }
}