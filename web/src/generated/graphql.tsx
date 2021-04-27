import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type FieldError = {
  __typename?: "FieldError";
  field: Scalars["String"];
  message: Scalars["String"];
};

/** Cooking times */
export enum GqlCookingTime {
  Fast = "FAST",
  Medium = "MEDIUM",
  Slow = "SLOW",
}

/** Prices */
export enum GqlPrice {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
}

export type Mutation = {
  __typename?: "Mutation";
  register: UserResponse;
  login: UserResponse;
  logout: Scalars["Boolean"];
  createRecipe?: Maybe<Recipe>;
  updateRecipe?: Maybe<Recipe>;
  deleteRecipe: Scalars["Boolean"];
};

export type MutationRegisterArgs = {
  password: Scalars["String"];
  username: Scalars["String"];
};

export type MutationLoginArgs = {
  password: Scalars["String"];
  username: Scalars["String"];
};

export type MutationCreateRecipeArgs = {
  recipeInput: RecipeInput;
};

export type MutationUpdateRecipeArgs = {
  updateRecipeInput: UpdateRecipeInput;
  id: Scalars["Int"];
};

export type MutationDeleteRecipeArgs = {
  id: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  me?: Maybe<User>;
  recipe?: Maybe<Recipe>;
  recipes: Array<Recipe>;
};

export type QueryRecipeArgs = {
  id: Scalars["Int"];
};

