import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container-tight grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Fale Conosco</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-foreground text-balance">
            Deseja enviar donativos ou se voluntariar?
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Estamos prontos para receber sua mensagem, doação ou visita. Entre em contato pelos
            canais abaixo — respondemos em até 24 horas úteis.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { icon: Phone, label: "Telefone", value: "(11) 95289-0009", href: "tel:+5511952890009" },
              { icon: Mail, label: "E-mail", value: "institutoirmadulce1@gmail.com", href: "mailto:institutoirmadulce1@gmail.com" },
              { icon: MapPin, label: "Endereço", value: "Praça Santos Dias da Silva, 28 — Vila Damasceno, São Paulo · SP, 05864-210" },
              { icon: Clock, label: "Atendimento", value: "Segunda a sexta · 9h às 17h" },
            ].map((c) => (
              <li key={c.label} className="flex items-start gap-4">
                <div className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-primary-soft text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-foreground font-medium hover:text-primary transition-colors break-words">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{c.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form
          className="lg:col-span-7 rounded-3xl bg-card border border-border shadow-soft p-8 md:p-10 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent(`Contato site — ${data.get("nome")}`);
            const body = encodeURIComponent(
              `Nome: ${data.get("nome")}\nE-mail: ${data.get("email")}\nTelefone: ${data.get("telefone")}\n\n${data.get("mensagem")}`,
            );
            window.location.href = `mailto:institutoirmadulce1@gmail.com?subject=${subject}&body=${body}`;
          }}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field id="nome" label="Nome completo" required />
            <Field id="email" label="E-mail" type="email" required />
            <Field id="telefone" label="Telefone" />
            <Field id="assunto" label="Assunto" />
          </div>
          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              rows={5}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              placeholder="Como podemos ajudar?"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground mb-2">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
      />
    </div>
  );
}
