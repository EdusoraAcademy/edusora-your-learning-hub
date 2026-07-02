import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useAnnounce } from "@/lib/accessibility";

const sectionLabels: Record<string, string> = {
  kursevi: "Kursevi",
  "o-nama": "O nama",
  vijesti: "Vijesti",
};

const MOBILE_MENU_ID = "mobile-menu";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("edusora-theme") === "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const announce = useAnnounce();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("edusora-theme", dark ? "dark" : "light");
  }, [dark]);

  const focusSection = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
      el?.focus({ preventScroll: true });
      if (sectionLabels[id]) {
        announce(`Prešli ste na sekciju: ${sectionLabels[id]}`);
      }
    },
    [announce],
  );

  const scrollTo = (id: string) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToId: id } });
    } else {
      focusSection(id);
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollToId) {
      const id = location.state.scrollToId;
      setTimeout(() => {
        focusSection(id);
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location, focusSection]);

  const handleThemeToggle = () => {
    const newDark = !dark;
    setDark(newDark);
    announce(`Tema je promijenjena u ${newDark ? "tamnu" : "svijetlu"}.`);
  };

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  // Focus stays on the toggle button when the menu opens, so listen on the
  // document rather than the menu itself — a handler on the menu would never
  // see Escape unless focus had already moved inside it.
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

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
            aria-pressed={dark}
          >
            {dark ? <Sun className="w-5 h-5 text-secondary" /> : <Moon className="w-5 h-5 text-primary" />}
          </button>
          <button
            ref={menuButtonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={menuOpen}
            aria-controls={MOBILE_MENU_ID}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id={MOBILE_MENU_ID}
          aria-label="Mobilna navigacija"
          className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-2"
        >
          <button onClick={() => scrollTo("kursevi")} className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Kursevi</button>
          <button onClick={() => scrollTo("o-nama")} className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground">O nama</button>
          <button onClick={() => scrollTo("vijesti")} className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Vijesti</button>
        </nav>
      )}
    </header>
  );
};

export default Header;