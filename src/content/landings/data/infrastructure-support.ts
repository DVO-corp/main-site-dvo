import type { LandingEntry } from "../types";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "Infrastructure support and server administration | DVO Corp",
      description:
        "We take a running system under supervision: audit, monitoring, updates, incident response, backups and a monthly report. Including systems built by others.",
      keywords: [
        "infrastructure support",
        "server administration",
        "DevOps support",
        "server maintenance",
        "managed infrastructure operations",
      ],
    },
    name: "Support and operations",
    h1: "Infrastructure support: we take over a system that already runs",
    lead: "The system works and has to keep working. We take it under supervision: find out what runs where, close the gaps in backups and monitoring, then handle updates and incidents month after month. It does not matter who built it.",
    when: [
      "The system runs, but nobody on the team is responsible for the servers",
      "The contractor or engineer who built it has left, and there is no documentation",
      "Updates have not been installed for a long time because everyone is afraid to touch anything",
      "You learn about outages from your users",
      "Backups are supposedly made, but nobody has ever restored from one",
    ],
    included: [
      {
        title: "Audit and inventory",
        text: "We list servers, services, access, scheduled jobs, certificates and backups. You get a map of the system and a list of risks in order of severity.",
      },
      {
        title: "Monitoring and alerts",
        text: "Metrics, logs and availability checks for every service. Alerts come to us and, if you want, to your Telegram or Slack.",
      },
      {
        title: "Updates and patches",
        text: "The OS, Kubernetes, databases and base images are updated on a schedule: staging first, then production, with a way back.",
      },
      {
        title: "Incident response",
        text: "We receive the alert and restore the service. Then we write down what happened, why, and what was changed so it does not repeat.",
      },
      {
        title: "Backups and restore drills",
        text: "Backups run on a schedule and are stored off the server. We regularly restore them into a test environment to prove they work.",
      },
      {
        title: "Monthly report",
        text: "What was done, which incidents happened, how resources are used and what we recommend doing next.",
      },
    ],
    steps: [
      {
        title: "Access and audit",
        text: "You grant read-only access. We describe the real state of the system and what is at risk.",
      },
      {
        title: "Clean-up",
        text: "The critical gaps go first: backups, monitoring, access, expiring certificates. This stage has a fixed price.",
      },
      {
        title: "Supervision",
        text: "The system goes onto monthly support with a response time and coverage hours agreed in advance.",
      },
      {
        title: "Reports and improvements",
        text: "You get a report every month. Larger changes are proposed separately and done only after you agree.",
      },
    ],
    stack: [
      "Linux",
      "Kubernetes",
      "Helm",
      "Terraform",
      "PostgreSQL",
      "Grafana",
      "VictoriaMetrics",
      "Loki",
      "Alertmanager",
      "AWS EC2",
      "AWS EKS",
      "Hetzner",
    ],
    faq: [
      {
        q: "Can you take over a system with no documentation?",
        a: "Yes. The audit is exactly for that: we read the configuration on the servers, the deploy scripts and the cloud account (on AWS: EC2, RDS, IAM, VPC), and write the documentation ourselves. It stays in your repository.",
      },
      {
        q: "What is covered by the monthly fee and what is not?",
        a: "Covered: monitoring, incident response, scheduled updates, backup checks and the report. A migration, a new environment or a redesign is a separate project with its own price, agreed before it starts.",
      },
      {
        q: "How fast do you react to an incident?",
        a: "The response time and the hours of coverage are agreed before the start and written into the contract. Alerts go straight to our engineers, so nobody on your side has to notice the problem and call us.",
      },
      {
        q: "Will you make us move to Kubernetes?",
        a: "No. If one server does the job, it stays one server — with monitoring, backups and updates. We propose a change of architecture only when there is a concrete reason, and you decide.",
      },
    ],
    related: ["devops-outsourcing", "monitoring", "infrastructure-security"],
  },
  uk: {
    seo: {
      title: "Підтримка серверів і супровід інфраструктури | DVO Corp",
      description:
        "Беремо робочу систему під нагляд: аудит, моніторинг, оновлення, реакція на інциденти, бекапи й щомісячний звіт. Зокрема системи, які будував хтось інший.",
      keywords: [
        "підтримка серверів",
        "адміністрування серверів",
        "супровід інфраструктури",
        "DevOps підтримка",
        "обслуговування серверів",
        "технічна підтримка інфраструктури",
      ],
    },
    name: "Підтримка та супровід",
    h1: "Підтримка серверів і супровід інфраструктури, яка вже працює",
    lead: "Система працює — і має працювати далі. Беремо її під нагляд: з'ясовуємо, що де запущено, закриваємо прогалини в бекапах і моніторингу, а далі з місяця в місяць займаємось оновленнями та інцидентами. Хто її будував — не має значення.",
    when: [
      "Система працює, але за сервери в команді ніхто не відповідає",
      "Підрядник або інженер, який усе налаштовував, пішов, а документації немає",
      "Оновлення давно не ставили, бо всі бояться щось зачепити",
      "Про збої ви дізнаєтесь від користувачів",
      "Бекапи нібито робляться, але з них ніхто жодного разу не відновлювався",
    ],
    included: [
      {
        title: "Аудит та інвентаризація",
        text: "Описуємо сервери, сервіси, доступи, завдання за розкладом, сертифікати й бекапи. На виході — карта системи та список ризиків за ступенем серйозності.",
      },
      {
        title: "Моніторинг і алерти",
        text: "Метрики, логи й перевірки доступності для кожного сервісу. Алерти надходять нам і, за бажанням, у ваш Telegram або Slack.",
      },
      {
        title: "Оновлення й патчі",
        text: "ОС, Kubernetes, бази даних і базові образи оновлюємо за розкладом: спершу стейджинг, потім продакшн, зі шляхом назад.",
      },
      {
        title: "Реакція на інциденти",
        text: "Отримуємо алерт і відновлюємо роботу сервісу. Після цього записуємо, що сталося, чому і що змінили, щоб це не повторилось.",
      },
      {
        title: "Бекапи й перевірка відновлення",
        text: "Бекапи робляться за розкладом і зберігаються поза сервером. Регулярно відновлюємо їх у тестовому середовищі, щоб переконатися, що вони робочі.",
      },
      {
        title: "Щомісячний звіт",
        text: "Що зроблено, які були інциденти, як використовуються ресурси і що радимо зробити далі.",
      },
    ],
    steps: [
      {
        title: "Доступи й аудит",
        text: "Ви надаєте доступ лише на читання. Ми описуємо реальний стан системи й те, що під загрозою.",
      },
      {
        title: "Наведення ладу",
        text: "Спершу закриваємо критичне: бекапи, моніторинг, доступи, сертифікати, що спливають. Ціна цього етапу фіксована.",
      },
      {
        title: "Нагляд",
        text: "Система переходить на щомісячну підтримку з наперед узгодженими часом реакції та годинами покриття.",
      },
      {
        title: "Звіти й покращення",
        text: "Щомісяця ви отримуєте звіт. Більші зміни пропонуємо окремо й робимо лише після вашого погодження.",
      },
    ],
    stack: [
      "Linux",
      "Kubernetes",
      "Helm",
      "Terraform",
      "PostgreSQL",
      "Grafana",
      "VictoriaMetrics",
      "Loki",
      "Alertmanager",
      "AWS EC2",
      "AWS EKS",
      "Hetzner",
    ],
    faq: [
      {
        q: "Чи візьмете систему, до якої немає документації?",
        a: "Так. Саме для цього й потрібен аудит: читаємо конфігурацію на серверах, скрипти деплою та хмарний акаунт (на AWS це EC2, RDS, IAM, VPC) і пишемо документацію самі. Вона залишається у вашому репозиторії.",
      },
      {
        q: "Що входить у щомісячну плату, а що ні?",
        a: "Входить: моніторинг, реакція на інциденти, планові оновлення, перевірка бекапів і звіт. Міграція, нове середовище чи перебудова архітектури — окремий проєкт зі своєю ціною, яку узгоджуємо до початку.",
      },
      {
        q: "Як швидко ви реагуєте на інцидент?",
        a: "Час реакції й години покриття узгоджуємо до початку робіт і фіксуємо в договорі. Алерти надходять одразу нашим інженерам, тож нікому з вашого боку не треба помічати проблему й телефонувати нам.",
      },
      {
        q: "Ви змусите нас переходити на Kubernetes?",
        a: "Ні. Якщо один сервер справляється — він залишається одним сервером, але з моніторингом, бекапами й оновленнями. Зміну архітектури пропонуємо лише тоді, коли для цього є конкретна причина, а рішення за вами.",
      },
    ],
    related: ["devops-outsourcing", "monitoring", "infrastructure-security"],
  },
};
