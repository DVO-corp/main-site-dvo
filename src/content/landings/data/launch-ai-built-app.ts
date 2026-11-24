import type { LandingEntry } from "../types";
import { launchOffer, launchStack, launchSteps } from "./launch-offer";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "Launch an AI-built app to production — $390 fixed | DVO Corp",
      description:
        "Built an app with Lovable, Bolt, Replit, Cursor or Claude Code? We put it on your own server and domain: HTTPS, database, backups, logs, deploy on push. $390, up to 5 working days.",
      keywords: [
        "deploy AI-built app",
        "vibe coding deployment",
        "launch vibe coded app",
        "take AI app to production",
        "deploy app to own server",
      ],
    },
    name: "Launch an AI-built app",
    h1: "Your AI-built app, in production on your own server — $390",
    lead: "The tool wrote the app. It did not give you a server you control, a database that is backed up, or a way to see why it broke at night. We do that part: your app on your domain, with backups, logs and deploys, for a fixed price and without a call.",
    offer: launchOffer.en,
    when: [
      "The app works in the preview and you do not know how to put it on your own domain",
      "The platform's bill grows with every visitor and you want a flat one",
      "Real users arrived and the app started to fall over",
      "There are no backups, and you have just understood what that means",
      "A client or an investor asks where it runs and who can fix it",
    ],
    included: [
      {
        title: "A server that is yours",
        text: "Rented in your name at the provider you choose — AWS, Hetzner or another. We prepare it: firewall, security updates, Docker.",
      },
      {
        title: "Your domain with HTTPS",
        text: "The certificate is issued and renewed without anyone touching it.",
      },
      {
        title: "A database that survives",
        text: "PostgreSQL on the server or the hosted one you already use. A dump every night, a copy outside the server, and one restore done in front of you.",
      },
      {
        title: "Deploy on push",
        text: "You keep building with your AI tool. A push to GitHub puts the new version live.",
      },
      {
        title: "Logs and a dashboard",
        text: "Requests, errors, response time, CPU, memory, disk and the app's own logs on one screen.",
      },
      {
        title: "A check before launch",
        text: "We look for what AI-built apps usually ship with: secret keys in the browser bundle, .env in the repository, data that disappears on redeploy. You get the list.",
      },
    ],
    steps: launchSteps.en,
    stack: launchStack,
    faq: [
      {
        q: "Can I do this myself?",
        a: "Yes. The setup we install is open source: github.com/DVO-corp/launch-kit. It works as a Claude Code plugin or by hand. The $390 is for the case where you would rather spend those days on the product, and want someone to answer for the result.",
      },
      {
        q: "What does the server cost?",
        a: "You pay the provider directly, we add nothing on top. A small app with a database runs on an entry-level server; we tell you which size to take after looking at the project.",
      },
      {
        q: "What is not included in $390?",
        a: "Changes to the app's features, and replacing services that exist only on the platform you are leaving (its login, its storage, its built-in database). If the project needs that, you get a separate price before any work starts.",
      },
      {
        q: "What happens after the launch if I do not take Care?",
        a: "Everything is in your accounts and described in the handover: the server, the repository, the secrets, the commands. You or any engineer can run it. Care is for those who do not want to.",
      },
      {
        q: "My app outgrew one server. Now what?",
        a: "Then it is a different job: several servers or a Kubernetes cluster such as AWS EKS, releases without downtime, a managed database. We do that too; it is priced by the agreed list of work.",
      },
    ],
    related: ["deploy-lovable-app", "replit-migration", "devops-for-startups"],
  },
  uk: {
    seo: {
      title: "Запуск застосунку, зробленого з AI, у продакшн — $390 | DVO Corp",
      description:
        "Зробили застосунок у Lovable, Bolt, Replit, Cursor чи Claude Code? Розгорнемо його на вашому сервері й домені: HTTPS, база, бекапи, логи, деплой на пуш. $390, до 5 робочих днів.",
      keywords: [
        "деплой застосунку з AI",
        "вайбкодинг деплой",
        "запустити застосунок на сервері",
        "розгорнути застосунок на власному сервері",
        "запуск AI застосунку в продакшн",
      ],
    },
    name: "Запуск AI-застосунку",
    h1: "Ваш застосунок, зроблений з AI, — у продакшні на власному сервері за $390",
    lead: "Інструмент написав застосунок. Але не дав вам сервера під вашим контролем, бази з бекапами й способу побачити, чому вночі все впало. Цю частину робимо ми: застосунок на вашому домені, з бекапами, логами й деплоєм — за фіксовану ціну і без дзвінків.",
    offer: launchOffer.uk,
    when: [
      "Застосунок працює у прев'ю, а як перенести його на свій домен — незрозуміло",
      "Рахунок платформи росте з кожним відвідувачем, а хочеться фіксованого",
      "Прийшли справжні користувачі, і застосунок почав падати",
      "Бекапів немає, і ви щойно зрозуміли, що це означає",
      "Клієнт або інвестор питає, де це працює і хто це полагодить",
    ],
    included: [
      {
        title: "Сервер, який належить вам",
        text: "Орендований на ваше ім'я у провайдера на ваш вибір — AWS, Hetzner чи іншого. Ми його готуємо: фаєрвол, оновлення безпеки, Docker.",
      },
      {
        title: "Ваш домен із HTTPS",
        text: "Сертифікат випускається й поновлюється без участі людей.",
      },
      {
        title: "База, яка не зникне",
        text: "PostgreSQL на сервері або хмарна база, якою ви вже користуєтесь. Дамп щоночі, копія поза сервером і одне відновлення у вас на очах.",
      },
      {
        title: "Деплой на пуш",
        text: "Ви й далі будуєте зі своїм AI-інструментом. Пуш у GitHub викладає нову версію.",
      },
      {
        title: "Логи й дашборд",
        text: "Запити, помилки, час відповіді, CPU, пам'ять, диск і логи самого застосунку на одному екрані.",
      },
      {
        title: "Перевірка перед запуском",
        text: "Шукаємо те, з чим зазвичай виходять AI-застосунки: секретні ключі в браузерному бандлі, .env у репозиторії, дані, що зникають після редеплою. Список отримуєте ви.",
      },
    ],
    steps: launchSteps.uk,
    stack: launchStack,
    faq: [
      {
        q: "Чи можу я зробити це сам?",
        a: "Так. Те, що ми встановлюємо, відкрите: github.com/DVO-corp/launch-kit. Працює як плагін для Claude Code або вручну. $390 — для випадку, коли ці дні краще витратити на продукт і хочеться, щоб за результат хтось відповідав.",
      },
      {
        q: "Скільки коштує сервер?",
        a: "Провайдеру ви платите напряму, ми нічого не додаємо зверху. Невеликий застосунок із базою працює на сервері початкового рівня; який розмір брати, скажемо після того, як подивимось проєкт.",
      },
      {
        q: "Що не входить у $390?",
        a: "Зміни у функціях застосунку та заміна сервісів, які існують лише на платформі, з якої ви йдете (її логін, сховище, вбудована база). Якщо проєкту це потрібно, окрему ціну ви отримуєте до початку робіт.",
      },
      {
        q: "Що буде після запуску, якщо не брати супровід?",
        a: "Усе лежить у ваших акаунтах і описане в документі передачі: сервер, репозиторій, секрети, команди. Керувати цим можете ви або будь-який інженер. Супровід — для тих, хто не хоче.",
      },
      {
        q: "Застосунок переріс один сервер. Що далі?",
        a: "Тоді це інша робота: кілька серверів або кластер Kubernetes, наприклад AWS EKS, релізи без простою, керована база. Це ми теж робимо; ціна — за погодженим переліком робіт.",
      },
    ],
    related: ["deploy-lovable-app", "replit-migration", "devops-for-startups"],
  },
};
