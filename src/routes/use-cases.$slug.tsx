import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, GitBranch, Layers, Sparkles, Target, Workflow } from "lucide-react";
import { USE_CASES, USE_CASE_DETAILS, PLATFORMS } from "@/lib/catalyst-data";
import { PlatformMark } from "@/components/catalyst/PlatformMark";

export const Route = createFileRoute("/use-cases/$slug")({
  loader: ({ params }) => {
    const useCase = USE_CASES.find((u) => u.id === params.slug);
    const detail = useCase ? USE_CASE_DETAILS[useCase.id] : undefined;
    if (!useCase || !detail) throw notFound();
    return { useCase, detail };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.useCase.title ?? "Use case";
    const desc = loaderData?.detail.tagline ?? "Build it on Catalyst.";
    return {
      meta: [
        { title: `${title} on Catalyst — ${desc}` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} on Catalyst` },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: UseCasePage,
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-lg border border-hairline px-4 py-2 text-sm"
        >Retry</button>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-2xl font-semibold">Use case not found</h1>
      <p className="mt-2 text-muted-foreground">We don't have a tailored breakdown for that one yet.</p>
      <Link to="/" className="mt-6 inline-flex items-center gap-2 text-sm text-catalyst">
        <ArrowLeft size={14} /> Back home
      </Link>
    </div>
  ),
});

function UseCasePage() {
  const { useCase, detail } = Route.useLoaderData();

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative border-b border-hairline">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
          <Link
            to="/"
            hash="usecase"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={14} /> All use cases
          </Link>

          <div className="mt-6 font-mono text-xs uppercase tracking-wider text-catalyst">
            Build it on Catalyst
          </div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {useCase.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {detail.tagline}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/80">
            {detail.description}
          </p>
        </div>
      </section>

      {/* Catalyst stack */}
      <Section
        eyebrow="01 · The Catalyst stack"
        title="What you'll actually use"
        icon={<Layers size={16} />}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {detail.catalystStack.map((s) => (
            <div key={s.title} className="rounded-2xl border border-hairline bg-surface/40 p-5">
              <div className="text-sm font-semibold">{s.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Architecture */}
      <Section
        eyebrow="02 · Reference architecture"
        title="How the pieces fit"
        icon={<Workflow size={16} />}
      >
        <ol className="space-y-3">
          {detail.architecture.map((a, i) => (
            <li key={i} className="flex gap-4 rounded-2xl border border-hairline bg-surface/40 p-4">
              <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-catalyst/15 font-mono text-xs text-catalyst">
                {i + 1}
              </div>
              <div className="text-sm text-foreground/85">{a}</div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Challenges */}
      <Section
        eyebrow="03 · What usually breaks"
        title="Problems Catalyst solves for you"
        icon={<Target size={16} />}
      >
        <div className="grid gap-3 md:grid-cols-2">
          {detail.challenges.map((c) => (
            <div key={c.problem} className="rounded-2xl border border-hairline bg-card-gradient p-5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Problem</div>
              <div className="mt-1 text-sm font-semibold">{c.problem}</div>
              <div className="mt-4 font-mono text-[11px] uppercase tracking-wider text-catalyst">Solution</div>
              <div className="mt-1 text-sm text-foreground/85">{c.solution}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Migration */}
      <Section
        eyebrow="04 · Migration notes"
        title="How teams move over"
        icon={<GitBranch size={16} />}
      >
        <ol className="overflow-hidden rounded-2xl border border-hairline">
          {detail.migrationNotes.map((step, i) => (
            <li
              key={i}
              className={`flex gap-4 p-4 ${i !== 0 ? "border-t border-hairline" : ""} bg-surface/30`}
            >
              <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent font-mono text-xs">
                {i + 1}
              </div>
              <div className="text-sm text-foreground/85">{step}</div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Recommended for */}
      <Section
        eyebrow="05 · Is this you?"
        title="Recommended for"
        icon={<Sparkles size={16} />}
      >
        <ul className="grid gap-2 sm:grid-cols-2">
          {detail.recommendedFor.map((r) => (
            <li key={r} className="flex items-start gap-3 rounded-xl border border-hairline bg-surface/40 p-4 text-sm">
              <Check size={16} className="mt-0.5 shrink-0 text-catalyst" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Comparisons */}
      <Section
        eyebrow="06 · How Catalyst compares"
        title="Platforms people weigh against Catalyst here"
        icon={<ArrowUpRight size={16} />}
      >
        <div className="grid gap-3 md:grid-cols-3">
          {useCase.comparisons.map((id) => {
            const p = PLATFORMS[id];
            if (!p) return null;
            return (
              <Link
                key={id}
                to="/"
                hash="head-to-head"
                className="flex items-center justify-between rounded-2xl border border-hairline bg-surface/40 p-4 transition hover:bg-card-gradient"
              >
                <div className="flex items-center gap-3">
                  <PlatformMark p={p} size={32} />
                  <div>
                    <div className="text-sm font-medium">Catalyst vs {p.name}</div>
                    <div className="text-xs text-muted-foreground">{p.tagline}</div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground" />
              </Link>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="rounded-3xl border border-hairline bg-card-gradient p-10">
            <h2 className="text-2xl font-semibold sm:text-3xl">Ready to ship {useCase.title.toLowerCase()}?</h2>
            <p className="mt-3 text-muted-foreground">Start free, $250 in credits, no credit card.</p>
            <a
              href="https://catalyst.zoho.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-catalyst px-5 py-3 text-sm font-medium text-background"
            >
              Start on Catalyst <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  icon,
  children,
}: {
  eyebrow: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-hairline py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-catalyst">
          {icon}
          <span>{eyebrow}</span>
        </div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
