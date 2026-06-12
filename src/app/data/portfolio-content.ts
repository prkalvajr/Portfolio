export interface ProfileLink {
  label: string;
  href: string;
}

export type Language = 'en' | 'pt-BR';

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  headline: string;
  summary: string;
  availability: string;
  links: ProfileLink[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: 'primary' | 'secondary';
}

export interface Project {
  slug: string;
  title: string;
  status: string;
  type: string;
  summary: string;
  description: string;
  stack: string[];
  highlights: string[];
  image?: string;
  previewUrl?: string;
  links: ProjectLink[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  body: string[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  summary: string;
  stack: string[];
  highlights: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ProjectIdea {
  title: string;
  why: string;
  proof: string;
  stack: string[];
}

export interface PortfolioCopy {
  navigation: {
    home: string;
    blog: string;
    experience: string;
    projects: string;
    about: string;
    primaryNavigationLabel: string;
  };
  documentTitles: {
    home: string;
    blog: string;
    experience: string;
    projects: string;
    about: string;
  };
  common: {
    brandHomeAria: string;
    contact: string;
    footerTagline: string;
  };
  theme: {
    switchToLight: string;
    switchToDark: string;
  };
  language: {
    switchToEnglish: string;
    switchToPortuguese: string;
  };
  home: {
    eyebrow: string;
    viewProjects: string;
    startConversation: string;
    focusAriaLabel: string;
    currentBuild: string;
    focusDescription: string;
    portfolioSummaryAria: string;
    selectedWorkEyebrow: string;
    selectedWorkTitle: string;
    allProjects: string;
    experienceEyebrow: string;
    experienceTitle: string;
    experienceCopy: string;
    openTimeline: string;
    writingEyebrow: string;
    writingTitle: string;
    readBlog: string;
  };
  projectsPage: {
    eyebrow: string;
    title: string;
    intro: string;
    nextBuildsEyebrow: string;
    nextBuildsTitle: string;
    nutrioLogoAlt: string;
    nutrioDesktopAlt: string;
    nutrioMobileAlt: string;
    eventSourcingFrameTitle: string;
  };
  blogPage: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  experiencePage: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    whatImGoodAt: string;
    body: string;
    strengths: string[];
    skillsTitle: string;
    languagesTitle: string;
    languages: string[];
    educationTitle: string;
    education: string;
    contactTitle: string;
  };
}

export interface PortfolioContent {
  profile: Profile;
  metrics: Metric[];
  projects: Project[];
  blogPosts: BlogPost[];
  experienceItems: ExperienceItem[];
  skillGroups: SkillGroup[];
  projectIdeas: ProjectIdea[];
  copy: PortfolioCopy;
}

export const profile = {
  name: 'Pedro Kalva',
  role: 'Full-Stack .NET Developer',
  location: 'Florianópolis, Brazil',
  email: 'pedro.kalva@gmail.com',
  phone: '+55 48 98447-4623',
  headline:
    'Full-stack .NET developer with 7+ years building scalable web applications, APIs, and product systems.',
  summary:
    'Strong expertise in C#, .NET, Angular, React, and SQL databases, with hands-on work in modern architectures, clean code, performance tuning, and AI-assisted development. I have 2+ years collaborating remotely with US-based teams in agile environments.',
  availability:
    'Open to remote full-stack roles, senior .NET contracts, and product engineering work.',
  links: [
    { label: 'GitHub', href: 'https://github.com/prkalvajr' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prkalvajr/' },
  ],
} satisfies Profile;

export const metrics: Metric[] = [
  { value: '7+ years', label: 'building web applications and APIs' },
  { value: '2+ years', label: 'remote collaboration with US teams' },
  { value: '25-30s to 1-5s', label: 'dashboard load-time improvement' },
];

export const projects: Project[] = [
  {
    slug: 'nutrio',
    title: 'Nutrio',
    status: 'Active product build',
    type: 'Nutrition SaaS / mobile-ready web app',
    image: '/nutrio-logo.png',
    summary:
      'Voice-first nutrition tracking app for English and Brazilian Portuguese users.',
    description:
      'Nutrio turns natural meal descriptions into structured food logs, checks nutrition against verified data sources, and gives users progress feedback through dashboards, chat, and smart suggestions.',
    stack: [
      'Angular',
      'Ionic',
      'Capacitor',
      '.NET 8',
      'PostgreSQL',
      'EF Core',
      'OpenAI Whisper',
      'LLM extraction',
      'Chart.js',
      'SignalR',
    ],
    highlights: [
      'Voice and text food logging with AI extraction and user confirmation.',
      'Verified nutrition waterfall: local food data first, external fallback second, AI estimate only as last resort.',
      'Bilingual architecture using JSON translation files for English and pt-BR.',
      'Subscription-aware limits for voice minutes, chat messages, and premium analysis.',
    ],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/prkalvajr/nutrio',
        kind: 'primary',
      },
    ],
  },
  {
    slug: 'event-sourcing',
    title: 'Event Sourcing Bank',
    status: 'Live static demo',
    type: 'Architecture teaching app',
    previewUrl: 'https://prkalvajr.github.io/event-sourcing/',
    summary:
      'A tiny banking ledger that explains event sourcing by making every state change replayable.',
    description:
      'Instead of saving balances, the app stores immutable deposit, withdrawal, and transfer events in the browser. The current balance is rebuilt by folding that event log, and the UI can replay history to show how each action changed the system.',
    stack: ['React', 'Vite', 'TypeScript', 'LocalStorage', 'GitHub Pages'],
    highlights: [
      'Append-only event log stored in the browser.',
      'Balances are derived from events with a reducer, not stored as mutable state.',
      'Replay controls make the architecture visible to non-specialists.',
      'GitHub Actions publishes the static app to GitHub Pages.',
    ],
    links: [
      {
        label: 'Live demo',
        href: 'https://prkalvajr.github.io/event-sourcing/',
        kind: 'primary',
      },
      {
        label: 'Source',
        href: 'https://github.com/prkalvajr/event-sourcing',
        kind: 'secondary',
      },
      {
        label: 'Actions',
        href: 'https://github.com/prkalvajr/event-sourcing/actions',
        kind: 'secondary',
      },
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'event-sourcing-without-ceremony',
    title: 'Event sourcing without ceremony',
    date: '2026-06-10',
    readTime: '4 min read',
    tags: ['Architecture', 'TypeScript', 'Product demos'],
    excerpt:
      'A plain-English note on why an append-only log can be easier to reason about than mutable state.',
    body: [
      'Event sourcing is often introduced with heavy enterprise vocabulary, but the core idea is simple: record the facts, then derive the current state from those facts.',
      'The Event Sourcing Bank demo uses deposits, withdrawals, and transfers as immutable events. Balances are never the source of truth. They are a result of replaying the ledger.',
      'That makes the pattern easier to explain to product teams: history is not metadata. History is the system.',
    ],
  },
  {
    slug: 'building-nutrio-as-a-product-system',
    title: 'Building Nutrio as a product system',
    date: '2026-06-10',
    readTime: '5 min read',
    tags: ['Angular', '.NET', 'AI', 'Nutrition'],
    excerpt:
      'What Nutrio is proving: AI is useful when it extracts intent, while verified data remains the source of truth.',
    body: [
      'Nutrio is intentionally designed so AI does the messy natural-language work, not the nutritional truth work.',
      'The food extraction pipeline can understand a spoken meal, but calories and macros should come from trusted food databases whenever possible.',
      'That boundary is the product lesson: use AI where ambiguity is high, and use deterministic systems where accuracy matters.',
    ],
  },
  {
    slug: 'static-portfolio-as-a-product-surface',
    title: 'A static portfolio can still feel like a product',
    date: '2026-06-10',
    readTime: '3 min read',
    tags: ['Portfolio', 'GitHub Pages', 'Career'],
    excerpt:
      'A portfolio does not need a backend to demonstrate taste, product thinking, and technical judgment.',
    body: [
      'For a developer portfolio, the first job is not to be clever. It is to make trust easy.',
      'Static data keeps hosting simple, while project case studies, writing, source links, and live demos give hiring teams enough evidence to keep reading.',
      'The next evolution is sharper proof: screenshots, metrics, short architecture notes, and one or two deep case studies.',
    ],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    period: 'Nov 2023 - Jan 2026',
    title: 'Full-Stack Developer',
    company: 'SocialLadder',
    location: 'United States (Remote)',
    summary:
      'Built and maintained scalable full-stack web applications for a US-based team using C#, .NET, AngularJS, and modern Angular.',
    stack: [
      'C#',
      '.NET',
      'Angular',
      'AngularJS',
      'CQRS',
      'Azure Service Bus',
      'GraphQL',
      'Datadog',
    ],
    highlights: [
      'Re-architected the legacy sales-conversion module with CQRS and Azure Service Bus, cutting client dashboard load times from 25-30s to 1-5s.',
      'Designed idempotent asynchronous background jobs that generate up to 100k+ marketing links per campaign action.',
      'Added full audit history for per-client conversion configuration and used Datadog to distinguish configuration changes from defects in minutes.',
      'Replaced an N+1 REST Shopify integration with batched GraphQL queries, reducing sync time by roughly 40-60%.',
      'Built a cached sales leaderboard that kept user rankings responsive under high load.',
    ],
  },
  {
    period: 'Jun 2021 - Nov 2023',
    title: 'Full-Stack Developer',
    company: 'Basis Tecnologia da Informação S.A.',
    location: 'Brazil',
    summary:
      'Engineered enterprise APIs, backend services, relational data models, and frontend features for high-volume business workflows.',
    stack: ['C#', '.NET Framework', 'Angular', 'JavaScript', 'SQL databases'],
    highlights: [
      'Built .NET Framework and C# services for enterprise systems.',
      'Modeled relational database schemas that supported high-volume workflows.',
      'Delivered and maintained frontend features in JavaScript and Angular.',
      'Led code reviews and debugging efforts that improved overall system stability.',
    ],
  },
  {
    period: 'Aug 2020 - Jun 2021',
    title: 'Backend Developer',
    company: 'Seventh',
    location: 'Brazil',
    summary:
      'Developed backend services and APIs in C#, .NET Core, and PostgreSQL, applying Clean Architecture and test-driven development.',
    stack: ['C#', '.NET Core', 'PostgreSQL', 'Clean Architecture', 'TDD'],
    highlights: [
      'Built and maintained APIs and core modules for internal and external integrations.',
      'Drove development with TDD and reached 100% unit-test coverage.',
      'Kept backend services reliable through clean boundaries and strong automated tests.',
    ],
  },
  {
    period: 'Sep 2019 - Feb 2020',
    title: 'Full-Stack Developer',
    company: 'Granter',
    location: 'Brazil',
    summary:
      'Delivered UI components and backend features across JavaScript, jQuery, C#, and SQL Server.',
    stack: ['C#', 'SQL Server', 'JavaScript', 'jQuery', 'HTML/CSS'],
    highlights: [
      'Built UI components with JavaScript, jQuery, HTML, and CSS.',
      'Developed backend features in C# and SQL Server, including complex stored procedures and triggers.',
    ],
  },
  {
    period: 'Apr 2017 - Aug 2019',
    title: 'Full-Stack Developer',
    company: 'Paradigma Business Solutions S/A',
    location: 'Brazil',
    summary:
      'Developed and maintained government enterprise applications across ASP.NET Web Forms, SQL Server, and reporting tools.',
    stack: [
      'C#',
      'ASP.NET Web Forms',
      'SQL Server',
      'KendoUI',
      'jQuery',
      'Crystal Reports',
    ],
    highlights: [
      'Built and maintained government enterprise applications using C#, ASP.NET Web Forms, and SQL Server.',
      'Created frontend features with KendoUI and jQuery, and generated reports with Crystal Reports and Report Viewer.',
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    items: [
      'C#',
      '.NET Core',
      '.NET Framework',
      '.NET 6+',
      'ASP.NET',
      'RESTful APIs',
      'GraphQL',
      'Entity Framework',
      'Dapper',
      'Azure Service Bus',
      'RabbitMQ',
    ],
  },
  {
    title: 'Frontend',
    items: [
      'Angular',
      'AngularJS',
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind',
    ],
  },
  {
    title: 'Databases',
    items: ['SQL Server', 'PostgreSQL', 'Vector databases'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Azure', 'Docker', 'CI/CD', 'Git', 'GitHub', 'Datadog'],
  },
  {
    title: 'Architecture & Practices',
    items: [
      'Clean Architecture',
      'CQRS',
      'SOLID principles',
      'MVC',
      'TDD',
      'Agile/Scrum',
      'AI-assisted programming',
    ],
  },
];

export const projectIdeas: ProjectIdea[] = [
  {
    title: 'Multi-tenant appointment and billing platform',
    why: 'Useful for freelance clients and strong for full-time interviews because it proves SaaS fundamentals.',
    proof:
      'Tenants, roles, scheduling, invoices, Stripe subscriptions, audit logs, and admin reporting.',
    stack: ['Angular', '.NET', 'PostgreSQL', 'Stripe', 'Docker'],
  },
  {
    title: 'AI document intake with human review',
    why: 'Shows practical AI beyond chat and maps well to legal, finance, insurance, and healthcare-adjacent clients.',
    proof:
      'Upload PDFs, extract structured fields, confidence scores, review queue, export, and traceable corrections.',
    stack: ['Angular', '.NET', 'OpenAI', 'Blob storage', 'PostgreSQL'],
  },
  {
    title: 'Realtime operations dashboard',
    why: 'Contracts often need dashboards that coordinate live work across teams.',
    proof:
      'SignalR updates, background jobs, role-based views, alerting, retry flows, and observability.',
    stack: ['Angular', '.NET', 'SignalR', 'Redis', 'OpenTelemetry'],
  },
  {
    title: 'Open-source Angular/.NET starter kit',
    why: 'A polished starter can attract inbound work and demonstrate senior taste in architecture.',
    proof:
      'Auth, tests, CI, Docker Compose, permissions, theming, error handling, and deployment docs.',
    stack: ['Angular', '.NET', 'EF Core', 'GitHub Actions', 'Playwright'],
  },
];

const englishCopy: PortfolioCopy = {
  navigation: {
    home: 'Home',
    blog: 'Blog',
    experience: 'Experience',
    projects: 'Projects',
    about: 'About',
    primaryNavigationLabel: 'Primary navigation',
  },
  documentTitles: {
    home: 'Pedro Kalva - Portfolio',
    blog: 'Blog - Pedro Kalva',
    experience: 'Experience - Pedro Kalva',
    projects: 'Projects - Pedro Kalva',
    about: 'About - Pedro Kalva',
  },
  common: {
    brandHomeAria: 'Go to home',
    contact: 'Contact',
    footerTagline: 'product-minded full-stack engineering.',
  },
  theme: {
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
  },
  language: {
    switchToEnglish: 'Switch to English',
    switchToPortuguese: 'Switch to Portuguese',
  },
  home: {
    eyebrow: 'Portfolio / product engineering / static publishing',
    viewProjects: 'View projects',
    startConversation: 'Start a conversation',
    focusAriaLabel: 'Current focus',
    currentBuild: 'Current build',
    focusDescription:
      'Voice-first nutrition tracking with Angular, .NET, PostgreSQL, and AI-assisted food extraction.',
    portfolioSummaryAria: 'Portfolio summary',
    selectedWorkEyebrow: 'Selected work',
    selectedWorkTitle: 'Proof through shipped surfaces and inspectable demos',
    allProjects: 'All projects',
    experienceEyebrow: 'Experience',
    experienceTitle: 'Seven years across enterprise systems, product APIs, and Angular frontends',
    experienceCopy:
      'From government enterprise platforms to US remote product work, the through-line is practical full-stack delivery: C#, .NET, Angular, SQL, async systems, and measurable performance wins.',
    openTimeline: 'Open timeline',
    writingEyebrow: 'Writing',
    writingTitle: 'Short notes that show technical judgment',
    readBlog: 'Read blog',
  },
  projectsPage: {
    eyebrow: 'Projects',
    title: 'Case-study style projects with live proof where possible',
    intro:
      'The strongest portfolio projects explain the problem, the decisions, the tradeoffs, and how to inspect the result. This page is structured around that evidence.',
    nextBuildsEyebrow: 'Next valuable builds',
    nextBuildsTitle:
      'Project ideas that help with freelance work and senior contracts',
    nutrioLogoAlt: 'Nutrio logo',
    nutrioDesktopAlt: 'Nutrio desktop navigation preview',
    nutrioMobileAlt: 'Nutrio mobile navigation preview',
    eventSourcingFrameTitle: 'Event Sourcing Bank live demo',
  },
  blogPage: {
    eyebrow: 'Blog',
    title: 'Technical notes, build logs, and product thinking',
    intro:
      'Static posts for now, written directly in the Angular content file so the site can stay backend-free on GitHub Pages.',
  },
  experiencePage: {
    eyebrow: 'Work experience',
    title: 'Full-stack experience with measurable backend and frontend impact',
    intro:
      'A resume-backed timeline of roles across Brazil and US remote teams, covering enterprise applications, scalable APIs, Angular frontends, SQL data modeling, asynchronous jobs, and observability.',
  },
  aboutPage: {
    eyebrow: 'About',
    title: 'Full-stack .NET developer with a product builder bias',
    whatImGoodAt: 'What I am good at',
    body:
      'I like owning the whole product slice: usable frontend, reliable backend, data model, deployment path, and the small engineering details that make software fast, traceable, and trustworthy.',
    strengths: [
      'Scalable .NET APIs',
      'Angular product interfaces',
      'SQL data modeling',
      'Async architecture',
      'Performance tuning',
      'Remote agile delivery',
    ],
    skillsTitle: 'Technical skills',
    languagesTitle: 'Languages',
    languages: ['Portuguese - native', 'English - full professional'],
    educationTitle: 'Education',
    education:
      'SENAI/SC - Technical Course in Computing Programming (2013-2015)',
    contactTitle: 'Contact',
  },
};

const portugueseProfile: Profile = {
  name: 'Pedro Kalva',
  role: 'Desenvolvedor Full-Stack .NET',
  location: 'Florianópolis, Brasil',
  email: 'pedro.kalva@gmail.com',
  phone: '+55 48 98447-4623',
  headline:
    'Desenvolvedor full-stack .NET com mais de 7 anos construindo aplicações web, APIs e sistemas de produto escaláveis.',
  summary:
    'Sólida experiência em C#, .NET, Angular, React e bancos de dados SQL, com atuação prática em arquiteturas modernas, código limpo, performance e desenvolvimento assistido por IA. Tenho mais de 2 anos de colaboração remota com times nos Estados Unidos em ambientes ágeis.',
  availability:
    'Aberto a oportunidades remotas full-stack, contratos senior em .NET e projetos de engenharia de produto.',
  links: [
    { label: 'GitHub', href: 'https://github.com/prkalvajr' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prkalvajr/' },
  ],
};

const portugueseMetrics: Metric[] = [
  { value: '7+ anos', label: 'construindo aplicações web e APIs' },
  { value: '2+ anos', label: 'colaboração remota com times dos EUA' },
  { value: '25-30s para 1-5s', label: 'melhoria no carregamento de dashboards' },
];

const portugueseProjects: Project[] = [
  {
    slug: 'nutrio',
    title: 'Nutrio',
    status: 'Produto em construção',
    type: 'SaaS de nutrição / web app mobile-ready',
    image: '/nutrio-logo.png',
    summary:
      'App de acompanhamento nutricional voice-first para usuários em inglês e português brasileiro.',
    description:
      'Nutrio transforma descrições naturais de refeições em registros estruturados, valida a nutrição com fontes verificadas e entrega feedback de progresso por dashboards, chat e sugestões inteligentes.',
    stack: [
      'Angular',
      'Ionic',
      'Capacitor',
      '.NET 8',
      'PostgreSQL',
      'EF Core',
      'OpenAI Whisper',
      'Extração com LLM',
      'Chart.js',
      'SignalR',
    ],
    highlights: [
      'Registro de alimentos por voz e texto com extração por IA e confirmação do usuário.',
      'Fluxo de nutrição verificada: dados locais primeiro, fallback externo depois, estimativa por IA apenas como último recurso.',
      'Arquitetura bilíngue usando arquivos JSON de tradução para inglês e pt-BR.',
      'Limites por assinatura para minutos de voz, mensagens de chat e análises premium.',
    ],
    links: [
      {
        label: 'Código',
        href: 'https://github.com/prkalvajr/nutrio',
        kind: 'primary',
      },
    ],
  },
  {
    slug: 'event-sourcing',
    title: 'Event Sourcing Bank',
    status: 'Demo estática ao vivo',
    type: 'App didático de arquitetura',
    previewUrl: 'https://prkalvajr.github.io/event-sourcing/',
    summary:
      'Um pequeno ledger bancário que explica event sourcing tornando cada mudança de estado reproduzível.',
    description:
      'Em vez de salvar saldos, o app armazena eventos imutáveis de depósito, saque e transferência no navegador. O saldo atual é reconstruído ao percorrer o log de eventos, e a UI pode reproduzir o histórico para mostrar como cada ação mudou o sistema.',
    stack: ['React', 'Vite', 'TypeScript', 'LocalStorage', 'GitHub Pages'],
    highlights: [
      'Log de eventos append-only armazenado no navegador.',
      'Saldos são derivados dos eventos com um reducer, não salvos como estado mutável.',
      'Controles de replay tornam a arquitetura visível para pessoas não especialistas.',
      'GitHub Actions publica o app estático no GitHub Pages.',
    ],
    links: [
      {
        label: 'Demo ao vivo',
        href: 'https://prkalvajr.github.io/event-sourcing/',
        kind: 'primary',
      },
      {
        label: 'Código',
        href: 'https://github.com/prkalvajr/event-sourcing',
        kind: 'secondary',
      },
      {
        label: 'Actions',
        href: 'https://github.com/prkalvajr/event-sourcing/actions',
        kind: 'secondary',
      },
    ],
  },
];

const portugueseBlogPosts: BlogPost[] = [
  {
    slug: 'event-sourcing-sem-cerimonia',
    title: 'Event sourcing sem cerimônia',
    date: '2026-06-10',
    readTime: '4 min de leitura',
    tags: ['Arquitetura', 'TypeScript', 'Demos de produto'],
    excerpt:
      'Uma nota em linguagem simples sobre por que um log append-only pode ser mais fácil de entender do que estado mutável.',
    body: [
      'Event sourcing muitas vezes aparece com vocabulário corporativo pesado, mas a ideia central é simples: registre os fatos e derive o estado atual a partir deles.',
      'A demo Event Sourcing Bank usa depósitos, saques e transferências como eventos imutáveis. Os saldos nunca são a fonte da verdade. Eles são o resultado de reproduzir o ledger.',
      'Isso torna o padrão mais fácil de explicar para times de produto: histórico não é metadado. Histórico é o sistema.',
    ],
  },
  {
    slug: 'construindo-nutrio-como-sistema-de-produto',
    title: 'Construindo Nutrio como sistema de produto',
    date: '2026-06-10',
    readTime: '5 min de leitura',
    tags: ['Angular', '.NET', 'IA', 'Nutrição'],
    excerpt:
      'O que Nutrio prova: IA é útil quando extrai intenção, enquanto dados verificados continuam sendo a fonte da verdade.',
    body: [
      'Nutrio foi desenhado de propósito para que a IA faça o trabalho bagunçado de linguagem natural, não o trabalho de verdade nutricional.',
      'O pipeline de extração de alimentos pode entender uma refeição falada, mas calorias e macros devem vir de bases confiáveis sempre que possível.',
      'Essa fronteira é a lição de produto: use IA onde a ambiguidade é alta e sistemas determinísticos onde a precisão importa.',
    ],
  },
  {
    slug: 'portfolio-estatico-como-superficie-de-produto',
    title: 'Um portfolio estático ainda pode parecer um produto',
    date: '2026-06-10',
    readTime: '3 min de leitura',
    tags: ['Portfolio', 'GitHub Pages', 'Carreira'],
    excerpt:
      'Um portfolio não precisa de backend para demonstrar gosto, pensamento de produto e julgamento técnico.',
    body: [
      'Para um portfolio de desenvolvedor, o primeiro trabalho não é ser esperto. É facilitar confiança.',
      'Dados estáticos mantêm a hospedagem simples, enquanto estudos de caso, escrita, links de código e demos ao vivo dão evidência suficiente para recrutadores e clientes continuarem lendo.',
      'A próxima evolução é prova mais forte: screenshots, métricas, notas curtas de arquitetura e um ou dois estudos de caso profundos.',
    ],
  },
];

const portugueseExperienceItems: ExperienceItem[] = [
  {
    period: 'nov/2023 - jan/2026',
    title: 'Desenvolvedor Full-Stack',
    company: 'SocialLadder',
    location: 'Estados Unidos (Remoto)',
    summary:
      'Desenvolvi e mantive aplicações web full-stack escaláveis para um time nos Estados Unidos usando C#, .NET, AngularJS e Angular moderno.',
    stack: [
      'C#',
      '.NET',
      'Angular',
      'AngularJS',
      'CQRS',
      'Azure Service Bus',
      'GraphQL',
      'Datadog',
    ],
    highlights: [
      'Reestruturei o módulo legado de conversão de vendas com CQRS e Azure Service Bus, reduzindo o carregamento dos dashboards de 25-30s para 1-5s.',
      'Projetei jobs assíncronos idempotentes que geram até 100k+ links de marketing por ação de campanha.',
      'Adicionei histórico completo de auditoria à configuração de conversão por cliente e usei Datadog para distinguir mudanças de configuração de defeitos em minutos.',
      'Substituí uma integração REST com problema N+1 no Shopify por queries GraphQL em lote, reduzindo a sincronização em cerca de 40-60%.',
      'Construí um leaderboard de vendas com cache para manter rankings responsivos sob alta carga.',
    ],
  },
  {
    period: 'jun/2021 - nov/2023',
    title: 'Desenvolvedor Full-Stack',
    company: 'Basis Tecnologia da Informação S.A.',
    location: 'Brasil',
    summary:
      'Desenvolvi APIs, serviços de backend, modelos relacionais e funcionalidades de frontend para fluxos corporativos de alto volume.',
    stack: ['C#', '.NET Framework', 'Angular', 'JavaScript', 'Bancos SQL'],
    highlights: [
      'Desenvolvi serviços com .NET Framework e C# para sistemas corporativos.',
      'Modelei esquemas de banco de dados relacionais para fluxos de negócio de alto volume.',
      'Entreguei e mantive funcionalidades de frontend com JavaScript e Angular.',
      'Conduzi code reviews e depuração que melhoraram a estabilidade geral dos sistemas.',
    ],
  },
  {
    period: 'ago/2020 - jun/2021',
    title: 'Desenvolvedor Backend',
    company: 'Seventh',
    location: 'Brasil',
    summary:
      'Desenvolvi serviços de backend e APIs com C#, .NET Core e PostgreSQL, aplicando Clean Architecture e TDD.',
    stack: ['C#', '.NET Core', 'PostgreSQL', 'Clean Architecture', 'TDD'],
    highlights: [
      'Construí e mantive APIs e módulos centrais para integrações internas e externas.',
      'Conduzi o desenvolvimento com TDD e atingi 100% de cobertura de testes unitários.',
      'Mantive serviços de backend confiáveis com limites claros e testes automatizados fortes.',
    ],
  },
  {
    period: 'set/2019 - fev/2020',
    title: 'Desenvolvedor Full-Stack',
    company: 'Granter',
    location: 'Brasil',
    summary:
      'Entreguei componentes de interface e funcionalidades de backend com JavaScript, jQuery, C# e SQL Server.',
    stack: ['C#', 'SQL Server', 'JavaScript', 'jQuery', 'HTML/CSS'],
    highlights: [
      'Construí componentes de interface com JavaScript, jQuery, HTML e CSS.',
      'Desenvolvi funcionalidades de backend com C# e SQL Server, incluindo stored procedures e triggers complexas.',
    ],
  },
  {
    period: 'abr/2017 - ago/2019',
    title: 'Desenvolvedor Full-Stack',
    company: 'Paradigma Business Solutions S/A',
    location: 'Brasil',
    summary:
      'Desenvolvi e mantive aplicações corporativas governamentais com ASP.NET Web Forms, SQL Server e ferramentas de relatórios.',
    stack: [
      'C#',
      'ASP.NET Web Forms',
      'SQL Server',
      'KendoUI',
      'jQuery',
      'Crystal Reports',
    ],
    highlights: [
      'Desenvolvi e mantive aplicações corporativas governamentais com C#, ASP.NET Web Forms e SQL Server.',
      'Construí funcionalidades de frontend com KendoUI e jQuery, e gerei relatórios com Crystal Reports e Report Viewer.',
    ],
  },
];

const portugueseSkillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    items: [
      'C#',
      '.NET Core',
      '.NET Framework',
      '.NET 6+',
      'ASP.NET',
      'RESTful APIs',
      'GraphQL',
      'Entity Framework',
      'Dapper',
      'Azure Service Bus',
      'RabbitMQ',
    ],
  },
  {
    title: 'Frontend',
    items: [
      'Angular',
      'AngularJS',
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind',
    ],
  },
  {
    title: 'Bancos de dados',
    items: ['SQL Server', 'PostgreSQL', 'Bancos vetoriais'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Azure', 'Docker', 'CI/CD', 'Git', 'GitHub', 'Datadog'],
  },
  {
    title: 'Arquitetura & Práticas',
    items: [
      'Clean Architecture',
      'CQRS',
      'Princípios SOLID',
      'MVC',
      'TDD',
      'Agile/Scrum',
      'Programação assistida por IA',
    ],
  },
];

const portugueseProjectIdeas: ProjectIdea[] = [
  {
    title: 'Plataforma multi-tenant de agendamento e cobrança',
    why: 'Útil para clientes freelance e forte em entrevistas porque prova fundamentos de SaaS.',
    proof:
      'Tenants, papéis, agendamento, invoices, assinaturas Stripe, audit logs e relatórios administrativos.',
    stack: ['Angular', '.NET', 'PostgreSQL', 'Stripe', 'Docker'],
  },
  {
    title: 'Intake de documentos com IA e revisão humana',
    why: 'Mostra IA prática além de chat e se encaixa bem em clientes de jurídico, finanças, seguros e saúde.',
    proof:
      'Upload de PDFs, extração de campos estruturados, scores de confiança, fila de revisão, exportação e correções rastreáveis.',
    stack: ['Angular', '.NET', 'OpenAI', 'Blob storage', 'PostgreSQL'],
  },
  {
    title: 'Dashboard operacional em tempo real',
    why: 'Contratos frequentemente precisam de dashboards que coordenam trabalho ao vivo entre equipes.',
    proof:
      'Atualizações com SignalR, jobs em background, views por papel, alertas, fluxos de retry e observabilidade.',
    stack: ['Angular', '.NET', 'SignalR', 'Redis', 'OpenTelemetry'],
  },
  {
    title: 'Starter kit open-source Angular/.NET',
    why: 'Um starter polido pode atrair trabalho inbound e demonstrar gosto senior em arquitetura.',
    proof:
      'Auth, testes, CI, Docker Compose, permissões, theming, tratamento de erros e docs de deploy.',
    stack: ['Angular', '.NET', 'EF Core', 'GitHub Actions', 'Playwright'],
  },
];

const portugueseCopy: PortfolioCopy = {
  navigation: {
    home: 'Início',
    blog: 'Blog',
    experience: 'Experiência',
    projects: 'Projetos',
    about: 'Sobre',
    primaryNavigationLabel: 'Navegação principal',
  },
  documentTitles: {
    home: 'Pedro Kalva - Portfolio',
    blog: 'Blog - Pedro Kalva',
    experience: 'Experiência - Pedro Kalva',
    projects: 'Projetos - Pedro Kalva',
    about: 'Sobre - Pedro Kalva',
  },
  common: {
    brandHomeAria: 'Ir para o início',
    contact: 'Contato',
    footerTagline: 'engenharia full-stack com mentalidade de produto.',
  },
  theme: {
    switchToLight: 'Mudar para modo claro',
    switchToDark: 'Mudar para modo escuro',
  },
  language: {
    switchToEnglish: 'Mudar para inglês',
    switchToPortuguese: 'Mudar para português',
  },
  home: {
    eyebrow: 'Portfolio / engenharia de produto / publicação estática',
    viewProjects: 'Ver projetos',
    startConversation: 'Iniciar conversa',
    focusAriaLabel: 'Foco atual',
    currentBuild: 'Construção atual',
    focusDescription:
      'Acompanhamento nutricional voice-first com Angular, .NET, PostgreSQL e extração de alimentos assistida por IA.',
    portfolioSummaryAria: 'Resumo do portfolio',
    selectedWorkEyebrow: 'Trabalhos selecionados',
    selectedWorkTitle: 'Prova por produtos entregues e demos inspecionáveis',
    allProjects: 'Todos os projetos',
    experienceEyebrow: 'Experiência',
    experienceTitle: 'Sete anos entre sistemas corporativos, APIs de produto e frontends Angular',
    experienceCopy:
      'De plataformas governamentais a trabalho remoto com produto nos Estados Unidos, a linha central é entrega full-stack prática: C#, .NET, Angular, SQL, sistemas assíncronos e ganhos mensuráveis de performance.',
    openTimeline: 'Abrir timeline',
    writingEyebrow: 'Escrita',
    writingTitle: 'Notas curtas que mostram julgamento técnico',
    readBlog: 'Ler blog',
  },
  projectsPage: {
    eyebrow: 'Projetos',
    title: 'Projetos em formato de estudo de caso com prova ao vivo quando possível',
    intro:
      'Os projetos mais fortes de portfolio explicam o problema, as decisões, os tradeoffs e como inspecionar o resultado. Esta página é estruturada em torno dessas evidências.',
    nextBuildsEyebrow: 'Próximas construções valiosas',
    nextBuildsTitle:
      'Ideias de projetos que ajudam em freelancing e contratos senior',
    nutrioLogoAlt: 'Logo do Nutrio',
    nutrioDesktopAlt: 'Prévia da navegação desktop do Nutrio',
    nutrioMobileAlt: 'Prévia da navegação mobile do Nutrio',
    eventSourcingFrameTitle: 'Demo ao vivo do Event Sourcing Bank',
  },
  blogPage: {
    eyebrow: 'Blog',
    title: 'Notas técnicas, logs de construção e pensamento de produto',
    intro:
      'Posts estáticos por enquanto, escritos diretamente no arquivo de conteúdo Angular para manter o site sem backend no GitHub Pages.',
  },
  experiencePage: {
    eyebrow: 'Experiência profissional',
    title: 'Experiência full-stack com impacto mensurável em backend e frontend',
    intro:
      'Uma timeline baseada no currículo, com funções no Brasil e em times remotos dos Estados Unidos, cobrindo aplicações corporativas, APIs escaláveis, frontends Angular, modelagem SQL, jobs assíncronos e observabilidade.',
  },
  aboutPage: {
    eyebrow: 'Sobre',
    title: 'Desenvolvedor full-stack .NET com viés de construtor de produto',
    whatImGoodAt: 'No que eu sou bom',
    body:
      'Eu gosto de assumir a fatia inteira do produto: frontend usável, backend confiável, modelo de dados, caminho de deploy e os detalhes de engenharia que fazem software ser rápido, rastreável e confiável.',
    strengths: [
      'APIs .NET escaláveis',
      'Interfaces de produto em Angular',
      'Modelagem de dados SQL',
      'Arquitetura assíncrona',
      'Otimização de performance',
      'Entrega remota em times ágeis',
    ],
    skillsTitle: 'Competências técnicas',
    languagesTitle: 'Idiomas',
    languages: ['Português - nativo', 'Inglês - profissional completo'],
    educationTitle: 'Formação',
    education:
      'SENAI/SC - Curso Técnico em Informática / Programação (2013-2015)',
    contactTitle: 'Contato',
  },
};

export const portfolioContent = {
  en: {
    profile,
    metrics,
    projects,
    blogPosts,
    experienceItems,
    skillGroups,
    projectIdeas,
    copy: englishCopy,
  },
  'pt-BR': {
    profile: portugueseProfile,
    metrics: portugueseMetrics,
    projects: portugueseProjects,
    blogPosts: portugueseBlogPosts,
    experienceItems: portugueseExperienceItems,
    skillGroups: portugueseSkillGroups,
    projectIdeas: portugueseProjectIdeas,
    copy: portugueseCopy,
  },
} satisfies Record<Language, PortfolioContent>;
