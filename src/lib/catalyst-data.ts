export type Platform = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  accent: string; // tailwind color class hint
};

export const PLATFORMS: Record<string, Platform> = {
  catalyst: { id: "catalyst", name: "Catalyst", tagline: "AI-native full-stack platform", category: "All-in-one", accent: "var(--catalyst)" },
  supabase: { id: "supabase", name: "Supabase", tagline: "Open-source Firebase alternative", category: "Backend", accent: "oklch(0.75 0.18 155)" },
  firebase: { id: "firebase", name: "Firebase", tagline: "Google's app development suite", category: "Backend", accent: "oklch(0.78 0.17 70)" },
  appwrite: { id: "appwrite", name: "Appwrite", tagline: "Self-hostable backend server", category: "Backend", accent: "oklch(0.65 0.22 0)" },
  vercel: { id: "vercel", name: "Vercel", tagline: "Frontend cloud for frameworks", category: "Hosting", accent: "oklch(0.95 0 0)" },
  render: { id: "render", name: "Render", tagline: "Unified cloud for apps & services", category: "Hosting", accent: "oklch(0.7 0.15 230)" },
  railway: { id: "railway", name: "Railway", tagline: "Deploy infra in seconds", category: "Hosting", accent: "oklch(0.55 0.15 290)" },
  netlify: { id: "netlify", name: "Netlify", tagline: "Composable web platform", category: "Hosting", accent: "oklch(0.78 0.13 200)" },
  aws: { id: "aws", name: "AWS", tagline: "Hyperscale cloud", category: "Cloud", accent: "oklch(0.78 0.16 75)" },
  azure: { id: "azure", name: "Azure", tagline: "Microsoft's cloud", category: "Cloud", accent: "oklch(0.7 0.15 230)" },
  gcp: { id: "gcp", name: "Google Cloud", tagline: "Google's cloud platform", category: "Cloud", accent: "oklch(0.7 0.18 250)" },
  retool: { id: "retool", name: "Retool", tagline: "Internal tools, fast", category: "Internal", accent: "oklch(0.65 0.22 25)" },
  appsmith: { id: "appsmith", name: "Appsmith", tagline: "Open-source internal tools", category: "Internal", accent: "oklch(0.7 0.18 260)" },
  lovable: { id: "lovable", name: "Lovable", tagline: "AI app builder", category: "AI Builder", accent: "oklch(0.7 0.2 350)" },
  bolt: { id: "bolt", name: "Bolt", tagline: "In-browser AI builder", category: "AI Builder", accent: "oklch(0.85 0.18 95)" },
  replit: { id: "replit", name: "Replit", tagline: "Cloud-native IDE & deploy", category: "AI Builder", accent: "oklch(0.75 0.18 65)" },
  cursor: { id: "cursor", name: "Cursor", tagline: "AI-first code editor", category: "AI Builder", accent: "oklch(0.95 0 0)" },
};

export const CATEGORIES = [
  { id: "backend", title: "Backend Platforms", subtitle: "Auth, database, storage, functions", platforms: ["supabase", "firebase", "appwrite"] },
  { id: "hosting", title: "Hosting Platforms", subtitle: "Deploy & serve frontends and services", platforms: ["vercel", "render", "railway", "netlify"] },
  { id: "cloud", title: "Cloud Platforms", subtitle: "Hyperscale infrastructure", platforms: ["aws", "azure", "gcp"] },
  { id: "internal", title: "Internal Tool Platforms", subtitle: "Dashboards, admin UIs, ops", platforms: ["retool", "appsmith"] },
  { id: "ai", title: "AI App Builders", subtitle: "Prompt-to-app development", platforms: ["lovable", "bolt", "replit", "cursor"] },
];

export const SWITCH_REASONS = [
  {
    stat: "30+",
    label: "Services in one platform",
    desc: "Replace 4–6 vendors with a single PaaS.",
    proof: "Catalyst ships 30+ cloud services — AppSail, Functions, Data Store, Stratus, Circuits and more — under one console.",
  },
  {
    stat: "Minutes",
    label: "Local to live",
    desc: "From commit to production without a release engineer.",
    proof: "",
  },
  {
    stat: "AI-native",
    label: "By default",
    desc: "Agents, ML and conversational AI as first-class services.",
    proof: "",
  },
  {
    stat: "Fully-managed",
    label: "Zero infra ops",
    desc: "No clusters, no IAM mazes, no on-call rotation.",
    proof: "AppSail and CloudScale fully manage infrastructure, storage, security and hosting for you.",
  },
  {
    stat: "5 SDKs",
    label: "Full-stack DX",
    desc: "Auth, data, AI and files — one consistent API surface.",
    proof: "Java, Python, Node, Flutter and Web SDKs cover Auth, Data Store, AI and File Store.",
  },
  {
    stat: "$250",
    label: "Free credits to start",
    desc: "Ship a production app before the kickoff meeting.",
    proof: "",
  },
];


