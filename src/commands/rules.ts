import { bot } from "../core/bot.ts";
import { rules } from "../controllers/index.ts";

bot.command("rules", rules);
