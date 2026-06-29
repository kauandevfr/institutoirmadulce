export function Inspiration() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-tight grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">A Bem Aventurada</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-foreground text-balance">
            Irmã Dulce — a inspiração de tudo que fazemos.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Irmã Dulce foi uma freira católica que dedicou sua vida a cuidar dos mais necessitados.
              Seu exemplo e suas atitudes são a nossa maior inspiração.
            </p>
            <p>
              Beatificada em 2011 pelo enviado especial do Papa Bento XVI, Dom Geraldo Majella Agnelo,
              em Salvador, foi canonizada em 13 de outubro de 2019 pelo Papa Francisco com o título de
              <span className="text-foreground font-medium"> Santa Dulce dos Pobres</span> — a primeira santa nascida no Brasil.
            </p>
            <p className="text-foreground italic font-display text-xl">
              “Viva a Santa Dulce dos Pobres!”
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-3xl bg-[var(--gradient-soft)] border border-border p-8 shadow-soft">
            <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-snug text-balance">
              “Fazer a diferença é a regra. Servir é o nosso dever.”
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-lg">
                ID
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">Instituto Irmã Dulce SP</p>
                <p className="text-muted-foreground">Compromisso desde 2005</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
