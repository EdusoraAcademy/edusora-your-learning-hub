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
        <p>Korištenjem Edusora platforme pristajete na ove uslove korištenja. Ako se ne slažete s bilo kojim dijelom, molimo vas da ne koristite naše usluge.</p>

        <h2>2. Korisnički račun</h2>
        <p>Za pristup kursevima potrebno je stvoriti korisnički račun. Odgovorni ste za održavanje povjerljivosti vaših pristupnih podataka.</p>

        <h2>3. Intelektualno vlasništvo</h2>
        <p>Sav sadržaj na platformi, uključujući tekstove, video materijale, grafike i logotipe, zaštićen je autorskim pravima i vlasništvo je Edusore ili njenih partnera.</p>

        <h2>4. Korištenje sadržaja</h2>
        <p>Sadržaj kurseva namijenjen je isključivo za ličnu upotrebu. Zabranjeno je dijeljenje, reprodukovanje ili komercijalno korištenje bez pisanog odobrenja.</p>

        <h2>5. Plaćanje i povrat</h2>
        <p>Cijene kurseva su jasno naznačene. Povrat sredstava moguć je u roku od 14 dana od kupovine, pod uslovom da nije pristupljeno više od 20% sadržaja kursa.</p>

        <h2>6. Odricanje od odgovornosti</h2>
        <p>Edusora ne garantuje specifične rezultate korištenjem njenih kurseva. Sadržaj je informativnog i edukativnog karaktera.</p>

        <h2>7. Izmjene uslova</h2>
        <p>Zadržavamo pravo izmjene ovih uslova. Nastavak korištenja platforme nakon izmjena podrazumijeva prihvatanje novih uslova.</p>

        <h2>8. Kontakt</h2>
        <p>Za sva pitanja u vezi s uslovima korištenja, kontaktirajte nas na info@edusora.academy.</p>
      </div>
    </main>
    <Footer />
  </>
);

export default UsloviKoristenja;
