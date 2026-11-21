import type { LandingEntry } from "../types";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "DevOps outsourcing — a DevOps team for your product | DVO Corp",
      description:
        "DevOps as a service from Ukraine: infrastructure as code, Kubernetes, CI/CD, monitoring and ongoing operations. One-off projects or monthly support, in your cloud or on our servers.",
      keywords: [
        "DevOps outsourcing",
        "DevOps as a service",
        "outsource DevOps",
        "hire DevOps team",
        "DevOps company Ukraine",
      ],
    },
    name: "DevOps outsourcing",
    h1: "DevOps outsourcing: an infrastructure team without hiring one",
    lead: "We take over the infrastructure side of your product: environments, deploys, monitoring, backups, security and the monthly bill. You get engineers who have run production before, for the hours you actually need.",
    when: [
      "Developers deploy by hand and nobody owns the servers",
      "A full-time DevOps engineer is too expensive or too hard to hire",
      "The only person who understood the setup has left",
      "A launch or a traffic peak is coming and the system is not ready",
      "The cloud bill grows and nobody can explain why",
    ],
    included: [
      {
        title: "Audit of what runs today",
        text: "Servers, access, deploys, backups, costs. You get a list of risks ordered by how much they can hurt.",
      },
      {
        title: "Infrastructure as code",
        text: "Everything is described in Terraform and Helm in your repository. Environments are reproducible, changes are reviewable.",
      },
      {
        title: "CI/CD",
        text: "A commit goes to production through builds, tests and a controlled rollout. Rollback is one command.",
      },
      {
        title: "Monitoring and alerts",
        text: "Dashboards for your services and alerts to Telegram or Slack, so a problem is visible before users report it.",
      },
      {
        title: "Backups and security",
        text: "Scheduled backups with tested restores, least-privilege access, secrets out of the repository.",
      },
      {
        title: "Ongoing operations",
        text: "Updates, incidents, scaling and cost reviews — as a monthly service with an agreed response time.",
      },
    ],
    steps: [
      {
        title: "Call and access",
        text: "You describe the product and the pain. We get read access and look at the real state.",
      },
      {
        title: "Plan and price",
        text: "A list of work in priority order, with a timeline and a fixed price for the first stage.",
      },
      {
        title: "Build",
        text: "We work through pull requests in your repository. You see every change.",
      },
      {
        title: "Run or hand over",
        text: "We stay as your operations team, or hand over documentation and access to yours.",
      },
    ],
    stack: [
      "Terraform",
      "Kubernetes",
      "Helm",
      "GitHub Actions",
      "GitLab CI",
      "Argo CD",
      "Grafana",
      "VictoriaMetrics",
      "Loki",
      "AWS",
      "Hetzner",
      "Cloudflare",
    ],
    faq: [
      {
        q: "How is this different from hiring a DevOps engineer?",
        a: "You pay for the work done, not for a seat. There is no hiring, no onboarding and no single person whose holiday stops your releases. If the workload later justifies a full-time hire, we hand everything over with documentation.",
      },
      {
        q: "Do you need full access to our accounts?",
        a: "We start with read-only access for the audit. For the work itself we use a dedicated role with the minimum permissions, and changes go through your repository.",
      },
      {
        q: "Can you work with what we already have?",
        a: "Yes. We do not rebuild for the sake of it. Existing resources are imported into code and improved step by step.",
      },
      {
        q: "What if we have no servers at all?",
        a: "Then we either set up your own cloud account from scratch or host the application on our infrastructure. Both options are priced before the start.",
      },
    ],
    related: ["infrastructure-support", "kubernetes", "ci-cd"],
  },
  uk: {
    seo: {
      title: "DevOps аутсорсинг — команда DevOps для вашого продукту | DVO Corp",
      description:
        "DevOps як сервіс: інфраструктура як код, Kubernetes, CI/CD, моніторинг і постійний супровід. Разові проєкти або щомісячна підтримка — у вашій хмарі чи на наших серверах.",
      keywords: [
        "DevOps аутсорсинг",
        "DevOps аутсорс",
        "DevOps послуги",
        "DevOps як сервіс",
        "найняти DevOps",
        "DevOps компанія Україна",
      ],
    },
    name: "DevOps аутсорсинг",
    h1: "DevOps аутсорсинг: інфраструктурна команда без найму в штат",
    lead: "Беремо на себе інфраструктуру вашого продукту: середовища, деплой, моніторинг, бекапи, безпеку й щомісячний рахунок за хмару. Ви отримуєте інженерів, які вже тримали продакшн, — на стільки годин, скільки реально потрібно.",
    when: [
      "Розробники деплоять руками, а за сервери ніхто не відповідає",
      "DevOps у штат — дорого або не вдається знайти",
      "Людина, яка розуміла налаштування, пішла з команди",
      "Попереду запуск або пік трафіку, а система не готова",
      "Рахунок за хмару росте, і ніхто не може пояснити чому",
    ],
    included: [
      {
        title: "Аудит того, що працює зараз",
        text: "Сервери, доступи, деплой, бекапи, витрати. На виході — список ризиків, упорядкований за тим, наскільки боляче вони можуть вдарити.",
      },
      {
        title: "Інфраструктура як код",
        text: "Усе описано в Terraform і Helm у вашому репозиторії. Середовища відтворювані, зміни проходять рев'ю.",
      },
      {
        title: "CI/CD",
        text: "Коміт потрапляє в продакшн через збірку, тести й контрольований викат. Відкат — одна команда.",
      },
      {
        title: "Моніторинг і алерти",
        text: "Дашборди під ваші сервіси та алерти в Telegram або Slack — проблему видно раніше, ніж про неї напишуть користувачі.",
      },
      {
        title: "Бекапи й безпека",
        text: "Бекапи за розкладом із перевіреним відновленням, мінімально необхідні доступи, секрети поза репозиторієм.",
      },
      {
        title: "Постійний супровід",
        text: "Оновлення, інциденти, масштабування й перегляд витрат — щомісячний сервіс з узгодженим часом реакції.",
      },
    ],
    steps: [
      {
        title: "Дзвінок і доступи",
        text: "Ви розповідаєте про продукт і проблему. Ми отримуємо доступ на читання й дивимось на реальний стан.",
      },
      {
        title: "План і ціна",
        text: "Список робіт за пріоритетом, строки й фіксована ціна першого етапу.",
      },
      {
        title: "Робота",
        text: "Працюємо через pull request-и у вашому репозиторії. Кожну зміну видно.",
      },
      {
        title: "Супровід або передача",
        text: "Залишаємось вашою командою експлуатації або передаємо документацію й доступи вашим інженерам.",
      },
    ],
    stack: [
      "Terraform",
      "Kubernetes",
      "Helm",
      "GitHub Actions",
      "GitLab CI",
      "Argo CD",
      "Grafana",
      "VictoriaMetrics",
      "Loki",
      "AWS",
      "Hetzner",
      "Cloudflare",
    ],
    faq: [
      {
        q: "Чим це відрізняється від найму DevOps-інженера?",
        a: "Ви платите за виконану роботу, а не за місце в штаті. Немає найму, онбордингу й однієї людини, чия відпустка зупиняє релізи. Якщо згодом обсяг виправдає штатного інженера — передамо все з документацією.",
      },
      {
        q: "Вам потрібен повний доступ до наших акаунтів?",
        a: "Починаємо з доступу лише на читання — для аудиту. Для робіт використовуємо окрему роль із мінімальними правами, а зміни йдуть через ваш репозиторій.",
      },
      {
        q: "Ви працюєте з тим, що в нас уже є?",
        a: "Так. Ми не перебудовуємо заради перебудови. Наявні ресурси імпортуємо в код і покращуємо крок за кроком.",
      },
      {
        q: "А якщо серверів у нас немає взагалі?",
        a: "Тоді або налаштовуємо ваш власний хмарний акаунт з нуля, або розміщуємо застосунок на нашій інфраструктурі. Обидва варіанти оцінюємо до початку робіт.",
      },
    ],
    related: ["infrastructure-support", "kubernetes", "ci-cd"],
  },
};
