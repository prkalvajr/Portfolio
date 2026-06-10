export interface ProfileLink {
  label: string;
  href: string;
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
  ] satisfies ProfileLink[],
};

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

