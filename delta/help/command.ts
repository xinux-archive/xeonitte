import { composer, env, middleware } from "../../core.ts";
import { Context } from "../../deps.ts";
import * as resource from "./resource.ts";

composer.command("help", async (ctx: Context): Promise<void> => {
  if (ctx.chat?.id === parseInt(env("GROUP") || "")) {
    await ctx.reply(await resource.message(true));
  }

  if (ctx.chat?.id !== parseInt(env("GROUP") || "")) {
    await ctx.reply(await resource.message(false), {
      reply_markup: resource.keyboard,
    });
  }
});

middleware(composer);
