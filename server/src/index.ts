import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
// import { buildSchema } from 'type-graphql';

async function main() {
  const connection = await createConnection();
  // const schema = await buildSchema();
  const server = new ApolloServer({ });
  await server.listen(4000);
  console.log('Server has started!');
}