import Container from "@/components/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400/70 to-indigo-400/70" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">LostAstr0</div>
              <div className="text-xs text-zinc-400">Cyber → CS</div>
            </div>
          </div>

          {/* Right */}
          <nav className="flex items-center gap-4 text-sm text-zinc-300">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
