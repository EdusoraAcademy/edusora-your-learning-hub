import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LiveRegionProvider } from "@/components/ui/live-region";
import Index from "./pages/Index.tsx";
import Mentori from "./pages/Mentori.tsx";
import Certifikati from "./pages/Certifikati.tsx";
import Kontakt from "./pages/Kontakt.tsx";
import PolitikaPrivatnosti from "./pages/PolitikaPrivatnosti.tsx";
import UsloviKoristenja from "./pages/UsloviKoristenja.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LiveRegionProvider> {/* Nova linija */}
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mentori" element={<Mentori />} />
            <Route path="/certifikati" element={<Certifikati />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/politika-privatnosti" element={<PolitikaPrivatnosti />} />
            <Route path="/uslovi-koristenja" element={<UsloviKoristenja />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LiveRegionProvider> {/* Nova linija */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;