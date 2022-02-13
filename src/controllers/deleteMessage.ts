import { Context, NextFunction } from "../core/deps.ts";

const deleteMessage = async (ctx: Context, next: NextFunction) => {
  await ctx.deleteMessage();
  await next();
};

export { deleteMessage };
