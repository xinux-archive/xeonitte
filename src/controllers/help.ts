import { Context } from "../core/deps.ts";
import { helpText } from "../utils/texts.ts";
import { helpButton } from "../utils/keyboards.ts";
import "https://deno.land/x/dotenv/load.ts";

const help = async (ctx: Context) => {
  if (ctx.chat?.id === parseInt(Deno.env.get("GROUP")!.toString())) {
    await ctx.reply(await helpText(true), { parse_mode: "HTML" });
  }

  if (ctx.chat?.id !== parseInt(Deno.env.get("GROUP")!.toString())) {
    await ctx.reply(await helpText(false), {
      reply_markup: helpButton,
      parse_mode: "HTML",
    });
  }
};

export { help };
