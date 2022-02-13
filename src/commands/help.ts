import { bot } from "../core/bot.ts";
import { help } from "../controllers/index.ts";

bot.command("help", help);
