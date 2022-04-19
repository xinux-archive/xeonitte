import { Composer, Context } from "../deps.ts";

const composer = new Composer();

composer.on("message:text", async (ctx: Context): Promise<void> => {
  if (ctx?.message?.from?.username) {
    if (ctx?.message?.from?.username === "Channel_Bot" && ctx?.message?.from?.username !== 'Yusuf_Dev') {
      await ctx.deleteMessage();
    }
  }
});

export default composer;
