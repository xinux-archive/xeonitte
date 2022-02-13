import { Context } from "../core/deps.ts";
import { docText } from "../utils/texts.ts";
import { startButton } from "../utils/keyboards.ts";

const doc = async (ctx: Context) => {
  await ctx.reply(docText(ctx), {
    reply_markup: startButton,
    parse_mode: "HTML",
  });
};

export { doc };
