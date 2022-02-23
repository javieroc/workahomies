import { Resolver, Query } from 'type-graphql';

@Resolver()
class HostResolver {
  greeting: string;

  constructor() {
    this.greeting = 'hello world';
  }

  @Query(() => String)
  greet() {
    return this.greeting;
  }
}

export { HostResolver };
