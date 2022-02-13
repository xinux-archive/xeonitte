import { bot } from "../core/bot.ts";
import { deleteMessage, newMember } from "../controllers/index.ts";

bot.on(":new_chat_members", deleteMessage, newMember);
