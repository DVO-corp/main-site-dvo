import type { LandingEntry } from "../types";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "Monitoring setup: Prometheus, Grafana, Loki, alerts | DVO Corp",
      description:
        "Monitoring and alerting setup: Prometheus or VictoriaMetrics, Grafana dashboards, Loki logs, alerts to Telegram and Slack, uptime checks and runbooks.",
      keywords: [
        "monitoring setup",
        "Prometheus Grafana setup",
        "server monitoring",
        "alerting setup",
        "Loki logs",
        "VictoriaMetrics",
      ],
    },
    name: "Monitoring and alerts",
    h1: "Monitoring and alerting: metrics, logs and alerts that require action",
    lead: "We set up metrics, logs, dashboards and alerts for your servers and services. Alerts go to Telegram or Slack, and each one says what is broken and what to do. The aim is that you learn about a problem from the monitoring, not from a user.",
    when: [
      "You learn about outages from users",
      "To find an error, someone has to SSH into servers and grep logs",
      "Alerts exist, but there are so many that everyone has muted them",
      "A disk filled up or a certificate expired and nobody saw it coming",
      "A release went out and nobody can tell whether it made things slower",
    ],
    included: [
      {
        title: "Metrics",
        text: "Prometheus or VictoriaMetrics collects metrics from servers, Kubernetes, databases and queues. Your applications are scraped too if they expose metrics; if they do not, we help to add them.",
      },
      {
        title: "Logs",
        text: "Grafana Alloy ships logs from servers and containers to Loki. Logs are searched in Grafana next to the metrics, and retention is set to the period you choose.",
      },
      {
        title: "Dashboards",
        text: "Grafana dashboards built for your services: request rate, errors, latency, queue depth, resource usage. They are stored as JSON in the repository, not assembled by hand in the UI.",
      },
      {
        title: "Alerts",
        text: "Rules for symptoms that users feel, such as errors, latency and unavailability, and for causes that can be predicted: a disk filling up, memory, expiring certificates. Alertmanager routes them to Telegram, Slack or email.",
      },
      {
        title: "Uptime checks",
        text: "Public endpoints are checked from outside your infrastructure, so an outage is noticed even when the monitoring server is down together with everything else.",
      },
      {
        title: "Runbooks",
        text: "Each alert links to a short instruction: what it means, where to look, what to do first. The person on duty does not have to guess.",
      },
    ],
    steps: [
      {
        title: "Call and access",
        text: "You tell us what runs and which failures hurt most. We look at what is already being collected.",
      },
      {
        title: "Plan and price",
        text: "What we measure, which alerts are needed and where they go, how long data is kept. Scope and price are fixed before work starts.",
      },
      {
        title: "Deploy and tune",
        text: "The stack is installed from code. Then we watch the alerts for an agreed period and remove the noisy ones, so every remaining alert requires action.",
      },
      {
        title: "Handover or support",
        text: "You get dashboards, rules and runbooks in your repository. Under a support agreement we also respond to the alerts ourselves.",
      },
    ],
    stack: [
      "Prometheus",
      "VictoriaMetrics",
      "Grafana",
      "Loki",
      "Grafana Alloy",
      "Alertmanager",
      "Blackbox Exporter",
      "node_exporter",
      "kube-state-metrics",
      "Telegram",
      "Slack",
    ],
    faq: [
      {
        q: "Prometheus or VictoriaMetrics?",
        a: "Both work with the same exporters, the same query language and Grafana. Prometheus is the standard choice for a small setup. VictoriaMetrics is lighter on memory and disk in our experience and easier to keep with long retention; we run it in our own production. We choose by data volume and retention.",
      },
      {
        q: "Where does the monitoring run?",
        a: "Next to your systems: in your cluster or on a separate server in your account, so metrics and logs do not leave your infrastructure. Uptime checks run from outside. If we host your application, monitoring is part of the hosting.",
      },
      {
        q: "How do you keep alerts from becoming noise?",
        a: "An alert is created only if someone has to act on it. Rules have a duration threshold, so a short spike does not notify anyone. Related alerts are grouped into one message, and severity decides the channel. After launch we review what fired and adjust the rules.",
      },
      {
        q: "Do we have to change our application code?",
        a: "Not for server, container, database and HTTP-level metrics. Business metrics, such as orders or processed jobs, need a metrics endpoint in the application. We show your developers what to add, or add it ourselves if you give us access to the code.",
      },
    ],
    related: ["infrastructure-support", "kubernetes", "high-load"],
  },
  uk: {
    seo: {
      title: "Налаштування моніторингу: Grafana, Prometheus | DVO Corp",
      description:
        "Налаштування моніторингу серверів і сервісів: Prometheus або VictoriaMetrics, дашборди Grafana, логи в Loki, алерти в Telegram і Slack, перевірки доступності.",
      keywords: [
        "налаштування моніторингу",
        "Grafana Prometheus налаштування",
        "моніторинг серверів",
        "налаштування алертів",
        "логи Loki",
        "VictoriaMetrics",
      ],
    },
    name: "Моніторинг і алерти",
    h1: "Налаштування моніторингу серверів і сервісів: метрики, логи, алерти",
    lead: "Налаштовуємо метрики, логи, дашборди й алерти для ваших серверів і сервісів. Алерти надходять у Telegram або Slack, і кожен пояснює, що зламалося й що робити. Мета — щоб про проблему ви дізнавалися з моніторингу, а не від користувача.",
    when: [
      "Про збої ви дізнаєтеся від користувачів",
      "Щоб знайти помилку, хтось мусить заходити на сервери по SSH і шукати в логах через grep",
      "Алерти є, але їх так багато, що всі вимкнули сповіщення",
      "Диск заповнився або сертифікат прострочився, і ніхто цього не передбачив",
      "Реліз вийшов, і ніхто не може сказати, чи стало повільніше",
    ],
    included: [
      {
        title: "Метрики",
        text: "Prometheus або VictoriaMetrics збирає метрики із серверів, Kubernetes, баз даних і черг. Ваші застосунки теж опитуємо, якщо вони віддають метрики; якщо ні — допомагаємо їх додати.",
      },
      {
        title: "Логи",
        text: "Grafana Alloy доставляє логи із серверів і контейнерів у Loki. Шукати в логах можна в Grafana поруч із метриками, а термін зберігання ви обираєте самі.",
      },
      {
        title: "Дашборди",
        text: "Дашборди Grafana під ваші сервіси: кількість запитів, помилки, затримка, довжина черги, використання ресурсів. Зберігаються як JSON у репозиторії, а не складаються руками в інтерфейсі.",
      },
      {
        title: "Алерти",
        text: "Правила для симптомів, які відчувають користувачі, — помилки, затримка, недоступність — і для причин, які можна передбачити: заповнення диска, пам'ять, сертифікати, що спливають. Alertmanager надсилає їх у Telegram, Slack або на пошту.",
      },
      {
        title: "Перевірки доступності",
        text: "Публічні адреси перевіряються ззовні вашої інфраструктури, тож збій буде помічено, навіть якщо сервер моніторингу впав разом з усім іншим.",
      },
      {
        title: "Ранбуки",
        text: "Кожен алерт веде на коротку інструкцію: що він означає, куди дивитися, що робити насамперед. Черговому не доводиться вгадувати.",
      },
    ],
    steps: [
      {
        title: "Дзвінок і доступи",
        text: "Ви розповідаєте, що працює і які збої найболючіші. Ми дивимось, що вже збирається.",
      },
      {
        title: "План і ціна",
        text: "Що вимірюємо, які алерти потрібні й куди вони йдуть, скільки зберігаються дані. Обсяг і ціну фіксуємо до початку робіт.",
      },
      {
        title: "Розгортання й налагодження",
        text: "Стек встановлюється з коду. Потім узгоджений час спостерігаємо за алертами й прибираємо шумні, щоб кожен, який залишився, вимагав дії.",
      },
      {
        title: "Передача або підтримка",
        text: "Ви отримуєте дашборди, правила й ранбуки у своєму репозиторії. За договором підтримки ми ще й самі реагуємо на алерти.",
      },
    ],
    stack: [
      "Prometheus",
      "VictoriaMetrics",
      "Grafana",
      "Loki",
      "Grafana Alloy",
      "Alertmanager",
      "Blackbox Exporter",
      "node_exporter",
      "kube-state-metrics",
      "Telegram",
      "Slack",
    ],
    faq: [
      {
        q: "Prometheus чи VictoriaMetrics?",
        a: "Обидва працюють із тими самими експортерами, тією самою мовою запитів і Grafana. Prometheus — стандартний вибір для невеликої системи. VictoriaMetrics, з нашого досвіду, ощадніша щодо пам'яті й диска, і її простіше тримати з довгим терміном зберігання; вона працює в нашому власному продакшні. Обираємо за обсягом даних і терміном зберігання.",
      },
      {
        q: "Де працює моніторинг?",
        a: "Поруч із вашими системами: у вашому кластері або на окремому сервері у вашому акаунті, тож метрики й логи не залишають вашу інфраструктуру. Перевірки доступності запускаються ззовні. Якщо ваш застосунок розміщено в нас, моніторинг входить у хостинг.",
      },
      {
        q: "Як зробити, щоб алерти не перетворилися на шум?",
        a: "Алерт створюється лише тоді, коли на нього хтось має відреагувати. Правила мають поріг тривалості, тож короткий сплеск нікого не турбує. Пов'язані алерти групуються в одне повідомлення, а критичність визначає канал. Після запуску переглядаємо, що спрацьовувало, і коригуємо правила.",
      },
      {
        q: "Чи доведеться змінювати код застосунку?",
        a: "Для метрик серверів, контейнерів, баз даних і HTTP-рівня — ні. Бізнес-метрики, як-от замовлення чи оброблені задачі, потребують ендпоінта з метриками в застосунку. Покажемо вашим розробникам, що додати, або додамо самі, якщо дасте доступ до коду.",
      },
    ],
    related: ["infrastructure-support", "kubernetes", "high-load"],
  },
};
