import { Context } from "../core/deps.ts";

export const startText: string =
  `<b>Assalomu alaykum, hurmatli administrator!</b> \n` +
  `\n` +
  `Sizni ko'rib turganimdan bag'oyatda hursandman. ` +
  `Men Xinux Jamiyati tomonidan yaratilgan bot hisoblanib, ` +
  `ushbu guruh foydalanuvchilari uchun foydali resurslarni yetkazish, saqlash va ` +
  `ularni saralash uchun xizmat qilaman.`;

export const docText = (ctx: Context) =>
  `<b>Demak, ${ctx.message?.reply_to_message?.from?.first_name}</b>` +
  `\n` +
  `\n` +
  `<i>Bir bor ekan, bir yo'q ekan... Qadim o'tgan zamonlarda dokumentatsiya ` +
  `bo'lgan ekan. Aytishlariga qaraganda, undan deyarli hamma savollarga ` +
  `javob olsa bo'larkanda. Yanachi, unga avtorlar shunchalik ko'p vaqt ajratishar ` +
  `ekanu, lekin uni sanoqligina odam o'qisharkan. Attang...</i>`;

export const helpText = (isOurGroup: boolean) => {
  const base: string = `<b>Mavjud komandalar ro'yxati:</b>` +
    `\n` +
    `\n` +
    `/off - <code>replay qilingan odamga offtopic guruhi borligini eslatadi</code>` +
    `\n` +
    `/doc - <code>replay qilingan odamga dokumentatsiya borligi haqida eslatiladi</code>` +
    `\n` +
    `/help - <code>ushbu habarni qayta ko'rsatish</code>` +
    `\n` +
    `/beta - <code>ushbu botimizning rivojlantirish qismi</code>` +
    `\n` +
    `/rules - <code>qoidalarni aks ettirish</code>` +
    `\n` +
    `/source - <code>shu telegram bot kodlarini ko'rsatish</code>` +
    `\n` +
    `/which - <code>ushbu guruh va foydalanuvchi metrik ma'lumotlarini ko'rsatish</code>` +
    `\n` +
    `/distro - <code>saytimizdagi distributivlarni havolasini olish</code>` +
    `\n` +
    `/community - <code>butun dunyo bo'yicha kommyunitylar havolasini olish</code>` +
    `\n`;
  const addition: string = `\n` +
    `<b>Hamda, bizning guruhimizga quyidagi tugmachani bosish orqali a'zo bo'lishni unutmang!</b>`;
  return isOurGroup ? base : base + addition;
};

export const betaText = `<b>Hurmatli foydalanuvchi!</b> \n` +
  `\n` +
  `Bizning botimiz aktiv tarzda shakllantirib boriladi. ` +
  `Buning ustida esa bir necha avtor va dasturchilar turadi, ` +
  `ushbu havolalar orqali bizning sinovchilarimizdan biriga aylaning ` +
  `va biz bilan botimiz, hamda guruhimiz ishlatish qulayligini oshiring.`;

export const rulesText =
  `<b>Hurmatli guruh a'zosi, ushbu guruhni spam bilan to'ldirib tashlamaslik maqsadida, guruhning o'ziga o'tib qoidalarni ko'rib chiqishingizni xohlardik!</b> `;

export const rulesLongText: string = `<b>Hurmatli guruh a'zosi...</b> ` +
  `\n` +
  `\n` +
  `Iltimos qoidalarga oz bo'lsada vaqt ajratishni unutmang, bu muhim! Ushbu guruhda quyidagi harakatlar taqiqlanadi:` +
  `\n` +
  `\n` +
  `<code>* Besabab bir-birini kamsitish yoki so'kinish</code>` +
  `\n` +
  `<code>* Sababsiz guruhga spam yozaverish yoki tashash</code>` +
  `\n` +
  `<code>* So'ralgan narsani yana qayta ezmalash</code> ` +
  `\n` +
  `<code>* Administratorlarga nisbatan juddayam qattiq kritika</code>` +
  `\n` +
  `<code>* Faoliyat ustidan shikoyat qilaverish yoki nolish</code>` +
  `\n` +
  `\n` +
  `<b>Ushbu qoidalarni doimiy tarzda buzish, butunlay ban yoki bir necha ogohlantirishlirga olib keladi!</b>`;

export const aurText: string = `<b>AUR bu o'zi aslida nima?</b> ` +
  `\n` +
  `\n` +
  `Rasmiy ArchLinux omborlari dasturiy ta'minot ehtiyojlarini ` +
  `qondirish uchun bir necha ming paketga kirishni ta'minlaydi. ` +
  `Arch shuningdek, foydalanuvchi jamiyati o'sishini va maxsus ` +
  `omborni (AUR - CPR) taklif qilish orqali jamiyatning hissasini ` +
  `oshirishni rag'batlantiradi. makepkg yordamchi dasturidan foydalanib, ` +
  `manba kodlaridan o'rnatish paketlarini yig'ish uchun minglab ` +
  `foydalanuvchilar tomonidan qo'llab-quvvatlanadigan pkgbuild ` +
  `skriptlarini o'z ichiga oladi. Bundan tashqari, foydalanuvchilarga ` +
  `o'z omborlarini tashkil etishga hech narsa to'sqinlik qilmaydi.` +
  `\n` +
  `\n` +
  `<b>Quyidagi keltirilgan tugmachalar orqali o'zingiz uchun AUR menejr tanlab olishingiz mumkin:</b>`;

export const sourceText: string =
  `<b>Oldindan minnatdorchiligimni bildiraman, meni yaxshilash fikriga kelganingiz uchun.</b> ` +
  `\n` +
  `\n` +
  `Ushbu havola orqali mening kodlarimni topishingiz mumkin:`;

export const notFoundReply = `Reply bilan ko'rsating!`;
