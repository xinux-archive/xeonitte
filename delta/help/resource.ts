import start from "../start/mod.ts";

export const message = async (isOurGroup: boolean): Promise<string> => {
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

export const keyboard = start.keyboard;
