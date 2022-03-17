import { Context } from "../packages/grammy.ts";
import { rulesText } from "../utils/texts.ts";
import { rulesButton } from "../utils/keyboards.ts";

const newMember = async (ctx: Context) => {
  await ctx.reply(rulesText, { parse_mode: "HTML", reply_markup: rulesButton });
};

export { newMember };
