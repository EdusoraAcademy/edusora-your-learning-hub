import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  { q: "Kada će kursevi biti dostupni?", a: "Planiramo lansiranje prvih kurseva u drugoj polovini 2026. godine. Pratite naše vijesti za tačan datum." },
  { q: "Da li će biti certifikata?", a: "Da! Svaki završen kurs dolazi sa certifikatom koji potvrđuje vaše stečeno znanje i vještine." },
  { q: "Kako se mogu prijaviti?", a: "Prijava će biti moguća putem e-pošte ili društvenih mreža čim kursevi budu dostupni. Za sada, pratite nas na društvenim mrežama." },
  { q: "Da li će biti besplatnih sadržaja?", a: "Apsolutno. Planiramo ponuditi besplatan uvodni sadržaj za svaki kurs, kao i besplatne resurse za učenje." },
];

const FAQSection = () => (
  <section className="py-24 bg-muted/30">
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Česta pitanja</h2>
      <p className="text-muted-foreground text-center mb-14">Pronađite odgovore na najčešća pitanja.</p>
      <Accordion type="single" collapsible className="space-y-3">
        {faqItems.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="glass-card px-5 glow-gold-hover border-0">
            <AccordionTrigger className="text-sm font-medium hover:no-underline">{item.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
