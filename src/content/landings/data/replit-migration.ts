import type { LandingEntry } from "../types";
import { launchOffer, launchStack, launchSteps } from "./launch-offer";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "Move an app off Replit to your own server — $390 | DVO Corp",
      description:
        "Migrate a Replit app to your own server: container, domain with HTTPS, PostgreSQL with backups, secrets, deploy on push. A flat hosting bill instead of usage billing. Fixed price.",
      keywords: [
        "move off Replit",
        "Replit migration",
        "migrate Replit app to VPS",
        "Replit alternative hosting",
        "export Replit app",
      ],
    },
    name: "Move off Replit",
    h1: "Move your app off Replit to a server with a flat bill",
    lead: "Replit is a good place to build. As hosting it bills by usage, and the bill follows your traffic. We move the app to a server you rent for a fixed monthly price: the same code, your domain, a database with backups, and a deploy that does not need the Replit editor open.",
    offer: launchOffer.en,
    when: [
      "The Replit bill is higher every month and hard to predict",
      "The app sleeps, restarts or slows down under real users",
      "You want the database and the files somewhere you can back up yourself",
      "The team grew and people want to work with Git and their own editors",
      "A client requires the app to run in an account you or they own",
    ],
    included: [
      {
        title: "The code in your GitHub",
        text: "We connect the Repl to a repository (or take the export) and make the app start from a container, without Replit's run configuration.",
      },
      {
        title: "Secrets moved, not lost",
        text: "Every value from Replit Secrets goes into an environment file on the server. The list of what the app reads is checked against the code.",
      },
      {
        title: "The database with its data",
        text: "Replit's PostgreSQL is dumped and restored on your server. The app is switched over only after the row counts match.",
      },
      {
        title: "Your domain with HTTPS",
        text: "DNS is switched at the end, so the old address keeps working until the new one is checked.",
      },
      {
        title: "Deploy on push",
        text: "A push to the main branch builds and releases. Replit can stay as an editor if you like it.",
      },
      {
        title: "Backups, logs, a dashboard",
        text: "A nightly dump with a copy outside the server, the app's logs and the server's metrics on one screen.",
      },
    ],
    steps: launchSteps.en,
    stack: launchStack,
    faq: [
      {
        q: "What in a Replit app does not move as is?",
        a: "Three things that exist only on Replit: its login (Replit Auth), its key-value database and its object storage. If the app uses them, they have to be replaced — with an ordinary login library, PostgreSQL and S3-compatible storage. We check for them first and price that part separately before starting.",
      },
      {
        q: "Will there be downtime?",
        a: "A short one, at a time you choose. The app is set up and tested on the new server while the old one keeps working; the final step is a last copy of the database and a DNS switch.",
      },
      {
        q: "Can I keep using Replit to write code?",
        a: "Yes. Connect the Repl to the same GitHub repository and keep working there. Only production moves.",
      },
      {
        q: "How much will hosting cost after the move?",
        a: "The price of the server you rent, the same every month whatever the traffic, until the app outgrows it. We suggest the size after looking at what the app uses now.",
      },
    ],
    related: ["launch-ai-built-app", "cloud-migration", "deploy-lovable-app"],
  },
  uk: {
    seo: {
      title: "Переїзд застосунку з Replit на власний сервер — $390 | DVO Corp",
      description:
        "Переносимо застосунок із Replit на ваш сервер: контейнер, домен із HTTPS, PostgreSQL із бекапами, секрети, деплой на пуш. Фіксований рахунок за хостинг замість оплати за використання.",
      keywords: [
        "переїзд з Replit",
        "міграція Replit",
        "перенести застосунок з Replit на VPS",
        "альтернатива хостингу Replit",
        "експорт застосунку Replit",
      ],
    },
    name: "Переїзд із Replit",
    h1: "Переїзд застосунку з Replit на сервер із фіксованим рахунком",
    lead: "Replit — добре місце, щоб будувати. Як хостинг він бере оплату за використання, і рахунок росте разом із трафіком. Ми переносимо застосунок на сервер, який ви орендуєте за фіксовану місячну ціну: той самий код, ваш домен, база з бекапами й деплой, для якого не треба тримати відкритим редактор Replit.",
    offer: launchOffer.uk,
    when: [
      "Рахунок Replit щомісяця більший, і передбачити його важко",
      "Застосунок засинає, перезапускається або гальмує під справжніми користувачами",
      "Хочеться, щоб база й файли лежали там, де ви самі можете зробити бекап",
      "Команда виросла, і людям потрібні Git та власні редактори",
      "Клієнт вимагає, щоб застосунок працював в акаунті, який належить вам або йому",
    ],
    included: [
      {
        title: "Код у вашому GitHub",
        text: "Під'єднуємо Repl до репозиторію (або беремо експорт) і робимо так, щоб застосунок запускався з контейнера, без конфігурації запуску Replit.",
      },
      {
        title: "Секрети перенесено, а не загублено",
        text: "Кожне значення з Replit Secrets потрапляє у файл оточення на сервері. Список того, що читає застосунок, звіряємо з кодом.",
      },
      {
        title: "База разом із даними",
        text: "PostgreSQL із Replit вивантажуємо й відновлюємо на вашому сервері. Застосунок перемикаємо лише після того, як зійшлась кількість рядків.",
      },
      {
        title: "Ваш домен із HTTPS",
        text: "DNS перемикаємо в кінці, тож стара адреса працює, доки нову не перевірено.",
      },
      {
        title: "Деплой на пуш",
        text: "Пуш у головну гілку збирає й викладає. Replit може залишитись редактором, якщо він вам подобається.",
      },
      {
        title: "Бекапи, логи, дашборд",
        text: "Нічний дамп із копією поза сервером, логи застосунку й метрики сервера на одному екрані.",
      },
    ],
    steps: launchSteps.uk,
    stack: launchStack,
    faq: [
      {
        q: "Що в застосунку з Replit не переїжджає як є?",
        a: "Три речі, які існують лише на Replit: його логін (Replit Auth), його key-value база та його об'єктне сховище. Якщо застосунок ними користується, їх треба замінити — звичайною бібліотекою логіну, PostgreSQL і S3-сумісним сховищем. Спершу перевіряємо, чи вони є, і цю частину оцінюємо окремо до початку.",
      },
      {
        q: "Чи буде простій?",
        a: "Короткий і в час, який оберете ви. Застосунок налаштовуємо й тестуємо на новому сервері, доки старий працює; останній крок — фінальна копія бази й перемикання DNS.",
      },
      {
        q: "Чи можна й далі писати код у Replit?",
        a: "Так. Під'єднайте Repl до того самого репозиторію на GitHub і працюйте там. Переїжджає лише продакшн.",
      },
      {
        q: "Скільки коштуватиме хостинг після переїзду?",
        a: "Ціну сервера, який ви орендуєте, — однакову щомісяця незалежно від трафіку, доки застосунок його не переросте. Розмір радимо після того, як подивимось, скільки застосунок споживає зараз.",
      },
    ],
    related: ["launch-ai-built-app", "cloud-migration", "deploy-lovable-app"],
  },
};
