const fr = {
  nav: {
    about: "À propos", experience: "Expérience", skills: "Compétences",
    projects: "Projets", contact: "Contact", cta: "Me contacter",
    menuOpen: "Ouvrir le menu", menuClose: "Fermer le menu", language: "Changer de langue",
  },
  hero: {
    badge: "Disponible en freelance et conseil",
    headline: "Je construis",
    roles: [
      "des systèmes qui arrivent en production",
      "des plateformes de commerce",
      "des backends cloud-native",
      "de l'IA qui mérite sa place",
    ],
    introBefore: "Je suis",
    name: "Siddharth Dangarh",
    introAfter:
      ", Lead Software Engineer chez Saara. J'ai mené quatre produits de commerce du dépôt vide jusqu'à la production — retours, expédition, suivi et la plateforme qui les relie. Je fais de même pour quelques clients chaque année.",
    stack: "Python · Django · Next.js · React · AWS · Azure · Postgres",
    ctaPrimary: "Démarrer un projet",
    ctaSecondary: "Voir ce que j'ai livré",
  },
  about: {
    label: "À propos", title: "Mon parcours",
    p1Before: "Ma fascination pour la technologie a commencé par une question simple :",
    p1Quote: "« Comment rendre la vie plus simple grâce au code ? »",
    p2: "De l'automatisation de tâches quotidiennes à la conception de plateformes pilotées par l'IA, j'ai toujours été guidé par la curiosité et l'envie de résoudre des problèmes concrets. Aujourd'hui je dirige l'ingénierie chez Saara, où j'ai livré quatre produits de commerce — retours, expédition, suivi et une plateforme d'IA agentique — ainsi que le Commerce OS unifié qui les réunit. L'IA fait partie de ce travail sans en être l'essentiel : il s'agit surtout de concevoir des systèmes qui tiennent, passent à l'échelle et restent agréables à maintenir un an plus tard.",
    p3Before: "En dehors du travail, je fais vivre",
    p3After:
      ", un laboratoire où je transforme des idées en outils fonctionnels en quelques jours plutôt qu'en trimestres. Si vous avez quelque chose à construire, c'est généralement le moyen le plus rapide de voir comment je travaille.",
    highlights: [
      { label: "Années de pratique", value: "4+" },
      { label: "Produits livrés", value: "10+" },
      { label: "Basé à", value: "Bengaluru" },
    ],
  },
  experience: {
    label: "Expérience", title: "Où j'ai travaillé",
    entries: [
      {
        role: "Lead Software Engineer", period: "Sep 2026 - Aujourd'hui", location: "Bengaluru",
        bullets: [
          "Je dirige l'orientation technique des produits d'IA de Saara, en définissant l'architecture et les standards techniques entre les équipes.",
          "Je porte FlyOS de bout en bout : chat d'IA agentique avec outils et artefacts, ainsi que les générateurs de widgets et de workflows par IA.",
          "J'accompagne les ingénieurs et anime les revues de conception, transformant des paris produit flous en systèmes livrables.",
        ],
      },
      {
        role: "Développeur Logiciel Senior", period: "Mai 2023 - Août 2026", location: "Bengaluru",
        bullets: [
          "J'ai dirigé l'architecture et la mise en œuvre d'une plateforme d'IA partie de zéro, en concevant des agents pour les remboursements, l'analyse produit et le contrôle qualité.",
          "J'ai piloté la migration cloud sur AWS et Azure avec des pratiques de sécurité solides.",
          "J'ai livré des produits phares dont EcoReturns, EcoShip et FlyOS.",
        ],
      },
      {
        role: "Développeur Logiciel", period: "Juil 2022 - Avr 2023", location: "Bengaluru",
        bullets: [
          "J'ai créé un chatbot de retours et d'échanges propulsé par ChatGPT, modernisant des parcours de service client hérités.",
          "J'ai refondu et stabilisé des bases de code héritées, améliorant les performances et la maintenabilité.",
          "J'ai collaboré sur tout le cycle de vie logiciel, de la conception au déploiement.",
        ],
      },
    ],
  },
  skills: {
    label: "Compétences", title: "Les technologies que j'utilise",
    categories: [
      "Langages et frameworks", "Cloud et infrastructure", "Données et stockage",
      "IA et APIs", "Outils et méthodes",
    ],
  },
  projects: {
    label: "Projets", title: "Ce que j'ai construit",
    blurb:
      "Des plateformes de commerce livrées chez Saara, plus un laboratoire permanent de projets personnels. La plupart sont en ligne — cliquez et essayez-les.",
    featured: "À la une", sunsetted: "Arrêté", previously: "Livrés auparavant",
    roles: {
      flyos: "Lead — architecture et conception des agents",
      commerceos: "Lead — conception et développement de la plateforme unifiée",
      discuvr: "En solo — conception, développement, déploiement",
      core: "Ingénieur principal",
    },
    items: {
      flyos: "Plateforme d'IA agentique où nous avons bâti une expérience de chat avec outils et artefacts, ainsi qu'un générateur de widgets et un générateur de workflows par IA pour automatiser rapidement les processus métier.",
      commerceos: "Un tableau de bord unifié qui réunit tous les produits Saara — EcoReturns, EcoShip, EcoTrack et FlyOS — derrière une seule connexion et une seule interface, pour que les marchands pilotent tout leur après-vente depuis un seul endroit.",
      discuvr: "Mon propre laboratoire de MVP d'IA en ligne : un bot de questions-réponses en propriété intellectuelle, un générateur de réponses de brevet, un banc de comparaison de LLM, un rédacteur de propositions, un scanner de sécurité et plus encore. Chaque idée est livrée sous une forme réellement utilisable.",
      ecoreturns: "Plateforme de gestion des retours qui simplifie, automatise et optimise le processus de retour pour les marques e-commerce.",
      ecoship: "Plateforme logistique d'expédition dopée à l'IA qui optimise les itinéraires et réduit les émissions, aidant les entreprises à économiser et à préserver la planète.",
      ecotrack: "Suivi de commande aux couleurs de la marque pour les boutiques en ligne : les marchands personnalisent la page de suivi avec leur logo, leurs couleurs et leur typographie, transformant une simple mise à jour d'expédition en point de contact de marque.",
      cosell: "Plateforme de vente collaborative qui aidait les entreprises à s'associer, partager des opportunités et grandir ensemble via des réseaux partagés.",
      coloyalty: "Plateforme de fidélité pilotée par l'IA qui utilisait une segmentation intelligente pour proposer des récompenses augmentant l'engagement et la rétention.",
      ecorefunds: "Une solution qui analyse les causes des remboursements et propose des recommandations concrètes pour en réduire le taux.",
    },
  },
  contact: {
    label: "Contact", title: "Construisons quelque chose",
    blurb: "Dites-moi sur quoi vous travaillez. Je lis chaque message et réponds sous un jour ou deux.",
    intentLegend: "Qu'est-ce qui vous amène ?",
    intents: {
      project: "Me confier un projet", role: "Parler d'un poste",
      advice: "Obtenir un conseil technique", other: "Autre chose",
    },
    name: "Nom", namePlaceholder: "Votre nom",
    email: "E-mail", emailPlaceholder: "vous@entreprise.com",
    message: "De quoi avez-vous besoin ?",
    messagePlaceholder: "Une phrase ou deux suffisent — ce que vous construisez, et où vous bloquez.",
    send: "Envoyer le message", sending: "Envoi…",
    sentTitle: "Message bien reçu",
    sentBody: "Merci de votre message — je vous réponds très vite à l'adresse indiquée.",
    privacy: "Directement dans ma boîte mail. Pas de newsletter, pas de liste, pas de spam.",
    errorSuffix: "Vous pouvez aussi m'écrire directement à",
    emailMe: "M'écrire",
  },
  footer: { rights: "Tous droits réservés." },
};

export default fr;
