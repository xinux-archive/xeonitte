import { Composer, Context } from "../deps.ts";
import isUwU from "../hooks/isUwU.ts";
import isReply from "../hooks/isReply.ts";

const composer = new Composer();

composer.command(
  "warrior",
  isReply,
  isUwU,
  async (ctx: Context): Promise<void> => {
    const warrior = ctx.message!.reply_to_message!.from!.first_name;

    await ctx.replyWithPhoto(
      `http://og.xinux.uz/api/warrior?full_name=${encodeURI(warrior)}`,
      {
        caption: `${warrior} ga Faxriy Yorlig' ob chiqilar!`,
        parse_mode: "HTML",
      },
    );
  },
);

export default composer;
