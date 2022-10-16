import { Composer, Context } from "../deps.ts";
import isGroup from "../hooks/isGroup.ts";

const composer = new Composer();

composer.command("which", isGroup, async (ctx: Context): Promise<void> => {
  const status = (await ctx.getChatMember(ctx!.from!.id)).status;

  await ctx.reply(
    `<b>Ushbu ${ctx!.from!.first_name} metrikasi:</b>` +
      `\n` +
      `\n` +
      `<b>Ismi:</b> ${ctx!.from!.first_name} ` + `\n` +
      (ctx?.from?.username && "<b>Username:</b> @" + ctx.from.username + `\n`) +
      (ctx?.chat?.id && `<b>Chat ID:</b> <code>${ctx.chat.id}</code>` + `\n`) +
      (ctx?.from?.id && `<b>User ID:</b> <code>${ctx.from.id}</code>` + `\n`) +    
      `<b>Status:</b> ${status}`,
    {
      parse_mode: "HTML",
    },
  );
});

export default composer;
