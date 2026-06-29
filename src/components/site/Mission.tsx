import { ShieldCheck, Eye, Sparkles } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Missão",
    text: "Acolher, cuidar, educar e promover, oferecendo lazer, esporte, cultura e assistência social.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Servir os mais necessitados em parceria com o setor público e privado, com projetos sem fins lucrativos.",
  },
  {
    icon: Sparkles,
    title: "Valores",
    text: "Ética, respeito, dedicação e perseverança em cada gesto e em cada projeto que realizamos.",
  },
];

export function Mission() {
  return (
    <section className="py-24 md:py-32 bg-[var(--gradient-soft)]">
      <div className="container-tight">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Princípios</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-foreground text-balance">
            A vida de Santa Dulce dos Pobres foi dedicada aos humildes — e nós também.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative rounded-3xl bg-card p-8 border border-border shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="grid place-items-center h-14 w-14 rounded-2xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <it.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground">{it.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
