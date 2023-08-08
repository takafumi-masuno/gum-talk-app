/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTalkThemeInput = {
  talkId: number,
  talkTheme: string,
};

export type talkTheme = {
  __typename: "talkTheme",
  talkId: number,
  talkTheme: string,
};

export type UpdateTalkThemeInput = {
  talkId: number,
  talkTheme?: string | null,
};

export type DeleteTalkThemeInput = {
  talkId: number,
};

export type TableTalkThemeFilterInput = {
  talkId?: TableIntFilterInput | null,
  talkTheme?: TableStringFilterInput | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type talkThemeConnection = {
  __typename: "talkThemeConnection",
  items?:  Array<talkTheme | null > | null,
  nextToken?: string | null,
};

export type CreateTalkThemeMutationVariables = {
  input: CreateTalkThemeInput,
};

export type CreateTalkThemeMutation = {
  createTalkTheme?:  {
    __typename: "talkTheme",
    talkId: number,
    talkTheme: string,
  } | null,
};

export type UpdateTalkThemeMutationVariables = {
  input: UpdateTalkThemeInput,
};

export type UpdateTalkThemeMutation = {
  updateTalkTheme?:  {
    __typename: "talkTheme",
    talkId: number,
    talkTheme: string,
  } | null,
};

export type DeleteTalkThemeMutationVariables = {
  input: DeleteTalkThemeInput,
};

export type DeleteTalkThemeMutation = {
  deleteTalkTheme?:  {
    __typename: "talkTheme",
    talkId: number,
    talkTheme: string,
  } | null,
};

export type GetTalkThemeQueryVariables = {
  talkId: number,
};

export type GetTalkThemeQuery = {
  getTalkTheme?:  {
    __typename: "talkTheme",
    talkId: number,
    talkTheme: string,
  } | null,
};

export type ListTalkThemesQueryVariables = {
  filter?: TableTalkThemeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTalkThemesQuery = {
  listTalkThemes?:  {
    __typename: "talkThemeConnection",
    items?:  Array< {
      __typename: "talkTheme",
      talkId: number,
      talkTheme: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTalkThemeSubscriptionVariables = {
  talkId?: number | null,
  talkTheme?: string | null,
};

export type OnCreateTalkThemeSubscription = {
  onCreateTalkTheme?:  {
    __typename: "talkTheme",
    talkId: number,
    talkTheme: string,
  } | null,
};

export type OnUpdateTalkThemeSubscriptionVariables = {
  talkId?: number | null,
  talkTheme?: string | null,
};

export type OnUpdateTalkThemeSubscription = {
  onUpdateTalkTheme?:  {
    __typename: "talkTheme",
    talkId: number,
    talkTheme: string,
  } | null,
};

export type OnDeleteTalkThemeSubscriptionVariables = {
  talkId?: number | null,
  talkTheme?: string | null,
};

export type OnDeleteTalkThemeSubscription = {
  onDeleteTalkTheme?:  {
    __typename: "talkTheme",
    talkId: number,
    talkTheme: string,
  } | null,
};
