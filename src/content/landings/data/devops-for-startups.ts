import type { LandingEntry } from "../types";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "DevOps for startups: MVP infrastructure | DVO Corp",
      description:
        "A minimal production setup for an MVP: one server or a small cluster, CI/CD, domain and TLS, monitoring, backups. No over-engineering, room to grow later.",
      keywords: [
        "DevOps for startups",
        "MVP infrastructure",
        "startup infrastructure",
        "MVP launch",
        "DevOps for MVP",
      ],
    },
    name: "DevOps for startups",
    h1: "DevOps for startups: the smallest production setup that is still production",
    lead: "An MVP does not need a platform. It needs a place to run, a deploy that does not depend on one laptop, backups, and a signal when something breaks. We set up exactly that, quickly, and write it so it can grow with the product instead of being thrown away.",
    when: [
      "The MVP is nearly ready and there is nowhere to run it properly",
      "A founder or a developer deploys by hand over SSH",
      "A demo, a pilot client or a funding round is close and the product has to be online",
      "You were advised to start with microservices and Kubernetes and doubt that you need them",
      "You have cloud credits and want to spend them on the product, not on idle servers",
    ],
    included: [
      {
        title: "A setup sized for today",
        text: "One server with containers or a small Kubernetes cluster — whichever the product needs now. The reason for the choice is written down.",
      },
      {
        title: "CI/CD from the first day",
        text: "A push builds, tests and deploys. Any developer can release, and the previous version is one command away.",
      },
      {
        title: "Domain, TLS, environments",
        text: "Production and a staging copy on your domain, with certificates issued and renewed automatically.",
      },
      {
        title: "Monitoring and alerts",
        text: "Availability checks, basic metrics and logs, alerts to Telegram or Slack. Enough to learn about a failure before a client does.",
      },
      {
        title: "Backups",
        text: "The database and uploaded files are backed up on a schedule to storage outside the server. A restore is tested once before launch.",
      },
      {
        title: "A growth path",
        text: "Everything is code in your repository. The document lists what to change and at which signs: a second server, a managed database such as AWS RDS, a Kubernetes cluster.",
      },
    ],
    steps: [
      {
        title: "Call",
        text: "What the product does, what it is written in, when it has to be live and what budget there is for hosting.",
      },
      {
        title: "Scope and price",
        text: "A short list of what goes into the first setup and what is deliberately postponed. Fixed price.",
      },
      {
        title: "Setup",
        text: "We build it through pull requests in your repository and deploy the application together with your developers.",
      },
      {
        title: "Launch and after",
        text: "The product goes live. We either hand over with documentation or stay on for monthly support.",
      },
    ],
    stack: [
      "Docker",
      "Docker Compose",
      "AWS EKS",
      "Terraform",
      "Helm",
      "GitHub Actions",
      "PostgreSQL",
      "Cloudflare",
      "Grafana",
      "VictoriaMetrics",
      "AWS",
      "Hetzner",
    ],
    faq: [
      {
        q: "Does an MVP need Kubernetes?",
        a: "Often not. One server with Docker Compose, a pipeline and backups carries a first version well. A Kubernetes cluster, for example AWS EKS, makes sense when there are several services, releases must go without downtime or workers have to scale. The application is containerised either way, so the later move is a change of deploy target, not a rewrite.",
      },
      {
        q: "What do you deliberately leave for later?",
        a: "Multiple regions, a service mesh, a separate cluster per environment, self-hosted versions of things a provider sells as a service. None of them helps to find the first clients, and each costs money and attention every month. They are listed in the growth plan with the signs that it is time.",
      },
      {
        q: "Can we start on your infrastructure and move to our own cloud later?",
        a: "Yes. The application runs on our clusters from a Helm chart and a pipeline that live in your repository. To move, we describe your cloud account in Terraform (on AWS: VPC, EKS, RDS, S3), deploy the same chart there, transfer the database and the files and switch DNS.",
      },
      {
        q: "We have cloud credits. Do you work with them?",
        a: "Yes. We set everything up in your account so the credits are used. The setup is designed for the bill you can pay after they end, not for the amount of credits: otherwise the first real invoice becomes a problem.",
      },
    ],
    related: ["managed-hosting", "ci-cd", "devops-outsourcing"],
  },
  uk: {
    seo: {
      title: "DevOps для стартапу: запуск MVP та інфраструктура | DVO Corp",
      description:
        "Мінімальна продакшн-інфраструктура для MVP: один сервер або невеликий кластер, CI/CD, домен і TLS, моніторинг, бекапи. Без зайвої складності, із запасом на ріст.",
      keywords: [
        "DevOps для стартапу",
        "запуск MVP",
        "інфраструктура для стартапу",
        "інфраструктура для MVP",
        "DevOps для MVP",
      ],
    },
    name: "DevOps для стартапу",
    h1: "DevOps для стартапу: запуск MVP на мінімальній, але справжній продакшн-інфраструктурі",
    lead: "MVP не потрібна платформа. Йому потрібні місце, де працювати, деплой, що не залежить від одного ноутбука, бекапи й сигнал, коли щось зламалося. Саме це ми й налаштовуємо — швидко і так, щоб інфраструктура росла разом із продуктом, а не йшла на викид.",
    when: [
      "MVP майже готовий, а нормально запустити його ніде",
      "Засновник або розробник деплоїть руками через SSH",
      "Незабаром демо, пілотний клієнт або раунд, і продукт має бути онлайн",
      "Вам радили починати з мікросервісів і Kubernetes, а ви сумніваєтесь, що вони потрібні",
      "У вас є хмарні кредити, і хочеться витратити їх на продукт, а не на сервери, що простоюють",
    ],
    included: [
      {
        title: "Інфраструктура під сьогоднішній розмір",
        text: "Один сервер із контейнерами або невеликий кластер Kubernetes — те, що потрібно продукту зараз. Причину вибору фіксуємо письмово.",
      },
      {
        title: "CI/CD з першого дня",
        text: "Пуш збирає, тестує й деплоїть. Випустити реліз може будь-який розробник, а до попередньої версії — одна команда.",
      },
      {
        title: "Домен, TLS, середовища",
        text: "Продакшн і копія-стейджинг на вашому домені, сертифікати випускаються й поновлюються автоматично.",
      },
      {
        title: "Моніторинг і алерти",
        text: "Перевірки доступності, базові метрики й логи, алерти в Telegram або Slack. Достатньо, щоб дізнатися про збій раніше за клієнта.",
      },
      {
        title: "Бекапи",
        text: "База й завантажені файли за розкладом копіюються у сховище поза сервером. Відновлення один раз перевіряємо ще до запуску.",
      },
      {
        title: "Шлях росту",
        text: "Усе описано кодом у вашому репозиторії. У документі перелічено, що міняти й за якими ознаками: другий сервер, керована база на кшталт AWS RDS, кластер Kubernetes.",
      },
    ],
    steps: [
      {
        title: "Дзвінок",
        text: "Що робить продукт, на чому написаний, коли має запрацювати і який бюджет на хостинг.",
      },
      {
        title: "Обсяг і ціна",
        text: "Короткий список того, що входить у перше налаштування, і того, що свідомо відкладаємо. Ціна фіксована.",
      },
      {
        title: "Налаштування",
        text: "Робимо все через pull request-и у вашому репозиторії й розгортаємо застосунок разом із вашими розробниками.",
      },
      {
        title: "Запуск і далі",
        text: "Продукт виходить онлайн. Далі або передаємо все з документацією, або залишаємось на щомісячну підтримку.",
      },
    ],
    stack: [
      "Docker",
      "Docker Compose",
      "AWS EKS",
      "Terraform",
      "Helm",
      "GitHub Actions",
      "PostgreSQL",
      "Cloudflare",
      "Grafana",
      "VictoriaMetrics",
      "AWS",
      "Hetzner",
    ],
    faq: [
      {
        q: "Чи потрібен MVP Kubernetes?",
        a: "Часто ні. Один сервер із Docker Compose, пайплайном і бекапами добре тримає першу версію. Кластер Kubernetes, наприклад AWS EKS, має сенс, коли сервісів кілька, релізи мають проходити без простою або воркери треба масштабувати. Застосунок у будь-якому разі працює в контейнерах, тож подальший перехід — це зміна місця деплою, а не переписування.",
      },
      {
        q: "Що ви свідомо залишаєте на потім?",
        a: "Кілька регіонів, service mesh, окремий кластер на кожне середовище, самостійно розгорнуті версії того, що провайдер продає як сервіс. Ніщо з цього не допомагає знайти перших клієнтів, зате щомісяця коштує грошей та уваги. Усе це є в плані росту — з ознаками, що час настав.",
      },
      {
        q: "Чи можна почати на вашій інфраструктурі, а потім переїхати у власну хмару?",
        a: "Так. Застосунок працює на наших кластерах із Helm-чарта й пайплайна, які лежать у вашому репозиторії. Для переїзду описуємо ваш хмарний акаунт у Terraform (на AWS це VPC, EKS, RDS, S3), розгортаємо там той самий чарт, переносимо базу й файли та перемикаємо DNS.",
      },
      {
        q: "У нас є хмарні кредити. Ви з ними працюєте?",
        a: "Так. Налаштовуємо все у вашому акаунті, щоб кредити використовувались. Інфраструктуру проєктуємо під рахунок, який ви зможете платити після їх закінчення, а не під суму кредитів: інакше перший справжній рахунок стає проблемою.",
      },
    ],
    related: ["managed-hosting", "ci-cd", "devops-outsourcing"],
  },
};
