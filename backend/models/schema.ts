import { makeExecutableSchema } from 'https://esm.sh/@graphql-tools/schema';
import { gql } from 'https://deno.land/x/graphql_tag/mod.ts';
import {  getUsers,
    hello,
    getUserById,
    createUser,
    updateUser,
    deleteUser, } from '../controllers/graphqlController.ts';
import { typeDefs } from './user.ts';
import { ApolloServer } from "npm:@apollo/server@^4.1";

// const typeDefs = gql`
//   type Query {
//     hello: String
//     users: [User!]!
//   }

//   type User {
//     id: Int
//     username: String
//     password: String
//   }
// `;

const resolvers = {
    Query: {
        hello: hello,
        users: getUsers,
        user: getUserById,
      },
      Mutation: {
        createUser,
        updateUser,
        deleteUser,
      },
};

let server;

export default server = new ApolloServer({
    typeDefs,
    resolvers,
  });
