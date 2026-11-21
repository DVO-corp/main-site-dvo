import type { LandingEntry } from "../types";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "Managed application hosting on our infrastructure | DVO Corp",
      description:
        "No servers of your own? We run your application on our Kubernetes clusters: deploys from your repository, database, TLS, monitoring and backups. Fixed monthly price.",
      keywords: [
        "managed hosting",
        "managed application hosting",
        "application hosting with support",
        "managed Kubernetes hosting",
        "hosting with deploys and monitoring",
      ],
    },
    name: "Managed hosting",
    h1: "Managed hosting: your application on our infrastructure",
    lead: "You have code and no servers. We run the application on the same clusters that serve our own product, MetaPlatho, with the same deploy pipeline, monitoring and backups. You push to the repository; the rest is on us.",
    when: [
      "There is an application, but no cloud account and nobody to set one up",
      "You do not want to hire a DevOps engineer for one product",
      "Shared hosting or a single VPS no longer covers what the application needs",
      "You need a database, a queue and file storage, not just a place for the code",
      "You want one monthly figure instead of a cloud bill with dozens of lines",
    ],
    included: [
      {
        title: "Deploys from your repository",
        text: "A push to the main branch builds a container image and rolls it out without downtime. Rollback to the previous version is one command.",
      },
      {
        title: "Database, cache, queue, storage",
        text: "PostgreSQL or MySQL, Redis, a job queue and S3-compatible object storage — the parts your application needs, sized for it.",
      },
      {
        title: "Domains, TLS and CDN",
        text: "We connect your domain, issue and renew certificates automatically and put static files behind a CDN.",
      },
      {
        title: "Monitoring you can see",
        text: "Metrics, logs and alerts for your services. You get access to the dashboards, and the alerts come to us.",
      },
      {
        title: "Backups",
        text: "Database and file backups run on a schedule and are stored separately from the cluster. Restores are tested.",
      },
      {
        title: "A portable setup",
        text: "The application is described by a Dockerfile, a Helm chart and a pipeline in your repository. The same files deploy it in any other Kubernetes cluster, AWS EKS included.",
      },
    ],
    steps: [
      {
        title: "Look at the application",
        text: "We read the repository: what it is written in, what it depends on, what resources it needs.",
      },
      {
        title: "Resources and price",
        text: "We agree on CPU, memory, storage and environments. You get a fixed monthly price for them.",
      },
      {
        title: "Staging first",
        text: "The application is packaged into a container and deployed to a staging environment, where you check it.",
      },
      {
        title: "Go live",
        text: "Data is transferred, the domain is switched in an agreed window, and the application goes under monitoring.",
      },
    ],
    stack: [
      "Kubernetes",
      "Helm",
      "Docker",
      "GitHub Actions",
      "PostgreSQL",
      "Redis",
      "Traefik",
      "Cloudflare",
      "Grafana",
      "VictoriaMetrics",
      "Loki",
      "Hetzner",
    ],
    faq: [
      {
        q: "How do we leave if we want our own cloud later?",
        a: "The Dockerfile, the Helm chart and the pipeline are in your repository from the first day. To move, we create the environment in your account (on AWS: EKS, RDS and S3), deploy the same chart, transfer the database and the files and switch the domain. Nothing in the setup works only on our side.",
      },
      {
        q: "What does the monthly price depend on?",
        a: "On the resources we agreed: CPU, memory, disk and object storage, the number of environments. The price is fixed for that set. If the application outgrows it, we tell you in advance and agree on the new figure before changing anything.",
      },
      {
        q: "Is our application separated from others on the cluster?",
        a: "Yes. It runs in its own namespace with resource limits and network policies, with its own database, credentials and secrets. Other tenants cannot reach your services or data over the network.",
      },
      {
        q: "Where do the servers physically run?",
        a: "Our clusters run in European data centres (Hetzner). If your data must stay with a specific provider or in a specific country, say so at the start — then the same setup is built in your own account instead.",
      },
    ],
    related: ["devops-for-startups", "api-development", "cloud-migration"],
  },
  uk: {
    seo: {
      title: "Керований хостинг: розміщення застосунку під ключ | DVO Corp",
      description:
        "Немає власних серверів? Розміщуємо ваш застосунок на наших кластерах Kubernetes: деплой із вашого репозиторію, база, TLS, моніторинг і бекапи. Фіксована ціна.",
      keywords: [
        "керований хостинг",
        "розміщення застосунку",
        "хостинг для застосунку під ключ",
        "хостинг із підтримкою",
        "керований Kubernetes хостинг",
        "хостинг із деплоєм і моніторингом",
      ],
    },
    name: "Керований хостинг",
    h1: "Керований хостинг: розміщення застосунку на нашій інфраструктурі під ключ",
    lead: "У вас є код, але немає серверів. Запускаємо застосунок на тих самих кластерах, де працює наш власний продукт MetaPlatho, — з тим самим конвеєром деплою, моніторингом і бекапами. Ви пушите в репозиторій, решта — на нас.",
    when: [
      "Застосунок є, а хмарного акаунта немає і налаштувати його нікому",
      "Не хочеться наймати DevOps-інженера заради одного продукту",
      "Віртуального хостингу чи одного VPS застосунку вже замало",
      "Потрібні база даних, черга й файлове сховище, а не лише місце для коду",
      "Хочеться бачити одну суму на місяць, а не хмарний рахунок на десятки рядків",
    ],
    included: [
      {
        title: "Деплой із вашого репозиторію",
        text: "Пуш в основну гілку збирає образ контейнера й викочує його без простою. Відкат до попередньої версії — одна команда.",
      },
      {
        title: "База, кеш, черга, сховище",
        text: "PostgreSQL або MySQL, Redis, черга завдань і S3-сумісне об'єктне сховище — ті складники, які потрібні застосунку, у потрібному обсязі.",
      },
      {
        title: "Домени, TLS і CDN",
        text: "Підключаємо ваш домен, автоматично випускаємо й поновлюємо сертифікати, статику віддаємо через CDN.",
      },
      {
        title: "Моніторинг, який ви бачите",
        text: "Метрики, логи й алерти для ваших сервісів. Доступ до дашбордів у вас є, а алерти надходять нам.",
      },
      {
        title: "Бекапи",
        text: "Бекапи бази та файлів робляться за розкладом і зберігаються окремо від кластера. Відновлення перевіряємо.",
      },
      {
        title: "Переносне налаштування",
        text: "Застосунок описано Dockerfile, Helm-чартом і пайплайном у вашому репозиторії. З тих самих файлів він розгортається в будь-якому іншому кластері Kubernetes, зокрема в AWS EKS.",
      },
    ],
    steps: [
      {
        title: "Знайомство із застосунком",
        text: "Дивимось репозиторій: на чому написано, від чого залежить, які ресурси потрібні.",
      },
      {
        title: "Ресурси й ціна",
        text: "Узгоджуємо CPU, пам'ять, сховище й середовища. Ви отримуєте фіксовану щомісячну ціну за них.",
      },
      {
        title: "Спершу стейджинг",
        text: "Пакуємо застосунок у контейнер і розгортаємо в тестовому середовищі, де ви його перевіряєте.",
      },
      {
        title: "Запуск",
        text: "Переносимо дані, перемикаємо домен в узгоджене вікно, і застосунок стає під моніторинг.",
      },
    ],
    stack: [
      "Kubernetes",
      "Helm",
      "Docker",
      "GitHub Actions",
      "PostgreSQL",
      "Redis",
      "Traefik",
      "Cloudflare",
      "Grafana",
      "VictoriaMetrics",
      "Loki",
      "Hetzner",
    ],
    faq: [
      {
        q: "Як піти від вас, якщо згодом захочемо власну хмару?",
        a: "Dockerfile, Helm-чарт і пайплайн лежать у вашому репозиторії з першого дня. Для переїзду створюємо середовище у вашому акаунті (на AWS це EKS, RDS і S3), розгортаємо той самий чарт, переносимо базу й файли та перемикаємо домен. У налаштуванні немає нічого, що працює лише на нашому боці.",
      },
      {
        q: "Від чого залежить щомісячна ціна?",
        a: "Від узгоджених ресурсів: CPU, пам'ять, диск і об'єктне сховище, кількість середовищ. Для цього набору ціна фіксована. Якщо застосунок із нього виростає, попереджаємо заздалегідь і узгоджуємо нову суму до будь-яких змін.",
      },
      {
        q: "Чи відокремлений наш застосунок від інших у кластері?",
        a: "Так. Він працює у власному просторі імен із лімітами ресурсів і мережевими політиками, має власну базу, облікові дані й секрети. Інші клієнти кластера не мають мережевого доступу до ваших сервісів і даних.",
      },
      {
        q: "Де фізично працюють сервери?",
        a: "Наші кластери працюють у європейських дата-центрах (Hetzner). Якщо ваші дані мають залишатися в конкретного провайдера або в конкретній країні, скажіть про це на старті — тоді таке саме налаштування будуємо у вашому власному акаунті.",
      },
    ],
    related: ["devops-for-startups", "api-development", "cloud-migration"],
  },
};
