import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Search, Command, CornerDownLeft } from "lucide-react";
import { PLATFORMS } from "@/lib/catalyst-data";
import { PlatformMark, ComparePreviewCard } from "./PlatformMark";

const SUGGEST_IDS = ["supabase", "firebase", "vercel", "render", "aws", "retool", "lovable", "cursor"];

export function DecisionSearch({
  selectedId,
  onSelect,
}: {
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const pool = SUGGEST_IDS.map((id) => PLATFORMS[id]);
    if (!q) return pool;
    return Object.values(PLATFORMS).filter((p) => p.id !== "catalyst" && p.name.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const choose = (id: string) => {
    onSelect(id);
    setQuery(PLATFORMS[id].name);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <motion.div
        layout
        className="relative rounded-2xl bg-card-gradient hairline shadow-card backdrop-blur-xl"
      >
        <div className="flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
          <Search size={18} className="text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
              setActive(0);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((i) => Math.min(i + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((i) => Math.max(i - 1, 0));
              } else if (e.key === "Enter" && results[active]) {
                choose(results[active].id);
              }
            }}
            placeholder="What are you comparing Catalyst against?"
            className="flex-1 bg-transparent text-base text-foreground placeholder:text-muted-foreground/70 outline-none sm:text-lg"
          />
          <kbd className="hidden items-center gap-1 rounded-md border border-hairline bg-background/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-flex">
            <Command size={10} /> K
          </kbd>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-2xl bg-card-gradient hairline shadow-card backdrop-blur-xl"
            >
              <div className="border-b border-hairline px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {query.trim() ? "Matches" : "Popular comparisons"}
              </div>
              <div className="max-h-80 overflow-auto p-1.5">
                {results.length === 0 && (
                  <div className="px-4 py-6 text-sm text-muted-foreground">No platforms match "{query}".</div>
                )}
                {results.map((p, i) => (
                  <button
                    key={p.id}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => choose(p.id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                      active === i ? "bg-accent" : "hover:bg-accent/60"
                    }`}
                  >
                    <PlatformMark p={p} size={32} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground">
                        Catalyst vs <span className="text-foreground">{p.name}</span>
                      </div>
                      <div className="truncate text-xs text-muted-foreground">{p.tagline}</div>
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground">{p.category}</span>
                    {active === i && <CornerDownLeft size={14} className="text-catalyst" />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence mode="wait">
        {selectedId && (
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="mt-4"
          >
            <ComparePreviewCard vsId={selectedId} onClose={() => { onSelect(null); setQuery(""); }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
