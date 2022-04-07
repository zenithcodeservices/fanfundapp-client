/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createCandidate = /* GraphQL */ `
  mutation CreateCandidate(
    $input: CreateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    createCandidate(input: $input, condition: $condition) {
      id
      name
      content
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateCandidate = /* GraphQL */ `
  mutation UpdateCandidate(
    $input: UpdateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    updateCandidate(input: $input, condition: $condition) {
      id
      name
      content
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteCandidate = /* GraphQL */ `
  mutation DeleteCandidate(
    $input: DeleteCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    deleteCandidate(input: $input, condition: $condition) {
      id
      name
      content
      email
      createdAt
      updatedAt
    }
  }
`;
export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
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
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
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
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
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
export const createDrop = /* GraphQL */ `
  mutation CreateDrop(
    $input: CreateDropInput!
    $condition: ModelDropConditionInput
  ) {
    createDrop(input: $input, condition: $condition) {
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
export const updateDrop = /* GraphQL */ `
  mutation UpdateDrop(
    $input: UpdateDropInput!
    $condition: ModelDropConditionInput
  ) {
    updateDrop(input: $input, condition: $condition) {
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
export const deleteDrop = /* GraphQL */ `
  mutation DeleteDrop(
    $input: DeleteDropInput!
    $condition: ModelDropConditionInput
  ) {
    deleteDrop(input: $input, condition: $condition) {
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
export const createTier = /* GraphQL */ `
  mutation CreateTier(
    $input: CreateTierInput!
    $condition: ModelTierConditionInput
  ) {
    createTier(input: $input, condition: $condition) {
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
export const updateTier = /* GraphQL */ `
  mutation UpdateTier(
    $input: UpdateTierInput!
    $condition: ModelTierConditionInput
  ) {
    updateTier(input: $input, condition: $condition) {
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
export const deleteTier = /* GraphQL */ `
  mutation DeleteTier(
    $input: DeleteTierInput!
    $condition: ModelTierConditionInput
  ) {
    deleteTier(input: $input, condition: $condition) {
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
