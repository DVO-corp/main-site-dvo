import type { LandingEntry } from "../types";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "Cloud migration to AWS, from AWS and to Kubernetes | DVO Corp",
      description:
        "Migration to AWS and EKS, from AWS to Hetzner, or from bare servers to Kubernetes: parallel environment, data sync, cut-over in an agreed window, rollback.",
      keywords: [
        "cloud migration",
        "migration to AWS",
        "migrate from AWS",
        "server migration",
        "migration to Kubernetes",
        "AWS to Hetzner migration",
      ],
    },
    name: "Cloud migration",
    h1: "Cloud migration: a parallel environment, a short cut-over, a way back",
    lead: "We move systems into AWS, out of AWS to cheaper providers, and from standalone servers into Kubernetes. The new environment is built next to the old one, data is replicated while the old system keeps working, and traffic switches in an agreed window. The old environment stays until you confirm the new one.",
    when: [
      "The AWS bill no longer fits the business and the same load would cost less elsewhere",
      "You have outgrown a hosting provider and need AWS: managed databases, more regions, EKS",
      "Servers set up by hand years ago need to move into a cluster",
      "The product has to be hosted in another country or region",
      "The migration keeps being postponed because nobody wants to risk downtime",
    ],
    included: [
      {
        title: "Inventory",
        text: "Services, databases, files, cron jobs, DNS records, certificates, external integrations and IP allowlists. We also find what depends on provider-specific services and what can be dropped.",
      },
      {
        title: "Target design and cost",
        text: "What the system looks like on the new side. On AWS that means EKS or EC2, RDS, S3 and the VPC layout; when leaving AWS, what replaces each managed service. You see the expected bill before you decide.",
      },
      {
        title: "Parallel environment",
        text: "The new infrastructure is created with Terraform next to the old one. Services are deployed there from the same repository and checked without touching production.",
      },
      {
        title: "Data sync",
        text: "Databases move by replication from the old side to the new one, so the copy stays current until the cut-over. Object storage is synced to or from S3 with rclone in several passes. Large volumes are copied in advance.",
      },
      {
        title: "Cut-over",
        text: "The DNS TTL is lowered beforehand. In the window, writes stop on the old side, replication catches up, the new database is promoted and traffic is switched. Downtime is the length of this step.",
      },
      {
        title: "Rollback path",
        text: "The old environment stays running and untouched until you sign off. The conditions for switching back are written down before the window, not during it.",
      },
    ],
    steps: [
      {
        title: "Call and access",
        text: "You tell us what moves and why. We get read access to the current environment and to the bill.",
      },
      {
        title: "Plan and price",
        text: "Inventory, target architecture, cost comparison, migration order and expected downtime. The price is agreed before work starts.",
      },
      {
        title: "Build and rehearse",
        text: "The new environment goes up, data is synced, and we do a trial cut-over on a copy. Load and a restore from backup are tested on the new side.",
      },
      {
        title: "Cut-over and sign-off",
        text: "Traffic switches in the agreed window and we watch the system. After your sign-off the old environment is shut down.",
      },
    ],
    stack: [
      "Terraform",
      "Kubernetes",
      "AWS EKS",
      "AWS EC2",
      "AWS RDS",
      "AWS S3",
      "Helm",
      "Hetzner",
      "Cloudflare",
      "PostgreSQL",
      "MySQL",
      "rclone",
    ],
    faq: [
      {
        q: "How much downtime should we expect?",
        a: "It depends on the databases. With replication, the stop lasts as long as it takes to pause writes, let the replica catch up and switch traffic. If replication is not possible, the stop equals the time of the final dump and restore, which we measure in a rehearsal. You get the expected figure before the window is scheduled.",
      },
      {
        q: "What happens if something goes wrong after the switch?",
        a: "Traffic goes back to the old environment, which is still running. The hard part is data written to the new side after the switch. Before the window we agree whether it is replicated back, or whether a rollback is possible only until writes are opened. This is decided in advance.",
      },
      {
        q: "We are leaving AWS and use RDS, SQS and S3. What replaces them?",
        a: "RDS is replaced by PostgreSQL or MySQL that we run with replication and backups, or by the new provider's managed database. S3 is replaced by any S3-compatible storage, usually with no code changes beyond the endpoint. SQS is replaced by Redis, RabbitMQ or NATS, and this may need changes in the application. Every such replacement is listed in the plan.",
      },
      {
        q: "We are moving into AWS. Which services will you use?",
        a: "Containers go to EKS, or to EC2 if Kubernetes is not needed. Databases go to RDS when you want the provider to handle backups and failover. Files go to S3, and static content is served through CloudFront. Networks are laid out in a VPC with private subnets, and access is set up through IAM roles. Everything is created with Terraform, and you see the expected bill before the move.",
      },
    ],
    related: ["cloud-cost-optimization", "kubernetes", "terraform-iac"],
  },
  uk: {
    seo: {
      title: "Міграція в хмару та з AWS: перенесення серверів | DVO Corp",
      description:
        "Міграція в хмару AWS та на EKS, міграція з AWS на Hetzner, перенесення серверів у Kubernetes: паралельне середовище, синхронізація даних, шлях відкату.",
      keywords: [
        "міграція в хмару",
        "міграція з AWS",
        "перенесення серверів",
        "міграція в AWS",
        "міграція в Kubernetes",
        "міграція з AWS на Hetzner",
      ],
    },
    name: "Міграція в хмару",
    h1: "Міграція в хмару: паралельне середовище, коротке перемикання, шлях назад",
    lead: "Переносимо системи в AWS, з AWS до дешевших провайдерів і з окремих серверів у Kubernetes. Нове середовище будуємо поруч зі старим, дані реплікуються, поки стара система працює, а трафік перемикаємо в узгоджене вікно. Старе середовище залишається, доки ви не підтвердите нове.",
    when: [
      "Рахунок AWS уже не відповідає можливостям бізнесу, а те саме навантаження деінде коштувало б менше",
      "Ви переросли хостинг-провайдера й потрібен AWS: керовані бази даних, більше регіонів, EKS",
      "Сервери, налаштовані руками багато років тому, треба перенести в кластер",
      "Продукт має розміщуватися в іншій країні чи регіоні",
      "Міграцію постійно відкладають, бо ніхто не хоче ризикувати простоєм",
    ],
    included: [
      {
        title: "Інвентаризація",
        text: "Сервіси, бази даних, файли, cron-задачі, DNS-записи, сертифікати, зовнішні інтеграції та списки дозволених IP. Також з'ясовуємо, що залежить від специфічних сервісів провайдера, а від чого можна відмовитися.",
      },
      {
        title: "Цільова архітектура й вартість",
        text: "Який вигляд система матиме на новому місці. В AWS це EKS або EC2, RDS, S3 і схема VPC; якщо ви йдете з AWS — чим замінюється кожен керований сервіс. Очікуваний рахунок ви бачите до того, як ухвалюєте рішення.",
      },
      {
        title: "Паралельне середовище",
        text: "Нову інфраструктуру створюємо через Terraform поруч зі старою. Сервіси деплоїмо туди з того самого репозиторію й перевіряємо, не зачіпаючи продакшн.",
      },
      {
        title: "Синхронізація даних",
        text: "Бази даних переносимо реплікацією зі старого боку на новий, тож копія залишається актуальною до самого перемикання. Об'єктне сховище синхронізуємо з S3 або в S3 через rclone у кілька проходів. Великі обсяги копіюємо заздалегідь.",
      },
      {
        title: "Перемикання",
        text: "TTL у DNS зменшуємо заздалегідь. У вікні зупиняємо запис на старому боці, чекаємо, поки реплікація наздожене, робимо нову базу основною й перемикаємо трафік. Простій дорівнює тривалості цього кроку.",
      },
      {
        title: "Шлях відкату",
        text: "Старе середовище працює й залишається без змін, доки ви не підтвердите результат. Умови повернення назад записуємо до вікна, а не під час нього.",
      },
    ],
    steps: [
      {
        title: "Дзвінок і доступи",
        text: "Ви розповідаєте, що переїжджає й чому. Ми отримуємо доступ на читання до теперішнього середовища й до рахунку.",
      },
      {
        title: "План і ціна",
        text: "Інвентаризація, цільова архітектура, порівняння вартості, порядок міграції й очікуваний простій. Ціну узгоджуємо до початку робіт.",
      },
      {
        title: "Розгортання й репетиція",
        text: "Піднімаємо нове середовище, синхронізуємо дані й проводимо пробне перемикання на копії. На новому боці перевіряємо навантаження й відновлення з бекапу.",
      },
      {
        title: "Перемикання й підтвердження",
        text: "Трафік перемикаємо в узгоджене вікно й стежимо за системою. Після вашого підтвердження старе середовище вимикаємо.",
      },
    ],
    stack: [
      "Terraform",
      "Kubernetes",
      "AWS EKS",
      "AWS EC2",
      "AWS RDS",
      "AWS S3",
      "Helm",
      "Hetzner",
      "Cloudflare",
      "PostgreSQL",
      "MySQL",
      "rclone",
    ],
    faq: [
      {
        q: "На який простій розраховувати?",
        a: "Залежить від баз даних. З реплікацією зупинка триває стільки, скільки потрібно, щоб призупинити запис, дати репліці наздогнати й перемкнути трафік. Якщо реплікація неможлива, зупинка дорівнює часу фінального дампа й відновлення — його вимірюємо на репетиції. Очікувану цифру ви отримуєте до того, як призначено вікно.",
      },
      {
        q: "Що буде, якщо після перемикання щось піде не так?",
        a: "Трафік повертається на старе середовище, яке все ще працює. Складність — дані, записані на новому боці після перемикання. До вікна домовляємося, чи вони реплікуються назад, чи відкат можливий лише до моменту, коли відкрито запис. Це вирішується заздалегідь.",
      },
      {
        q: "Ми йдемо з AWS і користуємося RDS, SQS і S3. Чим їх замінити?",
        a: "RDS замінюємо на PostgreSQL або MySQL, які супроводжуємо самі з реплікацією й бекапами, або на керовану базу нового провайдера. S3 — на будь-яке S3-сумісне сховище, зазвичай без змін у коді, крім адреси ендпоінта. SQS — на Redis, RabbitMQ або NATS, і це може потребувати змін у застосунку. Кожну таку заміну вказуємо в плані.",
      },
      {
        q: "Ми переїжджаємо в AWS. Які сервіси ви використаєте?",
        a: "Контейнери йдуть в EKS або на EC2, якщо Kubernetes не потрібен. Бази даних — у RDS, коли ви хочете, щоб бекапами й перемиканням на резерв опікувався провайдер. Файли — в S3, статику віддає CloudFront. Мережі розкладаємо у VPC з приватними підмережами, доступи налаштовуємо через ролі IAM. Усе створюється через Terraform, а очікуваний рахунок ви бачите до переїзду.",
      },
    ],
    related: ["cloud-cost-optimization", "kubernetes", "terraform-iac"],
  },
};
