import { bot } from "../core/bot.ts";
import { start } from "../controllers/index.ts";

bot.command("start", start);
