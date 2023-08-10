/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTalkThemeInput = {
  id?: string | null,
  talkId: number,
  talkTheme?: string | null,
  genre?: string | null,
};

export type ModelTalkThemeConditionInput = {
  talkId?: ModelIntInput | null,
  talkTheme?: ModelStringInput | null,
  genre?: ModelStringInput | null,
  and?: Array< ModelTalkThemeConditionInput | null > | null,
  or?: Array< ModelTalkThemeConditionInput | null > | null,
  not?: ModelTalkThemeConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
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
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type TalkTheme = {
  __typename: "TalkTheme",
  id?: string | null,
  talkId: number,
  talkTheme?: string | null,
  genre?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTalkThemeInput = {
  id: string,
  talkId?: number | null,
  talkTheme?: string | null,
  genre?: string | null,
};

export type DeleteTalkThemeInput = {
  id: string,
};

export type ModelTalkThemeFilterInput = {
  id?: ModelIDInput | null,
  talkId?: ModelIntInput | null,
  talkTheme?: ModelStringInput | null,
  genre?: ModelStringInput | null,
  and?: Array< ModelTalkThemeFilterInput | null > | null,
  or?: Array< ModelTalkThemeFilterInput | null > | null,
  not?: ModelTalkThemeFilterInput | null,
};

export type ModelIDInput = {
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
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTalkThemeConnection = {
  __typename: "ModelTalkThemeConnection",
  items:  Array<TalkTheme | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTalkThemeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  talkId?: ModelSubscriptionIntInput | null,
  talkTheme?: ModelSubscriptionStringInput | null,
  genre?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTalkThemeFilterInput | null > | null,
  or?: Array< ModelSubscriptionTalkThemeFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateTalkThemeMutationVariables = {
  input: CreateTalkThemeInput,
  condition?: ModelTalkThemeConditionInput | null,
};

export type CreateTalkThemeMutation = {
  createTalkTheme?:  {
    __typename: "TalkTheme",
    id?: string | null,
    talkId: number,
    talkTheme?: string | null,
    genre?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTalkThemeMutationVariables = {
  input: UpdateTalkThemeInput,
  condition?: ModelTalkThemeConditionInput | null,
};

export type UpdateTalkThemeMutation = {
  updateTalkTheme?:  {
    __typename: "TalkTheme",
    id?: string | null,
    talkId: number,
    talkTheme?: string | null,
    genre?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTalkThemeMutationVariables = {
  input: DeleteTalkThemeInput,
  condition?: ModelTalkThemeConditionInput | null,
};

export type DeleteTalkThemeMutation = {
  deleteTalkTheme?:  {
    __typename: "TalkTheme",
    id?: string | null,
    talkId: number,
    talkTheme?: string | null,
    genre?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTalkThemeQueryVariables = {
  id: string,
};

export type GetTalkThemeQuery = {
  getTalkTheme?:  {
    __typename: "TalkTheme",
    id?: string | null,
    talkId: number,
    talkTheme?: string | null,
    genre?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTalkThemesQueryVariables = {
  filter?: ModelTalkThemeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTalkThemesQuery = {
  listTalkThemes?:  {
    __typename: "ModelTalkThemeConnection",
    items:  Array< {
      __typename: "TalkTheme",
      id?: string | null,
      talkId: number,
      talkTheme?: string | null,
      genre?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTalkThemeSubscriptionVariables = {
  filter?: ModelSubscriptionTalkThemeFilterInput | null,
};

export type OnCreateTalkThemeSubscription = {
  onCreateTalkTheme?:  {
    __typename: "TalkTheme",
    id?: string | null,
    talkId: number,
    talkTheme?: string | null,
    genre?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTalkThemeSubscriptionVariables = {
  filter?: ModelSubscriptionTalkThemeFilterInput | null,
};

export type OnUpdateTalkThemeSubscription = {
  onUpdateTalkTheme?:  {
    __typename: "TalkTheme",
    id?: string | null,
    talkId: number,
    talkTheme?: string | null,
    genre?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTalkThemeSubscriptionVariables = {
  filter?: ModelSubscriptionTalkThemeFilterInput | null,
};

export type OnDeleteTalkThemeSubscription = {
  onDeleteTalkTheme?:  {
    __typename: "TalkTheme",
    id?: string | null,
    talkId: number,
    talkTheme?: string | null,
    genre?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
