import { ArrowUpRight } from "lucide-react";
import elderly from "@/assets/project-elderly.jpg";
import youth from "@/assets/project-youth.jpg";

export function About() {
  return (
    <section id="quem-somos" className="py-24 md:py-32">
      <div className="container-tight grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={elderly}
              alt="Idosos atendidos pelo instituto"
              loading="lazy"
              width={1200}
              height={900}
              className="rounded-3xl aspect-[4/5] object-cover shadow-elegant"
            />
            <img
              src={youth}
              alt="Crianças e adolescentes em atividade"
              loading="lazy"
              width={1200}
              height={900}
              className="rounded-3xl aspect-[4/5] object-cover mt-10 shadow-elegant"
            />
          </div>
          <div className="absolute -bottom-6 -left-2 sm:left-6 rounded-2xl bg-card border border-border shadow-elegant px-5 py-4 max-w-[14rem]">
            <p className="font-display text-3xl text-primary">+20</p>
            <p className="text-xs text-muted-foreground">anos transformando vidas na zona sul de SP</p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Quem Somos</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-foreground text-balance">
            Com o coração cheio do amor de Deus, nos doamos aos mais necessitados.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              O Instituto Irmã Dulce é uma organização sem fins lucrativos que acredita que fazer a
              diferença é a regra e servir é o nosso dever.
            </p>
            <p>
              Além de propiciar educação da creche ao ensino regular, oferecemos assistência social,
              proteção ao consumidor, à ordem econômica, ao patrimônio público, artístico, histórico
              e paisagístico — sempre defendendo direitos humanos e qualquer interesse coletivo.
            </p>
            <p className="text-foreground font-medium">
              Há mais de vinte anos atendemos crianças, adolescentes e idosos com atividades de
              recreação, lazer, esporte e cultura.
            </p>
          </div>

          <a
            href="#projetos"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Venha fazer parte dessa mudança <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
