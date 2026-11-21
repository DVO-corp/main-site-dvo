import type { LandingEntry } from "../types";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "Terraform and Infrastructure as Code services | DVO Corp",
      description:
        "Terraform services: modules, Terragrunt, import of existing resources into code, a plan on every pull request and reusable templates in your repository.",
      keywords: [
        "Terraform services",
        "infrastructure as code",
        "Terraform consulting",
        "Terragrunt",
        "Terraform import",
        "IaC",
      ],
    },
    name: "Terraform and IaC",
    h1: "Terraform and Infrastructure as Code: your cloud described in a repository",
    lead: "We describe your infrastructure in Terraform: networks, servers, clusters, databases, DNS, access. What was created by hand is imported into code without being recreated. After that every change is a pull request with a plan you can read before it is applied.",
    when: [
      "Resources were created in the console and nobody remembers why",
      "A second environment is needed and the first one cannot be reproduced",
      "Terraform exists, but the state is local or the plan shows unexpected changes",
      "One person runs apply from a laptop and the rest wait",
      "You open new projects or regions and copy the configuration by hand",
    ],
    included: [
      {
        title: "Inventory and import",
        text: "We list what exists in the account (on AWS usually the VPC, EC2, RDS, S3, IAM and EKS) and import it into Terraform state. Resources are not recreated; the goal is a plan that shows no changes.",
      },
      {
        title: "Modules",
        text: "Repeated parts, such as a network, a cluster, a database or a service, become modules with clear inputs and outputs and pinned versions.",
      },
      {
        title: "State and environments",
        text: "Remote state with locking and encryption, a separate state per environment. Terragrunt is added where there are many environments or accounts and the configuration should not be copied.",
      },
      {
        title: "Plan on pull request",
        text: "CI runs fmt, validate and plan on every pull request and posts the plan as a comment. Apply runs after merge, from the pipeline, not from a laptop.",
      },
      {
        title: "Access and secrets",
        text: "The pipeline gets its own role with limited permissions, through OIDC where the cloud supports it, so no long-lived keys sit in CI. Secrets stay out of the code: encrypted with SOPS or kept in the cloud's secret store.",
      },
      {
        title: "Templates and documentation",
        text: "Your team gets templates for a new service or environment and a short guide: how to add a resource, how to read a plan, what to do when the state drifts.",
      },
    ],
    steps: [
      {
        title: "Call and access",
        text: "You show what runs and where. We get read access to the cloud account and to the existing code, if there is any.",
      },
      {
        title: "Plan and price",
        text: "Which resources go into code first, how state and environments are laid out, what the pipeline looks like. Scope and price are agreed before work starts.",
      },
      {
        title: "Import and write",
        text: "We import resources group by group and open pull requests. Each one ends with a plan that shows no changes to the live infrastructure.",
      },
      {
        title: "Pipeline and handover",
        text: "Plan and apply move into CI. We walk your team through the repository, or keep maintaining it under a support agreement.",
      },
    ],
    stack: [
      "Terraform",
      "Terragrunt",
      "AWS",
      "Hetzner",
      "Cloudflare",
      "Kubernetes",
      "Helm",
      "GitHub Actions",
      "GitLab CI",
      "SOPS",
    ],
    faq: [
      {
        q: "Will importing existing resources cause downtime?",
        a: "No. Import only records an existing resource in the Terraform state; nothing changes in the cloud. We then adjust the code until the plan shows no differences, and only after that start making changes through Terraform.",
      },
      {
        q: "We already have Terraform, but it is a mess. Do you rewrite it?",
        a: "Not from scratch. We move the state to a remote backend, split one large state into parts, extract modules and pin provider versions. Resources are moved between states with state moves and import blocks, so nothing is destroyed along the way.",
      },
      {
        q: "Terraform or Terragrunt?",
        a: "Plain Terraform is enough for one account with two or three environments. Terragrunt is worth adding when there are many environments, regions or accounts and the same backend and provider settings repeat in each. We use both and choose by the size of the setup.",
      },
      {
        q: "What if someone changes a resource by hand in the console?",
        a: "The next plan shows it as drift. We set up a scheduled plan that reports drift to the team chat, so the change is either written into code or reverted. Write access to the console is normally reduced once the pipeline works.",
      },
    ],
    related: ["devops-outsourcing", "ci-cd", "kubernetes"],
  },
  uk: {
    seo: {
      title: "Terraform послуги: інфраструктура як код під ключ | DVO Corp",
      description:
        "Terraform послуги: модулі, Terragrunt, імпорт наявних ресурсів у код, план на кожен pull request і шаблони для повторного використання у вашому репозиторії.",
      keywords: [
        "Terraform послуги",
        "інфраструктура як код",
        "налаштування Terraform",
        "Terragrunt",
        "імпорт у Terraform",
        "IaC",
      ],
    },
    name: "Terraform та IaC",
    h1: "Terraform послуги: інфраструктура як код у вашому репозиторії",
    lead: "Описуємо вашу інфраструктуру в Terraform: мережі, сервери, кластери, бази даних, DNS, доступи. Те, що створювали руками, імпортуємо в код без перестворення. Після цього кожна зміна — це pull request із планом, який можна прочитати до застосування.",
    when: [
      "Ресурси створювали в консолі, і ніхто вже не пам'ятає навіщо",
      "Потрібне друге середовище, а перше неможливо відтворити",
      "Terraform є, але state лежить локально або план показує несподівані зміни",
      "Одна людина запускає apply з ноутбука, а решта чекає",
      "Ви відкриваєте нові проєкти чи регіони й копіюєте конфігурацію руками",
    ],
    included: [
      {
        title: "Інвентаризація й імпорт",
        text: "Складаємо перелік того, що є в акаунті (в AWS це зазвичай VPC, EC2, RDS, S3, IAM та EKS), та імпортуємо це в state Terraform. Ресурси не перестворюються; мета — план, у якому немає змін.",
      },
      {
        title: "Модулі",
        text: "Повторювані частини — мережа, кластер, база даних, сервіс — стають модулями зі зрозумілими входами й виходами та зафіксованими версіями.",
      },
      {
        title: "State і середовища",
        text: "Віддалений state із блокуванням і шифруванням, окремий state на кожне середовище. Terragrunt додаємо там, де середовищ чи акаунтів багато й конфігурацію не варто копіювати.",
      },
      {
        title: "План на pull request",
        text: "CI запускає fmt, validate і plan на кожен pull request та публікує план коментарем. Apply виконується після злиття — з пайплайна, а не з ноутбука.",
      },
      {
        title: "Доступи й секрети",
        text: "Пайплайн отримує власну роль з обмеженими правами — через OIDC, якщо хмара це підтримує, тож довгоживучих ключів у CI немає. Секрети не потрапляють у код: їх шифруємо через SOPS або тримаємо в хмарному сховищі секретів.",
      },
      {
        title: "Шаблони й документація",
        text: "Ваша команда отримує шаблони для нового сервісу чи середовища й коротку інструкцію: як додати ресурс, як читати план, що робити, коли state розійшовся з реальністю.",
      },
    ],
    steps: [
      {
        title: "Дзвінок і доступи",
        text: "Ви показуєте, що і де працює. Ми отримуємо доступ на читання до хмарного акаунта й до наявного коду, якщо він є.",
      },
      {
        title: "План і ціна",
        text: "Які ресурси йдуть у код першими, як розкладено state і середовища, який вигляд має пайплайн. Обсяг і ціну узгоджуємо до початку робіт.",
      },
      {
        title: "Імпорт і код",
        text: "Імпортуємо ресурси група за групою й відкриваємо pull request-и. Кожен завершується планом, який не змінює робочу інфраструктуру.",
      },
      {
        title: "Пайплайн і передача",
        text: "Plan і apply переходять у CI. Проводимо вашу команду по репозиторію або й далі супроводжуємо його за договором підтримки.",
      },
    ],
    stack: [
      "Terraform",
      "Terragrunt",
      "AWS",
      "Hetzner",
      "Cloudflare",
      "Kubernetes",
      "Helm",
      "GitHub Actions",
      "GitLab CI",
      "SOPS",
    ],
    faq: [
      {
        q: "Чи спричинить імпорт наявних ресурсів простій?",
        a: "Ні. Імпорт лише записує наявний ресурс у state Terraform; у хмарі нічого не змінюється. Далі ми доводимо код до стану, коли план не показує розбіжностей, і лише після цього починаємо вносити зміни через Terraform.",
      },
      {
        q: "Terraform у нас уже є, але там безлад. Ви переписуєте все?",
        a: "Не з нуля. Переносимо state у віддалений бекенд, ділимо один великий state на частини, виносимо модулі й фіксуємо версії провайдерів. Ресурси переміщуємо між state через state mv та import-блоки, тож дорогою нічого не знищується.",
      },
      {
        q: "Terraform чи Terragrunt?",
        a: "Звичайного Terraform досить для одного акаунта з двома-трьома середовищами. Terragrunt варто додати, коли середовищ, регіонів чи акаунтів багато й у кожному повторюються ті самі налаштування бекенду та провайдерів. Працюємо з обома й обираємо за розміром системи.",
      },
      {
        q: "А якщо хтось змінить ресурс руками в консолі?",
        a: "Наступний план покаже це як дрейф. Налаштовуємо план за розкладом, який повідомляє про дрейф у чат команди, тож зміну або записують у код, або відкочують. Права на запис у консолі зазвичай звужуємо, щойно пайплайн запрацював.",
      },
    ],
    related: ["devops-outsourcing", "ci-cd", "kubernetes"],
  },
};
