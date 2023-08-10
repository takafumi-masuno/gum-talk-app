/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTalkTheme = /* GraphQL */ `
  mutation CreateTalkTheme(
    $input: CreateTalkThemeInput!
    $condition: ModelTalkThemeConditionInput
  ) {
    createTalkTheme(input: $input, condition: $condition) {
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
export const updateTalkTheme = /* GraphQL */ `
  mutation UpdateTalkTheme(
    $input: UpdateTalkThemeInput!
    $condition: ModelTalkThemeConditionInput
  ) {
    updateTalkTheme(input: $input, condition: $condition) {
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
export const deleteTalkTheme = /* GraphQL */ `
  mutation DeleteTalkTheme(
    $input: DeleteTalkThemeInput!
    $condition: ModelTalkThemeConditionInput
  ) {
    deleteTalkTheme(input: $input, condition: $condition) {
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
