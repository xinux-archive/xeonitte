import { Context, NextFunction } from "../deps.ts";
import { reply } from "../utils/sender.ts";

export default async (ctx: Context, next: NextFunction) => {
  if (!ctx.message?.reply_to_message) {
    return await reply(ctx, `↪ Reply bilan ko'rsatingchi habarni!`);
  }
  await next();
};
