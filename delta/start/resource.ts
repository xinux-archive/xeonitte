import { InlineKeyboard } from "../../deps.ts";

export const message: string =
  `<b>Assalomu alaykum, hurmatli administrator!</b> \n` +
  `\n` +
  `Sizni ko'rib turganimdan bag'oyatda hursandman. ` +
  `Men Xinux Jamiyati tomonidan yaratilgan bot hisoblanib, ` +
  `ushbu guruh foydalanuvchilari uchun foydali resurslarni yetkazish, saqlash va ` +
  `ularni saralash uchun xizmat qilaman.`;

export const keyboard = new InlineKeyboard()
  .url("Guruhimiz", "https://t.me/xinuxuz");
