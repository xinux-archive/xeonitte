import { Composer, Context, InlineKeyboard, Search } from "../deps.ts";
import normalize from "../utils/normalize.ts";
import tldr from "../utils/tldr.ts";

const composer = new Composer();

composer.inlineQuery(/^(?!\/tldr)(.*)/ig, async (ctx: Context) => {
  if (ctx.inlineQuery?.query) {
    const request = await Search.search(ctx.inlineQuery?.query);

    if (request.length === 0) {
      return await ctx.answerInlineQuery([{
        type: "article",
        id: "404",
        title: "Xatolik yuz berdi!",
        description: `Ushbu ${ctx.inlineQuery?.query} ga oid natija topilmadi!`,
        reply_markup: new InlineKeyboard().switchInlineCurrent(
          "Qayta urinib ko'ramizmi?",
          "foobar",
        ),
        input_message_content: {
          message_text:
            `<b>"${ctx.inlineQuery?.query}" ga oid natija mavjud emas!</b>` +
            `\n` +
            `Iltimos, boshqattan ushbu qidirmoqchi bo'lgan paketingiz yozib qidirib ko'ring.`,
          parse_mode: "HTML",
        },
      }]);
    }

    return await ctx.answerInlineQuery(
      request.slice(0, 49).map((item) => ({
        type: "article",
        id: crypto.randomUUID(),
        title: item.name,
        url: normalize(item),
        description: item.desc,
        reply_markup: new InlineKeyboard().url(`Web Sahifasi`, normalize(item)),
        input_message_content: {
          message_text: `<b>Nomi:</b> ${item.name}` +
            `\n` +
            (item.version &&
              "<b>Versiyasi:</b> " + item.version + `\n`) +
            (item.desc && "<b>Ma'lumot:</b> " + item.desc + `\n`) +
            (item.repo ? "<b>Repozitoriya:</b> " + item.repo + `\n` : "") +
            (item.updated &&
              "<b>O'zgartirilgan:</b> " +
                `${new Date(item.updated).toLocaleString()}` +
                `\n`) +
            `\n` +
            `<b>O'rnatish uchun:</b>` +
            `\n` +
            `<code>${item.install}</code>`,
          parse_mode: "HTML",
        },
      })),
    );
  }

  if (!ctx.inlineQuery?.query) {
    return await ctx.answerInlineQuery([{
      type: "article",
      id: "101",
      title: "Qidirishni boshlang!",
      description: "Qidirmoqchi bo'lgan paketingiz nomini yozing!",
      reply_markup: new InlineKeyboard().switchInlineCurrent(
        "Qayta urinib ko'ramizmi?",
        "foobar",
      ),
      input_message_content: {
        message_text: `<b>Salom foydalanuvchi!</b>` +
          `\n` +
          `Siz inline rejim ishga tushurdingiz. Ushbu qulaylik yordamida siz AUR ` +
          `web sahifasiga kirmasdan turib telegramdan AUR dasturlar va paketlarni ` +
          `qidirish imkoniga ega bo'lasiz! Qidirishni boshlash uchun ` +
          `\n` +
          `<code>@xeonittebot &lt;paket nomi&gt;</code>` +
          `\n` +
          `yozasiz`,
        parse_mode: "HTML",
      },
    }]);
  }
});

composer.inlineQuery(/^\/tldr (.*)/ig, async (ctx: Context) => {
  const query = ctx.inlineQuery?.query.slice(6);

  if (query) {
    const pages = await tldr(query.toLowerCase());

    if (pages.length === 0) {
      return await ctx.answerInlineQuery([{
        type: "article",
        id: "404tldr",
        title: "Xatolik yuz berdi!",
        description: `Ushbu ${ctx.inlineQuery?.query} ga oid sahifa topilmadi!`,
        reply_markup: new InlineKeyboard().switchInlineCurrent(
          "Qayta urinib ko'ramizmi?",
          "foobar",
        ),
        input_message_content: {
          message_text:
            `<b>"${ctx.inlineQuery?.query}" ga oid natija mavjud emas!</b>` +
            `\n` +
            `Iltimos, boshqattan ushbu qidirmoqchi bo'lgan tldr sahifa` +
            `nomini yozib qidirib ko'ring.`,
          parse_mode: "HTML",
        },
      }]);
    }

    return await ctx.answerInlineQuery(
      pages.map((page) => ({
        type: "article",
        id: crypto.randomUUID(),
        title: page.title,
        description: page.description,
        url: page.link,
        reply_markup: new InlineKeyboard().url(`Brauzerda ko\'rish`, page.link),
        input_message_content: {
          message_text: page.content,
          parse_mode: "Markdown",
        },
      })),
    );
  }

  if (!query) {
    return await ctx.answerInlineQuery([{
      type: "article",
      id: "102",
      title: "Qidirishni boshlang!",
      description: "Qidirmoqchi bo'lgan tldr sahifa nomini yozing!",
      reply_markup: new InlineKeyboard().switchInlineCurrent(
        "Qayta urinib ko'ramizmi?",
        "foobar",
      ),
      input_message_content: {
        message_text: `<b>Salom foydalanuvchi!</b>` +
          `\n` +
          `Siz inline rejim ishga tushurdingiz. Ushbu qulaylik yordamida siz ` +
          `tldr sahifasiga kirmasdan turib telegramdan tldr sahifalarini ` +
          `qidirish imkoniga ega bo'lasiz! Qidirishni boshlash uchun ` +
          `\n` +
          `<code>@xeonittebot \/tldr &lt;sahifa nomi&gt;</code>` +
          `\n` +
          `yozasiz`,
        parse_mode: "HTML",
      },
    }]);
  }
});

export default composer;
