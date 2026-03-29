import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UsloviKoristenja = () => (
  <>
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl prose prose-sm dark:prose-invert">
        <h1 className="text-4xl font-bold text-center mb-10 not-prose">Uslovi korištenja</h1>

        <p>Posljednje ažuriranje: mart 2026.</p>

        <h2>1. Prihvatanje uslova</h2>
        <p>
          Korištenjem Edusora platforme i pristupom našim edukativnim materijalima pristajete na ove uslove korištenja. 
          Ako se ne slažete s bilo kojim dijelom, molimo vas da ne koristite naše usluge.
        </p>

        <h2>2. Pristup i dostupnost platforme</h2>
        <p>
          Pristup sadržaju omogućen je direktno putem platforme bez potrebe za kreiranjem korisničkog računa. 
          Nastojimo osigurati neometan rad stranice, ali ne snosimo odgovornost za privremenu nedostupnost 
          uzrokovanu tehničkim održavanjem ili faktorima izvan naše kontrole.
        </p>

        <h2>3. Intelektualno vlasništvo</h2>
        <p>
          Sav sadržaj na platformi, uključujući tekstove, video materijale, grafike i logotipe, zaštićen je 
          autorskim pravima i isključivo je vlasništvo Edusore.
        </p>

        <h2>4. Korištenje sadržaja</h2>
        <p>
          Sadržaj kurseva namijenjen je isključivo za ličnu upotrebu. Strogo je zabranjeno neovlašteno dijeljenje, 
          reprodukcija ili bilo koji vid komercijalnog korištenja bez našeg pisanog odobrenja.
        </p>

        <h2>5. Plaćanje i kupovina</h2>
        <p>
          Cijene kurseva su jasno naznačene na platformi. S obzirom na prirodu digitalnog sadržaja 
          kojem se pristupa odmah nakon kupovine, povrat uplaćenih sredstava nije moguć.
        </p>

        <h2>6. Odricanje od odgovornosti</h2>
        <p>
          Edusora pruža znanje i alate, ali ne garantuje specifične individualne rezultate. 
          Sav sadržaj je edukativnog karaktera i služi kao podrška vašem ličnom i profesionalnom razvoju.
        </p>

        <h2>7. Izmjene uslova</h2>
        <p>
          Zadržavamo pravo izmjene ovih uslova u bilo kojem trenutku kako bismo unaprijedili rad platforme. 
          Nastavak korištenja podrazumijeva prihvatanje ažuriranih uslova.
        </p>

        <h2>8. Kontakt</h2>
        <p>Za sva dodatna pitanja, kontaktirajte nas na info@edusora.academy.</p>
      </div>
    </main>
    <Footer />
  </>
);

export default UsloviKoristenja;
