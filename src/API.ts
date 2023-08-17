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
  id: string,
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

export type SearchableTalkThemeFilterInput = {
  id?: SearchableIDFilterInput | null,
  talkId?: SearchableIntFilterInput | null,
  talkTheme?: SearchableStringFilterInput | null,
  genre?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableTalkThemeFilterInput | null > | null,
  or?: Array< SearchableTalkThemeFilterInput | null > | null,
  not?: SearchableTalkThemeFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableTalkThemeSortInput = {
  field?: SearchableTalkThemeSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableTalkThemeSortableFields {
  id = "id",
  talkId = "talkId",
  talkTheme = "talkTheme",
  genre = "genre",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableTalkThemeAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableTalkThemeAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableTalkThemeAggregateField {
  id = "id",
  talkId = "talkId",
  talkTheme = "talkTheme",
  genre = "genre",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableTalkThemeConnection = {
  __typename: "SearchableTalkThemeConnection",
  items:  Array<TalkTheme | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
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
    id: string,
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
    id: string,
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
    id: string,
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
    id: string,
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
      id: string,
      talkId: number,
      talkTheme?: string | null,
      genre?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchTalkThemesQueryVariables = {
  filter?: SearchableTalkThemeFilterInput | null,
  sort?: Array< SearchableTalkThemeSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableTalkThemeAggregationInput | null > | null,
};

export type SearchTalkThemesQuery = {
  searchTalkThemes?:  {
    __typename: "SearchableTalkThemeConnection",
    items:  Array< {
      __typename: "TalkTheme",
      id: string,
      talkId: number,
      talkTheme?: string | null,
      genre?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type OnCreateTalkThemeSubscriptionVariables = {
  filter?: ModelSubscriptionTalkThemeFilterInput | null,
};

export type OnCreateTalkThemeSubscription = {
  onCreateTalkTheme?:  {
    __typename: "TalkTheme",
    id: string,
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
    id: string,
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
    id: string,
    talkId: number,
    talkTheme?: string | null,
    genre?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
