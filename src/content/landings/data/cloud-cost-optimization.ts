import type { LandingEntry } from "../types";

export const landing: LandingEntry = {
  en: {
    seo: {
      title: "Cloud cost optimisation: AWS bill audit | DVO Corp",
      description:
        "Cloud cost optimisation: AWS bill audit, right-sizing, autoscaling and scale-to-zero, spot and reserved capacity, moving workloads to cheaper providers.",
      keywords: [
        "cloud cost optimisation",
        "reduce AWS bill",
        "AWS cost audit",
        "right-sizing",
        "FinOps",
        "AWS to Hetzner",
      ],
    },
    name: "Cloud cost optimisation",
    h1: "Cloud cost optimisation: pay for the load you actually have",
    lead: "We go through the bill line by line and compare it with real consumption. Then we remove what is not used, resize what is oversized and make capacity follow the load. You get a report with the bill before and after. How far it drops depends on how the system was built.",
    when: [
      "The AWS bill grows faster than traffic",
      "Nobody can say which service or team a line in the bill belongs to",
      "Instances were sized with a margin at launch and never revisited",
      "Workers and test environments run at night and at weekends with nothing to do",
      "You suspect the same workload would cost less at another provider",
    ],
    included: [
      {
        title: "Bill audit",
        text: "Cost Explorer and usage reports are broken down by service, environment and tag. We find the largest lines and the ones nobody can explain.",
      },
      {
        title: "Unused resources",
        text: "Detached volumes, old snapshots, idle load balancers, unattached IP addresses, forgotten environments. We list them, confirm with you and then remove them.",
      },
      {
        title: "Right-sizing",
        text: "CPU and memory usage of EC2 instances, RDS databases and Kubernetes pods is compared with what is provisioned. Instance sizes and Kubernetes requests are brought down to the measured load plus a margin.",
      },
      {
        title: "Autoscaling and scale-to-zero",
        text: "Services scale with load through HPA. Workers scale by queue depth through KEDA and stop when the queue is empty. Non-production environments shut down outside working hours.",
      },
      {
        title: "Pricing models",
        text: "Steady load goes to Savings Plans or reserved instances, interruptible work goes to spot. We also check data transfer, NAT gateways, S3 storage classes and log retention.",
      },
      {
        title: "Cheaper provider",
        text: "For workloads that do not depend on AWS-specific services we calculate the cost on Hetzner or another provider and compare the difference with the migration effort.",
      },
    ],
    steps: [
      {
        title: "Call and access",
        text: "You grant read-only access to billing and monitoring. Nothing is changed at this stage.",
      },
      {
        title: "Report and price",
        text: "A list of findings with the estimated effect and the risk of each, ordered by return. The price of the work is agreed before it starts.",
      },
      {
        title: "Changes",
        text: "We apply the agreed items through code, starting with the safe ones. After each resize we watch the metrics to confirm that performance holds.",
      },
      {
        title: "Result and control",
        text: "A before-and-after comparison of the bill, plus budgets and cost alerts, so the next increase is noticed when it starts.",
      },
    ],
    stack: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Compute Optimizer",
      "Kubernetes",
      "KEDA",
      "Terraform",
      "Grafana",
      "VictoriaMetrics",
      "Hetzner",
      "Cloudflare",
    ],
    faq: [
      {
        q: "How much will we save?",
        a: "We do not promise a figure before the audit, because it depends on how the system was built. After the audit you get an estimate for each item and decide which ones to do. If the audit shows there is little to gain, we say so.",
      },
      {
        q: "Will performance suffer?",
        a: "Sizes are reduced on the basis of usage measured over a representative period, peaks included, and a margin is kept. Changes go in one at a time under monitoring, and each can be reverted. Where there is no monitoring yet, we set it up first.",
      },
      {
        q: "Is it worth leaving AWS for Hetzner?",
        a: "It depends on what you use. Plain compute, storage and traffic usually cost less on Hetzner. If the product relies on many managed AWS services, replacing them has its own cost in work and in operations. We calculate both sides and show the numbers. Our own product runs on Hetzner.",
      },
      {
        q: "Do you need write access to our account?",
        a: "For the audit, read-only access to billing and metrics is enough. Changes are made later through Terraform and pull requests under a separate role with limited permissions, or by your engineers following our list.",
      },
    ],
    related: ["cloud-migration", "kubernetes", "infrastructure-support"],
  },
  uk: {
    seo: {
      title: "Оптимізація витрат на хмару: аудит рахунку AWS | DVO Corp",
      description:
        "Оптимізація витрат на хмару: аудит рахунку AWS, підбір розміру ресурсів, автомасштабування до нуля, spot і резервування, переїзд до дешевших провайдерів.",
      keywords: [
        "оптимізація витрат на хмару",
        "зменшити рахунок AWS",
        "аудит витрат AWS",
        "оптимізація витрат AWS",
        "FinOps",
        "переїзд з AWS на Hetzner",
      ],
    },
    name: "Оптимізація витрат на хмару",
    h1: "Оптимізація витрат на хмару: платити за те навантаження, яке є насправді",
    lead: "Проходимо рахунок рядок за рядком і порівнюємо його з реальним споживанням. Далі прибираємо те, чим не користуються, зменшуємо те, що взято із зайвим запасом, і налаштовуємо потужність так, щоб вона йшла за навантаженням. Ви отримуєте звіт із рахунком до і після. Наскільки він зменшиться, залежить від того, як побудовано систему.",
    when: [
      "Рахунок AWS росте швидше за трафік",
      "Ніхто не може сказати, якому сервісу чи команді належить рядок у рахунку",
      "Розміри інстансів обрали із запасом на старті й відтоді не переглядали",
      "Воркери й тестові середовища працюють уночі та у вихідні без жодної роботи",
      "Є підозра, що те саме навантаження в іншого провайдера коштувало б менше",
    ],
    included: [
      {
        title: "Аудит рахунку",
        text: "Розкладаємо Cost Explorer і звіти про використання за сервісами, середовищами й тегами. Знаходимо найбільші рядки й ті, які ніхто не може пояснити.",
      },
      {
        title: "Ресурси, якими не користуються",
        text: "Від'єднані диски, старі снапшоти, балансувальники без трафіку, вільні IP-адреси, забуті середовища. Складаємо перелік, погоджуємо з вами й видаляємо.",
      },
      {
        title: "Підбір розміру ресурсів",
        text: "Порівнюємо використання CPU і пам'яті інстансами EC2, базами RDS і подами Kubernetes з тим, що виділено. Розміри інстансів і requests у Kubernetes зменшуємо до виміряного навантаження із запасом.",
      },
      {
        title: "Автомасштабування й масштабування до нуля",
        text: "Сервіси масштабуються за навантаженням через HPA. Воркери масштабуються за довжиною черги через KEDA й зупиняються, коли черга порожня. Непродакшн-середовища вимикаються в неробочий час.",
      },
      {
        title: "Моделі оплати",
        text: "Стале навантаження переводимо на Savings Plans або зарезервовані інстанси, роботу, яку можна переривати, — на spot. Також перевіряємо передачу даних, NAT-шлюзи, класи сховища S3 й термін зберігання логів.",
      },
      {
        title: "Дешевший провайдер",
        text: "Для навантажень, які не залежать від специфічних сервісів AWS, рахуємо вартість у Hetzner чи іншого провайдера й порівнюємо різницю з обсягом робіт на міграцію.",
      },
    ],
    steps: [
      {
        title: "Дзвінок і доступи",
        text: "Ви надаєте доступ лише на читання до білінгу й моніторингу. На цьому етапі нічого не змінюється.",
      },
      {
        title: "Звіт і ціна",
        text: "Перелік знахідок з оцінкою ефекту й ризику кожної, упорядкований за віддачею. Ціну робіт узгоджуємо до їх початку.",
      },
      {
        title: "Зміни",
        text: "Узгоджені пункти впроваджуємо через код, починаючи з безпечних. Після кожного зменшення стежимо за метриками й переконуємося, що продуктивність не впала.",
      },
      {
        title: "Результат і контроль",
        text: "Порівняння рахунку до і після, а також бюджети й алерти на витрати, щоб наступне зростання було помічено, щойно воно почнеться.",
      },
    ],
    stack: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Compute Optimizer",
      "Kubernetes",
      "KEDA",
      "Terraform",
      "Grafana",
      "VictoriaMetrics",
      "Hetzner",
      "Cloudflare",
    ],
    faq: [
      {
        q: "Скільки ми заощадимо?",
        a: "До аудиту цифру не обіцяємо, бо вона залежить від того, як побудовано систему. Після аудиту ви отримуєте оцінку для кожного пункту й вирішуєте, які з них робити. Якщо аудит покаже, що вигравати майже нічого, ми так і скажемо.",
      },
      {
        q: "Чи постраждає продуктивність?",
        a: "Розміри зменшуємо на підставі використання, виміряного за показовий період разом із піками, і залишаємо запас. Зміни вносимо по одній під моніторингом, і кожну можна відкотити. Якщо моніторингу ще немає, спершу налаштовуємо його.",
      },
      {
        q: "Чи варто переїжджати з AWS на Hetzner?",
        a: "Залежить від того, чим ви користуєтесь. Звичайні обчислення, сховище й трафік у Hetzner зазвичай коштують менше. Якщо продукт спирається на багато керованих сервісів AWS, їх заміна має власну ціну — і в роботах, і в подальшому супроводі. Рахуємо обидва варіанти й показуємо цифри. Наш власний продукт працює в Hetzner.",
      },
      {
        q: "Вам потрібен доступ на запис до нашого акаунта?",
        a: "Для аудиту досить доступу лише на читання до білінгу й метрик. Зміни вносимо пізніше через Terraform і pull request-и під окремою роллю з обмеженими правами, або їх роблять ваші інженери за нашим переліком.",
      },
    ],
    related: ["cloud-migration", "kubernetes", "infrastructure-support"],
  },
};
