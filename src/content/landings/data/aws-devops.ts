import type { LandingEntry } from "../types";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "AWS DevOps: infrastructure, EKS, Terraform, costs | DVO Corp",
      description:
        "AWS infrastructure built and run by DevOps engineers: account and VPC layout, EKS, RDS, CI/CD, monitoring and a bill that matches the load. All in Terraform.",
      keywords: [
        "AWS DevOps",
        "AWS consulting",
        "AWS infrastructure setup",
        "AWS EKS setup",
        "AWS DevOps engineer",
        "AWS cost optimization",
      ],
    },
    name: "AWS infrastructure",
    h1: "AWS infrastructure: built as code, sized to the load",
    lead: "We set up and operate production on AWS: accounts, networks, EKS clusters, databases, delivery pipelines and monitoring. Every resource is in Terraform, and the bill is reviewed against what the system really uses.",
    when: [
      "You are starting on AWS and want the account laid out properly from day one",
      "Resources were created by hand in the console and nobody knows what is safe to delete",
      "You need EKS, but nobody on the team has run Kubernetes in production",
      "The AWS bill grows faster than the traffic",
      "A client or an auditor asks how access, backups and networking are organised",
    ],
    included: [
      {
        title: "Accounts, IAM and network",
        text: "Separate accounts or environments, least-privilege IAM roles, a VPC with private subnets, NAT and security groups that expose only what must be public.",
      },
      {
        title: "Compute: EKS or EC2",
        text: "An EKS cluster with managed node groups and autoscaling, or plain EC2 with Auto Scaling where a cluster is not justified. The choice follows the workload.",
      },
      {
        title: "Data",
        text: "RDS or Aurora with automated backups and a tested restore, ElastiCache, S3 with lifecycle rules, encryption with KMS.",
      },
      {
        title: "Delivery",
        text: "CI/CD from GitHub Actions or GitLab CI into ECR and the cluster, with staged rollouts and a rollback command.",
      },
      {
        title: "Monitoring and alerts",
        text: "CloudWatch plus Grafana and Prometheus-compatible metrics, logs in one place, alerts to Telegram or Slack.",
      },
      {
        title: "Cost review",
        text: "Cost Explorer and usage data against the actual load: instance sizes, storage classes, data-transfer paths, Savings Plans and spot capacity where it is safe.",
      },
    ],
    steps: [
      {
        title: "Access and audit",
        text: "A read-only role in your account. We map what exists, what it costs and what is exposed.",
      },
      {
        title: "Target design",
        text: "An architecture diagram, the Terraform layout, a migration order and a price for the work.",
      },
      {
        title: "Build as code",
        text: "Existing resources are imported into Terraform, new ones are created through pull requests in your repository.",
      },
      {
        title: "Run or hand over",
        text: "We operate the account as a monthly service, or pass it to your team with documentation.",
      },
    ],
    stack: [
      "AWS EKS",
      "EC2",
      "RDS",
      "S3",
      "VPC",
      "IAM",
      "CloudFront",
      "ECR",
      "CloudWatch",
      "Terraform",
      "Helm",
      "GitHub Actions",
    ],
    faq: [
      {
        q: "Do we keep ownership of the AWS account?",
        a: "Yes. The account, the billing and the root access are yours. We work through a dedicated IAM role that you can revoke at any moment.",
      },
      {
        q: "EKS or plain EC2 — which do we need?",
        a: "With several services, frequent releases and uneven load, EKS pays for itself. With one or two services and steady traffic, EC2 with Auto Scaling is simpler and cheaper to run. We recommend one after looking at the workload, and say why.",
      },
      {
        q: "Our resources were created manually. Do you rebuild everything?",
        a: "No. Existing resources are imported into Terraform as they are, then changed step by step. Nothing is recreated unless there is a reason to.",
      },
      {
        q: "Can you lower our AWS bill?",
        a: "Usually there is something to remove: oversized instances, unattached volumes, NAT and data-transfer charges, storage in the wrong class. We show the findings with the expected effect before changing anything; the size of the saving depends on the account.",
      },
    ],
    related: ["kubernetes", "terraform-iac", "cloud-cost-optimization"],
  },
  uk: {
    seo: {
      title: "AWS DevOps: інфраструктура, EKS, Terraform, витрати | DVO Corp",
      description:
        "Інфраструктура на AWS від DevOps-інженерів: акаунти й VPC, EKS, RDS, CI/CD, моніторинг і рахунок, що відповідає навантаженню. Усе описано в Terraform.",
      keywords: [
        "AWS DevOps",
        "налаштування AWS",
        "інфраструктура на AWS",
        "налаштування AWS EKS",
        "DevOps інженер AWS",
        "оптимізація витрат AWS",
      ],
    },
    name: "Інфраструктура на AWS",
    h1: "Інфраструктура на AWS: описана кодом, розрахована під навантаження",
    lead: "Налаштовуємо й супроводжуємо продакшн в AWS: акаунти, мережі, кластери EKS, бази даних, доставку коду та моніторинг. Кожен ресурс описано в Terraform, а рахунок звіряємо з тим, що система реально споживає.",
    when: [
      "Ви починаєте в AWS і хочете одразу правильно розкласти акаунт",
      "Ресурси створювали руками в консолі, і ніхто не знає, що можна безпечно видалити",
      "Потрібен EKS, але в команді ніхто не тримав Kubernetes у продакшні",
      "Рахунок AWS росте швидше, ніж трафік",
      "Клієнт або аудитор питає, як організовано доступи, бекапи й мережу",
    ],
    included: [
      {
        title: "Акаунти, IAM і мережа",
        text: "Окремі акаунти або середовища, IAM-ролі з мінімальними правами, VPC з приватними підмережами, NAT і security groups, які відкривають назовні лише необхідне.",
      },
      {
        title: "Обчислення: EKS або EC2",
        text: "Кластер EKS із керованими групами вузлів і автомасштабуванням або звичайні EC2 з Auto Scaling — там, де кластер не виправданий. Вибір залежить від навантаження.",
      },
      {
        title: "Дані",
        text: "RDS або Aurora з автоматичними бекапами й перевіреним відновленням, ElastiCache, S3 з правилами життєвого циклу, шифрування через KMS.",
      },
      {
        title: "Доставка коду",
        text: "CI/CD з GitHub Actions або GitLab CI в ECR і кластер — з поетапним викатом і командою відкату.",
      },
      {
        title: "Моніторинг і алерти",
        text: "CloudWatch разом із Grafana та Prometheus-сумісними метриками, логи в одному місці, алерти в Telegram або Slack.",
      },
      {
        title: "Перегляд витрат",
        text: "Cost Explorer і дані про використання проти реального навантаження: розміри інстансів, класи сховищ, шляхи передачі даних, Savings Plans і spot-потужності там, де це безпечно.",
      },
    ],
    steps: [
      {
        title: "Доступ і аудит",
        text: "Роль лише на читання у вашому акаунті. Складаємо карту: що є, скільки коштує і що відкрито назовні.",
      },
      {
        title: "Цільова схема",
        text: "Схема архітектури, структура Terraform, порядок міграції та ціна робіт.",
      },
      {
        title: "Побудова кодом",
        text: "Наявні ресурси імпортуємо в Terraform, нові створюємо через pull request-и у вашому репозиторії.",
      },
      {
        title: "Супровід або передача",
        text: "Ведемо акаунт як щомісячний сервіс або передаємо вашій команді з документацією.",
      },
    ],
    stack: [
      "AWS EKS",
      "EC2",
      "RDS",
      "S3",
      "VPC",
      "IAM",
      "CloudFront",
      "ECR",
      "CloudWatch",
      "Terraform",
      "Helm",
      "GitHub Actions",
    ],
    faq: [
      {
        q: "Акаунт AWS залишається нашим?",
        a: "Так. Акаунт, білінг і root-доступ — ваші. Ми працюємо через окрему IAM-роль, яку ви можете відкликати будь-коли.",
      },
      {
        q: "EKS чи звичайні EC2 — що нам потрібно?",
        a: "Якщо сервісів кілька, релізи часті, а навантаження нерівномірне — EKS себе окупає. Якщо сервісів один-два і трафік рівний — EC2 з Auto Scaling простіші й дешевші в супроводі. Рекомендуємо варіант після того, як подивимось на навантаження, і пояснюємо чому.",
      },
      {
        q: "Ресурси в нас створені вручну. Ви все перебудовуєте?",
        a: "Ні. Наявні ресурси імпортуємо в Terraform як є, а потім змінюємо крок за кроком. Нічого не перестворюємо без причини.",
      },
      {
        q: "Ви можете зменшити наш рахунок AWS?",
        a: "Зазвичай є що прибрати: завеликі інстанси, непідключені диски, витрати на NAT і передачу даних, сховища не того класу. Показуємо знахідки з очікуваним ефектом до будь-яких змін; розмір економії залежить від акаунта.",
      },
    ],
    related: ["kubernetes", "terraform-iac", "cloud-cost-optimization"],
  },
};
