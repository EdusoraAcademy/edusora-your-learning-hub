import { Calendar } from "lucide-react";

const vijesti = [
  { naslov: "Uskoro objava prvih kurseva", datum: "Mart 2026", opis: "Radimo na finalizaciji naših prvih kurseva. Očekujte lansiranje uskoro!" },
  { naslov: "Radimo na platformi", datum: "Februar 2026", opis: "Edusora platforma je u aktivnom razvoju. Pripremamo nešto posebno za vas." },
  { naslov: "Novi partneri se pridružuju", datum: "Januar 2026", opis: "Proširujemo naš tim mentora sa iskusnim profesionalcima iz industrije." },
];

const VijestiSection = () => (
  <section id="vijesti" className="py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Vijesti</h2>
      <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
        Budite u toku sa najnovijim dešavanjima.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {vijesti.map((v, i) => (
          <article key={v.naslov} className={`group glass-card p-6 hover-lift glow-gold-hover animate-fade-up-delay-${i + 1}`}>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <Calendar className="w-3.5 h-3.5" />
              {v.datum}
            </div>
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{v.naslov}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.opis}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default VijestiSection;
