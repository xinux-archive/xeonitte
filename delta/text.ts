import { Composer, Context } from "../deps.ts";

const composer = new Composer();

composer.on("message:text", async (ctx: Context): Promise<void> => {
  if (
    ctx.chat!.id === -1001174263940 &&
    ctx.message!.reply_to_message!.message_id === 178654
  ) {
    await ctx.deleteMessage();
  }

  if (ctx?.message?.from?.username) {
    if (
      ctx?.message?.from?.username === "Channel_Bot"
    ) {
      await ctx.deleteMessage();
    }
  }
});

composer.on("channel_post", (ctx: Context): void => {
  console.log("Type:", ctx.chat!.type, " with ID of:", ctx.chat!.id);
});

export default composer;
