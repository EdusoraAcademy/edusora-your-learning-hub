const HeroSection = () => {
  const scrollToKursevi = () => {
    document.getElementById("kursevi")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border bg-muted/50 animate-fade-up">
          <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Online Akademija</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 animate-fade-up-delay-1">
          <span className="text-gradient">EDUSORA</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 animate-fade-up-delay-2">
          Tvoje znanje, tvoja moć
        </p>

        <button
          onClick={scrollToKursevi}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 animate-fade-up-delay-3"
        >
          Istražite naše kurseve
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
