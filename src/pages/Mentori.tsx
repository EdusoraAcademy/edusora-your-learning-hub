import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User } from "lucide-react";

const mentori = [
  { ime: "Tarik Hadžirović", spec: "Suosnivač | Strategija, Logistika & IT", opis: `Tarik je onaj koji se brine da sve u Edusori funkcioniše besprijekorno – od serverske infrastrukture do dugoročne vizije. Kao osnivač platforme Blindography, Tarik je dokazao da tehnologija može i mora imati svrhu: rušenje prepreka za slijepe i slabovidne osobe.\nNjegova misija: Izbaciti suvišne informacije iz procesa učenja.\nZašto Edusora? "Dosta mi je neadekvatnih predavača i materijala koji skupljaju prašinu. Ovdje gradimo sistem koji je direktan, tehnički potkovan i odmah primjenjiv."` },
  { ime: "Dani Husić", spec: "Suosnivač | Dizajn, Psihologija & Vizuelni identitet", opis: "Dani je kreativna snaga Edusore. Sa nepunih 18 godina, on već definiše standarde modernog dizajna i razumije kako psihologija utiče na naše navike i uspjeh. Njegova svestranost ide od umjetnosti i crtanja, pa sve do vrhunske discipline – što dokazuje i treće mjesto na Međunarodnom takmičenju u masaži.\nNjegova specijalnost: Estetika koja inspiriše i definisanje ciljeva koji se ostvaruju.\nZašto Edusora? Dani vjeruje da je pokretanje ove akademije najbolji dokaz da se vizija može pretvoriti u stvarnost bez obzira na godine. On je tu da vam pomogne da vaše ideje dobiju oblik i strukturu." }
];

const Mentori = () => (
  <>
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Naši Mentori</h1>
        <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
          Upoznajte tim iza Edusore
          Mi ne prodajemo diplome, mi prenosimo vještine koje koristimo svakodnevno.
          Edusora nije nastala u kabinetu, već iz potrebe da učenje napokon dobije smisao. Mi smo generacija koja ne želi čekati godinama da bi počela stvarati. Zato smo tu – da vam skratimo put i damo alate koji rade u stvarnom svijetu.
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
