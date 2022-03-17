import { bot } from "../core/bot.ts";
import { doc } from "../controllers/index.ts";
import { isGroup, isReply } from "../middleware/index.ts";

bot.command("doc", isGroup, isReply, doc);
