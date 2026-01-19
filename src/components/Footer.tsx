// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const pill =
    "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 hover:border-white/15 transition";
  const small =
    "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/10 hover:border-white/15 transition";
  const tag =
    "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200";

  const env = [
    { k: "OS", v: "Linux + Windows" },
    { k: "Focus", v: "fundamentals + labs" },
    { k: "Tools", v: "terminal • git • python" },
  ];

  const tags = ["Networking", "Linux", "Python", "CTFs (sometimes)"];

  return (
    <footer className="mt-12">
      <div className="mx-auto w-full max-w-[1100px] px-4 xl:px-8 pb-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.03] via-transparent to-transparent" />
            <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="relative p-6">
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="text-sm font-semibold text-white/90">Jaineel</div>
                <p className="mt-2 text-sm text-zinc-300">
                  Cyber now, CS goal. Keeping it practical.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href="/projects" className={pill}>Projects</Link>
                  <Link href="/about" className={pill}>About</Link>
                  <Link href="/contact" className={pill}>Contact</Link>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a href="#top" className={small}>Top</a>
                  <a href="mailto:your@email.com" className={small}>Email</a>
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className={small}>GitHub ↗</a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className={small}>LinkedIn ↗</a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-[11px] tracking-[0.18em] text-white/40">LAB ENVIRONMENT</div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {env.map((row) => (
                      <div key={row.k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <div className="text-xs text-white/55">{row.k}</div>
                        <div className="mt-2 text-sm text-zinc-200/90">{row.v}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((t) => <span key={t} className={tag}>{t}</span>)}
                  </div>

                  <div className="mt-4 text-xs text-zinc-500">
                    Swap these anytime — it’s just a snapshot.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10" />
          <div className="flex items-center justify-between px-6 py-4">
            <div className="text-xs text-white/35">© {year} Jaineel</div>
            <div className="text-xs text-white/35">v2</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
