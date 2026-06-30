import meals from "@/assets/project-meals.jpeg";
import elderly from "@/assets/project-elderly.jpeg";
import daycare from "@/assets/project-daycare.jpeg";
import youth from "@/assets/project-youth.jpg";

const items = [
  { src: meals, label: "Distribuição de marmitex e cestas básicas", span: "lg:col-span-2" },
  { src: daycare, label: "CEI Anjinhos de Dulce", span: "" },
  { src: youth, label: "Atividades no CCA Jardim Aurélio", span: "" },
  { src: elderly, label: "Acolhimento de idosos no CAEI Esperanto", span: "lg:col-span-2" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-secondary/50">
      <div className="container-tight">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Galeria</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-foreground text-balance">
            Momentos que contam a nossa história.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-3xl ${it.span} aspect-[4/3]`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                width={1200}
                height={900}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 right-5 text-white font-medium">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
