import { Context, NextFunction } from "../deps.ts";

export default async (ctx: Context, next: NextFunction) => {
  if (ctx.message!.from!.id! !== 756870298) {
    if (ctx.message!.is_topic_message) {
      return await ctx.reply(`⚠️ Bu komanda faqat Xinux Asoschisi uchun!`, {
        message_thread_id: ctx.message!.message_thread_id,
      });
    } else {
      return await ctx.reply(`⚠️ Bu komanda faqat Xinux Asoschisi uchun!`);
    }
  }
  await next();
};
