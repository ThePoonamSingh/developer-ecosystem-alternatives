import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Zap, Layers, Boxes, Cloud, Wrench, Bot,
  Users, Layout, Contact, Package, Workflow, Database, Server, Globe, Cpu,
  ChevronRight, Github, Star,
} from "lucide-react";
import { PLATFORMS, CATEGORIES, SWITCH_REASONS, USE_CASES, FEATURED_COMPARISONS, MIGRATIONS, APPS, MATRIX, COMPARISON_DETAILS, PLATFORM_DETAILS } from "@/lib/catalyst-data";
import { DecisionSearch } from "@/components/catalyst/DecisionSearch";
import { PlatformMark } from "@/components/catalyst/PlatformMark";
import { Check, Minus, DollarSign, Target, GitBranch } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Compare Catalyst — The developer's decision engine" },
      { name: "description", content: "Compare Catalyst with Supabase, Firebase, Vercel, Render, AWS, Retool and more. See when to switch, how to migrate, and what you can build." },
      { property: "og:title", content: "Compare Catalyst — The developer's decision engine" },
      { property: "og:description", content: "Side-by-side comparisons, migration paths, and real applications built on Catalyst." },
    ],
  }),
  component: ComparePage,
});

const CATEGORY_ICONS: Record<string, any> = {
  backend: Database, hosting: Globe, cloud: Cloud, internal: Wrench, ai: Bot,
};
const USECASE_ICONS: Record<string, any> = {
  Users, Bot, Layout, Contact, Package, Workflow, Layers,
};

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl">
      <div className="border-b border-hairline bg-background/60">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="relative grid h-7 w-7 place-items-center rounded-md bg-catalyst-gradient shadow-glow">
              <Sparkles size={14} className="text-catalyst-foreground" />
            </span>
            <span>Catalyst</span>
            <span className="ml-1 rounded-md border border-hairline px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Compare
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#universe" className="hover:text-foreground">Platforms</a>
            <a href="#usecase" className="hover:text-foreground">Use cases</a>
            <a href="#featured" className="hover:text-foreground">Comparisons</a>
            <a href="#migrate" className="hover:text-foreground">Migrate</a>
            <a href="#built" className="hover:text-foreground">Showcase</a>
            <a href="#matrix" className="hover:text-foreground">Matrix</a>
          </nav>
          <div className="flex items-center gap-2">
            <a className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline" href="#">Sign in</a>
            <a href="#cta" className="group inline-flex items-center gap-1 rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background hover:bg-foreground/90">
              Start building <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-center text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient">Stop guessing which</span>
          <br />
          <span className="relative">
            platform to build on.
            <span className="absolute -bottom-2 left-1/2 h-[3px] w-24 -translate-x-1/2 bg-catalyst-gradient blur-[1px]" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base text-muted-foreground sm:text-lg"
        >
          Compare Catalyst with Supabase, Firebase, Vercel, Render, AWS, Retool, and more.
          Discover when it makes sense to switch, how to migrate, and what you can build.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#featured" className="group inline-flex items-center gap-1.5 rounded-md bg-catalyst-gradient px-4 py-2.5 text-sm font-semibold text-catalyst-foreground shadow-glow hover:brightness-110">
            Compare platforms <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#built" className="inline-flex items-center gap-1.5 rounded-md border border-hairline bg-surface/60 px-4 py-2.5 text-sm font-semibold text-foreground backdrop-blur hover:bg-surface">
            See real applications <ArrowUpRight size={15} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <DecisionSearch selectedId={selected} onSelect={setSelected} />
          {!selected && (
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
              <span className="font-mono text-[11px] text-muted-foreground">try:</span>
              {["supabase", "firebase", "vercel", "aws", "retool"].map((id) => (
                <button
                  key={id}
                  onClick={() => setSelected(id)}
                  className="rounded-full border border-hairline bg-surface/40 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {PLATFORMS[id].name}
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Replaces the alternatives strip */}
      <div className="relative mx-auto mt-20 max-w-5xl px-6">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-hairline" />
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Alternative for
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-hairline" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
        >
          {Object.values(PLATFORMS).slice(1, 11).map((p) => (
            <div key={p.id} className="flex items-center gap-2">
              <PlatformMark p={p} size={22} />
              <span className="text-xs font-medium text-muted-foreground">{p.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PlatformUniverse() {
  const [activeCat, setActiveCat] = useState(CATEGORIES[0].id);
  const [openId, setOpenId] = useState<string | null>(null);
  const current = CATEGORIES.find((c) => c.id === activeCat)!;
  return (
    <section id="universe" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow=""
          title="Stop tab-hopping through vendor sites."
          desc="Compare seventeen platforms across five categories so you can pick the right one in minutes."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col">
            {CATEGORIES.map((c) => {
              const Icon = CATEGORY_ICONS[c.id];
              const active = activeCat === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => { setActiveCat(c.id); setOpenId(null); }}
                  className={`group relative flex min-w-[200px] items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                    active
                      ? "border-catalyst/40 bg-card-gradient shadow-glow"
                      : "border-hairline bg-surface/40 hover:bg-surface"
                  }`}
                >
                  <div className={`grid h-9 w-9 place-items-center rounded-lg ${active ? "bg-catalyst/15 text-catalyst" : "bg-accent text-foreground/80"}`}>
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground">{c.title}</div>
                    <div className="mt-0.5 truncate text-xs text-muted-foreground">{c.subtitle}</div>
                  </div>
                  {active && <ChevronRight size={14} className="ml-auto mt-1 text-catalyst" />}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {current.platforms.map((id) => {
                const p = PLATFORMS[id];
                const d = PLATFORM_DETAILS[id];
                const isOpen = openId === id;
                return (
                  <motion.div
                    key={id}
                    layout
                    whileHover={{ y: -3 }}
                    className={`group relative overflow-hidden rounded-2xl border bg-card-gradient p-5 transition-colors ${
                      isOpen ? "border-catalyst/40 shadow-glow sm:col-span-2 xl:col-span-3" : "border-hairline hover:border-catalyst/30"
                    }`}
                  >
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                         style={{ background: `radial-gradient(circle, ${p.accent}, transparent 70%)` }} />
                    <div className="relative flex items-start justify-between">
                      <PlatformMark p={p} size={44} />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{p.category}</span>
                    </div>
                    <div className="relative mt-4 text-lg font-semibold">{p.name}</div>
                    <div className="relative mt-1 text-sm text-muted-foreground">{p.tagline}</div>

                    <button
                      onClick={() => setOpenId(isOpen ? null : id)}
                      className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-catalyst hover:underline"
                    >
                      {isOpen ? "Hide details" : "Show details"}
                      <ChevronRight size={14} className={`transition-transform ${isOpen ? "rotate-90" : ""}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && d && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="relative mt-6 overflow-hidden"
                        >
                          <div className="grid gap-6 border-t border-hairline pt-6 md:grid-cols-2">
                            <div>
                              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/80">
                                <Check size={14} className="text-catalyst" /> Strengths
                              </div>
                              <ul className="space-y-1.5 text-sm text-muted-foreground">
                                {d.strengths.map((s) => (
                                  <li key={s} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-catalyst" />{s}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/80">
                                <Minus size={14} className="text-muted-foreground" /> Tradeoffs
                              </div>
                              <ul className="space-y-1.5 text-sm text-muted-foreground">
                                {d.tradeoffs.map((s) => (
                                  <li key={s} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />{s}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/80">
                                <Target size={14} className="text-catalyst" /> Best fit for
                              </div>
                              <ul className="space-y-1.5 text-sm text-muted-foreground">
                                {d.bestFor.map((s) => (
                                  <li key={s} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-catalyst" />{s}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/80">
                                <GitBranch size={14} className="text-catalyst" /> Consider instead
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {d.alternatives.map((altId) => {
                                  const alt = PLATFORMS[altId];
                                  if (!alt) return null;
                                  return (
                                    <span
                                      key={altId}
                                      className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-surface/60 px-2.5 py-1.5 text-xs text-foreground/90"
                                    >
                                      <PlatformMark p={alt} size={16} />
                                      {alt.name}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


function WhySwitch() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hairline to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow=""
          title="Cheaper, faster, yours"
          desc="What used to take six vendors and a platform team now takes one SDK."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SWITCH_REASONS.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-hairline bg-card-gradient p-6"
            >
              <div className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                   style={{ background: "linear-gradient(135deg, oklch(0.66 0.23 25 / 0.2), transparent 60%)" }} />
              <div className="relative font-display text-4xl sm:text-5xl font-semibold tracking-tight text-gradient">
                {r.stat}
              </div>
              <div className="relative mt-3 text-sm font-semibold text-foreground">{r.label}</div>
              
              <div className="relative mt-4 border-t border-hairline pt-3 text-xs leading-relaxed text-muted-foreground/80">
                {r.proof}
              </div>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompareByBuild() {
  return (
    <section id="usecase" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Compare by what you're building"
          desc="Pick what you're shipping. Each one opens a tailored breakdown with stack, architecture and migration notes."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((u) => {
            const Icon = USECASE_ICONS[u.icon] ?? Layers;
            return (
              <Link
                key={u.id}
                to="/use-cases/$slug"
                params={{ slug: u.id }}
                className="group relative overflow-hidden rounded-2xl border border-hairline bg-surface/40 p-6 text-left transition-all hover:bg-card-gradient hover:border-catalyst/40"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-foreground/80 group-hover:bg-catalyst/15 group-hover:text-catalyst">
                  <Icon size={18} />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="text-base font-semibold">{u.title}</div>
                  <ArrowUpRight size={16} className="text-muted-foreground transition group-hover:text-catalyst" />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{u.comparisons.length} comparisons · breakdown</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedComparisons() {
  const [active, setActive] = useState<string>(FEATURED_COMPARISONS[0].vs);
  const current = FEATURED_COMPARISONS.find((c) => c.vs === active)!;
  const p = PLATFORMS[current.vs];
  const detail = COMPARISON_DETAILS[current.vs];

  return (
    <section id="featured" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Featured comparisons"
          desc="Honest verdicts, real trade-offs, pricing notes, and migration paths for the platforms developers ask about most."
        />

        {/* Tab strip */}
        <div className="mt-10 -mx-2 flex gap-2 overflow-x-auto px-2 pb-2">
          {FEATURED_COMPARISONS.map((c) => {
            const cp = PLATFORMS[c.vs];
            const isActive = active === c.vs;
            return (
              <button
                key={c.vs}
                onClick={() => setActive(c.vs)}
                className={`group flex shrink-0 items-center gap-2.5 rounded-full border px-3.5 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "border-catalyst/40 bg-catalyst/10 text-foreground shadow-glow"
                    : "border-hairline bg-surface/40 text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
              >
                <PlatformMark p={cp} size={22} />
                <span>vs {cp.name}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.vs}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-6 overflow-hidden rounded-3xl border border-hairline bg-card-gradient"
          >
            {/* Header */}
            <div className="relative overflow-hidden border-b border-hairline p-7 sm:p-9">
              <div
                className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
                style={{ background: p.accent }}
              />
              <div className="relative flex flex-wrap items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <PlatformMark p={PLATFORMS.catalyst} size={44} />
                    <span className="font-mono text-xs text-muted-foreground">vs</span>
                    <PlatformMark p={p} size={44} />
                  </div>
                  <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Catalyst <span className="text-muted-foreground">vs</span> {p.name}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
                    {detail.summary}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col gap-2">
                  <div className="rounded-lg border border-catalyst/30 bg-catalyst/[0.06] px-4 py-2.5">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-catalyst">Verdict</div>
                    <div className="mt-0.5 text-sm font-medium">{current.verdict}</div>
                  </div>
                  <div className="rounded-lg border border-hairline bg-background/30 px-4 py-2.5">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Best for</div>
                    <div className="mt-0.5 text-sm font-medium">{current.use}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="grid gap-px bg-hairline/60 sm:grid-cols-2">
              {/* Pros */}
              <div className="bg-card-gradient p-7 sm:p-8">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-catalyst">
                  <Check size={12} /> Where Catalyst wins
                </div>
                <ul className="mt-4 space-y-3">
                  {detail.catalystPros.map((pro) => (
                    <li key={pro} className="flex gap-3 text-sm">
                      <Check size={16} className="mt-0.5 shrink-0 text-catalyst" />
                      <span className="text-foreground/90">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons / trade-offs */}
              <div className="bg-card-gradient p-7 sm:p-8">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  <Minus size={12} /> Where {p.name} still wins
                </div>
                <ul className="mt-4 space-y-3">
                  {detail.catalystCons.map((con) => (
                    <li key={con} className="flex gap-3 text-sm">
                      <Minus size={16} className="mt-0.5 shrink-0 text-muted-foreground" />
                      <span className="text-foreground/80">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal use cases */}
              <div className="bg-card-gradient p-7 sm:p-8">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-catalyst">
                  <Target size={12} /> Pick Catalyst when
                </div>
                <ul className="mt-4 space-y-3">
                  {detail.idealUseCases.map((uc) => (
                    <li key={uc} className="flex gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-catalyst" />
                      <span className="text-foreground/90">{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="bg-card-gradient p-7 sm:p-8">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-catalyst">
                  <DollarSign size={12} /> Pricing notes
                </div>
                <div className="mt-4 space-y-3">
                  <div className="rounded-lg border border-catalyst/30 bg-catalyst/[0.06] p-3">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-catalyst">Catalyst</div>
                    <div className="mt-1 text-sm text-foreground/90">{detail.pricingNotes.catalyst}</div>
                  </div>
                  <div className="rounded-lg border border-hairline bg-background/30 p-3">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{p.name}</div>
                    <div className="mt-1 text-sm text-foreground/80">{detail.pricingNotes.competitor}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Migration steps */}
            <div className="border-t border-hairline bg-surface/30 p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-catalyst">
                  <GitBranch size={12} /> Migration from {p.name} → Catalyst
                </div>
                <a href="#migrate" className="hidden text-xs text-muted-foreground hover:text-foreground sm:inline-flex items-center gap-1">
                  All migration paths <ArrowRight size={12} />
                </a>
              </div>
              <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {detail.migrationSteps.map((step, i) => (
                  <li key={i} className="relative rounded-xl border border-hairline bg-background/40 p-4">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-catalyst">Step {i + 1}</div>
                    <div className="mt-1.5 text-sm text-foreground/90">{step}</div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a className="group inline-flex items-center gap-1.5 rounded-md bg-catalyst-gradient px-4 py-2 text-sm font-semibold text-catalyst-foreground shadow-glow hover:brightness-110">
                  Start migrating from {p.name} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a className="inline-flex items-center gap-1.5 rounded-md border border-hairline bg-surface/60 px-4 py-2 text-sm font-medium hover:bg-surface">
                  Read the full {p.name} guide <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function Migration() {
  const [open, setOpen] = useState<string | null>("supabase");
  return (
    <section id="migrate" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hairline to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Migration center"
          desc="Documented paths from the platforms developers actually use today."
        />

        <div className="mt-12 grid gap-4">
          {MIGRATIONS.map((m) => {
            const p = PLATFORMS[m.from];
            const isOpen = open === m.from;
            return (
              <motion.div
                key={m.from}
                layout
                className="overflow-hidden rounded-2xl border border-hairline bg-card-gradient"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : m.from)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <PlatformMark p={p} />
                  <div className="flex flex-1 items-center gap-3">
                    <span className="font-semibold">{p.name}</span>
                    <motion.div
                      animate={{ x: isOpen ? 4 : 0 }}
                      className="flex items-center gap-1 text-muted-foreground"
                    >
                      <span className="h-px w-8 bg-gradient-to-r from-hairline to-catalyst" />
                      <ArrowRight size={14} className="text-catalyst" />
                      <span className="h-px w-8 bg-gradient-to-r from-catalyst to-hairline" />
                    </motion.div>
                    <span className="font-semibold text-catalyst">Catalyst</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{m.steps.length} steps</span>
                  <ChevronRight size={16} className={`text-muted-foreground transition-transform ${isOpen ? "rotate-90" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-hairline px-5 py-5">
                        <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                          {m.steps.map((s, i) => (
                            <li key={i} className="relative rounded-xl border border-hairline bg-surface/60 p-4">
                              <div className="font-mono text-[10px] uppercase tracking-wider text-catalyst">Step {i + 1}</div>
                              <div className="mt-1.5 text-sm text-foreground">{s}</div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function Matrix() {
  const allCols = ["catalyst", "supabase", "firebase", "vercel", "aws", "render", "retool"];
  const [cols, setCols] = useState<string[]>(["catalyst", "supabase", "firebase", "vercel", "aws"]);

  const toggle = (id: string) => {
    if (id === "catalyst") return;
    setCols((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));
  };

  return (
    <section id="matrix" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Comparison matrix: The whole picture, side by side"
          desc="Toggle platforms in and out. Catalyst stays anchored."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {allCols.map((id) => {
            const active = cols.includes(id);
            const isCatalyst = id === "catalyst";
            return (
              <button
                key={id}
                onClick={() => toggle(id)}
                disabled={isCatalyst}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                  active
                    ? isCatalyst
                      ? "border-catalyst/50 bg-catalyst/10 text-catalyst"
                      : "border-foreground/30 bg-surface text-foreground"
                    : "border-hairline bg-surface/30 text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-catalyst" : "bg-muted-foreground/40"}`} />
                {PLATFORMS[id].name}
              </button>
            );
          })}
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-hairline bg-card-gradient">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-hairline">
                <th className="px-5 py-4 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Capability</th>
                {cols.map((id) => (
                  <th key={id} className={`px-5 py-4 text-left text-sm font-semibold ${id === "catalyst" ? "text-catalyst" : "text-foreground"}`}>
                    {PLATFORMS[id].name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATRIX.rows.map((r) => (
                <tr key={r.key} className="border-b border-hairline last:border-0 hover:bg-surface/40">
                  <td className="px-5 py-3.5 text-sm font-medium">{r.label}</td>
                  {cols.map((id) => {
                    const score = MATRIX.data[id]?.[r.key] ?? 0;
                    return (
                      <td key={id} className="px-5 py-3.5">
                        <ScoreBar score={score} accent={id === "catalyst"} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ScoreBar({ score, accent }: { score: number; accent?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className={`h-1.5 w-5 rounded-full ${
              n <= score
                ? accent ? "bg-catalyst" : "bg-foreground/70"
                : "bg-foreground/10"
            }`}
          />
        ))}
      </div>
      <span className="font-mono text-[10px] text-muted-foreground">{score}/5</span>
    </div>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-catalyst/20 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          <span className="text-gradient">Choose the platform</span>
          <br />
          that helps you ship faster.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          Compare. Evaluate. Migrate. Build.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a className="group inline-flex items-center gap-1.5 rounded-md bg-catalyst-gradient px-5 py-3 text-sm font-semibold text-catalyst-foreground shadow-glow hover:brightness-110">
            Start building on Catalyst <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a className="inline-flex items-center gap-1.5 rounded-md border border-hairline bg-surface/60 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-surface">
            Explore comparisons <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="mt-10 flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Zap size={12} className="text-catalyst"/> Deploy in 60s</span>
          <span className="inline-flex items-center gap-1.5"><Boxes size={12} className="text-catalyst"/> No credit card</span>
          <span className="inline-flex items-center gap-1.5"><Star size={12} className="text-catalyst"/> Free tier forever</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-catalyst-gradient">
            <Sparkles size={11} className="text-catalyst-foreground" />
          </span>
          Catalyst · the developer decision engine
        </div>
        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">Docs</a>
          <a href="#" className="hover:text-foreground">Changelog</a>
          <a href="#" className="hover:text-foreground">Pricing</a>
          <a href="#" className="inline-flex items-center gap-1 hover:text-foreground"><Github size={12} /> Github</a>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-catalyst">{eyebrow}</div> : null}
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      <p className="mt-3 text-base text-muted-foreground">{desc}</p>
    </div>
  );
}

function ComparePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <FeaturedComparisons />
        <Matrix />
        <PlatformUniverse />
        <CompareByBuild />
        <Migration />
        <WhySwitch />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
