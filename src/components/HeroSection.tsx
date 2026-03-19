const HeroSection = () => {
  const scrollToKursevi = () => {
    document.getElementById("kursevi")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Floating light blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px] animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[80px] animate-float-delayed" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[60px] animate-pulse-glow" />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-6 px-5 py-2 rounded-full glass-card animate-fade-up">
          <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Online Akademija</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 animate-fade-up-delay-1">
          <span className="text-gradient drop-shadow-[0_0_30px_hsl(var(--glow-gold)/0.3)]">EDUSORA</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 animate-fade-up-delay-2">
          Tvoje znanje, tvoja moć
        </p>

        <button
          onClick={scrollToKursevi}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm hover-scale glow-gold-hover shadow-soft animate-fade-up-delay-3 transition-all duration-300"
        >
          Istražite naše kurseve
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
