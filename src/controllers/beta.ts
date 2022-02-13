import { Context } from "../core/deps.ts";
import { betaText } from "../utils/texts.ts";
import { betaButton } from "../utils/keyboards.ts";

const beta = async (ctx: Context) => {
  await ctx.reply(betaText, { reply_markup: betaButton, parse_mode: "HTML" });
};

export { beta };
