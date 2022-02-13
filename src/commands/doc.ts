import { bot } from "../core/bot.ts";
import { doc } from "../controllers/index.ts";
import { isReply } from "../middleware/isReply.ts";

bot.command("doc", isReply, doc);
