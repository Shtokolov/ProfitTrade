import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  marginTrade(): string {
    return 'marginTrade';
  }

  @Query(() => String)
  spotTrade(): string {
    return 'success';
  }
}
