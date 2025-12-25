"use client";

export default function HeaderOverlay({
  onMenu,
  isMenuOpen,
}: {
  onMenu: () => void;
  isMenuOpen: boolean;
}) {
  return (
    <div
      className={`xl:hidden fixed inset-x-0 top-0 z-40 ${
        isMenuOpen ? "pointer-events-none opacity-0" : "pointer-events-none opacity-100"
      } transition-opacity duration-200`}
    >
      <div className="flex items-start justify-between px-4 pt-[max(0.9rem,env(safe-area-inset-top))]">
        {/* avatar */}
        <button
          type="button"
          aria-label="Profile"
          className="pointer-events-auto h-10 w-10 rounded-full bg-gradient-to-br from-white/80 to-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
        />

        {/* actions */}
        <div className="pointer-events-auto flex items-center gap-2">
          {[
            { label: "Search", icon: "🔎", onClick: undefined as any },
            { label: "Theme", icon: "☾", onClick: undefined as any },
          ].map((b) => (
            <button
              key={b.label}
              type="button"
              aria-label={b.label}
              className="h-10 w-10 rounded-full border border-white/10 bg-white/6 backdrop-blur-md text-zinc-200 hover:bg-white/12 transition shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              {b.icon}
            </button>
          ))}

          <button
            type="button"
            aria-label="Menu"
            onClick={onMenu}
            className="h-10 w-10 rounded-full border border-white/10 bg-white/6 backdrop-blur-md text-zinc-200 hover:bg-white/12 transition shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
}
