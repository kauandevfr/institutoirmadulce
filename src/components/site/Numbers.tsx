const stats = [
  { k: "+20", v: "anos de atividades sociais" },
  { k: "+4", v: "parceiros e convênios em SP" },
  { k: "+350", v: "crianças e adolescentes beneficiados" },
  { k: "+100", v: "adultos e idosos beneficiados" },
];

export function Numbers() {
  return (
    <section id="numeros" className="py-24 md:py-32 bg-primary">
      <div className="container-tight">
        <div className="rounded-[2rem] bg-primary-foreground text-primary p-10 md:p-16 shadow-elegant relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-highlight/15 blur-3xl" />
          <div className="relative">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/70">Impacto</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-balance max-w-3xl">
              O instituto em números que importam.
            </h2>

            <dl className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.v} className="border-t border-primary/20 pt-5">
                  <dt className="font-display text-5xl md:text-6xl font-semibold tracking-tight">{s.k}</dt>
                  <dd className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}