import { Context, InlineKeyboard, NextFunction } from "../deps.ts";

export default async (ctx: Context, next: NextFunction) => {
  if (ctx.chat!.id !== -1001174263940) {
    if (ctx.message!.is_topic_message) {
      return await ctx.reply(`⚠️ Bu komanda faqat o'zimizni guruh uchun`, {
        message_thread_id: ctx.message!.message_thread_id,
        reply_markup: new InlineKeyboard().url(
          `Guruhimizga o'ting`,
          `https://t.me/xinuxuz`,
        ),
      });
    } else {
      return await ctx.reply(`⚠️ Bu komanda faqat o'zimizni guruh uchun`, {
        reply_markup: new InlineKeyboard().url(
          `Guruhimizga o'ting`,
          `https://t.me/xinuxuz`,
        ),
      });
    }
  }
  await next();
};
