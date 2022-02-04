import { Bot, Composer, Context, serve, webhookCallback, NextFunction } from "./deps.ts";

export const env = (key: string) => Deno.env.get(key);
export const bot = new Bot(env("TOKEN") || "");
export const handle = webhookCallback(bot, "std/http");
export const composer = new Composer<Context>();
export const middleware = (mod: Composer<Context>): Composer<Context> =>
  bot.use(mod);

const webhook = async () => {
  await serve(async (req) => {
    if (req.method == "POST") {
      try {
        return await handle(req);
      } catch (err) {
        console.error(err);
        return new Response();
      }
    }

    return Response.redirect("https://t.me/xinuxuz", 302);
  });
};

const polling = async () => {
  await bot.start();
};

export const launch = async () => {
  switch (env("HOST")) {
    case "WEBHOOK":
      await webhook();
      break;
    case "POLLING":
      await polling();
      break;
    default:
      throw new Error("Deploy method not validated!");
  }
};

await launch();