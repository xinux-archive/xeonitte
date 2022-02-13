import { Context } from "../core/deps.ts";
import { rulesText } from "../utils/texts.ts";
import { rulesButton } from "../utils/keyboards.ts";

const rules = async (ctx: Context) => {
  await ctx.reply(rulesText, { reply_markup: rulesButton, parse_mode: "HTML" });
};

export { rules };
