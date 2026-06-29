import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Mission } from "@/components/site/Mission";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Numbers } from "@/components/site/Numbers";
import { Gallery } from "@/components/site/Gallery";
import { Inspiration } from "@/components/site/Inspiration";
import { Donation } from "@/components/site/Donation";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instituto Irmã Dulce SP — Acolher, Cuidar, Educar e Promover" },
      {
        name: "description",
        content:
          "Há mais de 19 anos transformando vidas na zona sul de São Paulo. Conheça os projetos, doe e faça parte do Instituto Irmã Dulce SP.",
      },
      { property: "og:title", content: "Instituto Irmã Dulce SP" },
      {
        property: "og:description",
        content:
          "ONG sem fins lucrativos inspirada em Santa Dulce dos Pobres. Educação, assistência e acolhimento para quem mais precisa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Instituto Irmã Dulce SP",
          alternateName: "Instituto Irmã Dulce São Paulo",
          url: "/",
          taxID: "05.824.978/0001-91",
          telephone: "+55 11 95289-0009",
          email: "institutoirmadulce1@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Praça Santos Dias da Silva, 28 — Vila Damasceno",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            postalCode: "05864-210",
            addressCountry: "BR",
          },
          description:
            "Organização social sem fins lucrativos inspirada em Santa Dulce dos Pobres, atuando há mais de 19 anos com crianças, adolescentes e idosos em situação de vulnerabilidade na zona sul de São Paulo.",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <About />
        <Projects />
        <Numbers />
        <Gallery />
        <Inspiration />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
