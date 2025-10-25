export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Primary gradient orb */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/40 to-primary/5 rounded-full blur-3xl animate-blob opacity-60"></div>
      
      {/* Secondary gradient orb */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-br from-accent/40 to-accent/5 rounded-full blur-3xl animate-blob opacity-50" style={{ animationDelay: "2s" }}></div>
      
      {/* Tertiary gradient orb */}
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-gradient-to-br from-secondary/30 to-secondary/5 rounded-full blur-3xl animate-blob opacity-40" style={{ animationDelay: "4s" }}></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  );
}
