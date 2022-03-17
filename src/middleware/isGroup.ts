import { Context, NextFunction } from "../packages/grammy.ts";
import { isGroupText } from "../utils/texts.ts";

const isGroup = async (ctx: Context, next: NextFunction) => {
  if (ctx.chat!.type === "private") return await ctx.reply(isGroupText);
  await next();
};

export { isGroup };
