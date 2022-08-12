import { Context, NextFunction } from "../deps.ts";

export default async (ctx: Context, next: NextFunction) => {
  console.log(ctx.message!.reply_to_message!.from!.id)
  if (ctx.message!.from!.id! !== 756870298) {
    return await ctx.reply(`⚠️ Bu komanda faqat Xinux Asoschisi uchun!`);
  }
  await next();
};
