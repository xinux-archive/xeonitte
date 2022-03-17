import { Context, NextFunction } from "../packages/grammy.ts";

const deleteMessage = async (ctx: Context, next: NextFunction) => {
  await ctx.deleteMessage();
  await next();
};

export { deleteMessage };
