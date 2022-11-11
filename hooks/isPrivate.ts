import { Context, InlineKeyboard, NextFunction } from "../deps.ts";

export default async (ctx: Context, next: NextFunction) => {
  if (ctx.message!.is_topic_message) {
    if (ctx.chat!.type !== "private") {
      return await ctx.reply(`⚠️ Bu komanda faqat shaxsiy chat uchun!`, {
        message_thread_id: ctx.message!.message_thread_id,
        reply_markup: new InlineKeyboard().url(
          `Shaxsiy Chat`,
          `https://t.me/xeonittebot`,
        ),
      });
    }
  } else {
    if (ctx.chat!.type !== "private") {
      return await ctx.reply(`⚠️ Bu komanda faqat shaxsiy chat uchun!`, {
        reply_markup: new InlineKeyboard().url(
          `Shaxsiy Chat`,
          `https://t.me/xeonittebot`,
        ),
      });
    }
  }


  await next();
};
