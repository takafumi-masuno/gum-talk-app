/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTalkTheme = /* GraphQL */ `
  query GetTalkTheme($talkId: Int!) {
    getTalkTheme(talkId: $talkId) {
      talkId
      talkTheme
      __typename
    }
  }
`;
export const listTalkThemes = /* GraphQL */ `
  query ListTalkThemes(
    $filter: TableTalkThemeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTalkThemes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        talkId
        talkTheme
        __typename
      }
      nextToken
      __typename
    }
  }
`;
