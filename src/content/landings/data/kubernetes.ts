import type { LandingEntry } from "../types";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "Kubernetes setup and support: AWS EKS, self-managed | DVO Corp",
      description:
        "Kubernetes clusters set up and supported: AWS EKS or self-managed, Helm charts, HPA and KEDA autoscaling, upgrades. In your cloud or on our servers.",
      keywords: [
        "Kubernetes setup",
        "Kubernetes support",
        "managed Kubernetes",
        "AWS EKS setup",
        "Kubernetes consulting",
        "KEDA autoscaling",
      ],
    },
    name: "Kubernetes",
    h1: "Kubernetes setup and support: a cluster sized for your load",
    lead: "We build Kubernetes clusters and keep them running: EKS on AWS, or self-managed Kubernetes on Hetzner and other providers. Your services get Helm charts, autoscaling and rollouts without downtime. The cluster is described in code, so it can be rebuilt and upgraded.",
    when: [
      "Services run in Docker Compose on one server and it no longer copes",
      "A cluster exists, but nobody dares to upgrade it",
      "Pods restart or get evicted and the cause is unclear",
      "Load is uneven and you pay for peak capacity all the time",
      "Deploys to the cluster are done with kubectl by hand",
    ],
    included: [
      {
        title: "Cluster choice and setup",
        text: "We pick the option for the task: EKS on AWS with managed node groups, or self-managed Kubernetes on EC2, Hetzner or your own servers. The VPC, nodes and storage are created with Terraform.",
      },
      {
        title: "Helm charts for your services",
        text: "Each service gets a chart with resource requests and limits, health probes and per-environment values. Probes and rolling updates let a new version replace the old one without downtime.",
      },
      {
        title: "Ingress, TLS and network policies",
        text: "An ingress controller, certificates that renew automatically, and network policies that limit which services can talk to each other.",
      },
      {
        title: "Autoscaling",
        text: "HPA scales services by CPU, memory or custom metrics. KEDA scales workers by queue depth, down to zero when the queue is empty. Node pools follow the pods.",
      },
      {
        title: "Upgrades",
        text: "Kubernetes versions and cluster add-ons are upgraded on a schedule: checked on staging first, then applied to production node by node.",
      },
      {
        title: "Support and incidents",
        text: "Monitoring of nodes and workloads, alerts, and analysis of failures: evictions, failed rollouts, exhausted resources. Provided as a monthly service.",
      },
    ],
    steps: [
      {
        title: "Call and access",
        text: "You describe the services and the load. If a cluster already exists, we get read access and look at its real state.",
      },
      {
        title: "Design and price",
        text: "EKS or self-managed, node sizes, how environments are split, what autoscales. You get the list of work and a price before we start.",
      },
      {
        title: "Build and move services",
        text: "The cluster is created from code. Services move over one at a time, each checked on staging before production.",
      },
      {
        title: "Hand over or support",
        text: "Your team gets the repository, documentation and access. Or we stay and operate the cluster for a monthly fee.",
      },
    ],
    stack: [
      "Kubernetes",
      "AWS EKS",
      "Helm",
      "KEDA",
      "Traefik",
      "cert-manager",
      "Argo CD",
      "Terraform",
      "AWS",
      "Hetzner",
    ],
    faq: [
      {
        q: "Do we need Kubernetes at all?",
        a: "Not always. For one or two services, a well-configured server with backups and monitoring is often enough, and we will say so. Kubernetes makes sense when there are several services, uneven load or a need for deploys without downtime.",
      },
      {
        q: "EKS or self-managed Kubernetes: which one?",
        a: "EKS makes sense when you are on AWS: the provider runs the control plane, and the cluster works with IAM, VPC networking and AWS load balancers. Self-managed Kubernetes fits Hetzner, other providers and your own hardware, where there is no managed service or it does not suit you. It costs less in fees and more in maintenance. We work with both; our own product runs on Kubernetes that we operate ourselves.",
      },
      {
        q: "Can you take over a cluster someone else built?",
        a: "Yes. We start with an audit: versions, add-ons, resource settings, access, backups. Then we put what is missing into code and fix problems in order of risk. The cluster is rebuilt only if that is cheaper than repairing it.",
      },
      {
        q: "How do upgrades happen without downtime?",
        a: "First we check the release notes for removed APIs and upgrade the staging cluster. In production, nodes are drained and upgraded one by one while pods move to the others. This requires at least two replicas of each service and pod disruption budgets, which we set up beforehand.",
      },
    ],
    related: ["devops-outsourcing", "ci-cd", "monitoring"],
  },
  uk: {
    seo: {
      title: "Налаштування та підтримка Kubernetes під ключ | DVO Corp",
      description:
        "Налаштування Kubernetes під ключ і підтримка кластерів: AWS EKS або власний кластер, Helm-чарти, автомасштабування HPA й KEDA, оновлення версій.",
      keywords: [
        "налаштування Kubernetes",
        "підтримка Kubernetes",
        "Kubernetes під ключ",
        "налаштування AWS EKS",
        "автомасштабування Kubernetes",
        "Helm чарти",
      ],
    },
    name: "Kubernetes",
    h1: "Налаштування та підтримка Kubernetes: кластер під ваше навантаження",
    lead: "Будуємо кластери Kubernetes і підтримуємо їх у робочому стані: EKS в AWS або самостійно розгорнутий Kubernetes у Hetzner та інших провайдерів. Ваші сервіси отримують Helm-чарти, автомасштабування й викати без простою. Кластер описано в коді, тож його можна відтворити й оновити.",
    when: [
      "Сервіси працюють у Docker Compose на одному сервері, і він уже не справляється",
      "Кластер є, але оновлювати його ніхто не наважується",
      "Поди перезапускаються або витісняються з нод, а причина незрозуміла",
      "Навантаження нерівномірне, а платите ви постійно за пікову потужність",
      "Деплой у кластер роблять руками через kubectl",
    ],
    included: [
      {
        title: "Вибір і розгортання кластера",
        text: "Підбираємо варіант під задачу: EKS в AWS із керованими групами нод або самостійно розгорнутий Kubernetes на EC2, у Hetzner чи на ваших серверах. VPC, ноди й сховище створюємо через Terraform.",
      },
      {
        title: "Helm-чарти для ваших сервісів",
        text: "Кожен сервіс отримує чарт із запитами й лімітами ресурсів, перевірками стану та значеннями для кожного середовища. Завдяки пробам і поступовому оновленню нова версія замінює стару без простою.",
      },
      {
        title: "Ingress, TLS і мережеві політики",
        text: "Ingress-контролер, сертифікати з автоматичним поновленням і мережеві політики, які обмежують, які сервіси можуть звертатися один до одного.",
      },
      {
        title: "Автомасштабування",
        text: "HPA масштабує сервіси за CPU, пам'яттю або власними метриками. KEDA масштабує воркери за довжиною черги — до нуля, коли черга порожня. Пули нод підлаштовуються під поди.",
      },
      {
        title: "Оновлення",
        text: "Версії Kubernetes і компоненти кластера оновлюємо за графіком: спершу перевіряємо на staging, потім оновлюємо продакшн нода за нодою.",
      },
      {
        title: "Підтримка й інциденти",
        text: "Моніторинг нод і навантажень, алерти та розбір збоїв: витіснення подів, невдалі викати, вичерпані ресурси. Надаємо як щомісячний сервіс.",
      },
    ],
    steps: [
      {
        title: "Дзвінок і доступи",
        text: "Ви розповідаєте про сервіси й навантаження. Якщо кластер уже є, отримуємо доступ на читання й дивимось на його реальний стан.",
      },
      {
        title: "Проєкт і ціна",
        text: "EKS чи власний кластер, розміри нод, поділ на середовища, що саме масштабується автоматично. Список робіт і ціну ви отримуєте до початку.",
      },
      {
        title: "Розгортання й перенесення сервісів",
        text: "Кластер створюється з коду. Сервіси переносимо по одному, кожен перевіряємо на staging перед продакшном.",
      },
      {
        title: "Передача або підтримка",
        text: "Ваша команда отримує репозиторій, документацію й доступи. Або ми залишаємось і супроводжуємо кластер за щомісячну плату.",
      },
    ],
    stack: [
      "Kubernetes",
      "AWS EKS",
      "Helm",
      "KEDA",
      "Traefik",
      "cert-manager",
      "Argo CD",
      "Terraform",
      "AWS",
      "Hetzner",
    ],
    faq: [
      {
        q: "Чи потрібен нам Kubernetes узагалі?",
        a: "Не завжди. Для одного-двох сервісів часто досить добре налаштованого сервера з бекапами й моніторингом, і ми так і скажемо. Kubernetes має сенс, коли сервісів кілька, навантаження нерівномірне або потрібен деплой без простою.",
      },
      {
        q: "EKS чи самостійно розгорнутий Kubernetes: що обрати?",
        a: "EKS доречний, коли ви в AWS: панеллю керування опікується провайдер, а кластер працює з IAM, мережею VPC і балансувальниками AWS. Самостійно розгорнутий Kubernetes підходить для Hetzner, інших провайдерів і власного заліза, де керованого сервісу немає або він вас не влаштовує. Він дешевший за тарифами, але потребує більше обслуговування. Працюємо з обома варіантами; наш власний продукт працює на Kubernetes, який ми супроводжуємо самі.",
      },
      {
        q: "Ви візьмете кластер, який будував хтось інший?",
        a: "Так. Починаємо з аудиту: версії, компоненти, налаштування ресурсів, доступи, бекапи. Далі описуємо в коді те, чого бракує, і виправляємо проблеми в порядку ризику. Кластер перебудовуємо лише тоді, коли це дешевше, ніж лагодити.",
      },
      {
        q: "Як оновлення проходять без простою?",
        a: "Спершу перевіряємо в примітках до релізу, які API видалено, і оновлюємо staging-кластер. У продакшні ноди звільняємо й оновлюємо по одній, а поди тим часом переїжджають на інші. Для цього потрібні щонайменше дві репліки кожного сервісу та pod disruption budgets — їх налаштовуємо заздалегідь.",
      },
    ],
    related: ["devops-outsourcing", "ci-cd", "monitoring"],
  },
};
