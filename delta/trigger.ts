// deno-lint-ignore-file no-explicit-any
import isReply from "../hooks/isReply.ts";
import topics from "../topics.json" assert { type: "json" };
import { Composer, Context, InlineKeyboard } from "../deps.ts";

const composer = new Composer();

type Topics = { [key: string]: string };

composer.hears(
  /^\/warn (.+)$/i,
  isReply,
  async (ctx: Context): Promise<any> => {
    if (!ctx.message!.is_topic_message) {
      return await ctx.reply(`Biz topicda emasmiz bu komandani ishlatish uchun!`, {
        parse_mode: "HTML",
      });
    }

    if (ctx?.message?.reply_to_message?.from?.id === ctx.me.id) {
      if (ctx.message) {
        return await ctx.reply(`Ha-ha... yaxshi urinish!`, {
          reply_to_message_id: ctx.message!.message_id,
          parse_mode: "HTML",
        });
      }
    }

    const requestedTopic: string = ctx.match![1];
    const registeredTopics: Topics = topics;

    if (!Object.keys(topics).includes(requestedTopic)) {
      return await ctx.reply(
        `<b>Bunaqangi topic bizda borga o'xshamaydiyov... Bizda faqat ushbu topiclar mavjud:</b>` +
          `\n` + `<i>${Object.keys(registeredTopics).join(" | ")}</i>`,
        {
          reply_to_message_id: ctx.message!.message_id,
          parse_mode: "HTML",
        },
      );
    }

    await ctx.api.deleteMessage(
      ctx.message!.chat!.id,
      ctx.message!.reply_to_message!.message_id,
    );

    await ctx.api.deleteMessage(
      ctx.message!.chat!.id,
      ctx.message!.message_id,
    );

    const requestedTopicURL = registeredTopics[requestedTopic];

    const text =
      `<b>Hurmatli <a href="tg://user?id=${ctx?.message?.reply_to_message?.from?.id}">${ctx?.message?.reply_to_message?.from?.first_name}</a>,</b>` +
      `\n` +
      `\n` +
      `Tushunishim bo'yicha siz mavzudan chetlayashayabsiz. Iltimos, ` +
      `quyidagi tugmachani bosish orqali bizning ${requestedTopic} guruhga o'tib oling! ` +
      `${requestedTopic} guruhimizda ushbu mavzuda suhbatlashish ruxsat etiladi. Boshqalarga halaqit qilmayliga 😉` +
      `\n` +
      `\n` +
      `<b>Hurmat ila, Xeonitte (Kseyonita)</b>`;

    if (ctx.message!.is_topic_message) {
      await ctx.reply(text, {
        message_thread_id: ctx.message!.message_thread_id,
        parse_mode: "HTML",
        reply_markup: new InlineKeyboard().url(
          `${requestedTopic} Chat`,
          `${requestedTopicURL}`,
        ),
      });
    } else {
      await ctx.reply(text, {
        parse_mode: "HTML",
        reply_markup: new InlineKeyboard().url(
          `${requestedTopic} Chat`,
          `${requestedTopicURL}`,
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
