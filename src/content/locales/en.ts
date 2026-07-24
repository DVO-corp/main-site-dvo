import type { Dictionary } from "./uk";

/** English dictionary. Must match the shape of `uk`. */
export const en: Dictionary = {
  nav: {
    home: "Home",
    services: "Services",
    ai: "AI Infrastructure",
    infrastructure: "Infrastructure",
    products: "Products",
    about: "About",
    contact: "Contact",
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
    viewServices: "View services",
    mediaProcessing: "Media Processing",
    openMediaProcessing: "Open Media Processing",
    orderIntegration: "Order an integration",
    discussWorkflow: "Discuss your own workflow",
    getEstimate: "Get an estimate",
    requestEstimate: "Request a custom estimate",
    discussInfrastructure: "Discuss infrastructure",
    contactUs: "Get in touch",
    learnMore: "Learn more",
    showMore: "Details",
    showLess: "Collapse",
    writeTelegram: "Message on Telegram",
    writeEmail: "Send an email",
    backHome: "Back to home",
    allServices: "All services",
    send: "Send request",
    sending: "Sending…",
    sendAnother: "Send another request",
    calculate: "Suggest a setup",
    reset: "Reset",
    openInNewTab: "opens in a new tab",
  },

  labels: {
    problem: "What it solves",
    included: "What's included",
    bestFor: "Best for",
    outcome: "Possible outcome",
    example: "Example",
    note: "Important",
    recommended: "Suggested model",
    loadProfile: "Load profile",
    required: "required",
    optional: "optional",
    inDevelopment: "In development",
    available: "Available",
    planned: "Planned",
  },

  home: {
    hero: {
      badge: "DevOps · Virtualization · Optimization",
      title: "Infrastructure and AI capacity without the excess spend",
      subtitle:
        "We set up servers, Kubernetes, AI models and custom services for small teams. Architecture is matched to your real workload, so you don't pay for capacity that sits idle.",
      note: "We work on your own infrastructure or provide a managed environment — whichever makes more sense for your project.",
    },

    diagram: {
      title: "How a request flows",
      subtitle:
        "A simplified path from your application's request to compute, storage and monitoring. Hover or tap a node for details.",
      hint: "Select a node on the diagram",
      nodes: [
        {
          id: "request",
          label: "Client request",
          desc: "An HTTP request, webhook or job coming from your application or integration.",
        },
        {
          id: "gateway",
          label: "DVO Gateway",
          desc: "Entry point: TLS, routing, rate limits and API key authentication.",
        },
        {
          id: "queue",
          label: "Job queue",
          desc: "Long operations don't block the response — the job is queued and picked up by a worker.",
        },
        {
          id: "k8s",
          label: "Kubernetes",
          desc: "Service orchestration: rollouts, restarts, resource limits and scaling.",
        },
        {
          id: "cpu",
          label: "CPU workers",
          desc: "Conversion, parsing, data processing, API integrations — everything that doesn't need a GPU.",
        },
        {
          id: "gpu",
          label: "GPU workers",
          desc: "Image and video generation, transcription, model inference. Can run in a shared pool.",
        },
        {
          id: "storage",
          label: "Storage",
          desc: "Object storage for incoming and finished files, backups and object lifecycle rules.",
        },
        {
          id: "api",
          label: "API / Result",
          desc: "The result returns to your service via API, a webhook or a file link.",
        },
        {
          id: "monitoring",
          label: "Monitoring",
          desc: "Metrics, logs and alerts: utilisation, errors and resource cost stay visible.",
        },
      ],
    },

    advantages: {
      title: "Why teams work with DVO",
      subtitle:
        "We cover the technical side so you can focus on the product and your clients.",
      items: [
        {
          icon: "Users",
          title: "No separate DevOps team",
          text: "You get infrastructure engineering when you need it, without hiring a full-time specialist.",
        },
        {
          icon: "TrendingDown",
          title: "Architecture for the real workload",
          text: "We look at the load profile first and pick resources second. No oversized servers bought \"just in case\".",
        },
        {
          icon: "Cpu",
          title: "Shared GPU capacity",
          text: "If a dedicated GPU server would idle most of the time, a share of a common compute pool can replace it.",
        },
        {
          icon: "Rocket",
          title: "From idea to a working setup",
          text: "Design, launch, documentation and handover — in sequential stages with a visible result at each one.",
        },
        {
          icon: "ShieldCheck",
          title: "Transparency and control",
          text: "Infrastructure is described as code, access and monitoring are configured, and the documentation stays with you.",
        },
        {
          icon: "Workflow",
          title: "Automation and APIs",
          text: "File handling, data processing and routine operations move into services that integrate with your tools.",
        },
      ],
    },

    directions: {
      title: "What we do",
      subtitle:
        "Start with one area and expand the scope as the project grows.",
      items: [
        {
          icon: "ServerCog",
          title: "End-to-end DevOps",
          text: "Infrastructure design, containerisation, CI/CD, monitoring, backups and security.",
          route: "services",
          points: ["Kubernetes and K3s", "CI/CD and GitOps", "Monitoring and backups"],
        },
        {
          icon: "Boxes",
          title: "Managed infrastructure",
          text: "Three engagement models: on your servers, fully managed, or inside the shared DVO infrastructure.",
          route: "infrastructure",
          points: ["Your infrastructure", "Full support", "Shared resources"],
        },
        {
          icon: "Sparkles",
          title: "AI and GPU",
          text: "Running models on GPUs, ComfyUI, job queues, API access and automatic scaling.",
          route: "ai",
          points: ["ComfyUI workflows", "GPU pools", "Model APIs"],
        },
        {
          icon: "Bot",
          title: "Custom automation",
          text: "Internal services, Telegram bots, integrations, bulk file processing and fast MVPs.",
          route: "services",
          points: ["API integrations", "Data processing", "MVP in weeks"],
        },
        {
          icon: "Clapperboard",
          title: "Media Processing",
          text: "A ready platform for image, video and audio processing — with a UI and an API.",
          route: "products",
          points: ["Conversion", "Subtitles", "Bulk processing"],
        },
        {
          icon: "Coins",
          title: "Cost optimisation",
          text: "An audit of current bills, resource rebalancing, and the right plans and instance types.",
          route: "services",
          points: ["Spend audit", "Right-sizing", "Migration"],
        },
      ],
    },

    media: {
      badge: "DVO product",
      title: "DVO Media Processing",
      tagline: "One platform for image, video and audio processing",
      text: "Instead of a pile of separate utilities and scripts — a single service where files are processed manually through the interface or automatically through an API. Built for agencies, content teams and products that handle a lot of media.",
      features: [
        { icon: "FileArchive", label: "File compression" },
        { icon: "Scaling", label: "Resolution changes" },
        { icon: "Shuffle", label: "Format conversion" },
        { icon: "Crop", label: "Cropping" },
        { icon: "Eraser", label: "Background removal" },
        { icon: "Type", label: "Text and logos" },
        { icon: "Captions", label: "Subtitles" },
        { icon: "Clapperboard", label: "Video for TikTok, Reels, Shorts" },
        { icon: "HardDrive", label: "Large files" },
        { icon: "Layers", label: "Bulk processing" },
        { icon: "Braces", label: "API for automation" },
        { icon: "Puzzle", label: "Custom features" },
      ],
    },

    shared: {
      title: "Shared infrastructure: how it works",
      subtitle:
        "A dedicated server isn't always necessary. Quite often the workloads of several teams fit comfortably into a single compute pool.",
      models: [
        {
          id: "own",
          tab: "Your server",
          icon: "Server",
          title: "On the client's infrastructure",
          text: "We configure your servers and services, describe the setup as code, prepare the documentation and hand the finished solution to your team.",
          points: [
            "All resources and credentials stay with you",
            "Infrastructure as code plus documentation",
            "Knowledge transfer to your team",
            "Optional ongoing support on request",
          ],
          bestFor:
            "Teams that already have their own cloud accounts or hardware and want to keep full control.",
        },
        {
          id: "managed",
          tab: "Managed DVO",
          icon: "ServerCog",
          title: "Fully managed",
          text: "We launch the infrastructure and keep running it: updates, monitoring, incident response, backups and further development.",
          points: [
            "Launch plus ongoing operations",
            "Monitoring, updates, backups",
            "Incident response",
            "Regular review of resource cost",
          ],
          bestFor:
            "Product teams without an infrastructure engineer who need a predictable technical partner.",
        },
        {
          id: "shared",
          tab: "Shared DVO",
          icon: "Split",
          title: "Shared DVO infrastructure",
          text: "Several clients use common compute resources. Each one pays for their share rather than for a whole server that sits idle most of the day.",
          points: [
            "Pay for the share of resources you actually need",
            "Workload isolation and separate access keys",
            "Job queues with priorities",
            "Move to dedicated resources as the load grows",
          ],
          bestFor:
            "Projects with uneven load: content generation, periodic media processing, model experiments.",
        },
      ],
      example: {
        title: "A simple example",
        text: "Instead of renting a dedicated GPU server at roughly $400–500 per month, several clients can use a shared compute pool and pay only for the share of resources they need.",
        note: "We don't promise a fixed saving. The final cost always depends on the volume of jobs, the type of processing and your latency requirements — which is why it is calculated individually.",
      },
      pool: {
        title: "How a shared GPU pool is split",
        subtitle:
          "An illustration of the principle: one GPU can serve several projects as long as none of them saturates it continuously.",
        dedicatedLabel: "Dedicated server for one project",
        sharedLabel: "Shared pool across several projects",
        idleLabel: "Idle",
        clientLabel: "Project",
        legendUsed: "In use",
        legendIdle: "Paid for, but idle",
      },
    },

    process: {
      title: "How we work together",
      subtitle: "Clear stages with an agreed result at every step.",
      steps: [
        {
          title: "Intro and scope",
          text: "We discuss what exists today, the goals and the constraints. If infrastructure is already running, we review the bills and the configuration.",
        },
        {
          title: "Architecture and estimate",
          text: "We propose a solution, explain exactly what drives the cost, and point out the cheaper alternatives.",
        },
        {
          title: "Launch",
          text: "We set up the environment, CI/CD, monitoring and backups — and migrate the project if a move is needed.",
        },
        {
          title: "Handover or support",
          text: "We hand over documentation and access, or take the infrastructure into ongoing operations.",
        },
        {
          title: "Growth",
          text: "We scale resources as the load grows, add new services and review the cost on a regular basis.",
        },
      ],
    },

    comparison: {
      title: "On your own vs. with DVO",
      subtitle:
        "A comparison of both approaches for a team without an in-house infrastructure engineer.",
      colSelf: "On your own",
      colDvo: "With DVO",
      rows: [
        {
          label: "Getting infrastructure up",
          self: "A developer is pulled off the product and learns DevOps alongside their real work",
          dvo: "An engineer designs and launches the infrastructure while the team stays on the product",
        },
        {
          label: "Choosing resources",
          self: "It's easy to take a server with headroom and pay for capacity nobody uses",
          dvo: "The configuration matches the load profile and is revisited as things change",
        },
        {
          label: "GPUs for AI workloads",
          self: "A rented GPU is billed around the clock, even when there are no jobs",
          dvo: "Start in a shared pool and move to a dedicated GPU once that becomes the better deal",
        },
        {
          label: "CI/CD and releases",
          self: "Manual deploys, environments that drift apart, painful rollbacks",
          dvo: "Automated pipelines, identical environments, predictable rollback",
        },
        {
          label: "Monitoring",
          self: "Users are usually the ones reporting the outage",
          dvo: "Metrics, logs and alerts are in place before launch",
        },
        {
          label: "Backups",
          self: "Taken irregularly, restore never tested",
          dvo: "A schedule, off-server storage and verified restores",
        },
        {
          label: "System knowledge",
          self: "Lives in one person's head",
          dvo: "Configuration as code and documentation stay with you",
        },
      ],
    },

    tasks: {
      title: "What people come to us with",
      subtitle: "Pick the situation closest to yours and see where to start.",
      items: [
        {
          icon: "Rocket",
          title: "We need an MVP live quickly",
          text: "The idea and the code exist, but there's no environment, no domains and no deploy process.",
          solution:
            "We roll out a minimal working environment: a server or K3s cluster, domain, SSL, CI/CD and basic monitoring. The infrastructure then grows with the product.",
          route: "services",
        },
        {
          icon: "TrendingDown",
          title: "The cloud bill keeps growing",
          text: "Spend goes up every month and it's hard to tell what exactly you're paying for.",
          solution:
            "We audit what's actually being used, where instance types, plans or storage classes can change, and propose a plan with the expected effect.",
          route: "services",
        },
        {
          icon: "Sparkles",
          title: "We need a GPU for content generation",
          text: "Jobs arrive in waves, but a dedicated GPU is billed around the clock.",
          solution:
            "We set up ComfyUI or a custom pipeline on a GPU, add a job queue and an API. For uneven load we connect a shared pool.",
          route: "ai",
        },
        {
          icon: "Clapperboard",
          title: "We process a lot of video and images",
          text: "Manual conversion and trimming eat hours of the team's time.",
          solution:
            "We connect DVO Media Processing or build a custom processing pipeline with an API, queues and bulk operations on files.",
          route: "products",
        },
        {
          icon: "Users",
          title: "There's no DevOps engineer on the team",
          text: "The servers were configured a while ago and nobody dares to touch them.",
          solution:
            "We document the current state, clean up the configuration and add monitoring and backups. Then either handover or ongoing support.",
          route: "infrastructure",
        },
        {
          icon: "ArrowRightLeft",
          title: "We need to move the project",
          text: "A migration between providers, or from standalone servers into a cluster.",
          solution:
            "We plan the migration with minimal downtime: move the data, prepare the environment, test, then switch the traffic over.",
          route: "infrastructure",
        },
      ],
    },

    counters: {
      title: "The approach in short",
      items: [
        {
          id: "directions",
          value: 9,
          suffix: "",
          label: "service areas",
          note: "from DevOps to media processing",
        },
        {
          id: "tech",
          value: 40,
          suffix: "+",
          label: "technologies in the stack",
          note: "proven tools, no exotics",
        },
        {
          id: "models",
          value: 3,
          suffix: "",
          label: "engagement models",
          note: "your server, managed, or shared resources",
        },
        {
          id: "languages",
          value: 3,
          suffix: "",
          label: "working languages",
          note: "Ukrainian, English, Russian",
        },
      ],
    },

    tech: {
      title: "Technologies",
      subtitle:
        "We work with tools that are actively maintained and straightforward to operate.",
      groups: {
        orchestration: "Orchestration and servers",
        cicd: "CI/CD and delivery",
        observability: "Monitoring and logs",
        cloud: "Cloud, network and storage",
        ai: "AI and media processing",
        data: "Data and backend",
      },
    },

    faq: {
      title: "Frequently asked questions",
      subtitle: "If your question isn't here, write to us and we'll answer specifically.",
      items: [
        {
          q: "What size of projects do you work with?",
          a: "Mostly small teams: agencies, early-stage startups, SaaS projects and content teams. A typical request ranges from a single server running a few services to a small cluster with GPU workloads.",
        },
        {
          q: "We want to keep the infrastructure ourselves. Is that possible?",
          a: "Yes — that's one of the three engagement models. All resources, accounts and credentials remain yours; we configure the system, describe it as code and hand it over together with the documentation.",
        },
        {
          q: "How is shared infrastructure different from a dedicated server?",
          a: "With a dedicated server you pay for the full capacity regardless of usage. In a shared pool several projects use the same compute resources and you pay for your share. Workloads are isolated and every project has its own access keys and quotas.",
        },
        {
          q: "How much cheaper will shared infrastructure be?",
          a: "There's no honest way to name a figure upfront — it depends on the number of jobs, the type of processing and your latency requirements. We calculate the cost individually and show what it consists of.",
        },
        {
          q: "Can we move from the shared pool to dedicated resources?",
          a: "Yes, and it's a common path: start on shared resources while validating the idea, then move to a dedicated GPU or a separate cluster once the load becomes steady.",
        },
        {
          q: "What happens if we stop working together?",
          a: "You keep the documentation, the configuration as code and all access. The infrastructure isn't technically tied to us — another team or your own engineer can pick it up.",
        },
        {
          q: "Do you work with existing AWS or DigitalOcean accounts?",
          a: "Yes. We can clean up an existing environment, optimise its configuration and cost, or plan a migration if a different option turns out to make more sense.",
        },
        {
          q: "How quickly can we start?",
          a: "The first conversation follows your message on Telegram or by email. After that we need a description of the task and, where it exists, access to the current infrastructure to prepare a proposal.",
        },
      ],
    },

    cta: {
      title: "Tell us about your project",
      text: "Describe the task and we'll propose an infrastructure option and show what the cost is made of.",
    },
  },

  services: {
    hero: {
      title: "Services",
      subtitle:
        "Nine areas that cover the technical side of a product: from the first server to automation and cost optimisation.",
    },
    categories: [
      {
        id: "devops",
        icon: "ServerCog",
        name: "End-to-end DevOps",
        tagline: "Infrastructure, process and releases",
        problem:
          "The code is ready, but there's no environment, no automated deploys and no visibility into what happens on the servers.",
        included: [
          "Infrastructure design for the actual task",
          "Server setup and baseline security",
          "Docker and service containerisation",
          "CI/CD with GitLab CI or GitHub Actions",
          "Argo CD and a GitOps approach",
          "Domains, SSL, CDN, Cloudflare",
          "Backups with verified restores",
          "System documentation",
        ],
        bestFor: [
          "Startups approaching their first release",
          "Agencies delivering projects to clients",
          "Teams without an infrastructure engineer",
        ],
        outcome:
          "Predictable releases, identical environments and a system that can be maintained without its original author.",
      },
      {
        id: "managed",
        icon: "Boxes",
        name: "Managed infrastructure",
        tagline: "Three engagement models",
        problem:
          "The servers run, but nobody is watching updates, backups or how much the resources cost.",
        included: [
          "Working on the client's infrastructure",
          "Full operations handled by DVO",
          "Shared infrastructure billed by resource share",
          "Regular updates and patching",
          "Access management",
          "Configuration reviews against the current load",
        ],
        bestFor: [
          "Product teams with no in-house DevOps",
          "Projects with uneven load",
          "Teams that want predictable monthly spend",
        ],
        outcome:
          "Infrastructure under supervision: updates, backups and incident response no longer depend on a developer's spare time.",
      },
      {
        id: "kubernetes",
        icon: "Container",
        name: "Kubernetes and K3s",
        tagline: "Orchestration without needless complexity",
        problem:
          "The number of services keeps growing and managing containers by hand stops scaling.",
        included: [
          "Kubernetes or K3s cluster setup",
          "Helm charts for your services",
          "Ingress, TLS certificates, routing",
          "Resource limits and pod autoscaling",
          "Namespace isolation for environments",
          "Zero-downtime rollout strategies",
        ],
        bestFor: [
          "Projects with several services",
          "Teams that need separate environments",
          "Anyone planning for load growth",
        ],
        outcome:
          "A cluster of the right size: K3s for smaller projects, full Kubernetes when it's justified.",
      },
      {
        id: "ai",
        icon: "Sparkles",
        name: "AI and GPU",
        tagline: "Models, queues and compute",
        problem:
          "You need GPU capacity for generation or inference, but a dedicated card idles most of the time.",
        included: [
          "Running models on GPUs",
          "ComfyUI and ready-made workflows",
          "text-to-image, image-to-video, text-to-video",
          "speech-to-text, subtitles, speech synthesis",
          "Job queues and priorities",
          "API access to models",
          "Automatic GPU scaling",
          "Shared GPU pools across projects",
        ],
        bestFor: [
          "AI creators and content studios",
          "Products with generative features",
          "Teams experimenting with models",
        ],
        outcome:
          "A working AI pipeline with API access and billing tied to compute you actually consume.",
      },
      {
        id: "automation",
        icon: "Workflow",
        name: "Process automation",
        tagline: "Less manual work",
        problem:
          "The team spends hours on repetitive operations with files, data and reports.",
        included: [
          "Data processing automation",
          "Parsing and information gathering",
          "Bulk file processing",
          "Image, video and audio conversion",
          "Telegram bots for internal processes",
          "Service-to-service API integrations",
          "Scheduled jobs and webhooks",
        ],
        bestFor: [
          "Marketing and content teams",
          "Agencies with repeatable processes",
          "Operations teams in small businesses",
        ],
        outcome:
          "Routine work runs on a schedule or on an event, and the team gets back to meaningful work.",
      },
      {
        id: "custom",
        icon: "Blocks",
        name: "Custom development",
        tagline: "Small services built around your process",
        problem:
          "Off-the-shelf tools don't cover your process, and building a large product makes no sense.",
        included: [
          "Internal services and control panels",
          "API integrations with existing systems",
          "Large file processing",
          "Fast MVPs for validating an idea",
          "Bespoke tools for business processes",
          "Technical documentation for the solution",
        ],
        bestFor: [
          "Companies with a non-standard process",
          "Products that need a prototype",
          "Teams integrating several systems",
        ],
        outcome:
          "A working applied service that solves a specific task without unnecessary features.",
      },
      {
        id: "media",
        icon: "Clapperboard",
        name: "Media Processing",
        tagline: "Images, video and audio",
        problem:
          "Media handling is scattered across manual tools and scripts with no single process.",
        included: [
          "Compression and resolution changes",
          "Format conversion and cropping",
          "Background removal, text and logo overlays",
          "Subtitles and social-ready video",
          "Large file handling and bulk operations",
          "API for automated processing",
          "Custom features for your workflow",
        ],
        bestFor: [
          "Content studios and video production",
          "Marketing agencies",
          "Products with user-generated content",
        ],
        outcome:
          "A single media pipeline: manual through the interface or automatic through the API.",
      },
      {
        id: "cost",
        icon: "Coins",
        name: "Cost optimisation",
        tagline: "Pay for what you use",
        problem:
          "Cloud bills keep climbing and the link between spend and real load isn't clear.",
        included: [
          "Audit of current infrastructure and bills",
          "Analysis of actual resource consumption",
          "Instance type and plan selection",
          "Moving cold data to cheaper storage",
          "Switching to shared resources where sensible",
          "Autoscaling rules",
          "Regular configuration reviews",
        ],
        bestFor: [
          "Projects on AWS, DigitalOcean, RunPod",
          "Teams with GPU workloads",
          "Anyone planning to scale",
        ],
        outcome:
          "A clear cost structure and a change plan that explains what actually moves the needle.",
      },
      {
        id: "support",
        icon: "Activity",
        name: "Support and monitoring",
        tagline: "Problems surface before your users do",
        problem:
          "You learn about an outage from a client's message and then hunt for the cause across servers by hand.",
        included: [
          "Grafana, Prometheus, Loki",
          "Dashboards for your services",
          "Alerts to Telegram or email",
          "Log collection and retention",
          "Service availability checks",
          "Scheduled updates and patching",
          "Technical support after launch",
        ],
        bestFor: [
          "Projects already in production",
          "Services with external customers",
          "Teams spread across time zones",
        ],
        outcome:
          "System state, load and errors are visible — and alerts arrive before a user writes in.",
      },
    ],
    cta: {
      title: "Didn't find what you were looking for?",
      text: "Describe the task in your own words and we'll tell you whether we can help and what it would look like in practice.",
    },
  },

  ai: {
    hero: {
      badge: "AI Infrastructure",
      title: "AI infrastructure and GPU capacity",
      subtitle:
        "Model deployment, job queues, API access and shared GPU pools. We match the configuration to your processing type and usage frequency — not to the top of the price list.",
    },
    sections: [
      {
        icon: "Sparkles",
        title: "Running models",
        text: "We deploy image and video generation, transcription and speech synthesis models. ComfyUI with ready-made workflows, or a custom pipeline shaped around your process.",
        points: [
          "text-to-image and image-to-video",
          "text-to-video and video sequence processing",
          "speech-to-text, subtitles, speech synthesis",
          "Local deployment or cloud GPUs",
        ],
      },
      {
        icon: "Microchip",
        title: "GPU infrastructure",
        text: "We pick the GPU type for the job: for most generative scenarios, extra headroom doesn't translate into a proportional speed-up.",
        points: [
          "GPU choice based on model and job volume",
          "VRAM usage optimisation",
          "Batch job processing",
          "GPU utilisation monitoring",
        ],
      },
      {
        icon: "Split",
        title: "Shared GPU resources",
        text: "Several projects run in one compute pool with isolated workloads and their own quotas. That removes the need to pay for a card around the clock for a few hours of work.",
        points: [
          "Pay for your share of the resources",
          "Isolated workloads and separate keys",
          "Queue quotas and priorities",
          "Move to a dedicated GPU when needed",
        ],
      },
      {
        icon: "Braces",
        title: "API access",
        text: "Models become an ordinary HTTP service: your application submits a job and receives the result through a webhook or a file link.",
        points: [
          "REST API with access keys",
          "Webhooks on job completion",
          "Per-client rate limits",
          "Integration examples",
        ],
      },
      {
        icon: "Timer",
        title: "Processing queues",
        text: "Long jobs don't block the interface. The queue spreads the load, keeps statuses and lets you track progress.",
        points: [
          "Job priorities",
          "Retries on failure",
          "Statuses and execution history",
          "Protection against worker overload",
        ],
      },
      {
        icon: "Scaling",
        title: "Automatic scaling",
        text: "Worker count follows the queue: capacity is added at peaks and released when things go quiet.",
        points: [
          "Scaling by queue depth",
          "Maximum spend limits",
          "Fast worker start-up",
          "Graceful job completion",
        ],
      },
      {
        icon: "Lock",
        title: "Private deployment",
        text: "If the data can't leave your perimeter, we deploy the models inside your infrastructure and hand control to your team.",
        points: [
          "Deployment in your environment",
          "Isolated network and access",
          "Documentation and knowledge transfer",
          "Support under a separate agreement",
        ],
      },
    ],
    compare: {
      title: "Dedicated GPU or shared pool",
      subtitle:
        "Both work — the question is simply how even your workload is.",
      dedicated: {
        title: "Dedicated GPU",
        points: [
          "The full card is available to one project",
          "Predictable latency under constant load",
          "Billed around the clock regardless of usage",
          "Makes sense with a steady stream of jobs",
        ],
      },
      shared: {
        title: "Shared pool",
        points: [
          "Resources are distributed across several projects",
          "You pay for the share you actually need",
          "A queue with quotas and priorities",
          "Makes sense with uneven load",
        ],
      },
      note: "There is no guaranteed saving: if jobs run continuously, a dedicated card can be the better deal. That's why we look at the load profile first.",
    },
    calculator: {
      title: "Find the right infrastructure model",
      subtitle:
        "A concept calculator with no payment involved. It doesn't show an exact price — it suggests which option to consider first.",
      fields: {
        volume: "Jobs per month",
        type: "Processing type",
        gpu: "GPU required",
        gpuHint: "Image and video generation, inference of large models",
        frequency: "Usage frequency",
        mode: "Infrastructure",
      },
      types: [
        { id: "image", label: "Image generation" },
        { id: "video", label: "Video generation or processing" },
        { id: "speech", label: "Transcription and speech" },
        { id: "llm", label: "Language model inference" },
        { id: "convert", label: "Media conversion" },
        { id: "data", label: "Data processing and parsing" },
      ],
      frequencies: [
        { id: "sporadic", label: "Uneven, in waves" },
        { id: "daily", label: "Daily, during working hours" },
        { id: "continuous", label: "A constant stream of jobs" },
      ],
      modes: [
        { id: "shared", label: "Shared" },
        { id: "dedicated", label: "Dedicated" },
        { id: "unsure", label: "Not decided yet" },
      ],
      profiles: {
        light: "Light",
        medium: "Moderate",
        heavy: "Heavy",
      },
      results: {
        cpuOnly: {
          title: "CPU workers are enough",
          text: "The workloads you described don't need a GPU. It makes more sense to start with a small server or a K3s cluster with a job queue and horizontal scaling.",
          points: [
            "CPU workers with a job queue",
            "Object storage for files",
            "Scaling by queue depth",
          ],
        },
        sharedPool: {
          title: "Shared GPU pool",
          text: "The load is uneven, so a dedicated card would idle most of the time. A shared pool gives you GPU access while you pay for your share of the resources.",
          points: [
            "GPU access without renting a whole card",
            "A queue with quotas for your project",
            "Room to move to dedicated resources later",
          ],
        },
        hybrid: {
          title: "Hybrid setup",
          text: "Keep the baseline load on steady capacity and send peaks into the shared pool. That way you don't pay for a peak-sized configuration around the clock.",
          points: [
            "Steady capacity for the baseline load",
            "Shared pool for peak periods",
            "Autoscaling by queue depth",
          ],
        },
        dedicated: {
          title: "Dedicated GPU resources",
          text: "The volume and regularity of your jobs mean a dedicated configuration will be more predictable in latency. Cost optimisation then happens at the model and batching level.",
          points: [
            "A dedicated GPU or several cards",
            "Batch processing and model optimisation",
            "Utilisation and cost monitoring",
          ],
        },
      },
      disclaimer:
        "The result is a reference point, not a commercial offer. Exact cost depends on the models, file sizes, latency requirements and the chosen provider — so it is calculated individually.",
      resultTitle: "What to consider",
      emptyState: "Fill in the parameters above to see a suggestion.",
    },
    cta: {
      title: "Need GPU capacity for a specific workload?",
      text: "Tell us which models you use and what volume you expect, and we'll prepare a configuration option and an estimate.",
    },
  },

  infrastructure: {
    hero: {
      badge: "Infrastructure",
      title: "Infrastructure that's straightforward to operate",
      subtitle:
        "Servers, clusters, code delivery, monitoring and backups. We build systems sized to the task and describe them so that support doesn't depend on a single person.",
    },
    diagram: {
      title: "A typical project architecture",
      subtitle:
        "The layers a small product's infrastructure usually consists of. Select a layer to see what's in it.",
      layers: [
        {
          id: "edge",
          title: "Edge",
          text: "Domains, TLS, CDN and protection against basic attacks. Cloudflare in front of your services.",
          items: ["DNS", "TLS", "CDN", "WAF", "Rate limiting"],
        },
        {
          id: "platform",
          title: "Platform",
          text: "Kubernetes or K3s with an ingress controller, secrets and isolated environments.",
          items: ["Kubernetes", "K3s", "Ingress", "Helm", "Secrets"],
        },
        {
          id: "workloads",
          title: "Workloads",
          text: "Your services, workers and scheduled jobs with resource limits and autoscaling.",
          items: ["API", "CPU workers", "GPU workers", "Cron", "Queues"],
        },
        {
          id: "data",
          title: "Data",
          text: "Databases, cache, object storage and backups with verified restores.",
          items: ["PostgreSQL", "Redis", "S3 / MinIO", "Backups"],
        },
        {
          id: "delivery",
          title: "Delivery",
          text: "Image builds, tests, automated deploys and GitOps state synchronisation.",
          items: ["GitHub Actions", "GitLab CI", "Registry", "Argo CD"],
        },
        {
          id: "observability",
          title: "Observability",
          text: "Metrics, logs, dashboards and alerts — so you see the system state before an incident.",
          items: ["Prometheus", "Grafana", "Loki", "Alerts"],
        },
      ],
    },
    capabilities: {
      title: "What we set up",
      items: [
        {
          icon: "Server",
          title: "Servers",
          text: "Baseline configuration, access, updates, firewall and environment separation.",
        },
        {
          icon: "Container",
          title: "Kubernetes and K3s",
          text: "A cluster of the right size: K3s for smaller projects, full Kubernetes where it's needed.",
        },
        {
          icon: "GitBranch",
          title: "CI/CD",
          text: "Build and deploy pipelines in GitLab CI or GitHub Actions with pre-release checks.",
        },
        {
          icon: "Waypoints",
          title: "GitOps",
          text: "Argo CD keeps the cluster in sync with the repository: changes are visible in history and rollback is predictable.",
        },
        {
          icon: "Activity",
          title: "Monitoring",
          text: "Prometheus, Grafana and Loki with dashboards and alerts tailored to your services.",
        },
        {
          icon: "DatabaseBackup",
          title: "Backups",
          text: "A schedule, off-server storage, encryption and regular restore verification.",
        },
        {
          icon: "ShieldCheck",
          title: "Security",
          text: "Access management, secrets kept out of the repo, dependency updates, network isolation.",
        },
        {
          icon: "Scaling",
          title: "Scaling",
          text: "Horizontal scaling of services and workers by metrics or queue depth.",
        },
        {
          icon: "ArrowRightLeft",
          title: "Migration",
          text: "Moving between providers or into a cluster, with a plan and minimal downtime.",
        },
        {
          icon: "Coins",
          title: "Cost optimisation",
          text: "Usage analysis and selection of instances, storage and plans that match real consumption.",
        },
      ],
    },
    models: {
      title: "Whose infrastructure we work on",
      subtitle:
        "The model is chosen at the start and can change as the project evolves.",
    },
    migration: {
      title: "Project migration",
      subtitle:
        "The usual sequence when you need to change provider or consolidate services into a cluster.",
      steps: [
        {
          title: "Inventory",
          text: "We record which services, data and dependencies exist today — and which of them are actually needed.",
        },
        {
          title: "Target architecture",
          text: "We describe how the system will look after the move and what changes in cost.",
        },
        {
          title: "Parallel environment",
          text: "We build the new environment alongside the current one and move data without stopping work.",
        },
        {
          title: "Verification",
          text: "We test the services, the load and restoring from backups.",
        },
        {
          title: "Cut-over",
          text: "Traffic switches during an agreed window, with a fast way back if needed.",
        },
      ],
    },
    cta: {
      title: "We'll show what this looks like in your case",
      text: "Tell us about your current infrastructure and we'll propose a target architecture and a transition plan.",
    },
  },

  products: {
    hero: {
      badge: "Products",
      title: "DVO products",
      subtitle:
        "Ready-made tools that grew out of client work. Each one can be used as a standalone service or integrated through an API.",
    },
    mp: {
      status: "available",
      name: "DVO Media Processing",
      tagline: "One platform for image, video and audio processing",
      text: "Process files manually through the interface or automatically through an API. A single service instead of a collection of separate utilities, scripts and manual steps.",
      groups: [
        {
          title: "Images",
          items: [
            "Compression with no visible quality loss",
            "Resolution changes and cropping",
            "Format conversion",
            "Background removal",
            "Text and logo overlays",
          ],
        },
        {
          title: "Video",
          items: [
            "Compression and resolution changes",
            "Conversion and trimming",
            "Subtitles",
            "Preparation for TikTok, Reels and Shorts",
            "Large file handling",
          ],
        },
        {
          title: "Audio and automation",
          items: [
            "Audio format conversion",
            "Extracting the audio track from video",
            "Bulk file processing",
            "API for automated processing",
            "Custom features per client",
          ],
        },
      ],
    },
    upcoming: {
      title: "In development",
      subtitle:
        "Directions we're working on. If you need one of them right now, write to us and we'll discuss early access.",
      items: [
        {
          icon: "Braces",
          title: "DVO Compute API",
          text: "A single API layer over compute jobs: queues, statuses, webhooks and access keys for GPU and CPU workers.",
          status: "inDevelopment",
        },
        {
          icon: "Bot",
          title: "DVO Automation Kit",
          text: "A set of ready blocks for common automation: scheduled jobs, parsing, integrations and Telegram notifications.",
          status: "inDevelopment",
        },
        {
          icon: "Gauge",
          title: "DVO Cost Insight",
          text: "A dashboard summarising infrastructure spend with hints on where resources are used inefficiently.",
          status: "planned",
        },
      ],
    },
    custom: {
      title: "Your own tool or workflow",
      text: "If the tool you need doesn't exist, we'll build it around your process. That can be a standalone service, a Media Processing extension or a workflow for generative jobs.",
      points: [
        "A description of the task and the expected result",
        "A prototype to validate the approach",
        "Deployment on your infrastructure or ours",
        "API and documentation for integration",
      ],
    },
    cta: {
      title: "Need an integration or a custom workflow?",
      text: "Tell us which files you process and at what volume, and we'll propose a way to connect.",
    },
  },

  about: {
    hero: {
      badge: "About",
      title: "DVO Corp",
      subtitle:
        "A compact technical team working on infrastructure, automation and AI integrations for small companies.",
    },
    intro: {
      title: "What DVO stands for",
      text: "DVO means DevOps, Virtualization & Optimization. Three parts of the same job: a solid code delivery process, sensibly organised compute resources, and constant attention to what all of it costs.",
      second:
        "We don't sell clients the most expensive servers we can. We select, combine and optimise infrastructure so that you pay only for the resources you genuinely need. A small team gets enterprise-grade infrastructure without enterprise-grade spend.",
    },
    focus: {
      title: "What we specialise in",
      items: [
        {
          icon: "ServerCog",
          title: "Practical infrastructure",
          text: "Solutions sized to the task, without complexity where it brings no benefit.",
        },
        {
          icon: "Workflow",
          title: "Automation",
          text: "We move repetitive processes into services with APIs, queues and clear states.",
        },
        {
          icon: "Sparkles",
          title: "AI integrations",
          text: "Running models on GPUs and wiring generative features into existing products.",
        },
        {
          icon: "Coins",
          title: "Cost optimisation",
          text: "We regularly check that resources still match the real workload.",
        },
        {
          icon: "Rocket",
          title: "Fast applied solutions",
          text: "Modern development tooling lets us bring applied services to a working state faster.",
        },
      ],
    },
    principles: {
      title: "How we work",
      items: [
        {
          title: "The task first, the technology second",
          text: "Not everyone needs Kubernetes. Sometimes the right answer is one well-configured server with backups and monitoring.",
        },
        {
          title: "Transparent costs",
          text: "We explain exactly what you're paying for and where cheaper alternatives exist. We don't promise a fixed saving upfront.",
        },
        {
          title: "The system outlives the contractor",
          text: "The configuration is described as code and the documentation stays with you. Another team can pick the infrastructure up.",
        },
        {
          title: "Honest timelines and limits",
          text: "We say so directly if a task is outside our competence or if expectations don't match the budget.",
        },
      ],
    },
    cta: {
      title: "Let's discuss your task",
      text: "Write on Telegram or by email — you'll get a specific answer, not a generic pitch.",
    },
  },

  contact: {
    hero: {
      badge: "Contact",
      title: "Tell us about your project",
      subtitle:
        "Describe the task and we'll propose an infrastructure option and explain what the cost is made of.",
    },
    channels: {
      title: "Direct channels",
      items: [
        {
          icon: "Send",
          title: "Telegram",
          text: "The fastest way to reach us for a short discussion.",
          action: "writeTelegram",
        },
        {
          icon: "Mail",
          title: "Email",
          text: "Convenient for a detailed brief and documents.",
          action: "writeEmail",
        },
        {
          icon: "ServerCog",
          title: "Discuss infrastructure",
          text: "An audit of the current environment and a target architecture.",
          action: "discussInfrastructure",
        },
        {
          icon: "Coins",
          title: "Custom estimate",
          text: "A cost estimate for your job volume and processing type.",
          action: "requestEstimate",
        },
      ],
    },
    form: {
      title: "Request form",
      subtitle: "Fill in what you know now. Details can be clarified later.",
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
          "What exists now, what you need, timelines and constraints",
        load: "Approximate load",
        loadPlaceholder: "Choose an option",
        budget: "Budget range",
        budgetPlaceholder: "Choose a range",
      },
      taskTypes: [
        { id: "devops", label: "DevOps and server setup" },
        { id: "kubernetes", label: "Kubernetes or K3s" },
        { id: "ai", label: "AI models and GPUs" },
        { id: "media", label: "Media processing" },
        { id: "automation", label: "Automation and integrations" },
        { id: "custom", label: "Custom development" },
        { id: "cost", label: "Cost optimisation" },
        { id: "support", label: "Support for an existing system" },
        { id: "other", label: "Something else" },
      ],
      loads: [
        { id: "small", label: "Small: one or two services" },
        { id: "medium", label: "Medium: several services or workers" },
        { id: "large", label: "High: continuous processing or GPU workloads" },
        { id: "unknown", label: "Hard to estimate for now" },
      ],
      budgets: [
        { id: "starter", label: "Up to $500 per month" },
        { id: "growth", label: "$500 – $1,500 per month" },
        { id: "scale", label: "Over $1,500 per month" },
        { id: "project", label: "One-off project" },
        { id: "discuss", label: "We'd like to discuss it" },
      ],
      validation: {
        nameRequired: "Let us know what to call you",
        contactRequired: "We need a Telegram handle or email to reply",
        contactInvalid: "That looks off — please check the contact",
        descriptionRequired: "Briefly describe the task",
        descriptionShort: "Please add a little more detail",
      },
      success: {
        title: "The form is running in demo mode",
        text: "Submissions through the site aren't connected yet, so your data hasn't been sent anywhere. To make sure the request reaches us, write on Telegram or by email — you can simply copy the form contents.",
        copy: "Copy the request text",
        copied: "Copied",
      },
      privacy:
        "Data from the form is not shared with third parties and is used only to reply to your request.",
    },
    response: {
      title: "What happens next",
      steps: [
        "We clarify the details of the task and the current state of your infrastructure",
        "We propose a solution and explain what makes up the cost",
        "We agree on the scope and timeline of the first stage",
      ],
    },
  },

  footer: {
    tagline:
      "Infrastructure, AI capacity and custom technical solutions for small teams.",
    navTitle: "Navigation",
    servicesTitle: "Areas",
    contactTitle: "Contact",
    productsTitle: "Products",
    rights: "All rights reserved.",
    note: "The site runs as a static build and collects no personal data.",
  },

  notFound: {
    title: "Page not found",
    text: "The address may contain a typo, or the page has moved. Use the navigation below.",
    suggestions: "Popular sections",
  },

  breadcrumbs: {
    home: "Home",
  },

  seo: {
    home: {
      title: "DVO Corp — DevOps, AI infrastructure and GPUs for small teams",
      description:
        "End-to-end DevOps, Kubernetes, AI models on GPUs and shared infrastructure. Server setup and infrastructure cost optimisation for agencies, startups and small businesses.",
      keywords: [
        "DevOps for small business",
        "managed Kubernetes services",
        "affordable AI infrastructure",
        "shared GPU infrastructure",
        "infrastructure cost optimization",
        "managed infrastructure for startups",
      ],
    },
    services: {
      title: "Services — DevOps, Kubernetes, AI and automation | DVO Corp",
      description:
        "Nine areas: end-to-end DevOps, managed infrastructure, Kubernetes and K3s, AI and GPU, automation, custom development, media processing, cost optimisation and monitoring.",
      keywords: [
        "DevOps for small business",
        "custom automation services",
        "managed infrastructure for startups",
        "server setup services",
      ],
    },
    ai: {
      title: "AI infrastructure and shared GPU capacity | DVO Corp",
      description:
        "Running AI models on GPUs, ComfyUI, job queues, API access and shared GPU pools. Configuration matched to your processing type and usage frequency.",
      keywords: [
        "affordable AI infrastructure",
        "shared GPU infrastructure",
        "GPU API for agencies",
        "run AI models on GPU",
        "ComfyUI hosting",
      ],
    },
    infrastructure: {
      title: "Infrastructure: servers, Kubernetes, CI/CD, monitoring | DVO Corp",
      description:
        "Server setup, Kubernetes and K3s, CI/CD and GitOps, monitoring, backups, security, scaling, migration and infrastructure cost optimisation.",
      keywords: [
        "managed Kubernetes services",
        "infrastructure cost optimization",
        "CI/CD setup",
        "infrastructure migration",
      ],
    },
    products: {
      title: "Products: DVO Media Processing and automation tools",
      description:
        "DVO Media Processing — a platform for image, video and audio processing with an API. Conversion, subtitles, bulk processing and custom per-client features.",
      keywords: [
        "media processing API",
        "video processing API",
        "bulk image processing",
        "image conversion API",
      ],
    },
    about: {
      title: "About DVO Corp — an infrastructure and automation team",
      description:
        "DVO Corp is a compact technical team: practical infrastructure, automation, AI integrations and cost optimisation for small companies.",
      keywords: [
        "DVO Corp",
        "DevOps team",
        "DevOps for small business",
      ],
    },
    contact: {
      title: "Contact — discuss infrastructure or an AI workload | DVO Corp",
      description:
        "Write on Telegram or by email to discuss server setup, Kubernetes, GPU capacity or automation. A custom estimate for your job volume.",
      keywords: [
        "hire DevOps engineer",
        "infrastructure consultation",
        "custom GPU estimate",
      ],
    },
    notFound: {
      title: "Page not found | DVO Corp",
      description: "This page doesn't exist. Use the site navigation.",
      keywords: [],
    },
  },
};

export default en;
