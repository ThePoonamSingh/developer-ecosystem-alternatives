import { PLATFORMS, type Platform } from "@/lib/catalyst-data";
import { motion } from "motion/react";
import { ArrowRight, Check, X } from "lucide-react";

export function PlatformMark({ p, size = 36 }: { p: Platform; size?: number }) {
  const initials = p.name === "Google Cloud" ? "GC" : p.name.slice(0, 2);
  return (
    <div
      className="grid place-items-center rounded-lg font-mono text-[11px] font-semibold tracking-tight"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, color-mix(in oklab, ${p.accent} 25%, transparent), color-mix(in oklab, ${p.accent} 10%, transparent))`,
        color: p.accent,
        boxShadow: `inset 0 0 0 1px color-mix(in oklab, ${p.accent} 35%, transparent)`,
      }}
      aria-hidden
    >
      {initials.toUpperCase()}
    </div>
  );
}

export function ComparePreviewCard({ vsId, onClose }: { vsId: string; onClose?: () => void }) {
  const a = PLATFORMS.catalyst;
  const b = PLATFORMS[vsId];
  if (!b) return null;

  const rows = [
    { label: "AI-native primitives", a: true, b: false },
    { label: "Managed Postgres", a: true, b: vsId === "supabase" || vsId === "aws" },
    { label: "Edge hosting included", a: true, b: vsId === "vercel" || vsId === "netlify" },
    { label: "One SDK, full stack", a: true, b: false },
    { label: "Zero infra ops", a: true, b: vsId !== "aws" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl bg-card-gradient hairline shadow-card"
    >
      <div className="absolute inset-0 bg-dotgrid opacity-30" />
      <div className="relative p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <PlatformMark p={a} />
            <span className="font-mono text-xs text-muted-foreground">vs</span>
            <PlatformMark p={b} />
            <div className="ml-2">
              <div className="text-sm font-semibold">Catalyst vs {b.name}</div>
              <div className="text-xs text-muted-foreground">{b.tagline}</div>
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
              aria-label="Close"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto_auto] gap-x-4 gap-y-2 text-sm">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Capability</div>
          <div className="text-xs uppercase tracking-wider text-catalyst">Catalyst</div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">{b.name}</div>
          {rows.map((r) => (
            <div key={r.label} className="contents">
              <div className="border-t border-hairline py-2 text-foreground/90">{r.label}</div>
              <div className="border-t border-hairline py-2 text-center">
                {r.a ? <Check size={16} className="mx-auto text-catalyst" /> : <X size={16} className="mx-auto text-muted-foreground" />}
              </div>
              <div className="border-t border-hairline py-2 text-center">
                {r.b ? <Check size={16} className="mx-auto text-foreground/70" /> : <X size={16} className="mx-auto text-muted-foreground/50" />}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">verdict · catalyst wins on AI + DX</span>
          <button className="group inline-flex items-center gap-1.5 text-sm font-medium text-catalyst hover:text-catalyst-glow">
            Full comparison
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
