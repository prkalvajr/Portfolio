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
  context: string;
  summary: string;
  highlights: string[];
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
    contactTitle: string;
  };
}

export interface PortfolioContent {
  profile: Profile;
  metrics: Metric[];
  projects: Project[];
  blogPosts: BlogPost[];
  experienceItems: ExperienceItem[];
  projectIdeas: ProjectIdea[];
  copy: PortfolioCopy;
}

export const profile = {
  name: 'Pedro Kalva',
  role: 'Senior Full-Stack Developer',
  location: 'Brazil - remote-friendly',
  email: 'pedro.kalva@gmail.com',
  headline:
    'I build pragmatic product systems with Angular, .NET, cloud automation, and AI-assisted workflows.',
  summary:
    'Full-stack engineer focused on useful products, resilient APIs, clean frontends, and business features that survive real users. Current portfolio focus: nutrition technology, event-driven thinking, and static-first publishing that is easy to host.',
  availability:
    'Open to freelance builds, senior full-stack contracts, and product engineering roles.',
  links: [
    { label: 'GitHub', href: 'https://github.com/prkalvajr' },
    { label: 'Email', href: 'mailto:pedro.kalva@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prkalvajr/' },
  ],
} satisfies Profile;

export const metrics: Metric[] = [
  { value: 'Angular + .NET', label: 'primary delivery stack' },
  { value: 'AI + product', label: 'current build focus' },
  { value: 'Static-ready', label: 'GitHub Pages friendly' },
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
    period: 'Now',
    title: 'Senior full-stack product engineering',
    context: 'Angular, .NET, APIs, data modeling, CI/CD',
    summary:
      'Focused on building complete product slices: frontends that are pleasant to use, APIs with clear boundaries, and deployment workflows that keep projects shippable.',
    highlights: [
      'Designing Angular application flows with standalone components and responsive layouts.',
      'Building .NET service layers, EF Core models, authentication, and background jobs.',
      'Using GitHub Actions and static hosting patterns where a backend is not required.',
    ],
  },
  {
    period: '2026',
    title: 'Nutrio product build',
    context: 'AI-assisted nutrition tracking',
    summary:
      'Creating a voice-first nutrition app with bilingual UX, verified nutrition lookup, and AI-assisted food extraction.',
    highlights: [
      'Structured a multi-layer .NET backend with application, domain, infrastructure, and API projects.',
      'Built Angular product surfaces for logging, progress, chat, community, billing, and profile workflows.',
      'Planned a data pipeline that separates AI extraction from verified nutrition values.',
    ],
  },
  {
    period: '2026',
    title: 'Architecture demos and learning assets',
    context: 'Event sourcing, testing, frontend state',
    summary:
      'Turning architecture concepts into small, hosted applications that can be inspected, replayed, and discussed.',
    highlights: [
      'Built Event Sourcing Bank as a static demo with an append-only browser ledger.',
      'Used reducer-based state derivation to make the pattern visible in the UI.',
      'Kept the app deployable to GitHub Pages with no backend requirement.',
    ],
  },
  {
    period: 'Next',
    title: 'Resume timeline import',
    context: 'Exact companies, dates, achievements',
    summary:
      'This page is ready for your updated resume. The next pass should replace this draft with concrete company history and measurable impact.',
    highlights: [
      'Add employer names, roles, and dates.',
      'Add metrics such as latency reduced, users supported, revenue enabled, or deployment frequency improved.',
      'Add one leadership example per senior role: mentoring, architecture decision, rescue, migration, or delivery ownership.',
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
    experienceTitle: 'Timeline ready for resume details',
    experienceCopy:
      'The structure is in place now. Once you send the updated resume, the draft items can become exact roles, dates, and measurable senior-level impact.',
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
    title: 'A senior timeline shell, ready for your updated resume',
    intro:
      'The current entries avoid inventing company history. Send the updated resume and this becomes a precise, evidence-rich timeline with dates, companies, scope, and outcomes.',
  },
  aboutPage: {
    eyebrow: 'About',
    title: 'Full-stack engineer with a product builder bias',
    whatImGoodAt: 'What I am good at',
    body:
      'I like owning the whole product slice: usable frontend, reliable backend, data model, deployment path, and the small UX details that make software feel trustworthy.',
    strengths: [
      'Angular applications',
      '.NET APIs',
      'PostgreSQL data design',
      'AI workflow integration',
      'CI/CD and GitHub Pages',
      'Product discovery',
    ],
    contactTitle: 'Contact',
  },
};

