import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png.asset.json";

const links = [
  { href: "/#inicio", label: "Início" },
  { href: "/#quem-somos", label: "Quem Somos" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#numeros", label: "Impacto" },
  { href: "/#galeria", label: "Galeria" },
  { href: "/#contato", label: "Contato" },
];

type NavbarProps = {
  forceSolid?: boolean;
};

export function Navbar({ forceSolid = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const solid = forceSolid || scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${solid
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
        }`}
    >
      <div className="container-tight flex items-center justify-between h-24 md:h-28">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={logoAsset.url}
            alt="Instituto Irmã Dulce SP"
            className="h-20 w-20 md:h-24 md:w-24 rounded-full object-contain bg-white transition-transform group-hover:scale-105"
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className={`font-display text-base md:text-lg font-semibold transition-colors ${solid ? "text-foreground" : "text-white"}`}>Instituto Irmã Dulce</span>
            <span className={`text-[10px] md:text-xs uppercase tracking-[0.18em] transition-colors ${solid ? "text-muted-foreground" : "text-white/80"}`}>São Paulo</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-md ${solid ? "text-foreground/75 hover:text-primary" : "text-white/85 hover:text-white"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#doacao"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5"
          >
            <Heart className="h-4 w-4" /> Doar agora
          </a>
        </div>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center h-11 w-11 rounded-lg border border-border bg-background/80"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="container-tight py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base font-medium text-foreground/80 hover:bg-muted rounded-lg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#doacao"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Heart className="h-4 w-4" /> Doar agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}