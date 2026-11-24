import type { LandingEntry } from "../types";
import { launchOffer, launchStack, launchSteps } from "./launch-offer";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "Host a Bolt app on your own server — $390 | DVO Corp",
      description:
        "Take an app built with Bolt to production on your own server: the exported code in a container, your domain with HTTPS, database and backups, logs, deploy on push. Fixed price.",
      keywords: [
        "host Bolt app",
        "deploy Bolt.new app",
        "Bolt app own server",
        "Bolt app to production",
        "self-host Bolt app",
      ],
    },
    name: "Host a Bolt app",
    h1: "Take a Bolt app to production on your own server",
    lead: "Bolt builds the app in the browser and can publish it in one click. That is enough for a demo. For a product you need the code in your repository, a server and a database you control, and a way to see what went wrong. We set that up around the code Bolt already wrote.",
    offer: launchOffer.en,
    when: [
      "The app is published from Bolt and you want it under your own domain and account",
      "The project has a server part and one-click hosting no longer fits it",
      "You are about to take payments or personal data and want backups first",
      "Something breaks for users and there is nowhere to see why",
      "A developer joins and needs a normal repository and a deploy pipeline",
    ],
    included: [
      {
        title: "The code in your GitHub",
        text: "We take the project from Bolt into a repository and make it build the same way every time, in a container, outside the browser.",
      },
      {
        title: "Front end and server part",
        text: "A static front end is served directly; a Node.js server part runs as a service next to it. Both are behind one domain.",
      },
      {
        title: "The database",
        text: "The hosted database the app already uses stays, with nightly dumps to your storage — or PostgreSQL runs on your server.",
      },
      {
        title: "Secrets out of the code",
        text: "Keys that Bolt put into the source or the browser bundle move to the server's environment; you get the list of keys to rotate.",
      },
      {
        title: "Your domain with HTTPS and deploy on push",
        text: "The certificate renews by itself. A push to the main branch releases the new version.",
      },
      {
        title: "Logs and a dashboard",
        text: "Requests, errors, response time, and the app's own logs for the last two weeks.",
      },
    ],
    steps: launchSteps.en,
    stack: [...launchStack, "Node.js", "Vite", "Supabase"],
    faq: [
      {
        q: "Can I keep building in Bolt after the launch?",
        a: "Yes, as long as the changes reach the GitHub repository — the pipeline releases whatever lands in the main branch. We show you the exact flow for your project at handover.",
      },
      {
        q: "Bolt already deploys the app. What is different here?",
        a: "Where it runs and who controls it. After the launch the server, the domain, the database and the backups are in your accounts, the bill is the flat price of the server, and there are logs and metrics to look at when something goes wrong.",
      },
      {
        q: "Does every Bolt project fit the fixed price?",
        a: "A web app with a front end, an optional Node.js server and one database does. Mobile builds and projects with several separate services are looked at first and priced before any work starts.",
      },
      {
        q: "What if the generated code has problems?",
        a: "We report what blocks a safe launch — leaked keys, missing database rules, data stored where it will be lost — and fix what is configuration. Rewriting features is outside this package; you can do it with Bolt or we quote it.",
      },
    ],
    related: ["launch-ai-built-app", "deploy-lovable-app", "ci-cd"],
  },
  uk: {
    seo: {
      title: "Хостинг застосунку з Bolt на власному сервері — $390 | DVO Corp",
      description:
        "Виводимо застосунок, зроблений у Bolt, у продакшн на вашому сервері: експортований код у контейнері, ваш домен із HTTPS, база й бекапи, логи, деплой на пуш. Фіксована ціна.",
      keywords: [
        "хостинг застосунку Bolt",
        "деплой Bolt.new",
        "Bolt на власний сервер",
        "Bolt застосунок у продакшн",
        "розгорнути застосунок Bolt",
      ],
    },
    name: "Хостинг застосунку з Bolt",
    h1: "Застосунок із Bolt — у продакшні на власному сервері",
    lead: "Bolt збирає застосунок у браузері й може опублікувати його одним кліком. Для демо цього досить. Продукту потрібні код у вашому репозиторії, сервер і база під вашим контролем та спосіб побачити, що пішло не так. Ми налаштовуємо це навколо коду, який Bolt уже написав.",
    offer: launchOffer.uk,
    when: [
      "Застосунок опубліковано з Bolt, а потрібен він на власному домені й у власному акаунті",
      "У проєкті з'явилась серверна частина, і хостинг в один клік йому вже не підходить",
      "Ви збираєтесь приймати оплати чи персональні дані й хочете спершу мати бекапи",
      "У користувачів щось ламається, а подивитись чому — ніде",
      "Приходить розробник, і йому потрібні нормальний репозиторій та пайплайн деплою",
    ],
    included: [
      {
        title: "Код у вашому GitHub",
        text: "Переносимо проєкт із Bolt у репозиторій і робимо так, щоб він щоразу збирався однаково — у контейнері, поза браузером.",
      },
      {
        title: "Фронтенд і серверна частина",
        text: "Статичний фронтенд віддається напряму, серверна частина на Node.js працює поруч як сервіс. Обидва — за одним доменом.",
      },
      {
        title: "База даних",
        text: "Хмарна база, якою застосунок уже користується, залишається — з нічними дампами у ваше сховище; або PostgreSQL працює на вашому сервері.",
      },
      {
        title: "Секрети — поза кодом",
        text: "Ключі, які Bolt поклав у вихідний код чи браузерний бандл, переїжджають в оточення сервера; ви отримуєте список ключів, які треба перевипустити.",
      },
      {
        title: "Ваш домен із HTTPS і деплой на пуш",
        text: "Сертифікат поновлюється сам. Пуш у головну гілку викладає нову версію.",
      },
      {
        title: "Логи й дашборд",
        text: "Запити, помилки, час відповіді та логи самого застосунку за останні два тижні.",
      },
    ],
    steps: launchSteps.uk,
    stack: [...launchStack, "Node.js", "Vite", "Supabase"],
    faq: [
      {
        q: "Чи можна й далі будувати в Bolt після запуску?",
        a: "Так, якщо зміни потрапляють у репозиторій на GitHub: пайплайн викладає все, що з'являється в головній гілці. Точний порядок для вашого проєкту показуємо під час передачі.",
      },
      {
        q: "Bolt і так розгортає застосунок. У чому різниця?",
        a: "У тому, де він працює і хто цим керує. Після запуску сервер, домен, база й бекапи лежать у ваших акаунтах, рахунок — фіксована ціна сервера, а коли щось іде не так, є логи й метрики.",
      },
      {
        q: "Чи кожен проєкт із Bolt вкладається у фіксовану ціну?",
        a: "Вебзастосунок із фронтендом, необов'язковим сервером на Node.js і однією базою — так. Мобільні збірки та проєкти з кількома окремими сервісами спершу дивимось і оцінюємо до початку робіт.",
      },
      {
        q: "А якщо у згенерованому коді є проблеми?",
        a: "Повідомляємо про те, що заважає безпечному запуску, — витік ключів, відсутні правила доступу до бази, дані там, де вони зникнуть, — і виправляємо те, що є конфігурацією. Переписування функцій у пакет не входить: це можна зробити в Bolt, або ми оцінимо окремо.",
      },
    ],
    related: ["launch-ai-built-app", "deploy-lovable-app", "ci-cd"],
  },
};
