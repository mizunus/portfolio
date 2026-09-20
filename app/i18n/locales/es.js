const es = {
  nav: {
    about: "Sobre mí", experience: "Experiencia", skills: "Habilidades",
    projects: "Proyectos", contact: "Contacto", cta: "Hablemos",
    menuOpen: "Abrir menú", menuClose: "Cerrar menú", language: "Cambiar idioma",
  },
  hero: {
    badge: "Disponible para proyectos y consultoría",
    headline: "Construyo",
    roles: [
      "sistemas que llegan a producción",
      "plataformas de comercio",
      "backends nativos en la nube",
      "IA que se gana su lugar",
    ],
    introBefore: "Soy",
    name: "Siddharth Dangarh",
    introAfter:
      ", Lead Software Engineer en Saara. He llevado cuatro productos de comercio desde el repositorio vacío hasta producción — devoluciones, envíos, seguimiento y la plataforma que los une. Hago lo mismo para unos pocos clientes cada año.",
    stack: "Python · Django · Next.js · React · AWS · Azure · Postgres",
    ctaPrimary: "Empecemos un proyecto",
    ctaSecondary: "Mira lo que he construido",
  },
  about: {
    label: "Sobre mí", title: "Mi trayectoria",
    p1Before: "Mi fascinación por la tecnología empezó con una pregunta sencilla:",
    p1Quote: "«¿Cómo podemos hacer la vida más fácil con código?»",
    p2: "Desde automatizar tareas cotidianas hasta diseñar plataformas impulsadas por IA, siempre me ha movido la curiosidad y el deseo de resolver problemas reales. Hoy lidero ingeniería en Saara, donde he lanzado cuatro productos de comercio — devoluciones, envíos, seguimiento y una plataforma de IA agéntica — además del Commerce OS unificado que los reúne bajo un mismo techo. La IA es parte del trabajo, no todo: sobre todo se trata de diseñar sistemas que se mantengan en pie, escalen y sigan siendo agradables de mantener un año después.",
    p3Before: "Fuera del trabajo llevo",
    p3After:
      ", un laboratorio donde convierto ideas en herramientas funcionales en días en lugar de trimestres. Si tienes algo que construir, suele ser la forma más rápida de ver cómo trabajo.",
    highlights: [
      { label: "Años construyendo", value: "4+" },
      { label: "Productos lanzados", value: "10+" },
      { label: "Ubicación", value: "Bengaluru" },
    ],
  },
  experience: {
    label: "Experiencia", title: "Dónde he trabajado",
    entries: [
      {
        role: "Lead Software Engineer", period: "Sep 2026 - Presente", location: "Bengaluru",
        bullets: [
          "Dirijo la estrategia de ingeniería de los productos de IA de Saara, definiendo la arquitectura y los estándares técnicos entre equipos.",
          "Responsable de FlyOS de principio a fin: chat de IA agéntica con herramientas y artefactos, además de los constructores de widgets y flujos de trabajo con IA.",
          "Acompaño a otros ingenieros y dirijo revisiones de diseño, convirtiendo apuestas de producto ambiguas en sistemas listos para producción.",
        ],
      },
      {
        role: "Desarrollador de Software Senior", period: "May 2023 - Ago 2026", location: "Bengaluru",
        bullets: [
          "Lideré la arquitectura e implementación de una plataforma de IA desde cero, diseñando agentes para devoluciones, análisis de producto y control de calidad.",
          "Impulsé la migración a la nube en AWS y Azure con prácticas de seguridad sólidas.",
          "Lancé productos insignia como EcoReturns, EcoShip y FlyOS.",
        ],
      },
      {
        role: "Desarrollador de Software", period: "Jul 2022 - Abr 2023", location: "Bengaluru",
        bullets: [
          "Construí un chatbot de devoluciones y cambios basado en ChatGPT, modernizando flujos heredados de atención al cliente.",
          "Renové y estabilicé bases de código heredadas, mejorando el rendimiento y la mantenibilidad.",
          "Colaboré en todo el ciclo de vida del software, del diseño al despliegue.",
        ],
      },
    ],
  },
  skills: {
    label: "Habilidades", title: "Tecnologías con las que trabajo",
    categories: [
      "Lenguajes y frameworks", "Nube e infraestructura", "Datos y almacenamiento",
      "IA y APIs", "Herramientas y flujo de trabajo",
    ],
  },
  projects: {
    label: "Proyectos", title: "Cosas que he construido",
    blurb:
      "Plataformas de comercio que he lanzado en Saara, más un laboratorio continuo de proyectos personales. La mayoría están en vivo — entra y pruébalas.",
    featured: "Destacado", sunsetted: "Descontinuado", previously: "Lanzados anteriormente",
    roles: {
      flyos: "Lead — arquitectura y diseño de agentes",
      commerceos: "Lead — diseñé y construí la plataforma unificada",
      discuvr: "En solitario — diseño, desarrollo y despliegue",
      core: "Ingeniero principal",
    },
    items: {
      flyos: "Plataforma de IA agéntica donde construimos una experiencia de chat con herramientas y artefactos, junto con un constructor de widgets y otro de flujos de trabajo con IA para automatizar negocios rápidamente.",
      commerceos: "Un panel unificado que reúne todos los productos de Saara — EcoReturns, EcoShip, EcoTrack y FlyOS — bajo un solo acceso y una sola interfaz, para que los comercios gestionen toda su operación posventa desde un único lugar.",
      discuvr: "Mi propio laboratorio de MVPs de IA en vivo: un bot de preguntas sobre propiedad intelectual, un generador de respuestas de patentes, un banco de comparación de LLMs, un redactor de propuestas, un escáner de seguridad y más. Cada idea se publica como algo que puedes usar de verdad.",
      ecoreturns: "Plataforma de gestión de devoluciones que simplifica, automatiza y optimiza el proceso de devoluciones para marcas de comercio electrónico.",
      ecoship: "Plataforma de logística de envíos con IA que optimiza rutas y reduce emisiones, ayudando a las empresas a ahorrar dinero y cuidar el planeta.",
      ecotrack: "Seguimiento de pedidos con marca propia para tiendas online: los comercios personalizan la página de seguimiento con su logo, colores y tipografía, convirtiendo una actualización de envío genérica en un punto de contacto de marca.",
      cosell: "Plataforma de venta colaborativa que ayudaba a las empresas a asociarse, compartir oportunidades y crecer juntas mediante redes compartidas.",
      coloyalty: "Plataforma de fidelización con IA que usaba segmentación inteligente para ofrecer recompensas que aumentaban la participación y la retención.",
      ecorefunds: "Una solución que analiza por qué se producen los reembolsos y ofrece sugerencias accionables para reducir su tasa.",
    },
  },
  contact: {
    label: "Contacto", title: "Construyamos algo",
    blurb: "Cuéntame en qué estás trabajando. Leo todos los mensajes y respondo en uno o dos días.",
    intentLegend: "¿Qué te trae por aquí?",
    intents: {
      project: "Contratarme para un proyecto", role: "Hablar de una vacante",
      advice: "Pedir consejo técnico", other: "Otra cosa",
    },
    name: "Nombre", namePlaceholder: "Tu nombre",
    email: "Correo electrónico", emailPlaceholder: "tu@empresa.com",
    message: "¿Qué necesitas?",
    messagePlaceholder: "Con una o dos frases basta — qué estás construyendo y dónde te has atascado.",
    send: "Enviar mensaje", sending: "Enviando…",
    sentTitle: "Mensaje recibido",
    sentBody: "Gracias por escribir — te responderé pronto al correo que has indicado.",
    privacy: "Directo a mi bandeja de entrada. Sin newsletter, sin listas, sin spam.",
    errorSuffix: "También puedes escribirme directamente a",
    emailMe: "Escríbeme",
  },
  footer: { rights: "Todos los derechos reservados." },
};

export default es;
