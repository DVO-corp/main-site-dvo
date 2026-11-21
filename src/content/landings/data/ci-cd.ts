import type { LandingEntry } from "../types";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "CI/CD setup: GitHub Actions, GitLab CI, GitOps | DVO Corp",
      description:
        "CI/CD pipelines on GitHub Actions or GitLab CI: image builds, tests, GitOps deploys with Argo CD or Flux, rollbacks and preview environments.",
      keywords: [
        "CI/CD setup",
        "CI/CD pipeline",
        "GitHub Actions setup",
        "GitLab CI",
        "GitOps Argo CD",
        "deployment automation",
      ],
    },
    name: "CI/CD",
    h1: "CI/CD setup: from a commit to production without manual steps",
    lead: "We build the pipeline that takes a commit through build, tests and deploy. An image is built once and promoted between environments. Deploys go through GitOps, so production runs what is written in Git, and a rollback is a revert.",
    when: [
      "Deploys are done over SSH by the one person who knows the commands",
      "A release takes hours and gets postponed because it is risky",
      "Builds are slow and the team waits for the pipeline",
      "Nobody can tell which version runs in production right now",
      "A failed release cannot be rolled back quickly",
    ],
    included: [
      {
        title: "Pipelines",
        text: "GitHub Actions or GitLab CI workflows: lint, tests, build, deploy. Shared steps move into reusable workflows, so services do not copy each other's YAML.",
      },
      {
        title: "Image builds",
        text: "Docker images with multi-stage builds and layer caching, tagged by commit and pushed to a registry. The same image goes to staging and then to production.",
      },
      {
        title: "GitOps deploys",
        text: "Argo CD or Flux watches a repository with Helm values and applies it to the cluster. The pipeline changes an image tag in Git and needs no direct access to production.",
      },
      {
        title: "Rollbacks",
        text: "A release that fails its health checks does not replace the working version. To return to the previous one, you revert a commit or run one command.",
      },
      {
        title: "Preview environments",
        text: "A pull request gets its own temporary environment with a URL. It is removed when the pull request is closed.",
      },
      {
        title: "Secrets and access",
        text: "Pipeline secrets are stored encrypted, cloud access uses short-lived OIDC credentials, and production deploys can require an approval.",
      },
    ],
    steps: [
      {
        title: "Call and access",
        text: "You show how a release happens today. We get access to the repositories and the current pipelines.",
      },
      {
        title: "Plan and price",
        text: "Pipeline stages, the branch and environment model, where GitOps fits. You get the scope and the price before work starts.",
      },
      {
        title: "Build",
        text: "We start with one service and bring it to production through the new pipeline. Then we repeat it for the others from the same templates.",
      },
      {
        title: "Handover or support",
        text: "Your team gets the workflows, a description of the release process and a rollback instruction. We can stay to maintain runners and pipelines.",
      },
    ],
    stack: [
      "GitHub Actions",
      "GitLab CI",
      "Argo CD",
      "Flux",
      "Helm",
      "Docker",
      "BuildKit",
      "Kubernetes",
      "Terraform",
      "SOPS",
    ],
    faq: [
      {
        q: "GitHub Actions or GitLab CI?",
        a: "The one that matches where your code is hosted. Both cover build, test and deploy. We do not move repositories for the sake of a CI system.",
      },
      {
        q: "We do not use Kubernetes. Can you still set up CI/CD?",
        a: "Yes. The pipeline can deploy to plain servers with Docker Compose, to a managed container service or to static hosting. GitOps with Argo CD or Flux applies only to Kubernetes; for servers the pipeline deploys directly.",
      },
      {
        q: "How does a rollback work?",
        a: "Every release is an image tagged with a commit and a line in Git that points to it. To roll back, that line is reverted and the cluster returns to the previous image. Database migrations are the exception: we agree on backward-compatible migrations, so the previous version still runs against the new schema.",
      },
      {
        q: "Will the pipeline be faster than it is now?",
        a: "Usually yes, but by how much depends on the project. We look at where the time goes: dependencies installed without a cache, images rebuilt from scratch, tests run one after another. Self-hosted runners help when hosted ones are the bottleneck.",
      },
    ],
    related: ["kubernetes", "terraform-iac", "devops-outsourcing"],
  },
  uk: {
    seo: {
      title: "Налаштування CI/CD та автоматизація деплою | DVO Corp",
      description:
        "Налаштування CI/CD на GitHub Actions або GitLab CI: збірка образів, тести, GitOps-деплой через Argo CD чи Flux, відкати й preview-середовища.",
      keywords: [
        "налаштування CI/CD",
        "автоматизація деплою",
        "CI/CD пайплайн",
        "налаштування GitHub Actions",
        "GitLab CI",
        "GitOps Argo CD",
      ],
    },
    name: "CI/CD",
    h1: "Налаштування CI/CD: від коміту до продакшну без ручних кроків",
    lead: "Будуємо пайплайн, який проводить коміт через збірку, тести й деплой. Образ збирається один раз і переходить між середовищами. Деплой іде через GitOps, тож у продакшні працює те, що записано в Git, а відкат — це revert.",
    when: [
      "Деплой роблять по SSH, і команди знає одна людина",
      "Реліз триває годинами, і його відкладають, бо це ризик",
      "Збірки повільні, і команда чекає на пайплайн",
      "Ніхто не може сказати, яка версія зараз у продакшні",
      "Невдалий реліз неможливо швидко відкотити",
    ],
    included: [
      {
        title: "Пайплайни",
        text: "Workflow-и GitHub Actions або GitLab CI: лінтер, тести, збірка, деплой. Спільні кроки виносимо в reusable workflows, щоб сервіси не копіювали YAML один в одного.",
      },
      {
        title: "Збірка образів",
        text: "Docker-образи з багатоетапною збіркою й кешуванням шарів, з тегом за комітом, у реєстрі. Той самий образ іде на staging, а потім у продакшн.",
      },
      {
        title: "GitOps-деплой",
        text: "Argo CD або Flux стежить за репозиторієм із Helm-значеннями й застосовує його до кластера. Пайплайн змінює тег образу в Git і не потребує прямого доступу до продакшну.",
      },
      {
        title: "Відкати",
        text: "Реліз, який не пройшов перевірки стану, не замінює робочу версію. Щоб повернутися до попередньої, досить зробити revert коміту або виконати одну команду.",
      },
      {
        title: "Preview-середовища",
        text: "Pull request отримує власне тимчасове середовище з URL-адресою. Воно видаляється, коли pull request закрито.",
      },
      {
        title: "Секрети й доступи",
        text: "Секрети пайплайна зберігаються зашифрованими, доступ до хмари йде через короткоживучі OIDC-облікові дані, а деплой у продакшн може вимагати підтвердження.",
      },
    ],
    steps: [
      {
        title: "Дзвінок і доступи",
        text: "Ви показуєте, як реліз відбувається сьогодні. Ми отримуємо доступ до репозиторіїв і наявних пайплайнів.",
      },
      {
        title: "План і ціна",
        text: "Етапи пайплайна, модель гілок і середовищ, місце GitOps. Обсяг і ціну ви отримуєте до початку робіт.",
      },
      {
        title: "Робота",
        text: "Починаємо з одного сервісу й доводимо його до продакшну через новий пайплайн. Далі повторюємо для решти за тими самими шаблонами.",
      },
      {
        title: "Передача або підтримка",
        text: "Ваша команда отримує workflow-и, опис процесу релізу та інструкцію з відкату. Можемо залишитися й супроводжувати раннери та пайплайни.",
      },
    ],
    stack: [
      "GitHub Actions",
      "GitLab CI",
      "Argo CD",
      "Flux",
      "Helm",
      "Docker",
      "BuildKit",
      "Kubernetes",
      "Terraform",
      "SOPS",
    ],
    faq: [
      {
        q: "GitHub Actions чи GitLab CI?",
        a: "Той, що відповідає місцю, де лежить ваш код. Обидва закривають збірку, тести й деплой. Ми не переносимо репозиторії заради CI-системи.",
      },
      {
        q: "Ми не використовуємо Kubernetes. CI/CD усе одно можна налаштувати?",
        a: "Так. Пайплайн може деплоїти на звичайні сервери з Docker Compose, у керований контейнерний сервіс або на статичний хостинг. GitOps з Argo CD чи Flux стосується лише Kubernetes; на сервери пайплайн деплоїть напряму.",
      },
      {
        q: "Як працює відкат?",
        a: "Кожен реліз — це образ із тегом коміту й рядок у Git, який на нього вказує. Для відкату цей рядок повертають назад, і кластер повертається до попереднього образу. Виняток — міграції бази даних: домовляємося про зворотно сумісні міграції, щоб попередня версія працювала й з новою схемою.",
      },
      {
        q: "Пайплайн стане швидшим, ніж зараз?",
        a: "Зазвичай так, але наскільки — залежить від проєкту. Дивимось, куди йде час: залежності встановлюються без кешу, образи збираються з нуля, тести йдуть послідовно. Власні раннери допомагають, коли вузьке місце — хмарні.",
      },
    ],
    related: ["kubernetes", "terraform-iac", "devops-outsourcing"],
  },
};
