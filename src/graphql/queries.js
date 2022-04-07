/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
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
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        postcontent
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCandidate = /* GraphQL */ `
  query GetCandidate($id: ID!) {
    getCandidate(id: $id) {
      id
      name
      content
      email
      createdAt
      updatedAt
    }
  }
`;
export const listCandidates = /* GraphQL */ `
  query ListCandidates(
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        content
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
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
export const listArtists = /* GraphQL */ `
  query ListArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDrop = /* GraphQL */ `
  query GetDrop($id: ID!) {
    getDrop(id: $id) {
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
export const listDrops = /* GraphQL */ `
  query ListDrops(
    $filter: ModelDropFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrops(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTier = /* GraphQL */ `
  query GetTier($id: ID!) {
    getTier(id: $id) {
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
export const listTiers = /* GraphQL */ `
  query ListTiers(
    $filter: ModelTierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTiers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