export type Recipe = {
  __typename?: "Recipe";
  id: Scalars["Float"];
  name: Scalars["String"];
  ingredients: Array<Scalars["String"]>;
  cuisine: Scalars["String"];
  cookingTime: Scalars["String"];
  price: Scalars["String"];
  creatorId: Scalars["Float"];
  creator: User;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type RecipeInput = {
  name: Scalars["String"];
  ingredients: Array<Scalars["String"]>;
  cuisine: Scalars["String"];
  cookingTime: GqlCookingTime;
  price: GqlPrice;
};

export type UpdateRecipeInput = {
  name?: Maybe<Scalars["String"]>;
  ingredients?: Maybe<Array<Scalars["String"]>>;
  cuisine?: Maybe<Scalars["String"]>;
  cookingTime?: Maybe<GqlCookingTime>;
  price?: Maybe<GqlPrice>;
};

export type User = {
  __typename?: "User";
  id: Scalars["Float"];
  username: Scalars["String"];
  recipes: Recipe;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type UserResponse = {
  __typename?: "UserResponse";
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type CreateRecipeMutationVariables = Exact<{
  name: Scalars["String"];
  ingredients: Array<Scalars["String"]> | Scalars["String"];
  cuisine: Scalars["String"];
  cookingTime: GqlCookingTime;
  price: GqlPrice;
}>;

export type CreateRecipeMutation = { __typename?: "Mutation" } & {
  createRecipe?: Maybe<
    { __typename?: "Recipe" } & Pick<
      Recipe,
      "id" | "name" | "ingredients" | "cuisine" | "cookingTime" | "price"
    > & { creator: { __typename?: "User" } & Pick<User, "id" | "username"> }
  >;
};

export type DeleteRecipeMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteRecipeMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteRecipe"
>;

export type LoginMutationVariables = Exact<{
  username: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
  login: { __typename?: "UserResponse" } & {
    errors?: Maybe<
      Array<
        { __typename?: "FieldError" } & Pick<FieldError, "field" | "message">
      >
    >;
    user?: Maybe<{ __typename?: "User" } & Pick<User, "id" | "username">>;
  };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "logout"
>;

export type RegisterMutationVariables = Exact<{
  username: Scalars["String"];
  password: Scalars["String"];
}>;

export type RegisterMutation = { __typename?: "Mutation" } & {
  register: { __typename?: "UserResponse" } & {
    errors?: Maybe<
      Array<
        { __typename?: "FieldError" } & Pick<FieldError, "field" | "message">
      >
    >;
    user?: Maybe<{ __typename?: "User" } & Pick<User, "id" | "username">>;
  };
};

export type UpdateRecipeMutationVariables = Exact<{
  id: Scalars["Int"];
  updateRecipeInput: UpdateRecipeInput;
}>;

export type UpdateRecipeMutation = { __typename?: "Mutation" } & {
  updateRecipe?: Maybe<
    { __typename?: "Recipe" } & Pick<
      Recipe,
      "name" | "ingredients" | "cuisine" | "cookingTime" | "price"
    > & { creator: { __typename?: "User" } & Pick<User, "id" | "username"> }
  >;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: "Query" } & {
  me?: Maybe<{ __typename?: "User" } & Pick<User, "id" | "username">>;
};

export type RecipeQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type RecipeQuery = { __typename?: "Query" } & {
  recipe?: Maybe<
    { __typename?: "Recipe" } & Pick<
      Recipe,
      "id" | "name" | "ingredients" | "cuisine" | "cookingTime" | "price"
    > & { creator: { __typename?: "User" } & Pick<User, "id" | "username"> }
  >;
};

export type RecipesQueryVariables = Exact<{ [key: string]: never }>;

export type RecipesQuery = { __typename?: "Query" } & {
  recipes: Array<
    { __typename?: "Recipe" } & Pick<
      Recipe,
      "id" | "name" | "cuisine" | "price" | "ingredients" | "cookingTime"
    > & { creator: { __typename?: "User" } & Pick<User, "id" | "username"> }
  >;
};

export const CreateRecipeDocument = gql`
  mutation CreateRecipe(
    $name: String!
    $ingredients: [String!]!
    $cuisine: String!
    $cookingTime: GQLCookingTime!
    $price: GQLPrice!
  ) {
    createRecipe(
      recipeInput: {
        name: $name
        ingredients: $ingredients
        cuisine: $cuisine
        cookingTime: $cookingTime
        price: $price
      }
    ) {
      id
      name
      ingredients
      cuisine
      cookingTime
      price
      creator {
        id
        username
      }
    }
  }
`;
export type CreateRecipeMutationFn = Apollo.MutationFunction<
  CreateRecipeMutation,
  CreateRecipeMutationVariables
>;

/**
 * __useCreateRecipeMutation__
 *
 * To run a mutation, you first call `useCreateRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecipeMutation, { data, loading, error }] = useCreateRecipeMutation({
 *   variables: {
 *      name: // value for 'name'
 *      ingredients: // value for 'ingredients'
 *      cuisine: // value for 'cuisine'
 *      cookingTime: // value for 'cookingTime'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useCreateRecipeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateRecipeMutation,
    CreateRecipeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateRecipeMutation,
    CreateRecipeMutationVariables
  >(CreateRecipeDocument, options);
}
export type CreateRecipeMutationHookResult = ReturnType<
  typeof useCreateRecipeMutation
>;
export type CreateRecipeMutationResult = Apollo.MutationResult<CreateRecipeMutation>;
export type CreateRecipeMutationOptions = Apollo.BaseMutationOptions<
  CreateRecipeMutation,
  CreateRecipeMutationVariables
>;
export const DeleteRecipeDocument = gql`
  mutation DeleteRecipe($id: Int!) {
    deleteRecipe(id: $id)
  }
`;
export type DeleteRecipeMutationFn = Apollo.MutationFunction<
  DeleteRecipeMutation,
  DeleteRecipeMutationVariables
>;

/**
 * __useDeleteRecipeMutation__
 *
 * To run a mutation, you first call `useDeleteRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRecipeMutation, { data, loading, error }] = useDeleteRecipeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRecipeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteRecipeMutation,
    DeleteRecipeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteRecipeMutation,
    DeleteRecipeMutationVariables
  >(DeleteRecipeDocument, options);
}
export type DeleteRecipeMutationHookResult = ReturnType<
  typeof useDeleteRecipeMutation
>;
export type DeleteRecipeMutationResult = Apollo.MutationResult<DeleteRecipeMutation>;
export type DeleteRecipeMutationOptions = Apollo.BaseMutationOptions<
  DeleteRecipeMutation,
  DeleteRecipeMutationVariables
>;
export const LoginDocument = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      errors {
        field
        message
      }
      user {
        id
        username
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($username: String!, $password: String!) {
    register(username: $username, password: $password) {
      errors {
        field
        message
      }
      user {
        id
        username
      }
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const UpdateRecipeDocument = gql`
  mutation UpdateRecipe($id: Int!, $updateRecipeInput: UpdateRecipeInput!) {
    updateRecipe(id: $id, updateRecipeInput: $updateRecipeInput) {
      name
      ingredients
      cuisine
      cookingTime
      price
      creator {
        id
        username
      }
    }
  }
`;
export type UpdateRecipeMutationFn = Apollo.MutationFunction<
  UpdateRecipeMutation,
  UpdateRecipeMutationVariables
>;

/**
 * __useUpdateRecipeMutation__
 *
 * To run a mutation, you first call `useUpdateRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRecipeMutation, { data, loading, error }] = useUpdateRecipeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updateRecipeInput: // value for 'updateRecipeInput'
 *   },
 * });
 */
export function useUpdateRecipeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateRecipeMutation,
    UpdateRecipeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateRecipeMutation,
    UpdateRecipeMutationVariables
  >(UpdateRecipeDocument, options);
}
export type UpdateRecipeMutationHookResult = ReturnType<
  typeof useUpdateRecipeMutation
>;
export type UpdateRecipeMutationResult = Apollo.MutationResult<UpdateRecipeMutation>;
export type UpdateRecipeMutationOptions = Apollo.BaseMutationOptions<
  UpdateRecipeMutation,
  UpdateRecipeMutationVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RecipeDocument = gql`
  query Recipe($id: Int!) {
    recipe(id: $id) {
      id
      name
      ingredients
      cuisine
      cookingTime
      price
      creator {
        id
        username
      }
    }
  }
`;

/**
 * __useRecipeQuery__
 *
 * To run a query within a React component, call `useRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRecipeQuery(
  baseOptions: Apollo.QueryHookOptions<RecipeQuery, RecipeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RecipeQuery, RecipeQueryVariables>(
    RecipeDocument,
    options
  );
}
export function useRecipeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RecipeQuery, RecipeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RecipeQuery, RecipeQueryVariables>(
    RecipeDocument,
    options
  );
}
export type RecipeQueryHookResult = ReturnType<typeof useRecipeQuery>;
export type RecipeLazyQueryHookResult = ReturnType<typeof useRecipeLazyQuery>;
export type RecipeQueryResult = Apollo.QueryResult<
  RecipeQuery,
  RecipeQueryVariables
>;
export const RecipesDocument = gql`
  query Recipes {
    recipes {
      id
      name
      cuisine
      price
      ingredients
      cookingTime
      creator {
        id
        username
      }
    }
  }
`;

/**
 * __useRecipesQuery__
 *
 * To run a query within a React component, call `useRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecipesQuery(
  baseOptions?: Apollo.QueryHookOptions<RecipesQuery, RecipesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RecipesQuery, RecipesQueryVariables>(
    RecipesDocument,
    options
  );
}
export function useRecipesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RecipesQuery, RecipesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RecipesQuery, RecipesQueryVariables>(
    RecipesDocument,
    options
  );
}
export type RecipesQueryHookResult = ReturnType<typeof useRecipesQuery>;
export type RecipesLazyQueryHookResult = ReturnType<typeof useRecipesLazyQuery>;
export type RecipesQueryResult = Apollo.QueryResult<
  RecipesQuery,
  RecipesQueryVariables
>;
