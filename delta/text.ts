import { Composer, Context } from "../deps.ts";

const composer = new Composer();

composer.on("message:text", async (ctx: Context): Promise<void> => {
  // Check for messages
  console.log(ctx.message);

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
