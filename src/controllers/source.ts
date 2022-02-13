import { Context } from "../core/deps.ts";
import { sourceText } from "../utils/texts.ts";
import { sourceButton } from "../utils/keyboards.ts";

const source = async (ctx: Context) => {
  await ctx.reply(sourceText, {
    parse_mode: "HTML",
    reply_markup: sourceButton,
  });
};

export { source };