export const USE_CASES = [
  { id: "portal", title: "Customer Portal", icon: "Users", comparisons: ["supabase", "firebase", "aws"] },
  { id: "agent", title: "AI Agent", icon: "Bot", comparisons: ["lovable", "bolt", "aws"] },
  { id: "internal", title: "Internal Tool", icon: "Layout", comparisons: ["retool", "appsmith", "supabase"] },
  { id: "crm", title: "CRM", icon: "Contact", comparisons: ["supabase", "retool", "firebase"] },
  { id: "inventory", title: "Inventory System", icon: "Package", comparisons: ["supabase", "retool", "aws"] },
  { id: "workflow", title: "Workflow Automation", icon: "Workflow", comparisons: ["aws", "retool", "render"] },
  { id: "saas", title: "Multi-tenant SaaS", icon: "Layers", comparisons: ["supabase", "vercel", "aws"] },
];

export const FEATURED_COMPARISONS = [
  { vs: "supabase", verdict: "Built-in AI & hosting", use: "Full-stack SaaS" },
  { vs: "firebase", verdict: "Open standards, no lock-in", use: "Mobile + web apps" },
  { vs: "vercel", verdict: "Backend included", use: "Beyond the frontend" },
  { vs: "render", verdict: "Zero-config services", use: "API & worker hosting" },
  { vs: "aws", verdict: "10× simpler DX", use: "Skip the IAM maze" },
  { vs: "retool", verdict: "Real apps, real code", use: "From admin to product" },
];

export type ComparisonDetail = {
  summary: string;
  catalystPros: string[];
  catalystCons: string[];
  idealUseCases: string[];
  pricingNotes: { catalyst: string; competitor: string };
  migrationSteps: string[];
};

