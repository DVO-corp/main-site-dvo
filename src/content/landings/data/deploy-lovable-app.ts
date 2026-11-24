import type { LandingEntry } from "../types";
import { launchOffer, launchStack, launchSteps } from "./launch-offer";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "Deploy a Lovable app to your own server — $390 | DVO Corp",
      description:
        "Move a Lovable app to your own server and domain: the code from GitHub, the front end in a container, Supabase kept or replaced with your own PostgreSQL, backups, logs. Fixed price.",
      keywords: [
        "deploy Lovable app",
        "Lovable app own server",
        "host Lovable app",
        "Lovable custom domain hosting",
        "self-host Lovable app",
      ],
    },
    name: "Deploy a Lovable app",
    h1: "Deploy a Lovable app to your own server and domain",
    lead: "Lovable gives you the code: a React front end in your GitHub repository, usually with Supabase behind it. What it does not give you is a place you control. We take that repository and run it on your server, on your domain, with backups of the data and logs you can read.",
    offer: launchOffer.en,
    when: [
      "The app is published from Lovable and you want it on your own infrastructure",
      "You keep building in Lovable but want production to be independent of it",
      "The data is in Supabase and nobody has ever checked that it can be restored",
      "A client asks for the app to run in their account or their country",
      "The app needs a server part that the front end alone cannot do",
    ],
    included: [
      {
        title: "The code from your GitHub",
        text: "Lovable syncs the project to a repository. We build it into a container from there, so Lovable stays your editor and stops being your hosting.",
      },
      {
        title: "Supabase: keep it or leave it",
        text: "Staying on Supabase is fine — then we add nightly dumps of it to your storage. Moving the database to PostgreSQL on your server is possible when the app does not depend on Supabase Auth or Storage; we tell you which case is yours.",
      },
      {
        title: "Keys in the right place",
        text: "The public Supabase key belongs in the browser, the service key never does. We check which one the front end ships and whether the tables have row-level security.",
      },
      {
        title: "Your domain with HTTPS",
        text: "The certificate is issued and renewed automatically; client-side routes work on reload.",
      },
      {
        title: "Deploy on push",
        text: "Every change Lovable commits to the main branch is built and released by the pipeline.",
      },
      {
        title: "Logs and a dashboard",
        text: "Requests, errors and response time of the site, and the state of the server.",
      },
    ],
    steps: launchSteps.en,
    stack: [...launchStack, "Supabase", "Vite", "React"],
    faq: [
      {
        q: "Can I keep editing the app in Lovable after the move?",
        a: "Yes. Lovable keeps committing to the same repository; the pipeline picks up each commit and releases it to your server. Nothing changes in how you build.",
      },
      {
        q: "Do I have to leave Supabase?",
        a: "No. Most Lovable apps stay on Supabase and that is a sound choice. What is usually missing is a backup you hold yourself, and we add it. A move to your own PostgreSQL is a separate decision with a separate price when login or file storage are involved.",
      },
      {
        q: "Is the fixed price valid for my Lovable app?",
        a: "For a front end with Supabase behind it — yes, that is the typical case. If the project has Supabase Edge Functions or other server code, we look at it first and say whether it fits.",
      },
      {
        q: "Why move at all if Lovable publishes the app for me?",
        a: "You may not need to. Reasons that are real: the app must run in your or your client's account, you need a server part, you want one flat bill, or you want production not to depend on one vendor's plan.",
      },
    ],
    related: ["launch-ai-built-app", "bolt-app-hosting", "replit-migration"],
  },
  uk: {
    seo: {
      title: "Деплой застосунку з Lovable на власний сервер — $390 | DVO Corp",
      description:
        "Переносимо застосунок із Lovable на ваш сервер і домен: код із GitHub, фронтенд у контейнері, Supabase залишаємо або замінюємо власним PostgreSQL, бекапи, логи. Фіксована ціна.",
      keywords: [
        "деплой Lovable",
        "Lovable на власний сервер",
        "хостинг застосунку Lovable",
        "Lovable власний домен",
        "розгорнути Lovable застосунок",
      ],
    },
    name: "Деплой застосунку з Lovable",
    h1: "Застосунок із Lovable — на власному сервері й домені",
    lead: "Lovable віддає вам код: React-фронтенд у вашому репозиторії на GitHub, найчастіше із Supabase позаду. Чого він не дає — це місця під вашим контролем. Ми беремо цей репозиторій і запускаємо його на вашому сервері й домені, з бекапами даних і логами, які можна читати.",
    offer: launchOffer.uk,
    when: [
      "Застосунок опубліковано з Lovable, а потрібен він на власній інфраструктурі",
      "Ви й далі будуєте в Lovable, але хочете, щоб продакшн від нього не залежав",
      "Дані лежать у Supabase, і ніхто жодного разу не перевіряв, чи їх можна відновити",
      "Клієнт просить, щоб застосунок працював у його акаунті чи в його країні",
      "Застосунку потрібна серверна частина, якої сам фронтенд не дасть",
    ],
    included: [
      {
        title: "Код із вашого GitHub",
        text: "Lovable синхронізує проєкт у репозиторій. Звідти ми збираємо контейнер, тож Lovable залишається вашим редактором і перестає бути хостингом.",
      },
      {
        title: "Supabase: залишити чи піти",
        text: "Залишитись на Supabase — нормально: тоді додаємо нічні дампи у ваше сховище. Перенести базу в PostgreSQL на вашому сервері можна, коли застосунок не залежить від Supabase Auth чи Storage; який випадок ваш — скажемо.",
      },
      {
        title: "Ключі на своєму місці",
        text: "Публічному ключу Supabase місце в браузері, сервісному — ніколи. Перевіряємо, який саме віддає фронтенд і чи ввімкнено row-level security на таблицях.",
      },
      {
        title: "Ваш домен із HTTPS",
        text: "Сертифікат випускається й поновлюється автоматично; клієнтські маршрути працюють після перезавантаження сторінки.",
      },
      {
        title: "Деплой на пуш",
        text: "Кожну зміну, яку Lovable комітить у головну гілку, пайплайн збирає й викладає.",
      },
      {
        title: "Логи й дашборд",
        text: "Запити, помилки й час відповіді сайту та стан сервера.",
      },
    ],
    steps: launchSteps.uk,
    stack: [...launchStack, "Supabase", "Vite", "React"],
    faq: [
      {
        q: "Чи можна й далі редагувати застосунок у Lovable після переїзду?",
        a: "Так. Lovable комітить у той самий репозиторій, пайплайн підхоплює кожен коміт і викладає його на ваш сервер. У тому, як ви будуєте, нічого не змінюється.",
      },
      {
        q: "Чи обов'язково йти із Supabase?",
        a: "Ні. Більшість застосунків із Lovable залишаються на Supabase, і це розумний вибір. Зазвичай бракує бекапу, який зберігається у вас, — його ми й додаємо. Переїзд на власний PostgreSQL — окреме рішення з окремою ціною, якщо задіяні логін або сховище файлів.",
      },
      {
        q: "Чи діє фіксована ціна для мого застосунку з Lovable?",
        a: "Для фронтенду із Supabase позаду — так, це типовий випадок. Якщо в проєкті є Supabase Edge Functions чи інший серверний код, спершу дивимось і кажемо, чи він вкладається.",
      },
      {
        q: "Навіщо переїжджати, якщо Lovable сам публікує застосунок?",
        a: "Можливо, й не треба. Справжні причини такі: застосунок має працювати у вашому акаунті чи акаунті клієнта, потрібна серверна частина, хочеться одного фіксованого рахунку або щоб продакшн не залежав від тарифу одного постачальника.",
      },
    ],
    related: ["launch-ai-built-app", "bolt-app-hosting", "replit-migration"],
  },
};
