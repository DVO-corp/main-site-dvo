import { legal } from "./legal/en";

/**
 * English dictionary and the SOURCE OF TRUTH for the content shape.
 *
 * `Dictionary` is derived from this object, so adding a key here makes
 * TypeScript require the same key in `uk.ts` and `ru.ts`.
 *
 * Copy rules: say what we do in plain words, no filler, no invented numbers,
 * no client names. Anything stated as a fact must be true of our own
 * production today.
 */
export const en = {
  nav: {
    home: "Home",
    services: "Services",
    infrastructure: "Infrastructure",
    products: "Platform & API",
    about: "About",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    language: "Language",
    changeLanguage: "Change language",
    theme: "Theme",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
    skipToContent: "Skip to content",
  },

  actions: {
    discussProject: "Discuss a project",
    viewServices: "All services",
    openProduct: "Open MetaPlatho",
    learnMore: "Details",
    writeTelegram: "Message on Telegram",
    writeEmail: "Send an email",
    backHome: "Back to home",
    prepare: "Prepare the request",
    sendTelegram: "Send via Telegram",
    sendEmail: "Send by email",
    editRequest: "Edit the request",
    copy: "Copy",
    copied: "Copied",
    openInNewTab: "opens in a new tab",
  },

  labels: {
    included: "What's included",
    bestFor: "Best for",
    whenNeeded: "When you need this",
    howItGoes: "How the work goes",
    stack: "Tools we use",
    faq: "Questions",
    related: "Related services",
    required: "required",
  },

  home: {
    hero: {
      badge: "Deploy · Verify · Operate",
      title: "DevOps team for products that have to stay up",
      subtitle:
        "We design, launch and run production infrastructure: Kubernetes, Terraform, CI/CD, monitoring, security and cost control. In your AWS account, any other cloud, or on our servers.",
      note: "Any stack — Python, Node.js, Go, PHP, Java. From a single service to a high-load platform.",
      panelTitle: "what you get",
      panel: [
        { k: "infra", v: "Terraform · Kubernetes · Helm" },
        { k: "delivery", v: "CI/CD · GitOps · rollbacks" },
        { k: "observe", v: "metrics · logs · alerts · dashboards" },
        { k: "secure", v: "access · secrets · network · backups" },
        { k: "clouds", v: "AWS · Hetzner · Cloudflare · any" },
        { k: "cost", v: "audit · right-sizing · autoscaling" },
        { k: "handover", v: "code and docs stay with you" },
      ],
    },

    services: {
      title: "What we do",
      subtitle:
        "Take one task or the whole infrastructure. Every item below is work we do with our own hands, on our own production as well.",
    },

    models: {
      title: "Three ways to work with us",
      subtitle:
        "The model is chosen at the start and can change as the product grows.",
      items: [
        {
          id: "own",
          tab: "Your infrastructure",
          flow: ["Our engineers", "Code in your repository", "Your cloud account"],
          icon: "Server",
          title: "We build and run it in your accounts",
          text: "AWS, Hetzner, any other cloud or your own hardware. Everything is described as code in your repository; accounts, access and data stay yours.",
          points: [
            "Terraform and Helm in your repository",
            "CI/CD, monitoring, alerts and backups configured",
            "Documentation and handover to your team",
            "Ongoing support under a separate agreement",
          ],
          bestFor:
            "Companies that already have cloud accounts or servers and need engineers to build or fix what runs on them.",
        },
        {
          id: "managed",
          tab: "Our infrastructure",
          flow: ["Your repository", "Our delivery pipeline", "Our clusters"],
          icon: "ServerCog",
          title: "We host and operate your application",
          text: "No servers of your own and no wish to get them. We run your application on our clusters and are responsible for deploys, uptime, monitoring and backups.",
          points: [
            "Your code runs on our Kubernetes clusters",
            "Deploys from your repository, zero-downtime",
            "Monitoring, alerts and incident response on us",
            "Move out to your own cloud at any time — the setup is portable",
          ],
          bestFor:
            "Products without a DevOps engineer that need to be online and predictable, not to own servers.",
        },
        {
          id: "api",
          tab: "Function as an API",
          flow: ["Your application", "API key + HTTP call", "MetaPlatho"],
          icon: "Braces",
          title: "We add your function to our API platform",
          text: "You need one capability, not a whole system: a calculation, a conversion, a data-processing step. We build it, run it on the MetaPlatho platform and you call it over HTTP, paying for usage.",
          points: [
            "An HTTP endpoint with API keys",
            "Usage metering and pay-as-you-go billing already in place",
            "Queues, retries and webhooks for long jobs",
            "Nothing to host or maintain on your side",
          ],
          bestFor:
            "Teams that need a working function this month and do not want to build and operate a backend for it.",
        },
      ],
    },

    proof: {
      badge: "Our own production",
      title: "We run what we sell",
      text: "MetaPlatho is our own product: a media-processing platform with a public API, user accounts, payments and usage billing. It runs on infrastructure we built and operate ourselves — the same tools and the same practices we bring to client projects.",
      points: [
        "Kubernetes clusters described in Terraform, deployed through CI and GitOps",
        "Worker pools that scale with the queue and down to zero when idle",
        "Metrics, logs, dashboards and alerts on every service",
        "Load tests against production, with the bottlenecks found and fixed",
        "Secrets encrypted in Git, private networking, automated backups",
      ],
      facts: [
        { k: "product", v: "metaplatho.com" },
        { k: "platform", v: "Kubernetes + KEDA" },
        { k: "iac", v: "Terraform + Helm" },
        { k: "delivery", v: "GitHub Actions + GitOps" },
        { k: "observe", v: "VictoriaMetrics + Grafana + Loki" },
        { k: "billing", v: "API keys, metering, payments" },
      ],
    },

    process: {
      title: "How a project goes",
      subtitle: "Short stages, each one ends with something you can check.",
      steps: [
        {
          title: "Call and access",
          text: "You describe the task. If something already runs, we look at the configuration and the bills.",
        },
        {
          title: "Plan and estimate",
          text: "You get the target architecture, the list of work, the timeline and the price — before any work starts.",
        },
        {
          title: "Build",
          text: "Infrastructure as code, pipelines, monitoring, backups. Changes go through your repository, so you see every one.",
        },
        {
          title: "Launch",
          text: "Load check, cut-over in an agreed window, a rollback path ready.",
        },
        {
          title: "Handover or support",
          text: "Documentation and access go to your team, or we stay on as your operations engineers.",
        },
      ],
    },

    tech: {
      title: "Stack",
      subtitle:
        "Mainstream, actively maintained tools. Your next engineer will already know them.",
      groups: {
        orchestration: "Orchestration and containers",
        cicd: "CI/CD and delivery",
        cloud: "Cloud and compute",
        iac: "Infrastructure as code",
        network: "Networking and security",
        observability: "Monitoring and logs",
        data: "Databases and storage",
        runtime: "Languages and runtimes",
        workloads: "Queues, GPU and AI workloads",
      },
    },

    faq: {
      title: "Questions we get first",
      subtitle: "Not here? Write to us and get a direct answer.",
      items: [
        {
          q: "How big are the projects you take?",
          a: "From one server with a few services to multi-node Kubernetes clusters with autoscaling and high request rates. Size matters less than the task being clear: we say up front if something is outside what we can do well.",
        },
        {
          q: "You are a small team. What happens if someone is unavailable?",
          a: "Everything we build is code and documentation in your repository, not knowledge in one head. Any of us — or any other engineer — can pick the system up from the repository.",
        },
        {
          q: "Do you work in our existing AWS or Hetzner account?",
          a: "Yes. We work with the access you grant, put the existing setup into Terraform where it is not there yet, and change it through pull requests you can review.",
        },
        {
          q: "We have no servers at all. Can you host us?",
          a: "Yes. We run your application on our own clusters and take care of deploys, monitoring and backups. If you later want your own cloud, the same configuration moves there.",
        },
        {
          q: "What does it cost?",
          a: "A one-off project is priced by the agreed list of work; support is a monthly fee that depends on the size of the system and the response time you need. You get the number before we start, and it does not change without a change of scope.",
        },
        {
          q: "Can you take over a system someone else built?",
          a: "Yes, that is a common request. We start with an audit: what runs where, what is missing (backups, monitoring, access control) and what it costs. Then we fix things in order of risk.",
        },
        {
          q: "Do you also write code?",
          a: "Yes: backend services, APIs, automation and internal tools in Python and Node.js, plus whatever glue the infrastructure needs. If you need one function rather than a product, we can ship it as an endpoint on our API platform.",
        },
        {
          q: "What stays with us if we stop working together?",
          a: "Everything: the repositories with Terraform, Helm charts and pipelines, the documentation and all access. Nothing is tied to us technically.",
        },
      ],
    },

    cta: {
      title: "Describe the task — get a plan and a price",
      text: "Write what you have and what you need. We answer within one business day with questions or a concrete proposal.",
    },
  },

  services: {
    hero: {
      title: "Services",
      subtitle:
        "Infrastructure work from the first server to a high-load platform. Take one item or all of them.",
    },
    categories: [
      {
        id: "turnkey",
        icon: "ServerCog",
        name: "Turnkey infrastructure",
        text: "From an empty cloud account to production: environments, deploys, monitoring, backups, documentation.",
        included: [
          "Architecture for your load and budget",
          "Dev, staging and production environments",
          "Everything described in Terraform",
          "CI/CD, monitoring, alerts, backups",
          "Documentation and handover",
        ],
        slug: "devops-outsourcing",
      },
      {
        id: "aws",
        icon: "Cloud",
        name: "AWS infrastructure",
        text: "Accounts, networks, EKS, databases and delivery on AWS — built as code and sized to what you actually use.",
        included: [
          "Account and VPC layout, IAM",
          "EKS, EC2, RDS, S3, CloudFront",
          "Terraform for every resource",
          "Monitoring, backups, alerts",
          "Cost review of the AWS bill",
        ],
        slug: "aws-devops",
      },
      {
        id: "iac",
        icon: "Blocks",
        name: "Terraform and IaC",
        text: "Infrastructure as code: reproducible environments, reviewable changes, ready-made modules and templates.",
        included: [
          "Terraform / Terragrunt modules",
          "Importing existing resources into code",
          "State, environments and access layout",
          "Plan-on-PR and apply pipelines",
          "Templates your team can reuse",
        ],
        slug: "terraform-iac",
      },
      {
        id: "kubernetes",
        icon: "Container",
        name: "Kubernetes",
        text: "Production clusters on AWS EKS or self-managed Kubernetes, sized for the load you actually have.",
        included: [
          "Cluster setup and upgrades",
          "Helm charts for your services",
          "Ingress, TLS, network policies",
          "Autoscaling: HPA, KEDA, node pools",
          "Zero-downtime rollouts",
        ],
        slug: "kubernetes",
      },
      {
        id: "cicd",
        icon: "GitBranch",
        name: "CI/CD and delivery",
        text: "From a commit to production without manual steps: builds, tests, deploys and rollbacks.",
        included: [
          "GitHub Actions and GitLab CI pipelines",
          "Image builds, caching, registries",
          "GitOps with Argo CD or Flux",
          "Preview and staging environments",
          "One-command rollback",
        ],
        slug: "ci-cd",
      },
      {
        id: "monitoring",
        icon: "Activity",
        name: "Monitoring and alerts",
        text: "Metrics, logs, dashboards and alerts, so you learn about a problem before your users do.",
        included: [
          "Prometheus / VictoriaMetrics, Grafana, Loki",
          "Dashboards per service and per business flow",
          "Alerts to Telegram, Slack or email",
          "Uptime and synthetic checks",
          "On-call runbooks",
        ],
        slug: "monitoring",
      },
      {
        id: "security",
        icon: "ShieldCheck",
        name: "Security",
        text: "Access, secrets, network and backups brought to a state you can show an auditor or a client.",
        included: [
          "Infrastructure security audit",
          "IAM, RBAC and least-privilege access",
          "Secrets out of the repo: SOPS, Vault, cloud KMS",
          "Private networking, WAF, rate limits",
          "Backups with tested restores",
        ],
        slug: "infrastructure-security",
      },
      {
        id: "cost",
        icon: "Coins",
        name: "Cost optimisation",
        text: "We find what you pay for and do not use, and bring the bill in line with the real load.",
        included: [
          "Audit of bills and actual consumption",
          "Right-sizing instances and storage",
          "Autoscaling and scale-to-zero",
          "Reserved, spot and cheaper-provider options",
          "A report with numbers before and after",
        ],
        slug: "cloud-cost-optimization",
      },
      {
        id: "highload",
        icon: "Gauge",
        name: "High load and performance",
        text: "Systems that keep answering when traffic grows tenfold: load tests, bottlenecks, scaling.",
        included: [
          "Load testing against real scenarios",
          "Finding and removing bottlenecks",
          "Horizontal scaling and queues",
          "Caching and CDN",
          "Capacity plan for growth",
        ],
        slug: "high-load",
      },
      {
        id: "migration",
        icon: "ArrowRightLeft",
        name: "Migration",
        text: "Between clouds, from bare servers into a cluster, or off an expensive provider — with minimal downtime.",
        included: [
          "Inventory of services and data",
          "Target architecture and cost comparison",
          "Parallel environment and data sync",
          "Cut-over in an agreed window",
          "Rollback path until you sign off",
        ],
        slug: "cloud-migration",
      },
      {
        id: "support",
        icon: "LifeBuoy",
        name: "Support and operations",
        text: "We take a running system under supervision: updates, incidents, backups and steady improvement.",
        included: [
          "Audit and clean-up of the current setup",
          "Monitoring and incident response",
          "Updates and security patches",
          "Backups and restore drills",
          "Monthly report: what was done, what is next",
        ],
        slug: "infrastructure-support",
      },
      {
        id: "hosting",
        icon: "Server",
        name: "Hosting on our infrastructure",
        text: "No servers of your own? We run your application on our clusters and answer for its uptime.",
        included: [
          "Deploys from your repository",
          "Domains, TLS, CDN",
          "Databases, queues, object storage",
          "Monitoring and backups included",
          "Portable setup — leave whenever you want",
        ],
        slug: "managed-hosting",
      },
      {
        id: "api",
        icon: "Braces",
        name: "Development and custom APIs",
        text: "Backend services, integrations and single functions shipped as an API you pay for by usage.",
        included: [
          "Python and Node.js services",
          "Your function as an endpoint on MetaPlatho",
          "API keys, usage metering, billing",
          "Queues, webhooks, retries",
          "Integrations and internal tools",
        ],
        slug: "api-development",
      },
      {
        id: "ai",
        icon: "Bot",
        name: "AI agents and GPU workloads",
        text: "We deploy and operate what your AI features run on: agents, model serving, GPU workers and queues.",
        included: [
          "Self-hosted and API-based LLM setups",
          "Agent runtimes with tools and access limits",
          "GPU workers that scale with the queue",
          "Cost and usage monitoring",
          "Private deployment inside your perimeter",
        ],
        slug: "ai-infrastructure",
      },
    ],
    cta: {
      title: "Not on the list?",
      text: "Describe the task in your own words. If it is about servers, deploys or keeping a system alive, we have most likely done it.",
    },
  },

  infrastructure: {
    hero: {
      badge: "Infrastructure",
      title: "What a production setup consists of",
      subtitle:
        "The layers we build and operate, from the edge to the servers. Nothing here is exotic — it is the standard that keeps a product online.",
    },
    diagram: {
      title: "Reference architecture",
      subtitle: "Select a layer to see what it contains.",
      layers: [
        {
          id: "edge",
          title: "Edge",
          text: "Domains, TLS, CDN, WAF and rate limits in front of your services.",
          items: ["DNS", "TLS", "CDN", "WAF", "Traefik / NGINX", "Rate limiting"],
        },
        {
          id: "platform",
          title: "Platform",
          text: "AWS EKS or self-managed Kubernetes with ingress, secrets, namespaces per environment and node pools per workload type.",
          items: ["AWS EKS", "Kubernetes", "Helm", "Ingress", "Secrets", "Node pools"],
        },
        {
          id: "workloads",
          title: "Workloads",
          text: "Your services, background workers and scheduled jobs with resource limits and autoscaling.",
          items: ["API", "Workers", "Cron", "Queues", "HPA", "KEDA"],
        },
        {
          id: "data",
          title: "Data",
          text: "Databases, cache, object storage and backups with restores that are actually tested.",
          items: ["PostgreSQL", "MySQL", "Redis", "S3 / R2 / MinIO", "Backups"],
        },
        {
          id: "delivery",
          title: "Delivery",
          text: "Builds, tests, deploys and GitOps sync. Infrastructure changes go through the same review as code.",
          items: ["GitHub Actions", "GitLab CI", "Registry", "Argo CD / Flux", "Terraform"],
        },
        {
          id: "observability",
          title: "Observability",
          text: "Metrics, logs, dashboards and alerts for every layer above.",
          items: ["VictoriaMetrics", "Prometheus", "Grafana", "Loki", "Alertmanager"],
        },
        {
          id: "foundation",
          title: "Servers and network",
          text: "Virtual machines or bare metal, private networks, firewalls and the provider's managed services.",
          items: ["AWS EC2", "AWS VPC", "Hetzner", "Linux", "Firewall", "NAT"],
        },
      ],
    },
    capabilities: {
      title: "What we set up",
      items: [
        {
          icon: "Server",
          title: "Servers and network",
          text: "Hardened hosts, private networks, firewalls, VPN access, separate environments.",
        },
        {
          icon: "Container",
          title: "Clusters",
          text: "AWS EKS or self-managed Kubernetes with upgrades, node pools and autoscaling.",
        },
        {
          icon: "GitBranch",
          title: "Pipelines",
          text: "Build, test and deploy on every commit, with a rollback that takes one command.",
        },
        {
          icon: "Waypoints",
          title: "GitOps",
          text: "The cluster state lives in Git: every change has an author, a review and a history.",
        },
        {
          icon: "Activity",
          title: "Monitoring",
          text: "Dashboards and alerts built around your services, not a default template.",
        },
        {
          icon: "DatabaseBackup",
          title: "Backups",
          text: "Scheduled, encrypted, stored off the server, with restores checked on a schedule.",
        },
        {
          icon: "ShieldCheck",
          title: "Security",
          text: "Least-privilege access, encrypted secrets, network isolation, patching.",
        },
        {
          icon: "Scaling",
          title: "Scaling",
          text: "Services and workers scale by metrics or queue depth, nodes follow.",
        },
        {
          icon: "Coins",
          title: "Cost control",
          text: "Resources match consumption; idle capacity scales down instead of being billed.",
        },
      ],
    },
    models: {
      title: "Whose infrastructure it runs on",
      subtitle: "Yours, ours, or just an endpoint on our API platform.",
    },
    migration: {
      title: "Migration without a weekend of downtime",
      subtitle:
        "The usual sequence when you change provider or move services into a cluster.",
      steps: [
        {
          title: "Inventory",
          text: "What runs, what it depends on, and what can be dropped.",
        },
        {
          title: "Target design",
          text: "How the system looks after the move and what changes in the bill.",
        },
        {
          title: "Parallel build",
          text: "The new environment goes up next to the old one; data is synced while you keep working.",
        },
        {
          title: "Verification",
          text: "Services, load and a restore from backup are tested on the new side.",
        },
        {
          title: "Cut-over",
          text: "Traffic switches in an agreed window, with a way back until you sign off.",
        },
      ],
    },
    cta: {
      title: "Show us what you run today",
      text: "We will tell you what is missing, what is at risk and what it would take to fix.",
    },
  },

  products: {
    hero: {
      badge: "Platform & API",
      title: "No servers? Use ours",
      subtitle:
        "MetaPlatho is our production API platform. We can host your application next to it, or add the function you need as an endpoint you pay for by usage.",
    },
    mp: {
      name: "MetaPlatho",
      tagline: "Our product, running on our infrastructure",
      text: "A media-processing service with a web studio and a REST API: compression, conversion, resizing, subtitles and transcription for images, video and audio. Users sign up, top up a balance and pay for what they process.",
      points: [
        "REST API with a single API-key header",
        "Async jobs with polling and webhooks",
        "Usage metering, quotas and rate limits per account",
        "Card payments and balance top-ups",
        "Autoscaled worker pools behind a queue",
      ],
    },
    api: {
      title: "Your function as an API",
      text: "Not every task needs its own backend. Tell us what the function must do — we build it, deploy it on the platform and give you an endpoint.",
      steps: [
        {
          title: "You describe the function",
          text: "Input, output, expected volume. A price calculator, a document converter, a data check, a report builder — anything that fits a request and a response.",
        },
        {
          title: "We build and test it",
          text: "The endpoint is added to the platform. You get a key and try it against your real data.",
        },
        {
          title: "You call it and pay for usage",
          text: "Metering, limits and billing are already there. No servers, deploys or on-call on your side.",
        },
      ],
      points: [
        "A working endpoint in days, not a quarter",
        "Per-request pricing agreed up front",
        "Scales with your traffic",
        "The code can move to your own infrastructure later",
      ],
      exampleTitle: "What a call looks like",
    },
    hosting: {
      title: "Hosting for your application",
      text: "If you have code but no infrastructure, we run it on the same clusters that serve MetaPlatho — with the same deploy pipeline, monitoring and backups.",
      points: [
        "Containers built and deployed from your repository",
        "A database, cache, queue and object storage as needed",
        "Domain, TLS and CDN configured",
        "Dashboards and alerts you can see",
        "A fixed monthly price for the agreed resources",
      ],
    },
    cta: {
      title: "Need a function or a place to run your code?",
      text: "Describe what it should do and the volume you expect. We answer with a price and a date.",
    },
  },

  about: {
    hero: {
      badge: "About",
      title: "A small team of DevOps engineers",
      subtitle:
        "DVO stands for Deploy, Verify, Operate — the three things we do for a product. We are based in Ukraine and work remotely with companies in Ukraine and across Europe.",
    },
    intro: {
      title: "Who you work with",
      text: "The people you talk to are the people who do the work. There are no account managers and no juniors behind a senior name: an engineer takes your task, designs the solution, builds it and answers for the result.",
      second:
        "We run our own production — the MetaPlatho platform with paying users — so we know what an outage at night, a growing bill and a failed deploy cost. That is the experience clients pay for.",
    },
    principles: {
      title: "How we work",
      items: [
        {
          title: "Everything is code",
          text: "Infrastructure, pipelines and dashboards live in your repository. Nothing is configured by hand and forgotten.",
        },
        {
          title: "The task first, the tool second",
          text: "Not everyone needs Kubernetes. Sometimes the right answer is one well-configured server with backups and monitoring.",
        },
        {
          title: "A price before the work",
          text: "You know the scope, the timeline and the cost up front. If the scope changes, we agree on it before doing it.",
        },
        {
          title: "No lock-in",
          text: "Mainstream tools, full access and documentation. Another engineer can take the system over at any point.",
        },
        {
          title: "Straight answers",
          text: "If a task is outside what we do well, or the budget does not fit the expectation, we say so on the first call.",
        },
        {
          title: "We take the unglamorous work",
          text: "Legacy servers, undocumented setups, a migration nobody wants to touch. Someone has to do it properly.",
        },
      ],
    },
    cta: {
      title: "Tell us what you are building",
      text: "Telegram or email — you get an answer from an engineer, not a sales script.",
    },
  },

  contact: {
    details: {
      title: "Direct contacts",
      subtitle: "Plain text — select it or copy with one click.",
      emailLabel: "Email",
      telegramLabel: "Telegram",
      phoneLabel: "Phone",
      infoEmailLabel: "General enquiries",
    },
    hero: {
      badge: "Contact",
      title: "Describe the task",
      subtitle:
        "What you have now, what you need, and by when. We answer within one business day.",
    },
    form: {
      title: "Request",
      subtitle:
        "Fill in what you know. The form builds a message that you send through Telegram or email in one click.",
      fields: {
        name: "Name",
        namePlaceholder: "What should we call you",
        company: "Company",
        companyPlaceholder: "Company or project name",
        contact: "Telegram or email",
        contactPlaceholder: "@username or name@company.com",
        taskType: "Task type",
        taskTypePlaceholder: "Choose an area",
        description: "Task description",
        descriptionPlaceholder:
          "What runs now, what you need, timeline and constraints",
        load: "Scale",
        loadPlaceholder: "Choose an option",
        budget: "Format",
        budgetPlaceholder: "Choose a format",
      },
      taskTypes: [
        { id: "turnkey", label: "Infrastructure from scratch" },
        { id: "aws", label: "AWS infrastructure" },
        { id: "kubernetes", label: "Kubernetes / EKS" },
        { id: "iac", label: "Terraform / IaC" },
        { id: "cicd", label: "CI/CD" },
        { id: "monitoring", label: "Monitoring and alerts" },
        { id: "security", label: "Security" },
        { id: "cost", label: "Cost optimisation" },
        { id: "migration", label: "Migration" },
        { id: "support", label: "Support for a running system" },
        { id: "hosting", label: "Hosting on our infrastructure" },
        { id: "api", label: "Development / custom API" },
        { id: "ai", label: "AI agents / GPU workloads" },
        { id: "other", label: "Something else" },
      ],
      loads: [
        { id: "small", label: "One or two services" },
        { id: "medium", label: "Several services, one team" },
        { id: "large", label: "High load or many environments" },
        { id: "unknown", label: "Hard to say yet" },
      ],
      budgets: [
        { id: "project", label: "One-off project" },
        { id: "support", label: "Monthly support" },
        { id: "hourly", label: "Hourly, as needed" },
        { id: "discuss", label: "Let's discuss" },
      ],
      validation: {
        nameRequired: "Tell us what to call you",
        contactRequired: "We need a Telegram handle or an email to reply",
        contactInvalid: "That does not look right — please check the contact",
        descriptionRequired: "Describe the task in a few words",
        descriptionShort: "Please add a little more detail",
      },
      ready: {
        title: "The request is ready",
        text: "Choose how to send it. Telegram opens a chat with the text already filled in; email opens your mail client with the same text.",
      },
      privacy:
        "The form sends nothing by itself: the text goes to us only when you press send in Telegram or in your mail client.",
    },
    response: {
      title: "What happens next",
      steps: [
        "We read the request and come back with questions or a time for a call",
        "You get a plan: what we would do, in what order and what it costs",
        "We agree on the first stage and start",
      ],
    },
  },

  footer: {
    tagline:
      "DevOps team: production infrastructure, operations and custom APIs. Ukraine, working across Europe.",
    navTitle: "Navigation",
    servicesTitle: "Services",
    contactTitle: "Contact",
    productsTitle: "Product",
    legalTitle: "Legal",
    rights: "All rights reserved.",
    note: "Static site, no cookies, no ad trackers.",
  },

  notFound: {
    title: "Page not found",
    text: "The address may contain a typo, or the page has moved. Use the navigation below.",
    suggestions: "Sections",
  },

  breadcrumbs: {
    home: "Home",
  },

  legal,

  seo: {
    home: {
      title: "DVO Corp — DevOps team: AWS, Kubernetes, Terraform, CI/CD",
      description:
        "DevOps outsourcing from Ukraine: AWS and EKS infrastructure, Terraform, Kubernetes, CI/CD, monitoring, security, cost optimisation and ongoing operations. In your cloud or on our servers.",
      keywords: [
        "DevOps outsourcing",
        "DevOps as a service",
        "AWS DevOps consulting",
        "DevOps company Ukraine",
        "Kubernetes consulting",
        "Terraform infrastructure as code",
        "infrastructure support",
      ],
    },
    services: {
      title: "DevOps services: Terraform, Kubernetes, CI/CD, monitoring | DVO Corp",
      description:
        "Turnkey infrastructure, IaC, Kubernetes, CI/CD, monitoring and alerts, security, cost optimisation, high load, migration, support, hosting and custom APIs.",
      keywords: [
        "DevOps services",
        "hire DevOps engineer",
        "CI/CD setup",
        "Kubernetes setup",
        "cloud cost optimization",
      ],
    },
    infrastructure: {
      title: "Production infrastructure: architecture, clusters, delivery | DVO Corp",
      description:
        "What a production setup consists of and how we build it: edge, Kubernetes, workloads, data, CI/CD, observability. Migration without downtime.",
      keywords: [
        "production infrastructure",
        "Kubernetes architecture",
        "cloud migration",
        "GitOps",
      ],
    },
    products: {
      title: "MetaPlatho platform: managed hosting and custom API endpoints | DVO Corp",
      description:
        "No servers of your own? We host your application on our clusters or ship the function you need as a pay-per-use API endpoint on the MetaPlatho platform.",
      keywords: [
        "managed hosting",
        "custom API development",
        "API as a service",
        "pay per use API",
      ],
    },
    about: {
      title: "About DVO Corp — DevOps engineers from Ukraine",
      description:
        "A small team of DevOps engineers running their own production. Everything as code, a price before the work, no lock-in.",
      keywords: ["DVO Corp", "DevOps team Ukraine", "DevOps freelancers"],
    },
    contact: {
      title: "Contact DVO Corp — describe the task, get a plan and a price",
      description:
        "Write on Telegram or by email about infrastructure, Kubernetes, CI/CD, monitoring or support. We answer within one business day.",
      keywords: ["hire DevOps engineer", "DevOps consultation", "infrastructure audit"],
    },
    privacy: {
      title: "Privacy Policy | DVO Corp",
      description:
        "What dvocorp.com collects, what happens to a request you send us, how long we keep correspondence and how to exercise your rights.",
      keywords: ["privacy policy", "personal data protection", "GDPR"],
    },
    terms: {
      title: "Terms of Use | DVO Corp",
      description:
        "The rules for using dvocorp.com: the status of published information, requests, rights in the content and governing law.",
      keywords: ["terms of use", "website terms"],
    },
    notFound: {
      title: "Page not found | DVO Corp",
      description: "This page does not exist. Use the site navigation.",
      keywords: [],
    },
  },
} as const satisfies Record<string, unknown>;

/** Recursively widens literal types so translations are plain strings. */
export type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? Widen<U>[]
        : T extends object
          ? { -readonly [K in keyof T]: Widen<T[K]> }
          : T;

export type Dictionary = Widen<typeof en>;

export default en;
