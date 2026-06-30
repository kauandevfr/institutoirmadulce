import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Download,
  Smartphone,
  LogIn,
  Gift,
  QrCode,
  CheckCircle2,
  Sparkles,
  Heart,
  Clock,
  Repeat,
  HandHeart,
  Receipt,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import nfpHero from "@/assets/nfp-hero.jpg";

const NFP_ANDROID =
  "https://play.google.com/store/apps/details?id=br.gov.sp.fazenda.dec.nfp";
const NFP_IOS =
  "https://apps.apple.com/br/app/nota-fiscal-paulista/id1438815830";
const NFP_WEB = "https://www.nfp.fazenda.sp.gov.br/";

function getStoreUrl() {
  if (typeof navigator === "undefined") return NFP_WEB;
  const ua = navigator.userAgent || "";
  if (/android/i.test(ua)) return NFP_ANDROID;
  if (/iPad|iPhone|iPod/i.test(ua)) return NFP_IOS;
  return NFP_WEB;
}

function DownloadButton({
  variant = "primary",
  children,
}: {
  variant?: "primary" | "ghost";
  children: React.ReactNode;
}) {
  const [href, setHref] = useState(NFP_WEB);
  useEffect(() => setHref(getStoreUrl()), []);
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5";
  const cls =
    variant === "primary"
      ? `${base} bg-primary text-primary-foreground shadow-soft hover:shadow-elegant`
      : `${base} border border-border text-foreground hover:bg-foreground hover:text-background`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      <Download className="h-4 w-4" /> {children}
    </a>
  );
}

