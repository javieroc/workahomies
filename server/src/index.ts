import 'reflect-metadata';
// import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './users';

(async () => {
  // const connection = await createConnection();
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });
  const server = new ApolloServer({ schema });
  const { url } = await server.listen(4000);
  console.log(`🚀  Server ready at ${url}`);
})();
