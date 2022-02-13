import { InlineKeyboard } from "../core/deps.ts";

export const startButton = new InlineKeyboard().url(
  "Guruhimiz",
  "https://t.me/xinuxuz",
);

export const helpButton = new InlineKeyboard().url(
  "Guruhimiz",
  "https://t.me/xinuxuz",
);

export const betaButton = new InlineKeyboard()
  .url("Guruhimiz", "https://t.me/xinuxuz").row()
  .url("JS Test Botimiz", "https://t.me/xeonitte_beta_bot").row()
  .url("TS Test Botimiz", "https://t.me/xeonitte_genemator_bot").row()
  .url("Admin (Jakhongir)", `https://t.me/JustCodeIt`).row();

export const rulesButton = new InlineKeyboard()
  .url(`Qoidalarni Ko'rish`, `https://t.me/xeonittebot?start=rules`);

export const aurButton = new InlineKeyboard()
  .url(
    `Yay [Golang] (tavsiya qilinadi)`,
    `https://aur.archlinux.org/packages/yay/`,
  ).row()
  .url(
    `Paru [Rust] (tavsiya qilinadi)`,
    `https://aur.archlinux.org/packages/paru/`,
  ).row()
  .url(`Aura [Haskell]`, `https://aur.archlinux.org/packages/aura/`).row()
  .url(`Pacaur [Bash]`, `https://aur.archlinux.org/packages/pacaur/`).row()
  .url(`Pakku [Nim]`, `https://aur.archlinux.org/packages/pakku/`).row()
  .url(`Pikaur [Python]`, `https://aur.archlinux.org/packages/pikaur/`).row()
  .url(`Trizen [Perl]`, `https://aur.archlinux.org/packages/trizen/`).row();

export const ruleButton = new InlineKeyboard()
  .url("Guruhga Qaytish", "https://t.me/xinuxuz");

export const sourceButton = new InlineKeyboard()
  .url("Havola", "https://github.com/xinuxuz/xeonitte");
