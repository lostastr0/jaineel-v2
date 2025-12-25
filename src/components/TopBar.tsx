"use client";

export default function TopBar({ onMenu }: { onMenu: () => void }) {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-40">
      <div className="flex h-14 items-center justify-between px-4 bg-zinc-950/55 backdrop-blur">
        {/* Avatar */}
        <button
          aria-label="Profile"
          type="button"
          className="h-10 w-10 rounded-full bg-gradient-to-br from-white/80 to-white/20"
        />

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10 transition"
            aria-label="Search"
            type="button"
          >
            🔎
          </button>
          <button
            className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10 transition"
            aria-label="Theme"
            type="button"
          >
            ☾
          </button>
          <button
            onClick={onMenu}
            className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10 transition"
            aria-label="Menu"
            type="button"
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
}
