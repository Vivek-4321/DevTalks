import { Server } from "https://deno.land/std@0.166.0/http/server.ts";
import { GraphQLHTTP } from "https://deno.land/x/gql@1.1.2/mod.ts";
import { makeExecutableSchema } from "https://deno.land/x/graphql_tools@0.0.2/mod.ts";
import { gql } from "https://deno.land/x/graphql_tag@0.0.1/mod.ts";
import { PrismaClient } from './database/generated/client/deno/edge.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const envVars = config();


const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

const typeDefs = gql`

type User {
  id: Int 
  username: String
  password: String
}
  type Query {
    hello: String
    users: [User!]!
  }
`;

const resolvers = {
  Query: {
    hello: () => `Hello, World!`,
    users: async () => {
      return await prisma.user.findMany();
    },
  },
};

const schema = makeExecutableSchema({ resolvers, typeDefs });

const server = new Server({
  handler: async (req) => {
    const { pathname } = new URL(req.url);

    return pathname === "/graphql"
      ? await GraphQLHTTP<Request>({
        schema,
        graphiql: true,
      })(req)
      : new Response("Not Found", { status: 404 });
  },
  port: 3000,
});

server.listenAndServe();