const portugueseProfile: Profile = {
  name: 'Pedro Kalva',
  role: 'Desenvolvedor Full-Stack Senior',
  location: 'Brasil - remoto',
  email: 'pedro.kalva@gmail.com',
  headline:
    'Eu construo sistemas de produto pragmáticos com Angular, .NET, automação em nuvem e fluxos assistidos por IA.',
  summary:
    'Engenheiro full-stack focado em produtos úteis, APIs resilientes, frontends limpos e funcionalidades de negócio que funcionam com usuários reais. O foco atual do portfolio: tecnologia de nutrição, pensamento orientado a eventos e publicação estática fácil de hospedar.',
  availability:
    'Aberto a projetos freelance, contratos senior full-stack e oportunidades em engenharia de produto.',
  links: [
    { label: 'GitHub', href: 'https://github.com/prkalvajr' },
    { label: 'Email', href: 'mailto:pedro.kalva@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prkalvajr/' },
  ],
};

const portugueseMetrics: Metric[] = [
  { value: 'Angular + .NET', label: 'stack principal de entrega' },
  { value: 'IA + produto', label: 'foco atual de construção' },
  { value: 'Static-ready', label: 'pronto para GitHub Pages' },
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
    period: 'Agora',
    title: 'Engenharia de produto full-stack senior',
    context: 'Angular, .NET, APIs, modelagem de dados, CI/CD',
    summary:
      'Foco em construir fatias completas de produto: frontends agradáveis de usar, APIs com limites claros e fluxos de deploy que mantêm projetos entregáveis.',
    highlights: [
      'Desenhando fluxos de aplicação Angular com componentes standalone e layouts responsivos.',
      'Construindo camadas de serviço em .NET, modelos EF Core, autenticação e jobs em background.',
      'Usando GitHub Actions e padrões de hospedagem estática quando backend não é necessário.',
    ],
  },
  {
    period: '2026',
    title: 'Construção do produto Nutrio',
    context: 'Acompanhamento nutricional assistido por IA',
    summary:
      'Criando um app de nutrição voice-first com UX bilíngue, busca nutricional verificada e extração de alimentos assistida por IA.',
    highlights: [
      'Estruturei um backend .NET em múltiplas camadas com projetos de application, domain, infrastructure e API.',
      'Construí superfícies de produto em Angular para registro, progresso, chat, comunidade, billing e perfil.',
      'Planejei um pipeline de dados que separa extração por IA de valores nutricionais verificados.',
    ],
  },
  {
    period: '2026',
    title: 'Demos de arquitetura e materiais de aprendizado',
    context: 'Event sourcing, testes, estado no frontend',
    summary:
      'Transformando conceitos de arquitetura em pequenas aplicações hospedadas que podem ser inspecionadas, reproduzidas e discutidas.',
    highlights: [
      'Construí Event Sourcing Bank como demo estática com um ledger append-only no navegador.',
      'Usei derivação de estado baseada em reducer para tornar o padrão visível na UI.',
      'Mantive o app publicável no GitHub Pages sem necessidade de backend.',
    ],
  },
  {
    period: 'Próximo',
    title: 'Importação da timeline do currículo',
    context: 'Empresas, datas e conquistas exatas',
    summary:
      'Esta página está pronta para seu currículo atualizado. O próximo passo deve substituir este rascunho por histórico real de empresas e impacto mensurável.',
    highlights: [
      'Adicionar nomes de empresas, cargos e datas.',
      'Adicionar métricas como latência reduzida, usuários atendidos, receita habilitada ou frequência de deploy melhorada.',
      'Adicionar um exemplo de liderança por cargo senior: mentoria, decisão de arquitetura, resgate, migração ou ownership de entrega.',
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
    experienceTitle: 'Timeline pronta para detalhes do currículo',
    experienceCopy:
      'A estrutura já está pronta. Quando você enviar o currículo atualizado, os itens em rascunho podem virar cargos, datas e impactos senior mensuráveis.',
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
    title: 'Uma timeline senior pronta para seu currículo atualizado',
    intro:
      'As entradas atuais evitam inventar histórico de empresas. Envie o currículo atualizado e isto vira uma timeline precisa, rica em evidências, com datas, empresas, escopo e resultados.',
  },
  aboutPage: {
    eyebrow: 'Sobre',
    title: 'Engenheiro full-stack com viés de construtor de produto',
    whatImGoodAt: 'No que eu sou bom',
    body:
      'Eu gosto de assumir a fatia inteira do produto: frontend usável, backend confiável, modelo de dados, caminho de deploy e os pequenos detalhes de UX que fazem software parecer confiável.',
    strengths: [
      'Aplicações Angular',
      'APIs .NET',
      'Modelagem de dados PostgreSQL',
      'Integração de fluxos com IA',
      'CI/CD e GitHub Pages',
      'Descoberta de produto',
    ],
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
    projectIdeas,
    copy: englishCopy,
  },
  'pt-BR': {
    profile: portugueseProfile,
    metrics: portugueseMetrics,
    projects: portugueseProjects,
    blogPosts: portugueseBlogPosts,
    experienceItems: portugueseExperienceItems,
    projectIdeas: portugueseProjectIdeas,
    copy: portugueseCopy,
  },
} satisfies Record<Language, PortfolioContent>;
