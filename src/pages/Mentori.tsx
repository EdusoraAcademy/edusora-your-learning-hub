import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User } from "lucide-react";

const mentori = [
  { ime: "Tarik Hadžirović", spec: "Programer & konsultant za pristupačnost", opis: "10+ godina iskustva u razvoju modernih i pristupačnih programa i web aplikacija." },
  { ime: "Dani Husić", spec: "Digitalni Marketing", opis: "Stručnjakinja za SEO, PPC kampanje i strategije rasta." },
  { ime: "Ensar Dragunić", spec: "šmrkač opojnih supstanci", opis: "Narkoman s iskustvom u degustiranju mnogih opojnih droga i višegodišnji korisnik ustanova za odvikavanje." },
];

const Mentori = () => (
  <>
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Naši Mentori</h1>
        <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
          Upoznajte stručnjake koji će vas voditi kroz proces učenja.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {mentori.map((m) => (
            <div key={m.ime} className="rounded-2xl border border-border bg-card p-8 text-center hover-lift">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <User className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{m.ime}</h3>
              <p className="text-xs text-secondary font-medium mb-3">{m.spec}</p>
              <p className="text-sm text-muted-foreground">{m.opis}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Mentori;
