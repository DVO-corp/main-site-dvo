import type { LandingLocale, LandingOffer } from "../types";

/**
 * The fixed-price launch package. One place for the prices and the term:
 * every landing that sells the package shows this block.
 */
export const launchOffer: Record<LandingLocale, LandingOffer> = {
  en: {
    title: "Two prices, both fixed",
    plans: [
      {
        name: "Launch",
        price: "$390",
        amount: 390,
        unit: "one-time",
        text: "Your app runs on your own server and your own domain, within 5 working days of the day we get access.",
        points: [
          "One app, one server, one database",
          "HTTPS on your domain, renewed automatically",
          "PostgreSQL on the server, or backups of the hosted database you already use",
          "A database dump every night, copied to storage outside the server; a restore is tested before handover",
          "Deploy on every push to GitHub",
          "Logs and a dashboard: requests, errors, response time, CPU, memory, disk",
          "A written handover: how to deploy, restore and where every secret lives",
        ],
      },
      {
        name: "Care",
        price: "$99",
        amount: 99,
        unit: "per month",
        text: "We keep it running after the launch. Cancel any month; everything stays in your accounts.",
        points: [
          "An external availability check and alerts that come to us",
          "Security updates of the server and the images",
          "Backups watched, a restore drill every quarter",
          "Disk, memory and certificate watched before they run out",
          "Fixes to the deploy and the server when something breaks",
        ],
      },
    ],
    note: "The server is rented in your name and you pay the provider directly. The price covers a web app on a common stack (Node.js, Python, a static front end). Changes to the app's own features, and replacing services that only exist on the platform you are leaving, are quoted separately before any work starts.",
    cta: "Send the project",
  },
  uk: {
    title: "Дві ціни, обидві фіксовані",
    plans: [
      {
        name: "Запуск",
        price: "$390",
        amount: 390,
        unit: "разово",
        text: "Ваш застосунок працює на вашому сервері й вашому домені — до 5 робочих днів від дня, коли ми отримали доступи.",
        points: [
          "Один застосунок, один сервер, одна база",
          "HTTPS на вашому домені, сертифікат поновлюється сам",
          "PostgreSQL на сервері або бекапи хмарної бази, якою ви вже користуєтесь",
          "Дамп бази щоночі з копією у сховище поза сервером; відновлення перевіряємо до передачі",
          "Деплой на кожен пуш у GitHub",
          "Логи й дашборд: запити, помилки, час відповіді, CPU, пам'ять, диск",
          "Письмова передача: як деплоїти, як відновитись і де лежить кожен секрет",
        ],
      },
      {
        name: "Супровід",
        price: "$99",
        amount: 99,
        unit: "на місяць",
        text: "Після запуску стежимо, щоб усе працювало. Скасувати можна будь-якого місяця; усе залишається у ваших акаунтах.",
        points: [
          "Зовнішня перевірка доступності й алерти, які приходять нам",
          "Оновлення безпеки сервера та образів",
          "Контроль бекапів, пробне відновлення щокварталу",
          "Диск, пам'ять і сертифікат під наглядом, доки вони не закінчились",
          "Виправлення деплою й сервера, коли щось ламається",
        ],
      },
    ],
    note: "Сервер орендується на ваше ім'я, провайдеру ви платите напряму. Ціна покриває вебзастосунок на поширеному стеку (Node.js, Python, статичний фронтенд). Зміни у функціях самого застосунку та заміну сервісів, які існують лише на платформі, з якої ви йдете, оцінюємо окремо до початку робіт.",
    cta: "Надіслати проєкт",
  },
};

type Step = { title: string; text: string };

/** The same four steps on every landing of the package. */
export const launchSteps: Record<LandingLocale, Step[]> = {
  en: [
    {
      title: "Send the project",
      text: "A link to the repository or the exported code, and one sentence about what the app does. No call needed.",
    },
    {
      title: "We check that it fits",
      text: "Within a working day we answer: it fits the fixed price, or here is what does not and what that part costs. You decide before paying anything.",
    },
    {
      title: "Access and launch",
      text: "You rent a server and point the domain; we do the rest. Up to 5 working days from the day we have access.",
    },
    {
      title: "Handover",
      text: "You see the app on your domain, a restored backup and the dashboard. Then it is yours — or we stay on Care.",
    },
  ],
  uk: [
    {
      title: "Надсилаєте проєкт",
      text: "Посилання на репозиторій або експортований код і одне речення про те, що робить застосунок. Дзвінок не потрібен.",
    },
    {
      title: "Перевіряємо, чи підходить",
      text: "Протягом робочого дня відповідаємо: проєкт вкладається у фіксовану ціну або ось що не вкладається і скільки ця частина коштує. Рішення за вами — до будь-якої оплати.",
    },
    {
      title: "Доступи й запуск",
      text: "Ви орендуєте сервер і спрямовуєте домен, решту робимо ми. До 5 робочих днів від дня, коли маємо доступи.",
    },
    {
      title: "Передача",
      text: "Ви бачите застосунок на своєму домені, відновлений бекап і дашборд. Далі все ваше — або ми залишаємось на супроводі.",
    },
  ],
};

export const launchStack = [
  "Docker",
  "Docker Compose",
  "Caddy",
  "PostgreSQL",
  "GitHub Actions",
  "Grafana",
  "Loki",
  "Prometheus",
  "AWS",
  "Hetzner",
  "Cloudflare",
];
