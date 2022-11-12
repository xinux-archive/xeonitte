import { Composer, Context, InlineKeyboard } from "../deps.ts";
import isReply from "../hooks/isReply.ts";

const composer = new Composer();

composer.command("off", isReply, async (ctx: Context): Promise<void> => {
  if (ctx?.message?.reply_to_message?.from?.id === ctx.me.id) {
    await ctx.reply(`Ha-ha... yaxshi urinish!`, {
      parse_mode: "HTML",
    });
  } else {
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
  }
});

composer.command("nonoff", isReply, async (ctx: Context): Promise<void> => {
  if (ctx?.message?.reply_to_message?.from?.id === ctx.me.id) {
    await ctx.reply(`Ha-ha... yaxshi urinish!`, {
      parse_mode: "HTML",
    });
  } else {
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
      `Chunishim bo'yicha siz mavzuga kirib ketayabsiz. Iltimos, ` +
      `quyidagi tugmachani bosish orqali bizning asosiy guruhga o'tib oling! ` +
      `Linux haqida iloji boricha asosiy guruhimizda suhbatlashish tavsiya etiladi. Offtopchilarga halaqit qilmayliga 😉` +
      `\n` +
      `\n` +
      `<b>Hurmat ila, Xeonitte (Kseyonita)</b>`;

    if (ctx.message!.is_topic_message) {
      await ctx.reply(text, {
        message_thread_id: ctx.message!.message_thread_id,
        parse_mode: "HTML",
        reply_markup: new InlineKeyboard().url(
          `Asosiy Chat`,
          `https://t.me/xinuxuz`,
        ),
      });
    } else {
      await ctx.reply(text, {
        parse_mode: "HTML",
        reply_markup: new InlineKeyboard().url(
          `Asosiy Chat`,
          `https://t.me/xinuxuz`,
        ),
      });
    }
  }
});


// Usmon's awful code
function warnText(userId, userName, topic) {
  return `<b>Hurmatli <a href="tg://${userId}">${userName}<a/>,</b>,` +
  `\n` + `\n` +
  `Tushunishim bo’yicha siz ${topic}ga aloqador xabar yozgansiz.` +
  `Iltimos, xabaringizni ${topic} uchun maxsus ochilgan topicga tashlang!` +
  `\n` + '\n' +
  `<b>Hurmat ila, Xeonitte (Kseyonita)!<b>`
}

// Debian
composer.command("debian", isReply, async (ctx: Context): Promise<void> => {
  if (ctx?.message?.reply_to_message?.from?.id === ctx.me.id) {
    await ctx.reply(`Ha-ha... yaxshi urinish!`, {
      parse_mode: "HTML",
    });
  } else {
    await ctx.api.deleteMessage(
      ctx.message!.chat!.id,
      ctx.message!.reply_to_message!.message_id,
    );
    await ctx.api.deleteMessage(
      ctx.message!.chat!.id,
      ctx.message!.message_id,
    );

    const text = warnText(
      ctx?.message?.reply_to_message?.from?.id,
      ctx?.message?.reply_to_message?.from?.first_name,
      "Debian"
    ) 

    if (ctx.message!.is_topic_message) {
      await ctx.reply(text, {
        message_thread_id: ctx.message!.message_thread_id,
        parse_mode: "HTML",
        reply_markup: new InlineKeyboard().url(
          `Debian`,
          `https://t.me/xinuxuz/180507`,
        ),
      });
    } else {
      await ctx.reply(text, {
        parse_mode: "HTML",
        reply_markup: new InlineKeyboard().url(
          `Debian`,
          `https://t.me/xinuxuz/180507`,
        ),
      });
    }
  }
});

// Windows
composer.command("windows", isReply, async (ctx: Context): Promise<void> => {
  if (ctx?.message?.reply_to_message?.from?.id === ctx.me.id) {
    await ctx.reply(`Ha-ha... yaxshi urinish!`, {
      parse_mode: "HTML",
    });
  } else {
    await ctx.api.deleteMessage(
      ctx.message!.chat!.id,
      ctx.message!.reply_to_message!.message_id,
    );
    await ctx.api.deleteMessage(
      ctx.message!.chat!.id,
      ctx.message!.message_id,
    );

    const text = warnText(
      ctx?.message?.reply_to_message?.from?.id,
      ctx?.message?.reply_to_message?.from?.first_name,
      "Windows"
    ) 

    if (ctx.message!.is_topic_message) {
      await ctx.reply(text, {
        message_thread_id: ctx.message!.message_thread_id,
        parse_mode: "HTML",
        reply_markup: new InlineKeyboard().url(
          `Windows`,
          `https://t.me/xinuxuz/180916`,
        ),
      });
    } else {
      await ctx.reply(text, {
        parse_mode: "HTML",
        reply_markup: new InlineKeyboard().url(
          `Windows`,
          `https://t.me/xinuxuz/180916`,
        ),
      });
    }
  }
});

// Coding
composer.command("coding", isReply, async (ctx: Context): Promise<void> => {
  if (ctx?.message?.reply_to_message?.from?.id === ctx.me.id) {
    await ctx.reply(`Ha-ha... yaxshi urinish!`, {
      parse_mode: "HTML",
    });
  } else {
    await ctx.api.deleteMessage(
      ctx.message!.chat!.id,
      ctx.message!.reply_to_message!.message_id,
    );
    await ctx.api.deleteMessage(
      ctx.message!.chat!.id,
      ctx.message!.message_id,
    );

    const text = warnText(
      ctx?.message?.reply_to_message?.from?.id,
      ctx?.message?.reply_to_message?.from?.first_name,
      "Coding"
    ) 

    if (ctx.message!.is_topic_message) {
      await ctx.reply(text, {
        message_thread_id: ctx.message!.message_thread_id,
        parse_mode: "HTML",
        reply_markup: new InlineKeyboard().url(
          `Coding`,
          `https://t.me/xinuxuz/180629`,
        ),
      });
    } else {
      await ctx.reply(text, {
        parse_mode: "HTML",
        reply_markup: new InlineKeyboard().url(
          `Coding`,
          `https://t.me/xinuxuz/180629`,
        ),
      });
    }
  }
});

// Redhat
composer.command("redhat", isReply, async (ctx: Context): Promise<void> => {
  if (ctx?.message?.reply_to_message?.from?.id === ctx.me.id) {
    await ctx.reply(`Ha-ha... yaxshi urinish!`, {
      parse_mode: "HTML",
    });
  } else {
    await ctx.api.deleteMessage(
      ctx.message!.chat!.id,
      ctx.message!.reply_to_message!.message_id,
    );
    await ctx.api.deleteMessage(
      ctx.message!.chat!.id,
      ctx.message!.message_id,
    );

    const text = warnText(
      ctx?.message?.reply_to_message?.from?.id,
      ctx?.message?.reply_to_message?.from?.first_name,
      "Redhat"
    ) 

    if (ctx.message!.is_topic_message) {
      await ctx.reply(text, {
        message_thread_id: ctx.message!.message_thread_id,
        parse_mode: "HTML",
        reply_markup: new InlineKeyboard().url(
          `Redhat`,
          `https://t.me/xinuxuz/180526`,
        ),
      });
    } else {
      await ctx.reply(text, {
        parse_mode: "HTML",
        reply_markup: new InlineKeyboard().url(
          `Redhat`,
          `https://t.me/xinuxuz/180526`,
        ),
      });
    }
  }
});


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
