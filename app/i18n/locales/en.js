const en = {
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    cta: "Get in touch",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Change language",
  },
  hero: {
    badge: "Open to freelance & consulting",
    headline: "I build",
    roles: [
      "systems that ship",
      "commerce platforms",
      "cloud-native backends",
      "AI that earns its place",
    ],
    introBefore: "I'm",
    name: "Siddharth Dangarh",
    introAfter:
      ", Lead Software Engineer at Saara. I've taken four commerce products from blank repo to production — returns, shipping, tracking and the platform that ties them together. I do the same for a handful of clients each year.",
    stack: "Python · Django · Next.js · React · AWS · Azure · Postgres",
    ctaPrimary: "Start a project",
    ctaSecondary: "See what I've shipped",
  },
  about: {
    label: "About",
    title: "My Journey",
    p1Before: "My fascination with technology began with a simple question:",
    p1Quote: "“How can we make life easier with code?”",
    p2: "From automating daily tasks to architecting AI-driven platforms, I've always been driven by curiosity and a desire to solve real-world problems. Today I lead engineering at Saara, where I've shipped four commerce products — returns, shipping, tracking and an agentic AI platform — and the unified Commerce OS that brings them under one roof. AI is part of that work, not the whole of it; mostly the job is designing systems that stay up, scale, and are pleasant to work on a year later.",
    p3Before: "Outside of work I run",
    p3After:
      ", a lab where I turn ideas into working tools in days rather than quarters. If you have something that needs building, that's usually the fastest way to see how I work.",
    highlights: [
      { label: "Years Building", value: "4+" },
      { label: "Products Shipped", value: "10+" },
      { label: "Based In", value: "Bengaluru" },
    ],
  },
  experience: {
    label: "Experience",
    title: "Where I've Worked",
    entries: [
      {
        role: "Lead Software Engineer",
        period: "Sep 2026 - Present",
        location: "Bengaluru",
        bullets: [
          "Lead the engineering direction for Saara's AI products, setting architecture and technical standards across teams.",
          "Own FlyOS end to end - agentic AI chat with tools and artifacts, plus the AI widget and workflow builders.",
          "Mentor engineers and run design reviews, turning ambiguous product bets into shippable systems.",
        ],
      },
      {
        role: "Senior Software Developer",
        period: "May 2023 - Aug 2026",
        location: "Bengaluru",
        bullets: [
          "Led architecture and implementation of an AI platform from scratch, designing agents that handle refunds, product analysis, and quality control.",
          "Drove cloud migration across AWS and Azure with robust security practices.",
          "Shipped flagship products including EcoReturns, EcoShip, and FlyOS.",
        ],
      },
      {
        role: "Software Developer",
        period: "Jul 2022 - Apr 2023",
        location: "Bengaluru",
        bullets: [
          "Built a ChatGPT-powered returns/exchange chatbot, modernizing legacy customer service flows.",
          "Revamped and stabilized legacy codebases, improving performance and maintainability.",
          "Collaborated across the full software lifecycle from design to deployment.",
        ],
      },
    ],
  },
  skills: {
    label: "Skills",
    title: "Technologies I Work With",
    categories: [
      "Languages & Frameworks",
      "Cloud & Infrastructure",
      "Data & Storage",
      "AI & APIs",
      "Tools & Workflow",
    ],
  },
  projects: {
    label: "Projects",
    title: "Things I've Built",
    blurb:
      "Commerce platforms I've shipped at Saara, plus a running lab of side projects. Most of these are live — click through and try them.",
    featured: "Featured",
    sunsetted: "Sunsetted",
    previously: "Previously Shipped",
    roles: {
      flyos: "Lead — architecture & agent design",
      commerceos: "Lead — designed and built the unified platform",
      discuvr: "Solo — design, build, deploy",
      core: "Core engineer",
    },
    items: {
      flyos:
        "Agentic AI platform where we built an AI chat experience with tools and artifacts, along with an AI widget builder and an AI workflow builder for rapid business automation.",
      commerceos:
        "A unified dashboard that brings every Saara product - EcoReturns, EcoShip, EcoTrack and FlyOS - under one login and one interface, so merchants run their whole post-purchase stack from a single place.",
      discuvr:
        "My own lab of live AI MVPs — an IP-law Q&A bot, a patent reply generator, a multi-provider LLM comparison bench, a proposal writer, a security scanner and more. Every idea ships as something you can actually click.",
      ecoreturns:
        "Returns management platform that streamlines, automates, and optimizes the returns process for e-commerce brands.",
      ecoship:
        "AI-powered shipping logistics platform that optimizes routes and reduces emissions, helping businesses save money and the planet.",
      ecotrack:
        "Branded order-tracking for e-commerce stores - merchants customize the tracking page with their own logo, colors and typography, turning a generic shipping update into a branded touchpoint.",
      cosell:
        "Collaborative selling platform that helped businesses partner, share leads, and grow together through shared networks.",
      coloyalty:
        "AI-driven loyalty platform that used intelligent segmentation to deliver rewards that boosted engagement and retention.",
      ecorefunds:
        "A solution that analyzes why refunds are happening and provides actionable suggestions to reduce refund rates.",
    },
  },
  contact: {
    label: "Contact",
    title: "Let's build something",
    blurb:
      "Tell me what you're working on. I read every message and reply within a day or two.",
    intentLegend: "What brings you here?",
    intents: {
      project: "Hire me for a project",
      role: "Talk about a role",
      advice: "Get technical advice",
      other: "Something else",
    },
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@company.com",
    message: "What do you need?",
    messagePlaceholder:
      "A sentence or two is plenty — what you're building, and where you're stuck.",
    send: "Send message",
    sending: "Sending…",
    sentTitle: "Message received",
    sentBody:
      "Thanks for reaching out — I'll get back to you at the email you gave shortly.",
    privacy: "Straight to my inbox. No newsletter, no list, no follow-up spam.",
    errorSuffix: "You can also email me directly at",
    emailMe: "Email me",
  },
  footer: {
    rights: "All rights reserved.",
  },
};

export default en;
