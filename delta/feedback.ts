import { Composer, Context, InlineKeyboard } from "../deps.ts";
import isPrivate from "../hooks/isPrivate.ts";
import { bot } from "../core.ts";

const composer = new Composer();

export const message =
  `<b>Xinux distributivi haqida o'z fikringizni yozib qoldiring!</b>` +
  `\n` +
  `\n` +
  `Bizga o'z fikringizni yozib qoldirganingiz uchun keltirilgan ` +
  `misoldagiday o'zingizga o'zgartirib yozing jo'nating:` +
  `\n` +
  `\n` +
  `<code>/feedback fikr</code>` +
  `\n` +
  `\n` +
  `<b>Misol:</b>` +
  `\n` +
  `<code>/feedback distributiv yaxshi ammo ...</code>`;

export const thankYou = (ctx: Context) =>
  `<b>Hurmatli ${ctx.from!.first_name}!</b> \n` +
  `\n` +
  `Bizga o'z fikringizni yozib qoldirganingiz uchun o'z ` +
  `minnatdorchiligimizni bildiramiz. Ushbu fikr va kamchiliklar ` +
  `tez orada muhokama qilib bo'lishimiz bilanoq kuchga kiritishga ` +
  `harakat qilami!`;

export const keyboard = new InlineKeyboard().url(
  `Hamma fikr va kamchiliklar`,
  `https://t.me/xinux_feedbacks`,
);

const channelID = -1001721970552;

composer.hears(
  /\/feedback(.*)/ig,
  isPrivate,
  async (ctx: Context): Promise<void> => {
    const feedback = ctx.match![1].trim();

    if (feedback) {
      await ctx.forwardMessage(channelID);

      await ctx.reply(thankYou(ctx), {
        parse_mode: "HTML",
        reply_markup: keyboard,
      });
    } else {
      await ctx.reply(message, {
        parse_mode: "HTML",
      });
    }
  },
);

export default composer;
