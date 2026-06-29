import { useState } from "react";
import { Heart, Banknote, Package, FileText, Copy, Check, Landmark, QrCode } from "lucide-react";
import donationImg from "@/assets/donation-cta.jpg";

const PIX_KEY = "05.824.978/0001-91";
const BANK_INFO = "Agência: 4215-3 | Conta Corrente: 42716-0";

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };
  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-xs font-semibold shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copiado!" : label}
    </button>
  );
}

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
                href="/nota-fiscal-paulista"
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

        {/* Outras formas de doar */}
        <div className="mt-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Outras formas de doar
            </span>
            <h3 className="mt-3 font-display text-2xl md:text-4xl font-semibold text-foreground text-balance">
              Escolha a forma que for mais prática para você.
            </h3>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {/* PIX */}
            <article className="rounded-3xl bg-card border border-border p-8 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-primary-soft text-primary">
                  <QrCode className="h-5 w-5" />
                </span>
                <h4 className="font-display text-xl text-foreground">Doe via PIX</h4>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Você também pode contribuir realizando uma doação via PIX. Toda contribuição ajuda o
                Instituto a manter e ampliar seus projetos sociais.
              </p>
              <div className="mt-5 rounded-2xl border border-border bg-secondary/50 p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Chave PIX · CNPJ
                </p>
                <p className="mt-2 font-display text-lg md:text-xl text-foreground break-all">
                  {PIX_KEY}
                </p>
              </div>
              <div className="mt-5">
                <CopyButton value={PIX_KEY} label="Copiar chave PIX" />
              </div>
            </article>

            {/* Transferência Bancária */}
            <article className="rounded-3xl bg-card border border-border p-8 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-primary-soft text-primary">
                  <Landmark className="h-5 w-5" />
                </span>
                <h4 className="font-display text-xl text-foreground">Transferência Bancária</h4>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Caso prefira, você também pode realizar sua doação por transferência bancária.
              </p>
              <div className="mt-5 rounded-2xl border border-border bg-secondary/50 p-5 space-y-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Banco</p>
                  <p className="mt-1 text-sm text-muted-foreground italic">A ser informado em breve</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Agência</p>
                    <p className="mt-1 font-display text-lg text-foreground">4215-3</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Conta Corrente</p>
                    <p className="mt-1 font-display text-lg text-foreground">42716-0</p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <CopyButton value={BANK_INFO} label="Copiar dados bancários" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
