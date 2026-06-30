import { ArrowRight, Heart } from "lucide-react";
import heroAsset from "@/assets/irma-dulce-hero.webp.asset.json";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-dvh flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroAsset.url}
          alt="Irmã Dulce, protetora dos pobres e fundadora da obra social"
          width={900}
          height={506}
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>

      <div className="container-tight relative z-10 grid lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-8 text-primary-foreground animate-slide-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs md:text-sm font-medium border border-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            ONG sem fins lucrativos · há mais de 19 anos
          </span>

          <h1 className="mt-6 text-balance text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05]">
            Inspirados por <span className="italic text-highlight">Santa Dulce</span>,
            <br className="hidden sm:block" /> servimos quem mais precisa.
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
            Acolhemos crianças, adolescentes e idosos em situação de vulnerabilidade na zona sul de
            São Paulo, oferecendo educação, lazer, esporte, cultura e assistência social.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#doacao"
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3.5 text-sm font-semibold shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              <Heart className="h-4 w-4" /> Faça uma doação
            </a>
            <a
              href="#quem-somos"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 backdrop-blur px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-all"
            >
              Conheça a ONG <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 max-w-xl">
            {[
              { k: "+20", v: "anos de atuação" },
              { k: "+450", v: "vidas impactadas" },
              { k: "+4", v: "parcerias ativas" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-4">
                <dt className="font-display text-2xl md:text-3xl font-semibold text-white">{s.k}</dt>
                <dd className="mt-1 text-[11px] md:text-xs uppercase tracking-wider text-white/75">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}