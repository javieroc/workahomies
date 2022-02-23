import 'reflect-metadata';
// import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { HostResolver } from './features';

(async () => {
  // const connection = await createConnection();
  const schema = await buildSchema({
    resolvers: [HostResolver],
  });
  const server = new ApolloServer({ schema });
  const { url } = await server.listen(4000);
  console.log(`🚀  Server ready at ${url}`);
})();
