import { Heart, Banknote, Package, FileText } from "lucide-react";
import donationImg from "@/assets/donation-cta.jpg";

export function Donation() {
  return (
    <section id="doacao" className="py-24 md:py-32 bg-secondary/50">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-7 rounded-3xl bg-card border border-border p-10 md:p-14 shadow-soft">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Doações</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-foreground text-balance">
              Você já é um doador do Instituto Irmã Dulce?
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
              Qualquer valor faz diferença. Sua contribuição garante alimento, educação e acolhimento
              para centenas de pessoas todos os meses.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border p-5">
                <Banknote className="h-5 w-5 text-primary" />
                <p className="mt-3 font-semibold text-foreground">Doação financeira</p>
                <p className="mt-1 text-sm text-muted-foreground">PIX, transferência ou depósito bancário.</p>
              </div>
              <div className="rounded-2xl border border-border p-5">
                <Package className="h-5 w-5 text-primary" />
                <p className="mt-3 font-semibold text-foreground">Donativos</p>
                <p className="mt-1 text-sm text-muted-foreground">Alimentos, roupas, brinquedos e materiais.</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-border p-5">
              <FileText className="h-5 w-5 text-primary" />
              <p className="mt-3 font-semibold text-foreground">Doe sem gastar nada</p>
              <p className="mt-1 text-sm text-muted-foreground max-w-3xl">
                Você também pode apoiar o Instituto destinando seus créditos da Nota Fiscal Paulista. É uma forma simples de contribuir com nossos projetos sociais sem nenhum custo adicional para você.
              </p>
              <a
                href="#doacao"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Saiba como doar pela Nota Fiscal Paulista
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
              >
                <Heart className="h-4 w-4" /> Veja como doar
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Falar com o instituto
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative overflow-hidden rounded-3xl min-h-[20rem]">
            <img
              src={donationImg}
              alt="Mãos segurando coração simbolizando doação"
              loading="lazy"
              width={1600}
              height={900}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
              <p className="font-display text-2xl md:text-3xl leading-snug text-balance">
                Cada gesto se transforma em comida na mesa, abraço no acolhimento e oportunidade na escola.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
