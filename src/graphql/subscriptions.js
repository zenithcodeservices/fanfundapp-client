/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      name
      posts {
        items {
          id
          title
          description
          postcontent
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      name
      posts {
        items {
          id
          title
          description
          postcontent
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      name
      posts {
        items {
          id
          title
          description
          postcontent
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      description
      postcontent
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      description
      postcontent
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      description
      postcontent
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist {
    onCreateArtist {
      id
      name
      posts {
        items {
          id
          title
          description
          postcontent
          dropDateTime
          streamingPercentage
          isSoldOut
          artistID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist {
    onUpdateArtist {
      id
      name
      posts {
        items {
          id
          title
          description
          postcontent
          dropDateTime
          streamingPercentage
          isSoldOut
          artistID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist {
    onDeleteArtist {
      id
      name
      posts {
        items {
          id
          title
          description
          postcontent
          dropDateTime
          streamingPercentage
          isSoldOut
          artistID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDrop = /* GraphQL */ `
  subscription OnCreateDrop {
    onCreateDrop {
      id
      title
      description
      postcontent
      dropDateTime
      streamingPercentage
      isSoldOut
      artistID
      artist {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDrop = /* GraphQL */ `
  subscription OnUpdateDrop {
    onUpdateDrop {
      id
      title
      description
      postcontent
      dropDateTime
      streamingPercentage
      isSoldOut
      artistID
      artist {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDrop = /* GraphQL */ `
  subscription OnDeleteDrop {
    onDeleteDrop {
      id
      title
      description
      postcontent
      dropDateTime
      streamingPercentage
      isSoldOut
      artistID
      artist {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTier = /* GraphQL */ `
  subscription OnCreateTier {
    onCreateTier {
      id
      title
      perkDescription
      collectorAddresses
      priceUSD
      isSoldOut
      percentageOwnership
      numberOfTokens
      dropID
      drop {
        id
        title
        description
        postcontent
        dropDateTime
        streamingPercentage
        isSoldOut
        artistID
        artist {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTier = /* GraphQL */ `
  subscription OnUpdateTier {
    onUpdateTier {
      id
      title
      perkDescription
      collectorAddresses
      priceUSD
      isSoldOut
      percentageOwnership
      numberOfTokens
      dropID
      drop {
        id
        title
        description
        postcontent
        dropDateTime
        streamingPercentage
        isSoldOut
        artistID
        artist {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTier = /* GraphQL */ `
  subscription OnDeleteTier {
    onDeleteTier {
      id
      title
      perkDescription
      collectorAddresses
      priceUSD
      isSoldOut
      percentageOwnership
      numberOfTokens
      dropID
      drop {
        id
        title
        description
        postcontent
        dropDateTime
        streamingPercentage
        isSoldOut
        artistID
        artist {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
