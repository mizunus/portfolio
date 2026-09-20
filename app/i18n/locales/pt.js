const pt = {
  nav: {
    about: "Sobre", experience: "Experiência", skills: "Competências",
    projects: "Projetos", contact: "Contato", cta: "Fale comigo",
    menuOpen: "Abrir menu", menuClose: "Fechar menu", language: "Mudar idioma",
  },
  hero: {
    badge: "Disponível para freelance e consultoria",
    headline: "Eu construo",
    roles: [
      "sistemas que chegam à produção",
      "plataformas de comércio",
      "backends cloud-native",
      "IA que merece seu lugar",
    ],
    introBefore: "Sou",
    name: "Siddharth Dangarh",
    introAfter:
      ", Lead Software Engineer na Saara. Levei quatro produtos de comércio do repositório vazio até a produção — devoluções, envios, rastreamento e a plataforma que une tudo isso. Faço o mesmo para alguns clientes todos os anos.",
    stack: "Python · Django · Next.js · React · AWS · Azure · Postgres",
    ctaPrimary: "Começar um projeto",
    ctaSecondary: "Veja o que já entreguei",
  },
  about: {
    label: "Sobre", title: "Minha trajetória",
    p1Before: "Meu fascínio por tecnologia começou com uma pergunta simples:",
    p1Quote: "“Como podemos tornar a vida mais fácil com código?”",
    p2: "Da automação de tarefas do dia a dia à arquitetura de plataformas movidas por IA, sempre fui guiado pela curiosidade e pela vontade de resolver problemas reais. Hoje lidero a engenharia na Saara, onde entreguei quatro produtos de comércio — devoluções, envios, rastreamento e uma plataforma de IA agêntica — além do Commerce OS unificado que reúne tudo sob o mesmo teto. IA faz parte desse trabalho, mas não é o todo: na maior parte do tempo, o trabalho é projetar sistemas que se mantêm de pé, escalam e continuam agradáveis de manter um ano depois.",
    p3Before: "Fora do trabalho eu toco o",
    p3After:
      ", um laboratório onde transformo ideias em ferramentas funcionais em dias, não em trimestres. Se você tem algo para construir, esse costuma ser o jeito mais rápido de ver como eu trabalho.",
    highlights: [
      { label: "Anos construindo", value: "4+" },
      { label: "Produtos entregues", value: "10+" },
      { label: "Localização", value: "Bengaluru" },
    ],
  },
  experience: {
    label: "Experiência", title: "Onde trabalhei",
    entries: [
      {
        role: "Lead Software Engineer", period: "Set 2026 - Atual", location: "Bengaluru",
        bullets: [
          "Lidero a direção de engenharia dos produtos de IA da Saara, definindo arquitetura e padrões técnicos entre os times.",
          "Sou responsável pelo FlyOS de ponta a ponta — chat de IA agêntica com ferramentas e artefatos, além dos construtores de widgets e fluxos com IA.",
          "Oriento engenheiros e conduzo revisões de design, transformando apostas de produto ambíguas em sistemas entregáveis.",
        ],
      },
      {
        role: "Desenvolvedor de Software Sênior", period: "Mai 2023 - Ago 2026", location: "Bengaluru",
        bullets: [
          "Liderei a arquitetura e implementação de uma plataforma de IA do zero, desenhando agentes para reembolsos, análise de produto e controle de qualidade.",
          "Conduzi a migração para a nuvem em AWS e Azure com práticas sólidas de segurança.",
          "Entreguei produtos principais como EcoReturns, EcoShip e FlyOS.",
        ],
      },
      {
        role: "Desenvolvedor de Software", period: "Jul 2022 - Abr 2023", location: "Bengaluru",
        bullets: [
          "Construí um chatbot de devoluções e trocas com ChatGPT, modernizando fluxos legados de atendimento.",
          "Reformulei e estabilizei bases de código legadas, melhorando desempenho e manutenibilidade.",
          "Colaborei em todo o ciclo de vida do software, do desenho ao deploy.",
        ],
      },
    ],
  },
  skills: {
    label: "Competências", title: "Tecnologias com que trabalho",
    categories: [
      "Linguagens e frameworks", "Nuvem e infraestrutura", "Dados e armazenamento",
      "IA e APIs", "Ferramentas e fluxo de trabalho",
    ],
  },
  projects: {
    label: "Projetos", title: "Coisas que construí",
    blurb:
      "Plataformas de comércio que entreguei na Saara, mais um laboratório contínuo de projetos pessoais. A maioria está no ar — entre e experimente.",
    featured: "Destaque", sunsetted: "Descontinuado", previously: "Entregues anteriormente",
    roles: {
      flyos: "Lead — arquitetura e design de agentes",
      commerceos: "Lead — desenhei e construí a plataforma unificada",
      discuvr: "Sozinho — design, desenvolvimento e deploy",
      core: "Engenheiro principal",
    },
    items: {
      flyos: "Plataforma de IA agêntica onde construímos uma experiência de chat com ferramentas e artefatos, além de um construtor de widgets e outro de fluxos de trabalho com IA para automação rápida de negócios.",
      commerceos: "Um painel unificado que reúne todos os produtos da Saara — EcoReturns, EcoShip, EcoTrack e FlyOS — sob um único login e uma única interface, para que os lojistas gerenciem todo o pós-venda em um só lugar.",
      discuvr: "Meu próprio laboratório de MVPs de IA no ar: um bot de perguntas sobre propriedade intelectual, um gerador de respostas de patente, uma bancada de comparação de LLMs, um redator de propostas, um scanner de segurança e mais. Cada ideia é publicada como algo que você pode realmente usar.",
      ecoreturns: "Plataforma de gestão de devoluções que simplifica, automatiza e otimiza o processo de devolução para marcas de e-commerce.",
      ecoship: "Plataforma de logística de envios com IA que otimiza rotas e reduz emissões, ajudando empresas a economizar e a cuidar do planeta.",
      ecotrack: "Rastreamento de pedidos com a marca da loja: os lojistas personalizam a página de rastreio com logo, cores e tipografia próprios, transformando uma atualização genérica de envio em um ponto de contato de marca.",
      cosell: "Plataforma de venda colaborativa que ajudava empresas a formar parcerias, compartilhar oportunidades e crescer juntas por meio de redes compartilhadas.",
      coloyalty: "Plataforma de fidelidade com IA que usava segmentação inteligente para entregar recompensas que aumentavam engajamento e retenção.",
      ecorefunds: "Uma solução que analisa por que os reembolsos acontecem e oferece sugestões práticas para reduzir a taxa.",
    },
  },
  contact: {
    label: "Contato", title: "Vamos construir algo",
    blurb: "Conte o que você está construindo. Leio todas as mensagens e respondo em um ou dois dias.",
    intentLegend: "O que traz você aqui?",
    intents: {
      project: "Contratar para um projeto", role: "Conversar sobre uma vaga",
      advice: "Buscar orientação técnica", other: "Outra coisa",
    },
    name: "Nome", namePlaceholder: "Seu nome",
    email: "E-mail", emailPlaceholder: "voce@empresa.com",
    message: "Do que você precisa?",
    messagePlaceholder: "Uma ou duas frases bastam — o que você está construindo e onde travou.",
    send: "Enviar mensagem", sending: "Enviando…",
    sentTitle: "Mensagem recebida",
    sentBody: "Obrigado pelo contato — responderei em breve no e-mail que você informou.",
    privacy: "Direto para minha caixa de entrada. Sem newsletter, sem listas, sem spam.",
    errorSuffix: "Você também pode me escrever direto em",
    emailMe: "Me envie um e-mail",
  },
  footer: { rights: "Todos os direitos reservados." },
};

export default pt;
