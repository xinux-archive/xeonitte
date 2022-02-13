import { Context, NextFunction } from "../core/deps.ts";
import { bot } from "../core/bot.ts";

bot.on("message", async (ctx: Context, next: NextFunction) => {
  if (ctx.from?.username === "Channel_Bot") return await ctx.deleteMessage();
  await next();
});
