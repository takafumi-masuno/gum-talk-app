/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTalkTheme = /* GraphQL */ `
  query GetTalkTheme($id: ID!) {
    getTalkTheme(id: $id) {
      id
      talkId
      talkTheme
      genre
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTalkThemes = /* GraphQL */ `
  query ListTalkThemes(
    $filter: ModelTalkThemeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTalkThemes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        talkId
        talkTheme
        genre
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
