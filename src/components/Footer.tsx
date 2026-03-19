import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-bold text-lg mb-3 text-primary">EDUSORA</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Moderna online akademija posvećena praktičnom znanju i kvalitetnom obrazovanju. Naša misija je učiniti edukaciju dostupnom svima.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Linkovi</h4>
          <ul className="space-y-2.5">
            <li><Link to="/mentori" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mentori</Link></li>
            <li><Link to="/certifikati" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Certifikati</Link></li>
            <li><Link to="/politika-privatnosti" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Politika privatnosti</Link></li>
            <li><Link to="/uslovi-koristenja" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Uslovi korištenja</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Kontakt</h4>
          <Link to="/kontakt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Kontaktirajte nas →
          </Link>
        </div>
      </div>
      <div className="mt-14 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Edusora. Sva prava zadržana.
      </div>
    </div>
  </footer>
);

export default Footer;
