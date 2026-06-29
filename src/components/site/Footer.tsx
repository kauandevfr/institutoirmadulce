import { Heart } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="container-tight grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-14 w-14 rounded-xl bg-background/10 p-1.5">
              <img src={logoAsset.url} alt="Instituto Irmã Dulce SP" className="h-full w-full object-contain" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold">Instituto Irmã Dulce SP</p>
              <p className="text-xs text-background/60">CNPJ: 05.824.978/0001-91</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-background/70 leading-relaxed max-w-sm">
            Organização social sem fins lucrativos inspirada em Santa Dulce dos Pobres, atuando há
            mais de 19 anos na zona sul de São Paulo.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-background/50">Navegação</p>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["#inicio", "Início"],
              ["#quem-somos", "Quem somos"],
              ["#projetos", "Projetos"],
              ["#galeria", "Galeria"],
              ["#doacao", "Doações"],
              ["#contato", "Contato"],
            ].map(([h, l]) => (
              <li key={h}>
                <a href={h} className="text-background/75 hover:text-background transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-background/50">Contato</p>
          <ul className="mt-5 space-y-3 text-sm text-background/75">
            <li>Tel: <a className="hover:text-background" href="tel:+5511952890009">(11) 95289-0009</a></li>
            <li>
              <a className="hover:text-background break-all" href="mailto:institutoirmadulce1@gmail.com">
                institutoirmadulce1@gmail.com
              </a>
            </li>
            <li>Praça Santos Dias da Silva, 28 — Vila Damasceno</li>
            <li>São Paulo · SP, 05864-210</li>
          </ul>
        </div>
      </div>

      <div className="container-tight mt-14 pt-8 border-t border-background/10 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-background/55">
        <p>© {new Date().getFullYear()} Instituto Irmã Dulce SP. Todos os direitos reservados.</p>
        <p>Feito com <Heart className="inline h-3 w-3 text-primary" /> para servir.</p>
      </div>
    </footer>
  );
}
