import type { LandingEntry } from "../types";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "Infrastructure security audit and hardening | DVO Corp",
      description:
        "Infrastructure security audit and hardening: IAM and RBAC, secrets in SOPS, Vault or KMS, private networking, WAF, backups with tested restores, patching.",
      keywords: [
        "infrastructure security audit",
        "server hardening",
        "cloud security audit",
        "IAM audit",
        "secrets management",
        "Kubernetes security",
      ],
    },
    name: "Infrastructure security",
    h1: "Infrastructure security: an audit first, then fixes in order of risk",
    lead: "We check who has access to what, where secrets are kept, what is reachable from the internet and whether backups can be restored. You get a list of findings ordered by risk. Then we close them through code, so the fixes stay in place.",
    when: [
      "A client or a partner asks how your infrastructure is protected",
      "Keys and passwords sit in the repository or in a shared chat",
      "Everyone on the team has admin rights in the cloud account",
      "A database or an admin panel is reachable from the internet",
      "Backups are made, but nobody has ever restored from one",
    ],
    included: [
      {
        title: "Audit",
        text: "Cloud accounts, servers, clusters, CI and repositories are checked for excessive access, open ports, leaked secrets and outdated software. The result is a report with risks in order of severity.",
      },
      {
        title: "Access: IAM and RBAC",
        text: "Personal accounts instead of shared ones, roles with the minimum permissions, MFA, no long-lived keys where short-lived credentials work. The same in Kubernetes through RBAC.",
      },
      {
        title: "Secrets",
        text: "Secrets are removed from code and from plain-text CI variables. They are encrypted with SOPS in Git or kept in Vault or a KMS-backed cloud store. Keys that have leaked are rotated.",
      },
      {
        title: "Network",
        text: "Databases and internal services move to private networks: private subnets of a VPC on AWS, a private network elsewhere. Only the load balancer faces the internet, and administration goes through a VPN. A WAF and rate limits stand in front of public endpoints.",
      },
      {
        title: "Backups with tested restores",
        text: "Backups are encrypted and stored outside the server and the account they protect. We run a restore and record how long it takes.",
      },
      {
        title: "Patching",
        text: "A process for OS, Kubernetes and image updates: automatic security updates where that is safe, scheduled windows for the rest, image scanning in CI.",
      },
    ],
    steps: [
      {
        title: "Call and access",
        text: "You describe the system and what worries you. We get read-only access for the audit.",
      },
      {
        title: "Report and price",
        text: "Findings with a severity and a proposed fix for each. You choose what to fix, and the price is agreed before the work.",
      },
      {
        title: "Hardening",
        text: "Fixes go through pull requests, the riskiest first. Changes that could lock people out are agreed and scheduled in advance.",
      },
      {
        title: "Handover or support",
        text: "You get the access model, the rules for handling secrets and the restore procedure in writing. Under support we keep patching and review access regularly.",
      },
    ],
    stack: [
      "AWS IAM",
      "Kubernetes RBAC",
      "SOPS",
      "Vault",
      "AWS KMS",
      "AWS VPC",
      "WireGuard",
      "Cloudflare",
      "Trivy",
      "Terraform",
      "Hetzner",
    ],
    faq: [
      {
        q: "Is this a penetration test?",
        a: "No. A penetration test attacks the application from outside. We review the configuration from inside: access, secrets, network, backups, updates. The two complement each other, and it makes sense to fix the configuration first.",
      },
      {
        q: "Will you prepare us for ISO 27001 or SOC 2?",
        a: "We do the technical part: access control, encryption, logging, backups and a description of how they are set up. We are not auditors and do not issue certificates; the formal audit is done by an accredited firm.",
      },
      {
        q: "What access do you need for the audit?",
        a: "Read-only: a role for viewing the cloud configuration, a read-only cluster role and access to the repositories. We do not need the secret values, only to see where and how they are stored.",
      },
      {
        q: "We found a key in the repository. What now?",
        a: "Deleting it from the code is not enough, because it stays in the Git history. The key has to be revoked and reissued first. Then we check the logs for its use, move the secret to encrypted storage and add a scanner to CI that blocks such commits.",
      },
    ],
    related: ["infrastructure-support", "terraform-iac", "monitoring"],
  },
  uk: {
    seo: {
      title: "Аудит безпеки інфраструктури та захист серверів | DVO Corp",
      description:
        "Аудит безпеки інфраструктури й посилення захисту: IAM і RBAC, секрети в SOPS, Vault чи KMS, приватні мережі, WAF, бекапи з перевіреним відновленням.",
      keywords: [
        "аудит безпеки інфраструктури",
        "безпека серверів",
        "аудит безпеки хмари",
        "аудит IAM",
        "керування секретами",
        "безпека Kubernetes",
      ],
    },
    name: "Безпека інфраструктури",
    h1: "Аудит безпеки інфраструктури: спершу перевірка, потім виправлення за ризиком",
    lead: "Перевіряємо, хто до чого має доступ, де зберігаються секрети, що видно з інтернету й чи можна відновитися з бекапів. Ви отримуєте перелік знахідок, упорядкований за ризиком. Далі закриваємо їх через код, щоб виправлення не зникли з часом.",
    when: [
      "Клієнт або партнер питає, як захищено вашу інфраструктуру",
      "Ключі й паролі лежать у репозиторії або в спільному чаті",
      "Усі в команді мають права адміністратора в хмарному акаунті",
      "База даних або адмінка доступна з інтернету",
      "Бекапи робляться, але відновлюватися з них ніхто ніколи не пробував",
    ],
    included: [
      {
        title: "Аудит",
        text: "Перевіряємо хмарні акаунти, сервери, кластери, CI та репозиторії: зайві доступи, відкриті порти, секрети, що витекли, застаріле програмне забезпечення. Результат — звіт із ризиками в порядку критичності.",
      },
      {
        title: "Доступи: IAM і RBAC",
        text: "Особисті облікові записи замість спільних, ролі з мінімально необхідними правами, MFA, жодних довгоживучих ключів там, де працюють короткоживучі облікові дані. Те саме в Kubernetes через RBAC.",
      },
      {
        title: "Секрети",
        text: "Прибираємо секрети з коду й зі змінних CI у відкритому вигляді. Шифруємо їх через SOPS у Git або тримаємо у Vault чи хмарному сховищі на основі KMS. Ключі, що витекли, замінюємо.",
      },
      {
        title: "Мережа",
        text: "Бази даних і внутрішні сервіси переносимо в приватні мережі: приватні підмережі VPC в AWS, приватна мережа в інших провайдерів. В інтернет дивиться лише балансувальник, адміністрування йде через VPN. Перед публічними адресами стоять WAF і обмеження частоти запитів.",
      },
      {
        title: "Бекапи з перевіреним відновленням",
        text: "Бекапи шифруються й зберігаються поза сервером і акаунтом, які вони захищають. Проводимо відновлення й фіксуємо, скільки воно триває.",
      },
      {
        title: "Оновлення",
        text: "Процес оновлення ОС, Kubernetes і образів: автоматичні оновлення безпеки там, де це безпечно, планові вікна для решти, сканування образів у CI.",
      },
    ],
    steps: [
      {
        title: "Дзвінок і доступи",
        text: "Ви описуєте систему й те, що вас турбує. Ми отримуємо доступ лише на читання для аудиту.",
      },
      {
        title: "Звіт і ціна",
        text: "Знахідки з рівнем критичності й запропонованим виправленням для кожної. Ви обираєте, що виправляти, а ціну узгоджуємо до початку робіт.",
      },
      {
        title: "Посилення захисту",
        text: "Виправлення йдуть через pull request-и, найризикованіше — першим. Зміни, через які хтось може втратити доступ, узгоджуємо й плануємо заздалегідь.",
      },
      {
        title: "Передача або підтримка",
        text: "Ви отримуєте в письмовому вигляді модель доступів, правила роботи із секретами та процедуру відновлення. На підтримці й далі встановлюємо оновлення та регулярно переглядаємо доступи.",
      },
    ],
    stack: [
      "AWS IAM",
      "Kubernetes RBAC",
      "SOPS",
      "Vault",
      "AWS KMS",
      "AWS VPC",
      "WireGuard",
      "Cloudflare",
      "Trivy",
      "Terraform",
      "Hetzner",
    ],
    faq: [
      {
        q: "Це тест на проникнення?",
        a: "Ні. Тест на проникнення атакує застосунок ззовні. Ми перевіряємо конфігурацію зсередини: доступи, секрети, мережу, бекапи, оновлення. Одне доповнює інше, і спершу варто навести лад у конфігурації.",
      },
      {
        q: "Ви підготуєте нас до ISO 27001 або SOC 2?",
        a: "Робимо технічну частину: керування доступами, шифрування, журналювання, бекапи й опис того, як усе налаштовано. Ми не аудитори й сертифікатів не видаємо; формальний аудит проводить акредитована компанія.",
      },
      {
        q: "Який доступ потрібен для аудиту?",
        a: "Лише на читання: роль для перегляду конфігурації хмари, роль на читання в кластері й доступ до репозиторіїв. Значення секретів нам не потрібні — тільки бачити, де і як вони зберігаються.",
      },
      {
        q: "Ми знайшли ключ у репозиторії. Що тепер?",
        a: "Видалити його з коду недостатньо, бо він залишається в історії Git. Спершу ключ треба відкликати й випустити новий. Потім перевіряємо за логами, чи ним користувалися, переносимо секрет у зашифроване сховище й додаємо в CI сканер, який блокує такі коміти.",
      },
    ],
    related: ["infrastructure-support", "terraform-iac", "monitoring"],
  },
};
