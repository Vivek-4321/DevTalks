// import { config } from 'https://deno.land/x/dotenv/mod.ts';
// import graphqlRouter from './routes/graphqlRouter.ts';
// import { Application } from 'https://deno.land/x/oak/mod.ts';

// const envVars = config();

// const app = new Application();

// app.use(graphqlRouter.routes());
// app.use(graphqlRouter.allowedMethods());

// console.log('Server is running on http://localhost:3000');
// await app.listen({ port: 3000 });

import { ApolloServer } from "npm:@apollo/server@^4.1";
import server from './models/schema.ts';
import { startStandaloneServer } from "npm:@apollo/server@4.1/standalone";

const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 },
});

console.log(`Server running on: ${url}`);