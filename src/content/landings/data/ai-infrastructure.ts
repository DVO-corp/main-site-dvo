import type { LandingEntry } from "../types";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "AI infrastructure: agents, LLM deployment, GPU | DVO Corp",
      description:
        "We deploy and operate what AI features run on: agent runtimes, self-hosted or API-based LLMs, GPU workers that scale with the queue, usage and cost monitoring.",
      keywords: [
        "AI infrastructure",
        "LLM deployment",
        "self-hosted LLM",
        "AI agent deployment",
        "GPU server for AI",
        "private LLM deployment",
      ],
    },
    name: "AI agents and GPU workloads",
    h1: "AI infrastructure: we deploy and run agents, models and GPU workers",
    lead: "Your team decides what the AI feature does. We make it run in production: a runtime for agents with defined tools and permissions, model serving on your own GPUs or through a provider's API, queues, monitoring of usage and cost. This is operations work, and we treat it as such.",
    when: [
      "A prototype works on a laptop and has to become a service other people use",
      "The bill from the model provider grows and nobody sees which feature spends it",
      "Data may not leave your perimeter, so a public API is not an option",
      "An agent needs access to internal systems, and that access has to be limited and logged",
      "A GPU server is rented around the clock and sits idle most of the time",
    ],
    included: [
      {
        title: "Choice of setup, with a calculation",
        text: "A provider's API, a model on your own GPUs, or both. We compare them for your volume, latency and data requirements before anything is built.",
      },
      {
        title: "Model serving",
        text: "An open model is deployed behind an HTTP endpoint with a fixed version, a health check, request limits and a rollout procedure for the next version.",
      },
      {
        title: "Agent runtime",
        text: "Agents run as isolated services. Each has an explicit list of tools, its own credentials with minimum rights, and limits on steps, time and spend per task.",
      },
      {
        title: "GPU workers behind a queue",
        text: "Requests go to a queue. Workers are added by queue depth and removed when it is empty, down to zero where a cold start is acceptable.",
      },
      {
        title: "Usage and cost monitoring",
        text: "Tokens, requests, GPU hours, latency and errors per feature and per client. Alerts fire when spend or the error rate leaves the agreed range.",
      },
      {
        title: "Private deployment",
        text: "The whole setup is deployed in your cloud account (on AWS: EKS inside your VPC, access through IAM) or on your hardware, in a private network. Prompts, documents and logs stay inside your perimeter.",
      },
    ],
    steps: [
      {
        title: "Task and constraints",
        text: "What the feature does, what data it touches, what volume and response time you expect.",
      },
      {
        title: "Design and price",
        text: "The setup, a calculation of running costs for each option and the price of the work.",
      },
      {
        title: "Deploy",
        text: "Infrastructure as code in your repository: serving, queues, access, dashboards. Checked under load.",
      },
      {
        title: "Operate",
        text: "Model and runtime updates, incidents and cost reviews as monthly support, or a handover to your team.",
      },
    ],
    stack: [
      "Kubernetes",
      "AWS EKS",
      "KEDA",
      "vLLM",
      "Ollama",
      "faster-whisper",
      "MCP",
      "Redis",
      "PostgreSQL",
      "Grafana",
      "VictoriaMetrics",
      "Hetzner",
    ],
    faq: [
      {
        q: "A model on our own servers or a provider's API?",
        a: "It depends on three things: whether the data may leave your perimeter, the volume, and the quality you need. An API starts faster and is paid per token. Your own GPUs cost the same whether busy or idle, keep the data inside and add operations work. We calculate both for your numbers and show the point where one becomes cheaper than the other.",
      },
      {
        q: "Do you write the prompts and the agent logic?",
        a: "No, that is product work and it belongs to your team. We build and run what surrounds it: the runtime, tool services, queues, access, monitoring. If the agent needs a backend tool or an API, we can write it in Python or Node.js.",
      },
      {
        q: "How do you keep an agent from doing damage?",
        a: "By limiting what it can reach. The agent works under its own account with minimum rights, sees only the tools on its list, has restricted outbound network access and hard limits on steps and spend. Every tool call is logged, so there is a record of what it did.",
      },
      {
        q: "GPUs are expensive. What happens when there are no requests?",
        a: "Workers scale by queue depth, so an empty queue means no running workers and no GPU bill for that time. The price is a cold start: the first request waits while the model loads. If that delay is not acceptable, one worker stays warm. We run scale-to-zero worker pools in our own production.",
      },
    ],
    related: ["kubernetes", "api-development", "cloud-cost-optimization"],
  },
  uk: {
    seo: {
      title: "Розгортання LLM, налаштування AI-агентів, GPU | DVO Corp",
      description:
        "Розгортаємо й супроводжуємо те, на чому працюють AI-функції: середовища для агентів, LLM на власних серверах або через API, GPU-воркери, облік витрат.",
      keywords: [
        "налаштування AI-агентів",
        "розгортання LLM",
        "GPU сервер для AI",
        "інфраструктура для AI",
        "власна LLM на сервері",
        "приватне розгортання LLM",
      ],
    },
    name: "AI-агенти та GPU-навантаження",
    h1: "Інфраструктура для AI: розгортання LLM, налаштування AI-агентів і GPU-сервери",
    lead: "Що саме робить AI-функція — вирішує ваша команда. Ми робимо так, щоб вона працювала в продакшні: середовище для агентів із визначеними інструментами й правами, модель на власних GPU або через API провайдера, черги, моніторинг використання та витрат. Це робота з експлуатації, і ми ставимось до неї саме так.",
    when: [
      "Прототип працює на ноутбуці й має стати сервісом, яким користуються інші",
      "Рахунок від провайдера моделі росте, і не видно, яка функція його витрачає",
      "Дані не можна виносити за периметр, тож публічний API не підходить",
      "Агентові потрібен доступ до внутрішніх систем, і цей доступ треба обмежити й журналювати",
      "GPU-сервер орендовано цілодобово, а більшість часу він простоює",
    ],
    included: [
      {
        title: "Вибір схеми — з розрахунком",
        text: "API провайдера, модель на власних GPU або обидва варіанти разом. Порівнюємо їх під ваш обсяг, вимоги до затримки й до даних — до того, як щось будувати.",
      },
      {
        title: "Розгортання моделі",
        text: "Відкриту модель розгортаємо за HTTP-ендпоінтом: зафіксована версія, перевірка стану, ліміти запитів і порядок викату наступної версії.",
      },
      {
        title: "Середовище для агентів",
        text: "Агенти працюють як ізольовані сервіси. У кожного — явний перелік інструментів, власні облікові дані з мінімальними правами та ліміти на кроки, час і витрати на одне завдання.",
      },
      {
        title: "GPU-воркери за чергою",
        text: "Запити потрапляють у чергу. Воркери додаються за її глибиною і прибираються, коли вона порожня, — аж до нуля там, де холодний старт прийнятний.",
      },
      {
        title: "Моніторинг використання й витрат",
        text: "Токени, запити, GPU-години, затримка й помилки — окремо за кожною функцією та клієнтом. Алерти спрацьовують, коли витрати або частка помилок виходять за узгоджені межі.",
      },
      {
        title: "Приватне розгортання",
        text: "Усе розгортаємо у вашому хмарному акаунті (на AWS це EKS у вашій VPC з доступами через IAM) або на вашому обладнанні, у приватній мережі. Промпти, документи й логи залишаються всередині вашого периметра.",
      },
    ],
    steps: [
      {
        title: "Завдання й обмеження",
        text: "Що робить функція, з якими даними працює, якого обсягу й часу відповіді ви очікуєте.",
      },
      {
        title: "Проєкт і ціна",
        text: "Схема, розрахунок поточних витрат для кожного варіанта й ціна робіт.",
      },
      {
        title: "Розгортання",
        text: "Інфраструктура як код у вашому репозиторії: модель, черги, доступи, дашборди. Перевіряємо під навантаженням.",
      },
      {
        title: "Супровід",
        text: "Оновлення моделей і середовища, інциденти й перегляд витрат — як щомісячна підтримка або з передачею вашій команді.",
      },
    ],
    stack: [
      "Kubernetes",
      "AWS EKS",
      "KEDA",
      "vLLM",
      "Ollama",
      "faster-whisper",
      "MCP",
      "Redis",
      "PostgreSQL",
      "Grafana",
      "VictoriaMetrics",
      "Hetzner",
    ],
    faq: [
      {
        q: "Модель на власних серверах чи API провайдера?",
        a: "Це залежить від трьох речей: чи можна виносити дані за периметр, який обсяг і яка потрібна якість. API швидше запустити, і платите ви за токени. Власні GPU коштують однаково і під навантаженням, і в простої, зате дані залишаються всередині, а роботи з експлуатації більшає. Рахуємо обидва варіанти на ваших цифрах і показуємо точку, після якої один стає дешевшим за інший.",
      },
      {
        q: "Ви пишете промпти й логіку агента?",
        a: "Ні, це продуктова робота, і вона належить вашій команді. Ми будуємо й супроводжуємо те, що навколо: середовище виконання, сервіси-інструменти, черги, доступи, моніторинг. Якщо агентові потрібен бекенд-інструмент або API, можемо написати його на Python чи Node.js.",
      },
      {
        q: "Як зробити, щоб агент нічого не зламав?",
        a: "Обмежити те, до чого він може дотягнутися. Агент працює під власним обліковим записом із мінімальними правами, бачить лише інструменти зі свого переліку, має обмежений вихід у мережу й жорсткі ліміти на кроки та витрати. Кожен виклик інструмента журналюється, тож є запис про те, що саме він зробив.",
      },
      {
        q: "GPU дорогі. Що відбувається, коли запитів немає?",
        a: "Воркери масштабуються за глибиною черги: порожня черга означає, що воркерів немає і рахунок за GPU за цей час не нараховується. Ціна цього — холодний старт: перший запит чекає, доки завантажиться модель. Якщо така затримка неприйнятна, один воркер залишається прогрітим. Пули воркерів, що масштабуються до нуля, працюють у нашому власному продакшні.",
      },
    ],
    related: ["kubernetes", "api-development", "cloud-cost-optimization"],
  },
};
