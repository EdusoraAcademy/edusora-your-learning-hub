import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PolitikaPrivatnosti = () => (
  <>
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl prose prose-sm dark:prose-invert">
        <h1 className="text-4xl font-bold text-center mb-10 not-prose">Politika privatnosti</h1>

        <p>Posljednje ažuriranje: mart 2026.</p>

        <h2>1. Prikupljanje podataka</h2>
        <p>Edusora prikuplja minimalne lične podatke neophodne za pružanje usluga, uključujući ime, email adresu i podatke o korištenju platforme.</p>

        <h2>2. Korištenje podataka</h2>
        <p>Vaši podaci se koriste isključivo za: pružanje i poboljšanje naših usluga, komunikaciju s vama o vašem računu i kursevima, slanje obavještenja o novostima (uz vaš pristanak).</p>

        <h2>3. Zaštita podataka</h2>
        <p>Primjenjujemo odgovarajuće tehničke i organizacione mjere za zaštitu vaših ličnih podataka od neovlaštenog pristupa, gubitka ili zloupotrebe.</p>

        <h2>4. Dijeljenje podataka</h2>
        <p>Vaše lične podatke ne prodajemo, ne iznajmljujemo niti dijelimo s trećim stranama, osim kada je to zakonom propisano ili neophodno za pružanje naših usluga.</p>

        <h2>5. Kolačići</h2>
        <p>Koristimo kolačiće za poboljšanje korisničkog iskustva. Možete podesiti postavke kolačića u svom pregledniku.</p>

        <h2>6. Vaša prava</h2>
        <p>Imate pravo na pristup, ispravku i brisanje vaših ličnih podataka. Za sve zahtjeve, kontaktirajte nas na kontakt@edusora.com.</p>

        <h2>7. Promjene politike</h2>
        <p>Zadržavamo pravo izmjene ove politike privatnosti. O svim značajnim promjenama bićete obaviješteni putem email-a ili obavještenja na platformi.</p>
      </div>
    </main>
    <Footer />
  </>
);

export default PolitikaPrivatnosti;
