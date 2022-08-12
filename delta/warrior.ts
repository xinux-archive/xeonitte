import { Composer, Context } from "../deps.ts";
import isUwU from "../hooks/isUwU.ts";
import isReply from "../hooks/isReply.ts";

const composer = new Composer();

composer.command(
  "warrior",
  isReply,
  isUwU,
  async (ctx: Context): Promise<void> => {
    const name = ctx.message!.reply_to_message!.from!.first_name;
    const username =  ctx.message!.reply_to_message!.from!.username;

    await ctx.replyWithPhoto(
      `http://og.xinux.uz/api/warrior?full_name=${encodeURI(name)}`,
      {
        caption: `<a href="tg://user?id=${ctx?.message?.reply_to_message?.from?.id}">${name}</a> ga Faxriy Yorlig' ob chiqilar!`,
        parse_mode: "HTML",
      },
    );
  },
);

export default composer;
