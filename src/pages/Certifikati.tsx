import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, CheckCircle, FileText } from "lucide-react";

const Certifikati = () => (
  <>
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-4">Certifikati</h1>
        <p className="text-muted-foreground text-center mb-14">
          Saznajte kako funkcioniše naš sistem certifikacije.
        </p>

        <div className="space-y-8">
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Certifikat po završetku kursa</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nakon što uspješno završite sve module i zadatke unutar kursa, automatski dobijate digitalni certifikat koji potvrđuje vaše znanje.
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Verifikacija certifikata</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Svaki certifikat ima jedinstven QR kod i verifikacijski link koji omogućava poslodavcima da provjere autentičnost.
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Portfolio integracija</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Certifikate možete dijeliti na LinkedIn-u, dodati u CV ili priložiti uz prijave za posao.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Certifikati;
