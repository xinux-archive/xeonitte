import { Context, NextFunction } from "../deps.ts";

export default async (ctx: Context, next: NextFunction) => {
  if (ctx.message!.from!.id! !== -1001595112569) {
    return await ctx.reply(`⚠️ Bu komanda faqat Xinux Asoschisi uchun!`);
  }
  await next();
};
