import isReply from "../hooks/isReply.ts";
import topics from "../topics.json" assert { type: "json" };
import { Composer, Context, InlineKeyboard } from "../deps.ts";

const composer = new Composer();

composer.hears(
  /^\/warn (.*)$/ig,
  isReply,
  async (ctx: Context): Promise<void> => {
    if (ctx?.message?.reply_to_message?.from?.id === ctx.me.id) {
      if (ctx.message)
      return await ctx.reply(`Ha-ha... yaxshi urinish!`, {
        parse_mode: "HTML",
      });
    }

    const requestedTopic = ctx.match[1];
    if (!Object.keys(topics).includes(requestedTopic)) {
      return await ctx.reply(`Ha-ha... yaxshi urinish!`, {
        parse_mode: "HTML",
      });
    }

    await ctx.api.deleteMessage(
      ctx.message!.chat!.id,
      ctx.message!.reply_to_message!.message_id,
    );

    await ctx.api.deleteMessage(
      ctx.message!.chat!.id,
      ctx.message!.message_id,
    );

    const text =
      `<b>Hurmatli <a href="tg://user?id=${ctx?.message?.reply_to_message?.from?.id}">${ctx?.message?.reply_to_message?.from?.first_name}</a>,</b>` +
      `\n` +
      `\n` +
      `Tushunishim bo'yicha siz mavzudan chetlayashayabsiz. Iltimos, ` +
      `quyidagi tugmachani bosish orqali bizning offtop guruhga o'tib oling! ` +
      `Offtopic guruhimizda istalgan mavzuda suhbatlashish ruxsat etiladi. Boshqalarga halaqit qilmayliga 😉` +
      `\n` +
      `\n` +
      `<b>Hurmat ila, Xeonitte (Kseyonita)</b>`;

    if (ctx.message!.is_topic_message) {
      await ctx.reply(text, {
        message_thread_id: ctx.message!.message_thread_id,
        parse_mode: "HTML",
        reply_markup: new InlineKeyboard().url(
          `Offtop Chat`,
          `https://t.me/xinuxuz/178666`,
        ),
      });
    } else {
      await ctx.reply(text, {
        parse_mode: "HTML",
        reply_markup: new InlineKeyboard().url(
          `Offtop Chat`,
          `https://t.me/xinuxuz/178666`,
        ),
      });
    }
  },
);

composer.command("doc", isReply, async (ctx: Context): Promise<void> => {
  if (ctx?.message?.reply_to_message?.from?.id === ctx.me.id) {
    await ctx.reply(`Ha-ha... yaxshi urinish!`, {
      parse_mode: "HTML",
    });
  } else {
    const text =
      `<b>Demak, <a href="tg://user?id=${ctx?.message?.reply_to_message?.from?.id}">${ctx?.message?.reply_to_message?.from?.first_name}</a>,</b>` +
      `\n` +
      `\n` +
      `<i>Bir bor ekan, bir yo'q ekan... Qadim o'tgan zamonlarda dokumentatsiya ` +
      `bo'lgan ekan. Aytishlariga qaraganda, undan deyarli hamma savollarga ` +
      `javob olsa bo'larkanda. Yanachi, unga avtorlar shunchalik ko'p vaqt ajratishar ` +
      `ekanu, lekin uni sanoqligina odam o'qisharkan. Attang...</i>`;

    if (ctx.message!.is_topic_message) {
      await ctx.reply(text, {
        message_thread_id: ctx.message!.message_thread_id,
        parse_mode: "HTML",
      });
    } else {
      await ctx.reply(text, {
        parse_mode: "HTML",
      });
    }
  }
});

export default composer;
