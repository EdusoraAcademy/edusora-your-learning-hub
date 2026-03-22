import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLiveRegion } from "@/components/ui/live-region"; // <-- dodat import

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("edusora-theme") === "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const announce = useLiveRegion(); // <-- dobijamo funkciju za najavu

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("edusora-theme", dark ? "dark" : "light");
  }, [dark]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToId: id } });
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollToId) {
      const id = location.state.scrollToId;
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  const handleThemeToggle = () => {
    const newDark = !dark;
    setDark(newDark);
    const message = `Tema je promijenjena u ${newDark ? "tamnu" : "svijetlu"}.`;
    announce(message, 50);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-xl font-bold tracking-tight text-primary">
          EDUSORA
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("kursevi")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Kursevi
          </button>
          <button onClick={() => scrollTo("o-nama")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            O nama
          </button>
          <button onClick={() => scrollTo("vijesti")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Vijesti
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Promijeni temu"
          >
            {dark ? <Sun className="w-5 h-5 text-secondary" /> : <Moon className="w-5 h-5 text-primary" />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-2">
          <button onClick={() => scrollTo("kursevi")} className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Kursevi</button>
          <button onClick={() => scrollTo("o-nama")} className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground">O nama</button>
          <button onClick={() => scrollTo("vijesti")} className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Vijesti</button>
        </div>
      )}
    </header>
  );
};

export default Header;