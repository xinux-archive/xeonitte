import { composer, middleware } from "../../core.ts";
import { Context } from "../../deps.ts";
import * as resource from "./resource.ts";

composer.command("start", async (ctx: Context): Promise<void> => {
  await ctx.reply(resource.message, {
    parse_mode: "HTML",
    reply_markup: resource.keyboard,
  });
});

middleware(composer);
