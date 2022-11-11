import { Context, NextFunction } from "../deps.ts";

export default async (ctx: Context, next: NextFunction) => {
  const replyMessage = ctx.message?.reply_to_message;
  if (!replyMessage) {
    if (ctx.message!.is_topic_message) {
      return await ctx.reply(`↪ Reply bilan ko'rsatingchi habarni!`, {
        reply_to_message_id: ctx.message!.message_id,
      });
    } else {
      return await ctx.reply(`↪ Reply bilan ko'rsatingchi habarni!`);
    }
  }
  await next();
};
