import { Router, Context } from 'https://deno.land/x/oak/mod.ts';
import { GraphQLHTTP } from 'https://deno.land/x/gql/mod.ts';
import { schema } from '../models/schema.ts';
import { getUsers,
    hello,
    getUserById,
    createUser,
    updateUser,
    deleteUser,  } from '../controllers/graphqlController.ts';

const router = new Router();

router.post('/graphql', async (ctx: Context) => {
  const { request, response } = ctx;
  const result = await GraphQLHTTP<Request>({
    schema,
    graphiql: true,
  })(request.serverRequest);
  response.status = result.status;
  response.body = result.body;
});

router.get('/users', async (ctx: Context) => {
  const { response } = ctx;
  const users = await getUsers();
  response.body = users;
});

router.get('/hello', async (ctx: Context) => {
  const { response } = ctx;
  const message = hello();
  response.body = message;
});


router.post('/users', async (ctx: Context) => {
    const { request, response } = ctx;
    const newUser = await request.body().value; // Assuming the request body contains the new user data
    
    try {
      const createdUser = await createUser(null, newUser);
      response.body = createdUser;
    } catch (error) {
      response.status = 500;
      response.body = { error: 'Failed to create user' };
    }
  });
  
  router.post('/users/:id', async (ctx: Context) => {
    const { request, response, params } = ctx;
    const userId = params.id;
    const {username, password} = await request.body().value; // Assuming the request body contains the updated user data
    const result = await updateUser(null, {userId, username, password});
    response.body = result;
  });
  
  router.delete('/users/:id', async (ctx: Context) => {
    const { response, params } = ctx;
    const userId = params.id;
    await deleteUser(userId);
    response.body = 'User deleted successfully';
  });

export default router;
