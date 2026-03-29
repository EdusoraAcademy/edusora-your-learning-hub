import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Instagram, Mail, Music2, Facebook } from "lucide-react"; // Dodan Facebook import

const kontakti = [
  { 
    icon: Instagram, 
    naziv: "Instagram", 
    link: "https://instagram.com/edusora.academy", 
    label: "@edusora.academy" 
  },
  { 
    icon: Music2, 
    naziv: "TikTok", 
    link: "https://tiktok.com/@edusora.academy", 
    label: "@edusora.academy" 
  },
  { 
    icon: Facebook, 
    naziv: "Facebook", 
    link: "https://www.facebook.com/profile.php?id=61578496053558", 
    label: "Edusora Academy" 
  },
  { 
    icon: Mail, 
    naziv: "E-pošta", 
    link: "mailto:info@edusora.academy", 
    label: "info@edusora.academy" 
  },
];

const Kontakt = () => (
  <>
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-4">Kontakt</h1>
        <p className="text-muted-foreground text-center mb-14">
          Povežite se s nama putem društvenih mreža ili e-pošte.
        </p>
        <div className="space-y-4">
          {kontakti.map((k) => (
            <a
              key={k.naziv}
              href={k.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-2xl border border-border bg-card p-6 hover-lift transition-transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <k.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{k.naziv}</h3>
                <p className="text-sm text-muted-foreground">{k.label}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Kontakt;
