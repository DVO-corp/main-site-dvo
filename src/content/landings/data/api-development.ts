import type { LandingEntry } from "../types";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "Custom API development: your function as an API | DVO Corp",
      description:
        "We build the function you need and run it on our platform: an HTTP endpoint with an API key and pay-per-use billing. Also backend services in Python and Node.js.",
      keywords: [
        "custom API development",
        "API as a service",
        "pay per use API",
        "backend development",
        "Python backend development",
        "Node.js backend development",
      ],
    },
    name: "Development and custom APIs",
    h1: "Custom API development: your function as an endpoint, or a full backend",
    lead: "Sometimes you need one capability, not a system: a price calculator, a document converter, a data check, a report builder. We write it, run it on our MetaPlatho platform and give you an HTTP endpoint with an API key. When the task is bigger, we build an ordinary backend service in Python or Node.js.",
    when: [
      "You need one function and do not want to build and operate a backend for it",
      "The front end or a no-code tool is ready, and the server-side logic is missing",
      "Two systems have to exchange data and neither has a ready integration",
      "You want to sell a calculation or a conversion to your own clients by usage",
      "Your developers are busy with the product and the backend task keeps waiting",
    ],
    included: [
      {
        title: "A specification before code",
        text: "We write down the input, the output, the errors and the expected volume. You approve the contract of the endpoint before development starts.",
      },
      {
        title: "The function itself",
        text: "Code in Python or Node.js with tests on your real examples: a calculation, a file conversion, a lookup in an external source, a generated report.",
      },
      {
        title: "An endpoint on MetaPlatho",
        text: "The function is deployed on the platform that runs our own public API. You call it over HTTP with an API key in a header.",
      },
      {
        title: "Metering, limits and billing",
        text: "Every call is counted. Quotas, rate limits and payment per usage are already built into the platform and are not developed again for you.",
      },
      {
        title: "Long jobs: queue and webhooks",
        text: "If the work takes longer than a request should, it runs as a background job. You poll its status or receive a webhook when it is done.",
      },
      {
        title: "Backend services and integrations",
        text: "A separate service with its own database, an integration between your systems, an internal tool — built in your repository and deployed on your infrastructure or ours.",
      },
    ],
    steps: [
      {
        title: "You describe the function",
        text: "What goes in, what comes out, how often it is called. A few real examples are enough.",
      },
      {
        title: "Specification and price",
        text: "You get the endpoint contract, the development price and the price per call or per unit of work.",
      },
      {
        title: "Build and trial",
        text: "We build the function and give you a key. You try it against your real data and report what is off.",
      },
      {
        title: "Production",
        text: "You call the endpoint from your product and pay for usage. Monitoring and updates are on our side.",
      },
    ],
    stack: [
      "Python",
      "FastAPI",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "OpenAPI",
      "Docker",
      "Kubernetes",
      "KEDA",
      "GitHub Actions",
    ],
    faq: [
      {
        q: "How is usage charged?",
        a: "By the unit that matches the function: a request, a document, a file, a minute of processing. The unit and its price are agreed before development. Every call is recorded, so the invoice can be checked against the usage log.",
      },
      {
        q: "What if one call takes minutes, not milliseconds?",
        a: "Then it is an asynchronous job. You submit the task and get its identifier at once. The work goes to a queue with retries, and you either poll the status or receive a webhook with the result.",
      },
      {
        q: "Can the function move to our own infrastructure later?",
        a: "Yes. It is a containerised service with no dependency that exists only on our side. If you decide to run it yourself, we hand over the code and deploy it in your environment. The terms of the handover are fixed in the agreement before development.",
      },
      {
        q: "When is a separate backend better than an endpoint on your platform?",
        a: "When the task needs its own database with a lot of state, your own users and permissions, access to a private network, or many related endpoints. Then we build a separate service in your repository and deploy it where you choose.",
      },
    ],
    related: ["managed-hosting", "ai-infrastructure", "devops-for-startups"],
  },
  uk: {
    seo: {
      title: "Розробка API на замовлення: API під ключ, бекенд | DVO Corp",
      description:
        "Пишемо потрібну вам функцію й запускаємо на своїй платформі: HTTP-ендпоінт з API-ключем та оплатою за використання. А також бекенд-сервіси на Python і Node.js.",
      keywords: [
        "розробка API на замовлення",
        "API під ключ",
        "розробка бекенду",
        "API як сервіс",
        "розробка бекенду на Python",
        "розробка бекенду на Node.js",
      ],
    },
    name: "Розробка та API на замовлення",
    h1: "Розробка API на замовлення: ваша функція як ендпоінт або повноцінний бекенд",
    lead: "Іноді потрібна одна можливість, а не ціла система: калькулятор ціни, конвертер документів, перевірка даних, побудова звіту. Ми пишемо її, запускаємо на своїй платформі MetaPlatho й даємо вам HTTP-ендпоінт з API-ключем. Коли завдання більше — робимо звичайний бекенд-сервіс на Python або Node.js.",
    when: [
      "Потрібна одна функція, і заради неї не хочеться будувати й супроводжувати бекенд",
      "Фронтенд або no-code-інструмент готовий, а серверної логіки бракує",
      "Дві системи мають обмінюватися даними, а готової інтеграції немає в жодній",
      "Ви хочете продавати розрахунок чи конвертацію власним клієнтам з оплатою за використання",
      "Розробники зайняті продуктом, а бекенд-завдання все чекає своєї черги",
    ],
    included: [
      {
        title: "Специфікація до коду",
        text: "Записуємо вхідні дані, результат, помилки й очікуваний обсяг. Контракт ендпоінта ви затверджуєте до початку розробки.",
      },
      {
        title: "Сама функція",
        text: "Код на Python або Node.js із тестами на ваших реальних прикладах: розрахунок, конвертація файлу, перевірка в зовнішньому джерелі, згенерований звіт.",
      },
      {
        title: "Ендпоінт на MetaPlatho",
        text: "Функцію розгортаємо на платформі, де працює наш власний публічний API. Ви викликаєте її по HTTP з API-ключем у заголовку.",
      },
      {
        title: "Облік, ліміти й білінг",
        text: "Кожен виклик рахується. Квоти, обмеження частоти запитів і оплата за використання вже вбудовані в платформу — їх не розробляють для вас наново.",
      },
      {
        title: "Довгі завдання: черга й вебхуки",
        text: "Якщо робота триває довше, ніж має тривати запит, вона виконується як фонове завдання. Ви опитуєте його статус або отримуєте вебхук після завершення.",
      },
      {
        title: "Бекенд-сервіси та інтеграції",
        text: "Окремий сервіс із власною базою, інтеграція між вашими системами, внутрішній інструмент — пишемо у вашому репозиторії й розгортаємо на вашій інфраструктурі або на нашій.",
      },
    ],
    steps: [
      {
        title: "Ви описуєте функцію",
        text: "Що на вході, що на виході, як часто її викликатимуть. Кількох реальних прикладів достатньо.",
      },
      {
        title: "Специфікація й ціна",
        text: "Ви отримуєте контракт ендпоінта, ціну розробки та ціну за виклик або за одиницю роботи.",
      },
      {
        title: "Розробка і проба",
        text: "Пишемо функцію й видаємо вам ключ. Ви пробуєте її на реальних даних і кажете, що не так.",
      },
      {
        title: "Продакшн",
        text: "Ви викликаєте ендпоінт зі свого продукту й платите за використання. Моніторинг та оновлення — на нашому боці.",
      },
    ],
    stack: [
      "Python",
      "FastAPI",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "OpenAPI",
      "Docker",
      "Kubernetes",
      "KEDA",
      "GitHub Actions",
    ],
    faq: [
      {
        q: "Як рахується оплата за використання?",
        a: "За одиницею, що відповідає функції: запит, документ, файл, хвилина обробки. Одиницю та її ціну узгоджуємо до розробки. Кожен виклик записується, тож рахунок можна звірити з журналом використання.",
      },
      {
        q: "А якщо один виклик триває хвилини, а не мілісекунди?",
        a: "Тоді це асинхронне завдання. Ви надсилаєте задачу й одразу отримуєте її ідентифікатор. Робота потрапляє в чергу з повторними спробами, а ви або опитуєте статус, або отримуєте вебхук із результатом.",
      },
      {
        q: "Чи можна згодом перенести функцію на власну інфраструктуру?",
        a: "Так. Це сервіс у контейнері без залежностей, які існують лише на нашому боці. Якщо вирішите запускати його самостійно, передамо код і розгорнемо у вашому середовищі. Умови передачі фіксуємо в договорі до початку розробки.",
      },
      {
        q: "Коли окремий бекенд кращий за ендпоінт на вашій платформі?",
        a: "Коли завданню потрібні власна база з великим обсягом стану, власні користувачі й права доступу, доступ до приватної мережі або багато пов'язаних ендпоінтів. Тоді пишемо окремий сервіс у вашому репозиторії й розгортаємо там, де ви оберете.",
      },
    ],
    related: ["managed-hosting", "ai-infrastructure", "devops-for-startups"],
  },
};
