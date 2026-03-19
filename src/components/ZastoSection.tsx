import { Target, Lightbulb, BookCheck, RefreshCw } from "lucide-react";

const prednosti = [
  { icon: Target, naslov: "Fokus na praktično znanje", opis: "Svaki kurs je dizajniran da vam pruži vještine primjenjive u stvarnom svijetu." },
  { icon: Lightbulb, naslov: "Moderni i relevantni kursevi", opis: "Pratimo trendove i ažuriramo sadržaj kako bi bio uvijek aktualan." },
  { icon: BookCheck, naslov: "Jednostavno objašnjeno", opis: "Gradivo je strukturisano tako da ga svako može razumjeti i pratiti." },
  { icon: RefreshCw, naslov: "Kontinuirano unapređenje", opis: "Konstantno unapređujemo sadržaj na osnovu povratnih informacija." },
];

const ZastoSection = () => (
  <section id="o-nama" className="py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Zašto baš Edusora?</h2>
      <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
        Ono što nas izdvaja od ostalih.
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {prednosti.map((p, i) => (
          <div key={p.naslov} className={`flex gap-5 glass-card p-6 hover-lift glow-gold-hover animate-fade-up-delay-${(i % 3) + 1}`}>
            <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center shrink-0">
              <p.icon className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{p.naslov}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.opis}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ZastoSection;
