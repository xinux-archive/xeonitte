import { Bot } from "./deps.ts";
import "https://deno.land/x/dotenv/load.ts";

if (!Deno.env.get("BOT_TOKEN")) {
  throw new Error("BOT_TOKEN environment variable is required");
}

const bot = new Bot(Deno.env.get("BOT_TOKEN")!.toString());

bot.init()
  .then(() => console.log("Bot has started"))
  .catch(() => console.log("Couldn't run"));

bot.start();

export { bot };
