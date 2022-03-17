import { Context } from "../packages/grammy.ts";
import { aurText, rulesLongText, startText } from "../utils/texts.ts";
import { aurButton, ruleButton, startButton } from "../utils/keyboards.ts";

const start = async (ctx: Context) => {
  switch (ctx.match) {
    case "rules":
      await ctx.reply(rulesLongText, {
        reply_markup: ruleButton,
        parse_mode: "HTML",
      });
      break;
    case "aur":
      await ctx.reply(aurText, {
        reply_markup: aurButton,
        parse_mode: "HTML",
      });
      break;
    default:
      await ctx.reply(startText, {
        reply_markup: startButton,
        parse_mode: "HTML",
      });
      break;
  }
};

export { start };
