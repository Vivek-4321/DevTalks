import { gql } from 'https://deno.land/x/graphql_tag/mod.ts';

export const typeDefs = gql`
type Query {
  hello: String
  users: [User!]!
  user(id: ID!): User
}

type User {
  id: Int
  username: String
  password: String
}

type Mutation {
    createUser(username: String!, password: String!): User
  updateUser(id: Int!, username: String!, password: String!): User
  deleteUser(id: Int!): User
}

input CreateUserInput {
  username: String!
  password: String!
}

input UpdateUserInput {
  username: String
  password: String
}
`;