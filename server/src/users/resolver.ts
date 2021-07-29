import { Resolver, Query } from 'type-graphql';

@Resolver()
class UserResolver {
  greeting: string;

  constructor() {
    this.greeting = 'hello world';
  }

  @Query(() => String)
  greet() {
    return this.greeting;
  }
}

export { UserResolver };