export const COMPARISON_DETAILS: Record<string, ComparisonDetail> = {
  supabase: {
    summary:
      "Supabase nailed open-source Postgres-as-a-service. Catalyst keeps that Postgres-first DNA and folds in AI primitives, edge hosting, and a single SDK — so you stop gluing together five dashboards.",
    catalystPros: [
      "Postgres + auth + storage + AI behind one SDK, no project juggling",
      "Edge hosting and background workers ship in-platform",
      "First-class agents, embeddings, vector search and RAG",
      "Type-safe end-to-end: schema → server functions → client",
    ],
    catalystCons: [
      "Younger ecosystem of community extensions and third-party tooling",
      "Self-hosting requires Catalyst Enterprise (Supabase OSS is free to host)",
    ],
    idealUseCases: [
      "AI-native SaaS with agents and retrieval baked in",
      "Teams tired of stitching Supabase + Vercel + a vector DB + a queue",
      "Internal products that need RLS-style auth without the DIY",
    ],
    pricingNotes: {
      catalyst: "Free tier with prod Postgres, AI credits, and edge hosting. Pro $25/mo, usage-based after.",
      competitor: "Free tier with 500MB DB, paused after a week. Pro $25/mo per project — AI, hosting, queues priced separately elsewhere.",
    },
    migrationSteps: [
      "pg_dump --schema-only and replay into Catalyst Postgres",
      "Stream data with pg_dump --data-only or logical replication",
      "Swap supabase-js for @catalyst/sdk (1:1 auth, db, storage)",
      "Re-point auth callbacks and storage signed-URL origins",
    ],
  },
  firebase: {
    summary:
      "Firebase is unbeatable for quick mobile prototypes — until you outgrow document data, custom queries, or Google's billing surprises. Catalyst gives you SQL, open standards, and predictable pricing without giving up real-time.",
    catalystPros: [
      "Relational Postgres with proper joins, transactions, and migrations",
      "No vendor lock-in: standard SQL, S3-compatible storage, open auth",
      "Realtime subscriptions over Postgres CDC, not a proprietary stream",
      "AI agents and RAG without bolting on Vertex AI separately",
    ],
    catalystCons: [
      "No native mobile SDK parity yet for iOS/Android (REST + JS today)",
      "Firestore's offline-first sync model still wins for spotty mobile networks",
    ],
    idealUseCases: [
      "Apps outgrowing Firestore's query and indexing limits",
      "Teams that need SQL analytics on operational data",
      "Products that want EU data residency without the GCP maze",
    ],
    pricingNotes: {
      catalyst: "Flat Pro tier with included reads/writes/AI. Predictable per-GB egress.",
      competitor: "Pay-per-read pricing that surprises at scale; storage egress charged through GCP.",
    },
    migrationSteps: [
      "Export Firestore collections to JSON via Firebase Admin SDK",
      "Map documents → Postgres tables with a one-time ETL script",
      "Migrate auth users (with password hashes) via Catalyst Admin API",
      "Replace Cloud Functions with Catalyst server functions",
    ],
  },
  vercel: {
    summary:
      "Vercel is the gold standard for frontend hosting. Catalyst matches the deploy experience and adds the backend layer — database, auth, storage, AI — so you don't need a second platform for anything dynamic.",
    catalystPros: [
      "Same git-push DX, but with database, auth, and storage attached",
      "Server functions run on the edge with direct DB access — no extra hop",
      "Built-in cron, queues, and background jobs (no Inngest needed)",
      "Per-branch preview environments include preview databases",
    ],
    catalystCons: [
      "Vercel's Next.js integration is still the deepest in the industry",
      "Smaller global POP footprint than Vercel's network today",
    ],
    idealUseCases: [
      "Full-stack apps where the backend matters as much as the frontend",
      "Teams paying separately for Vercel + Supabase + Upstash + Inngest",
      "AI products that need DB, vectors, and inference on the same edge",
    ],
    pricingNotes: {
      catalyst: "Hosting, DB, storage, AI in one bill. Pro $25/mo includes the full stack.",
      competitor: "$20/seat for Pro + Postgres, KV, Blob, AI, queues each metered separately — bills compound quickly.",
    },
    migrationSteps: [
      "Import the git repo — framework auto-detected (Next, Remix, Astro, Vite)",
      "Mirror env vars and secrets through the Catalyst CLI",
      "Move serverless/edge functions to Catalyst server functions (near 1:1 API)",
      "Promote a preview deploy to production, swap DNS",
    ],
  },
  render: {
    summary:
      "Render is a great escape from Heroku-tax pricing for long-running services. Catalyst gives you the same zero-config services plus a real data layer and AI, instead of just compute.",
    catalystPros: [
      "Services, cron, workers, and a managed Postgres in one project",
      "Auth, storage, and AI included — no shopping for add-ons",
      "Faster cold starts on edge functions vs Render's container model",
      "Preview environments include data, not just compute",
    ],
    catalystCons: [
      "Render's Docker-anywhere model is more flexible for arbitrary runtimes",
      "Long-running stateful services should stay on Render's container tier",
    ],
    idealUseCases: [
      "API + worker apps that want a real database and auth alongside",
      "Teams that want preview environments with seeded data",
      "Migrating off Heroku and wanting more than just compute",
    ],
    pricingNotes: {
      catalyst: "Compute, DB, storage, AI on a single usage meter.",
      competitor: "Per-service pricing — DB, Redis, workers each have their own line item.",
    },
    migrationSteps: [
      "Detect runtime and build commands from existing render.yaml",
      "Import env vars and connection strings via Catalyst CLI",
      "Connect the repo — services and cron jobs map 1:1",
      "Cutover DNS once the preview is green",
    ],
  },
  aws: {
    summary:
      "AWS will do anything. That's also the problem. Catalyst gives you the 80% of AWS that 95% of products actually need — without the IAM diagrams, CloudFormation, or on-call rotation.",
    catalystPros: [
      "Ship in a weekend what takes a platform team a quarter on AWS",
      "No IAM, no VPCs, no NAT gateways — secure defaults out of the box",
      "Pricing you can predict before the invoice arrives",
      "Postgres, S3-compatible storage, queues, AI — all wired together",
    ],
    catalystCons: [
      "AWS still wins for arbitrary compute shapes (GPUs, FPGAs, bare metal)",
      "Heavily-regulated workloads may need specific AWS compliance regions",
      "Multi-region active-active is roadmap on Catalyst, available on AWS today",
    ],
    idealUseCases: [
      "Startups burning runway on a platform team they shouldn't need",
      "Teams running RDS + Lambda + S3 + Cognito and wanting one bill",
      "Internal tools and SaaS that don't need hyperscale knobs",
    ],
    pricingNotes: {
      catalyst: "Flat platform fee + transparent usage. No surprise NAT gateway bills.",
      competitor: "Per-service, per-region, per-egress, per-request — predictable only with a FinOps team.",
    },
    migrationSteps: [
      "Inventory services in use (RDS, Lambda, S3, Cognito, SQS, SES)",
      "Map IAM roles → Catalyst roles and policies",
      "Migrate RDS via logical replication with near-zero downtime",
      "Decommission CloudFormation stacks once traffic is cut over",
    ],
  },
  retool: {
    summary:
      "Retool is excellent for ops dashboards your customers will never see. The moment a tool needs to become a real product — branded, multi-tenant, customer-facing — Catalyst is the upgrade path.",
    catalystPros: [
      "Real React code, version-controlled, deployable like any product",
      "Multi-tenant, white-labelable, and embeddable in your own app",
      "No per-seat pricing — invite your whole company or your customers",
      "AI agents and workflows are first-class, not a paid add-on",
    ],
    catalystCons: [
      "Drag-and-drop UI builder is by design less prominent than Retool's",
      "Non-developers can't ship a tool end-to-end without engineering help",
    ],
    idealUseCases: [
      "Internal tools that need to graduate into customer-facing product",
      "Teams hitting Retool's per-seat pricing ceiling",
      "Workflows that need custom UX beyond Retool's component library",
    ],
    pricingNotes: {
      catalyst: "Flat platform fee, unlimited builders and end-users.",
      competitor: "$10–$50 per end-user per month — costs explode past a few hundred users.",
    },
    migrationSteps: [
      "Export Retool queries and resources as a starting schema",
      "Re-implement screens with the Catalyst component library + AI scaffolding",
      "Move resource credentials into Catalyst secrets",
      "Switch SSO and cut Retool seats once parity is reached",
    ],
  },
};

