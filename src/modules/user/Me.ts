import { Resolver, Query, Ctx } from 'type-graphql';

import User from '../../entity/User';
import MyContext from 'src/types/MyContext';

@Resolver()
class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: MyContext): Promise<User | undefined> {
    if (!ctx.req.session!.userId) return undefined;

    return User.findOne(ctx.req.session!.userId);
  }
}

export default MeResolver;
