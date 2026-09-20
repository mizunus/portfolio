const zh = {
  nav: {
    about: "关于我", experience: "经历", skills: "技能",
    projects: "项目", contact: "联系", cta: "联系我",
    menuOpen: "打开菜单", menuClose: "关闭菜单", language: "切换语言",
  },
  hero: {
    badge: "可承接外包与技术咨询",
    headline: "我构建",
    roles: [
      "真正上线的系统",
      "电商平台",
      "云原生后端",
      "配得上成本的 AI",
    ],
    introBefore: "我是",
    name: "Siddharth Dangarh",
    introAfter:
      "，Saara 的 Lead Software Engineer。我把四款电商产品从空仓库一路带到生产环境——退货、物流、订单追踪，以及把它们串联起来的平台。每年我也会为少数客户做同样的事。",
    stack: "Python · Django · Next.js · React · AWS · Azure · Postgres",
    ctaPrimary: "开始一个项目",
    ctaSecondary: "看看我做过什么",
  },
  about: {
    label: "关于我", title: "我的历程",
    p1Before: "我对技术的着迷，源于一个简单的问题：",
    p1Quote: "“怎样用代码让生活更轻松？”",
    p2: "从自动化日常琐事到设计 AI 驱动的平台，驱动我的始终是好奇心，以及解决真实问题的渴望。如今我在 Saara 带领工程团队，交付了四款电商产品——退货、物流、订单追踪和一个智能体 AI 平台——以及把它们整合到一处的统一 Commerce OS。AI 是这份工作的一部分，但不是全部；大多数时候，工作是设计那些能稳定运行、能扩展、一年后依然好维护的系统。",
    p3Before: "工作之外，我在做",
    p3After:
      "，一个把想法在几天而不是几个季度内变成可用工具的实验场。如果你有想做的东西，这通常是了解我工作方式最快的途径。",
    highlights: [
      { label: "开发年限", value: "4+" },
      { label: "交付产品", value: "10+" },
      { label: "所在地", value: "班加罗尔" },
    ],
  },
  experience: {
    label: "经历", title: "我的工作经历",
    entries: [
      {
        role: "Lead Software Engineer", period: "2026年9月 - 至今", location: "班加罗尔",
        bullets: [
          "主导 Saara AI 产品的技术方向，制定跨团队的架构与技术规范。",
          "端到端负责 FlyOS——带工具与工件的智能体 AI 对话，以及 AI 组件构建器和工作流构建器。",
          "指导工程师、主持设计评审，把模糊的产品设想落成可交付的系统。",
        ],
      },
      {
        role: "高级软件开发工程师", period: "2023年5月 - 2026年8月", location: "班加罗尔",
        bullets: [
          "从零主导一个 AI 平台的架构与实现，设计了处理退款、商品分析和质量控制的智能体。",
          "推动横跨 AWS 与 Azure 的云迁移，并落实稳健的安全实践。",
          "交付了 EcoReturns、EcoShip 和 FlyOS 等核心产品。",
        ],
      },
      {
        role: "软件开发工程师", period: "2022年7月 - 2023年4月", location: "班加罗尔",
        bullets: [
          "构建了基于 ChatGPT 的退换货聊天机器人，改造了旧有的客服流程。",
          "重构并稳定了遗留代码库，提升了性能与可维护性。",
          "参与从设计到部署的完整软件生命周期协作。",
        ],
      },
    ],
  },
  skills: {
    label: "技能", title: "我使用的技术",
    categories: [
      "语言与框架", "云与基础设施", "数据与存储",
      "AI 与 API", "工具与工作流",
    ],
  },
  projects: {
    label: "项目", title: "我做过的东西",
    blurb:
      "我在 Saara 交付的电商平台，以及持续进行中的个人项目实验场。大多数都在线上——点进去试试看。",
    featured: "精选", sunsetted: "已停止运营", previously: "过往产品",
    roles: {
      flyos: "负责人 — 架构与智能体设计",
      commerceos: "负责人 — 设计并构建统一平台",
      discuvr: "独立开发 — 设计、开发、部署",
      core: "核心工程师",
    },
    items: {
      flyos: "智能体 AI 平台。我们在其中构建了带工具与工件的 AI 对话体验，以及面向业务快速自动化的 AI 组件构建器和工作流构建器。",
      commerceos: "统一后台，把 Saara 的所有产品——EcoReturns、EcoShip、EcoTrack 和 FlyOS——收拢到同一个登录和同一套界面下，让商家在一个地方管理整条售后链路。",
      discuvr: "我自己的线上 AI MVP 实验场：知识产权问答机器人、专利答复生成器、多家 LLM 对比台、提案撰写工具、安全扫描器等等。每个想法都以“真正能点开用”的形态发布。",
      ecoreturns: "退货管理平台，为电商品牌简化、自动化并优化整个退货流程。",
      ecoship: "AI 驱动的物流平台，优化配送路线、降低碳排放，帮助企业既省钱又环保。",
      ecotrack: "面向网店的品牌化订单追踪：商家可用自己的 logo、配色和字体定制追踪页面，把一条普通的物流通知变成品牌触点。",
      cosell: "协同销售平台，帮助企业建立合作、共享线索，通过共享网络共同成长。",
      coloyalty: "AI 驱动的会员忠诚度平台，通过智能分群发放奖励，提升用户参与度与留存。",
      ecorefunds: "分析退款发生原因，并给出可执行建议以降低退款率的解决方案。",
    },
  },
  contact: {
    label: "联系", title: "一起做点东西",
    blurb: "说说你正在做的事。每一条消息我都会看，通常一两天内回复。",
    intentLegend: "你为什么来这里？",
    intents: {
      project: "想请我做一个项目", role: "想聊聊职位机会",
      advice: "想咨询技术问题", other: "其他",
    },
    name: "姓名", namePlaceholder: "你的名字",
    email: "邮箱", emailPlaceholder: "you@company.com",
    message: "你需要什么？",
    messagePlaceholder: "一两句话就够——你在做什么，卡在哪里。",
    send: "发送消息", sending: "发送中…",
    sentTitle: "已收到你的消息",
    sentBody: "感谢联系——我会尽快通过你填写的邮箱回复你。",
    privacy: "直达我的邮箱。没有订阅，没有名单，也不会有推销邮件。",
    errorSuffix: "你也可以直接发邮件给我：",
    emailMe: "给我发邮件",
  },
  footer: { rights: "保留所有权利。" },
};

export default zh;