export const MIGRATIONS = [
  { from: "supabase", steps: ["Export schema with pg_dump", "Pipe into Catalyst Postgres", "Swap supabase-js for @catalyst/sdk", "Re-point auth callbacks"] },
  { from: "firebase", steps: ["Export Firestore to JSON", "Map collections to Postgres tables", "Migrate auth users via Admin SDK", "Replace Cloud Functions"] },
  { from: "render", steps: ["Detect runtime & build commands", "Import env vars", "Connect repo to Catalyst", "Cutover DNS"] },
  { from: "vercel", steps: ["Import git project", "Mirror env vars & secrets", "Wire serverless functions", "Promote preview to production"] },
  { from: "aws", steps: ["Inventory services in use", "Map IAM to Catalyst roles", "Migrate RDS via logical replication", "Decommission CloudFormation stacks"] },
];

export const APPS = [
  { title: "AI Support Assistant", tag: "Agents · RAG · Slack", desc: "Retrieval-grounded helpdesk that resolves 71% of tickets." },
  { title: "Customer Portal", tag: "Auth · Billing · Files", desc: "Branded portal with SSO, invoices and document vaults." },
  { title: "Sales CRM", tag: "Pipeline · Email · AI", desc: "Custom CRM with enrichment and deal scoring agents." },
  { title: "Inventory System", tag: "Realtime · Barcode", desc: "Warehouse ops with realtime stock and audit trails." },
  { title: "Internal Dashboard", tag: "RBAC · Metrics", desc: "Executive analytics with row-level security." },
  { title: "Ecommerce Backend", tag: "Catalog · Orders", desc: "Headless commerce with AI product copy." },
  { title: "Multi-tenant SaaS", tag: "Orgs · Plans · API", desc: "B2B SaaS with billing, teams and per-tenant data." },
  { title: "Workflow Automation", tag: "Triggers · LLMs", desc: "Zapier-style flows with agents in the loop." },
];

export const MATRIX = {
  rows: [
    { key: "ease", label: "Ease of use" },
    { key: "fullstack", label: "Full-stack dev" },
    { key: "ai", label: "AI services" },
    { key: "hosting", label: "Hosting" },
    { key: "db", label: "Database" },
    { key: "integrations", label: "Integrations" },
    { key: "scale", label: "Scalability" },
    { key: "cost", label: "Cost efficiency" },
  ],
  // 0..5 score
  data: {
    catalyst:  { ease: 5, fullstack: 5, ai: 5, hosting: 5, db: 5, integrations: 5, scale: 5, cost: 5 },
    supabase:  { ease: 4, fullstack: 4, ai: 2, hosting: 3, db: 5, integrations: 4, scale: 4, cost: 4 },
    firebase:  { ease: 4, fullstack: 3, ai: 3, hosting: 4, db: 3, integrations: 4, scale: 5, cost: 3 },
    vercel:    { ease: 5, fullstack: 3, ai: 4, hosting: 5, db: 2, integrations: 4, scale: 5, cost: 3 },
    aws:       { ease: 1, fullstack: 5, ai: 5, hosting: 5, db: 5, integrations: 5, scale: 5, cost: 2 },
    render:    { ease: 4, fullstack: 3, ai: 1, hosting: 5, db: 3, integrations: 3, scale: 4, cost: 4 },
    retool:    { ease: 4, fullstack: 2, ai: 3, hosting: 3, db: 2, integrations: 5, scale: 3, cost: 3 },
  } as Record<string, Record<string, number>>,
};
