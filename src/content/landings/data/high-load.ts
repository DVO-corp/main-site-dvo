import type { LandingEntry } from "../types";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "High-load systems and load testing | DVO Corp",
      description:
        "Load tests with real user scenarios, bottleneck search, horizontal scaling, queues, caching, CDN and autoscaling. A capacity plan for the traffic you expect.",
      keywords: [
        "high load systems",
        "load testing",
        "application scaling",
        "performance optimisation",
        "capacity planning",
      ],
    },
    name: "High load and performance",
    h1: "High load: load testing, bottlenecks and scaling",
    lead: "We measure how much traffic the system holds today, find what breaks first and remove it. Then we set up scaling so that capacity follows the load, and leave you a plan for the next level of traffic.",
    when: [
      "A campaign, a sale or a launch is coming and nobody knows what the system can take",
      "The service slows down or fails at peak hours",
      "You add servers, but response time does not improve",
      "Heavy operations run inside the request and block everything else",
      "A client or an investor asks for proof that the system will hold the load",
    ],
    included: [
      {
        title: "Load testing with real scenarios",
        text: "We script what users actually do — sign-in, search, checkout, API calls — not a single URL. The load is raised in steps until the system degrades.",
      },
      {
        title: "Finding the bottleneck",
        text: "During the test we watch metrics on every layer: the application, the database, the connection pool, the queue, the network. You see which one gave out first and why.",
      },
      {
        title: "Horizontal scaling",
        text: "The service is prepared to run in several copies: state moves out of the process, sessions and files go to shared storage, the balancer checks health.",
      },
      {
        title: "Queues for heavy work",
        text: "Long operations leave the request and go to background workers. The request answers at once, and the workers scale by queue depth.",
      },
      {
        title: "Caching and CDN",
        text: "Static files and repeatable responses are served from a CDN or a cache. The database gets indexes, a connection pool and read replicas where they help.",
      },
      {
        title: "Autoscaling and capacity plan",
        text: "Pods and nodes are added by metrics and removed after the peak, within limits you set. The plan states what has to change at each next level of traffic.",
      },
    ],
    steps: [
      {
        title: "Scenarios and targets",
        text: "We agree on what users do, what traffic you expect and what response time is acceptable.",
      },
      {
        title: "Baseline test",
        text: "We load the system as it is and record where and at what level it starts to degrade.",
      },
      {
        title: "Fixes",
        text: "Bottlenecks are removed one by one, starting with the cheapest fix. Each change is followed by a repeat test.",
      },
      {
        title: "Final run and plan",
        text: "A test at the target load, a report with before-and-after measurements and a capacity plan for growth.",
      },
    ],
    stack: [
      "k6",
      "Kubernetes",
      "AWS EKS",
      "KEDA",
      "Redis",
      "PostgreSQL",
      "Traefik",
      "CloudFront",
      "Cloudflare",
      "VictoriaMetrics",
      "Grafana",
      "Loki",
    ],
    faq: [
      {
        q: "Do you test on production or on a copy?",
        a: "Either. A copy with production-sized data is safer and comes first when it exists. A production test is run in an agreed window, with a stop condition and someone watching the dashboards. We load-test our own production the same way.",
      },
      {
        q: "Can you promise a specific number of requests per second?",
        a: "Not before measuring. After the baseline test we name the figure the current system holds and what each step above it requires: a code change, a bigger database, more nodes. You choose how far to go.",
      },
      {
        q: "Will the application have to be rewritten?",
        a: "A full rewrite is rarely the answer. The typical causes are slow queries, missing indexes, a small connection pool, no cache, or heavy work done inside the request. If code has to change, we show the exact place and either fix it ourselves in Python or Node.js or hand it to your developers.",
      },
      {
        q: "Will autoscaling inflate the bill?",
        a: "Autoscaling adds capacity at the peak and removes it afterwards, so you stop paying for the peak around the clock. We set upper limits on replicas and nodes, so the bill has a ceiling you know in advance.",
      },
    ],
    related: ["kubernetes", "monitoring", "cloud-cost-optimization"],
  },
  uk: {
    seo: {
      title: "Highload: навантажувальне тестування й масштабування | DVO Corp",
      description:
        "Навантажувальне тестування за реальними сценаріями, пошук вузьких місць, горизонтальне масштабування, черги, кеш, CDN та автоскейлінг. План потужностей.",
      keywords: [
        "highload",
        "навантажувальне тестування",
        "масштабування застосунку",
        "високонавантажені системи",
        "оптимізація продуктивності",
        "планування потужностей",
      ],
    },
    name: "Високі навантаження",
    h1: "Highload: навантажувальне тестування, вузькі місця та масштабування застосунку",
    lead: "Вимірюємо, скільки трафіку система витримує сьогодні, знаходимо, що ламається першим, і усуваємо це. Далі налаштовуємо масштабування так, щоб потужність ішла за навантаженням, і залишаємо план для наступного рівня трафіку.",
    when: [
      "Попереду рекламна кампанія, розпродаж або запуск, а ніхто не знає, скільки витримає система",
      "У години пік сервіс гальмує або падає",
      "Ви додаєте сервери, а час відповіді не покращується",
      "Важкі операції виконуються просто в запиті й блокують усе інше",
      "Клієнт або інвестор просить підтвердити, що система витримає навантаження",
    ],
    included: [
      {
        title: "Навантажувальне тестування за реальними сценаріями",
        text: "Відтворюємо те, що справді роблять користувачі, — вхід, пошук, оформлення замовлення, виклики API, — а не одну адресу. Навантаження піднімаємо сходинками, доки система не почне деградувати.",
      },
      {
        title: "Пошук вузького місця",
        text: "Під час тесту дивимось метрики на кожному рівні: застосунок, база даних, пул з'єднань, черга, мережа. Ви бачите, що здалося першим і чому.",
      },
      {
        title: "Горизонтальне масштабування",
        text: "Готуємо сервіс до роботи в кількох копіях: стан виносимо з процесу, сесії та файли — у спільне сховище, балансувальник перевіряє стан кожної копії.",
      },
      {
        title: "Черги для важкої роботи",
        text: "Довгі операції виносимо із запиту у фонові воркери. Запит відповідає одразу, а воркери масштабуються за глибиною черги.",
      },
      {
        title: "Кешування та CDN",
        text: "Статику й повторювані відповіді віддає CDN або кеш. База отримує індекси, пул з'єднань і репліки для читання — там, де це дає результат.",
      },
      {
        title: "Автоскейлінг і план потужностей",
        text: "Поди й ноди додаються за метриками та прибираються після піку — у межах лімітів, які задаєте ви. У плані описано, що треба змінити на кожному наступному рівні трафіку.",
      },
    ],
    steps: [
      {
        title: "Сценарії та цілі",
        text: "Узгоджуємо, що роблять користувачі, якого трафіку ви очікуєте і який час відповіді прийнятний.",
      },
      {
        title: "Базовий тест",
        text: "Навантажуємо систему такою, якою вона є, і фіксуємо, де й на якому рівні починається деградація.",
      },
      {
        title: "Виправлення",
        text: "Усуваємо вузькі місця по одному, починаючи з найдешевшого виправлення. Після кожної зміни — повторний тест.",
      },
      {
        title: "Фінальний прогін і план",
        text: "Тест на цільовому навантаженні, звіт із замірами до й після та план потужностей на ріст.",
      },
    ],
    stack: [
      "k6",
      "Kubernetes",
      "AWS EKS",
      "KEDA",
      "Redis",
      "PostgreSQL",
      "Traefik",
      "CloudFront",
      "Cloudflare",
      "VictoriaMetrics",
      "Grafana",
      "Loki",
    ],
    faq: [
      {
        q: "Ви тестуєте на продакшні чи на копії?",
        a: "Можна і так, і так. Копія з обсягом даних, як на продакшні, безпечніша, тому починаємо з неї, якщо вона є. Тест на продакшні проводимо в узгоджене вікно, з умовою зупинки й людиною біля дашбордів. Власний продакшн ми навантажуємо так само.",
      },
      {
        q: "Чи можете ви гарантувати певну кількість запитів на секунду?",
        a: "До замірів — ні. Після базового тесту називаємо цифру, яку тримає система зараз, і що потрібно для кожної наступної сходинки: зміна в коді, більша база, додаткові ноди. Як далеко йти — вирішуєте ви.",
      },
      {
        q: "Чи доведеться переписувати застосунок?",
        a: "Повне переписування рідко буває відповіддю. Типові причини — повільні запити, відсутні індекси, малий пул з'єднань, брак кешу або важка робота просто в запиті. Якщо треба міняти код, показуємо конкретне місце й або виправляємо самі на Python чи Node.js, або передаємо вашим розробникам.",
      },
      {
        q: "Чи не роздує автоскейлінг рахунок?",
        a: "Автоскейлінг додає потужність на пік і прибирає її після нього, тож ви перестаєте цілодобово платити за піковий запас. Ми задаємо верхні ліміти на кількість реплік і нод — у рахунку є стеля, яку ви знаєте заздалегідь.",
      },
    ],
    related: ["kubernetes", "monitoring", "cloud-cost-optimization"],
  },
};
