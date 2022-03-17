import { Context, NextFunction } from "../packages/grammy.ts";
import { notFoundReply } from "../utils/texts.ts";

const isReply = async (ctx: Context, next: NextFunction) => {
  const replyMessage = ctx.message?.reply_to_message;
  if (!replyMessage) return await ctx.reply(notFoundReply);
  await next();
};

export { isReply };
