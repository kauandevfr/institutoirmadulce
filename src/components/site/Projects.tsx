import { Baby, Utensils, Users2, HeartHandshake, GraduationCap, HandHeart, Sparkles, HomeIcon, Activity } from "lucide-react";

const projects = [
  {
    icon: Baby,
    title: "CEI Anjinhos de Dulce",
    tag: "Educação infantil",
    text: "Convênio inicial para 210 bebês e crianças de 0 a 3 anos no Jardim Horizonte Azul, na zona sul de São Paulo.",
  },
  {
    icon: Utensils,
    title: "Entrega de Marmitex",
    tag: "Combate à fome",
    text: "De segunda a sexta, entre 12h e 12h45, distribuímos centenas de almoços a moradores em situação de rua na Paróquia Nossa Senhora das Graças.",
  },
  {
    icon: Users2,
    title: "Projeto Intergeracional",
    tag: "Convivência",
    text: "Idosos a partir de 60 anos e crianças de 6 a 14 anos convivem em atividades que fortalecem vínculos comunitários.",
  },
  {
    icon: HomeIcon,
    title: "CAEI Esperanto",
    tag: "Acolhimento",
    text: "Acolhimento provisório para 50 idosos em situação de rua, garantindo proteção integral e atenção contínua.",
  },
  {
    icon: GraduationCap,
    title: "CCA Jardim Aurélio",
    tag: "Crianças e adolescentes",
    text: "Atividades lúdicas, culturais e esportivas para 90 crianças e adolescentes de 6 a 14 anos em situação de vulnerabilidade.",
  },
  {
    icon: Activity,
    title: "CDI Aconchego",
    tag: "Centro Dia",
    text: "Centro Dia para 30 idosos com diferentes graus de dependência, com suporte também a familiares e cuidadores.",
  },
  {
    icon: Sparkles,
    title: "Festa da Criança",
    tag: "Mobilização",
    text: "Celebração anual no Dia das Crianças com participação da sociedade através da doação de alimentos não perecíveis.",
  },
  {
    icon: HeartHandshake,
    title: "Cestas Básicas",
    tag: "Solidariedade",
    text: "Distribuição mensal de cestas básicas e mais de 400 marmitex em comunidades parceiras de toda a região.",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-32 bg-secondary/50">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Projetos</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-foreground text-balance">
              Programas que acolhem, educam e transformam.
            </h2>
          </div>
          <p className="md:max-w-sm text-muted-foreground">
            Cada projeto nasce de uma necessidade concreta da comunidade e é mantido com dedicação
            diária de equipes, parceiros e voluntários.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl bg-card border border-border p-7 hover:border-primary/40 hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <p.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-accent-foreground/80 bg-accent/15 rounded-full px-3 py-1">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl text-foreground leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
