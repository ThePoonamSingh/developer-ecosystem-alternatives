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
  { stat: "−63%", label: "Stack complexity", desc: "Replace 4–6 vendors with a single platform." },
  { stat: "10×", label: "Faster deployment", desc: "From commit to production in seconds, not hours." },
  { stat: "AI-native", label: "By default", desc: "Agents, embeddings and RAG as first-class primitives." },
  { stat: "−48%", label: "Infra overhead", desc: "No clusters, no IAM mazes, no on-call rotation." },
  { stat: "1 SDK", label: "Full-stack DX", desc: "Database, auth, storage, functions, AI — one API." },
  { stat: "0→1", label: "In a weekend", desc: "Ship a production app before the kickoff meeting." },
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