export const Route = createFileRoute("/nota-fiscal-paulista")({
  head: () => ({
    meta: [
      { title: "Doe pela Nota Fiscal Paulista — Instituto Irmã Dulce SP" },
      {
        name: "description",
        content:
          "Ajude o Instituto Irmã Dulce SP sem gastar nada. Aprenda passo a passo como doar seus cupons da Nota Fiscal Paulista e apoiar projetos sociais.",
      },
      { property: "og:title", content: "Doe pela Nota Fiscal Paulista — Instituto Irmã Dulce SP" },
      {
        property: "og:description",
        content:
          "Transforme seus cupons fiscais em apoio aos projetos sociais do Instituto Irmã Dulce. Doação gratuita e simples.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/nota-fiscal-paulista" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "A doação tem algum custo?",
              acceptedAnswer: { "@type": "Answer", text: "Não. A doação é totalmente gratuita." },
            },
            {
              "@type": "Question",
              name: "Preciso informar meu CPF na compra?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não. Você pode doar o cupom fiscal diretamente ao Instituto utilizando o aplicativo da Nota Fiscal Paulista.",
              },
            },
            {
              "@type": "Question",
              name: "Posso doar quantas notas quiser?",
              acceptedAnswer: { "@type": "Answer", text: "Sim. Você pode doar sempre que desejar." },
            },
            {
              "@type": "Question",
              name: "Quem recebe os créditos?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Os créditos gerados pelas notas fiscais doadas são destinados ao Instituto, contribuindo para a manutenção e ampliação dos projetos sociais.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: NotaFiscalPaulistaPage,
});

const steps = [
  {
    icon: Smartphone,
    title: "Baixe o aplicativo",
    text: "Abra a Play Store (Android) ou a App Store (iPhone), procure por Nota Fiscal Paulista e instale o aplicativo oficial da Secretaria da Fazenda do Estado de São Paulo.",
    cta: true,
  },
  {
    icon: LogIn,
    title: "Abra o aplicativo",
    text: "Faça login na sua conta da Nota Fiscal Paulista utilizando seu cadastro.",
  },
  {
    icon: Gift,
    title: 'Escolha "Doar Cupom"',
    text: "No menu principal do aplicativo, toque na opção Doar Cupom.",
  },
  {
    icon: QrCode,
    title: "Escaneie o QR Code",
    text: "Selecione Ler QR Code e aponte a câmera do celular para o QR Code da nota fiscal.",
  },
];

const benefits = [
  { icon: CheckCircle2, text: "Você não paga nada." },
  { icon: HandHeart, text: "Sua nota gera recursos para projetos sociais." },
  { icon: Clock, text: "Processo rápido e simples." },
  { icon: Repeat, text: "Pode doar sempre que desejar." },
  { icon: Sparkles, text: "Um pequeno gesto faz uma grande diferença." },
];

const faqs = [
  { q: "A doação tem algum custo?", a: "Não. A doação é totalmente gratuita." },
  {
    q: "Preciso informar meu CPF na compra?",
    a: "Não. Você pode doar o cupom fiscal diretamente ao Instituto utilizando o aplicativo da Nota Fiscal Paulista.",
  },
  { q: "Posso doar quantas notas quiser?", a: "Sim. Você pode doar sempre que desejar." },
  {
    q: "Quem recebe os créditos?",
    a: "Os créditos gerados pelas notas fiscais doadas são destinados ao Instituto, contribuindo para a manutenção e ampliação dos projetos sociais.",
  },
];

function NotaFiscalPaulistaPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar forceSolid />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-soft/60 via-background to-background" />
          <div className="container-tight grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-slide-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase">
                <Receipt className="h-3.5 w-3.5" /> Nota Fiscal Paulista
              </span>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-balance">
                Doe pela <span className="italic text-primary">Nota Fiscal Paulista</span>
              </h1>
              <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Ajude o Instituto sem gastar nada. Transforme seus cupons fiscais em apoio aos
                nossos projetos sociais e contribua para mudar vidas.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <DownloadButton>Baixar o aplicativo Nota Fiscal Paulista</DownloadButton>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  Como funciona <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 animate-fade-in">
              <div className="relative rounded-3xl bg-card border border-border p-6 shadow-elegant">
                <img
                  src={nfpHero}
                  alt="Ilustração de celular escaneando QR Code de uma nota fiscal com coração simbolizando solidariedade"
                  width={1024}
                  height={1024}
                  className="w-full h-auto rounded-2xl"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="py-24 md:py-28 bg-secondary/50">
          <div className="container-tight grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Entenda
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-balance">
                Como funciona?
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                A Nota Fiscal Paulista é um programa do Governo do Estado de São Paulo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ao realizar uma compra, você pode optar por doar seu cupom fiscal para uma
                instituição assistencial. Os créditos gerados por essa nota são destinados ao
                Instituto, ajudando a financiar projetos sociais sem gerar nenhum custo adicional
                para você.
              </p>
              <div className="rounded-2xl border border-primary/20 bg-primary-soft/60 p-6">
                <p className="font-display text-xl md:text-2xl text-foreground leading-snug">
                  Você ajuda o Instituto sem gastar absolutamente nada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Passo a passo */}
        <section className="py-24 md:py-32">
          <div className="container-tight">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Passo a passo
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-balance">
                Quatro passos simples para doar.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Em poucos minutos você configura o aplicativo e começa a transformar seus cupons
                em apoio direto ao Instituto.
              </p>
            </div>

            <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="group relative rounded-2xl bg-card border border-border p-7 hover:border-primary/40 hover:shadow-elegant transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid place-items-center h-12 w-12 rounded-xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <s.icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <span className="font-display text-3xl text-primary/30 group-hover:text-primary/70 transition-colors">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl leading-snug">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                  {s.cta && (
                    <div className="mt-5">
                      <DownloadButton variant="ghost">Baixar aplicativo</DownloadButton>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-24 md:py-28 bg-secondary/50">
          <div className="container-tight">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Benefícios
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-balance">
                Por que doar pela Nota Fiscal Paulista?
              </h2>
            </div>
            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => (
                <li
                  key={b.text}
                  className="flex items-start gap-4 rounded-2xl bg-card border border-border p-6 hover:border-primary/40 hover:-translate-y-1 transition-all"
                >
                  <span className="grid place-items-center h-11 w-11 rounded-xl bg-primary-soft text-primary shrink-0">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <p className="text-foreground font-medium leading-relaxed pt-1.5">{b.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32">
          <div className="container-tight grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Dúvidas frequentes
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-balance">
                Perguntas Frequentes
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Reunimos as principais dúvidas para que você se sinta seguro ao doar.
              </p>
            </div>
            <div className="lg:col-span-7">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={f.q}
                    value={`item-${i}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="text-base md:text-lg font-display font-medium text-foreground py-5 hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Chamada Final */}
        <section className="py-24 md:py-32 bg-secondary/50">
          <div className="container-tight">
            <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-10 md:p-16 shadow-soft">
              <div
                className="absolute inset-0 -z-10 opacity-90"
                style={{ background: "var(--gradient-hero)" }}
                aria-hidden
              />
              <div className="max-w-3xl text-primary-foreground">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase border border-white/20">
                  <Heart className="h-3.5 w-3.5" /> Faça parte
                </span>
                <h2 className="mt-6 font-display text-3xl md:text-5xl font-semibold leading-tight text-balance">
                  Sua nota pode transformar vidas.
                </h2>
                <p className="mt-5 text-white/85 leading-relaxed text-lg max-w-2xl">
                  Cada cupom fiscal doado ajuda o Instituto a continuar promovendo ações sociais
                  e atendendo quem mais precisa. Uma atitude simples pode gerar um grande impacto.
                </p>
                <div className="mt-9">
                  <DownloadButtonOnDark />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function DownloadButtonOnDark() {
  const [href, setHref] = useState(NFP_WEB);
  useEffect(() => setHref(getStoreUrl()), []);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-4 text-sm font-semibold shadow-elegant hover:-translate-y-0.5 transition-all"
    >
      <Download className="h-4 w-4" /> Baixar o aplicativo e começar a doar
    </a>
  );
}