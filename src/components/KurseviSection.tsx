import { BookOpen, Code, TrendingUp } from "lucide-react";

const kursevi = [
  {
    naziv: "Web Dizajn & Razvoj",
    opis: "Naučite kako kreirati moderne web stranice koristeći najnovije tehnologije.",
    status: "U pripremi",
    icon: Code,
  },
  {
    naziv: "Digitalni Marketing",
    opis: "Savladajte vještine digitalnog marketinga i društvenih mreža.",
    status: "U razvoju",
    icon: TrendingUp,
  },
  {
    naziv: "UI/UX Dizajn",
    opis: "Dizajnirajte korisničke interfejse koji oduševljavaju i konvertuju.",
    status: "Dolazi uskoro",
    icon: BookOpen,
  },
];

const statusColor: Record<string, string> = {
  "U pripremi": "bg-secondary/20 text-secondary dark:text-accent",
  "U razvoju": "bg-primary/10 text-primary",
  "Dolazi uskoro": "bg-muted text-muted-foreground",
};

const KurseviSection = () => (
  <section id="kursevi" className="py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Naši Kursevi</h2>
      <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
        Istražite kurseve koje pripremamo za vas.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {kursevi.map((k, i) => (
          <div
            key={k.naziv}
            className={`group glass-card p-8 hover-lift glow-gold-hover animate-fade-up-delay-${i + 1}`}
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <k.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{k.naziv}</h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{k.opis}</p>
            <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${statusColor[k.status]}`}>
              {k.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default KurseviSection;
