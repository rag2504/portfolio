import { ChevronDown, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

export function HeroSection({ onScrollToSection }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute top-32 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 via-purple-600/20 to-transparent rounded-full blur-3xl animate-blob opacity-60"></div>
      <div className="absolute bottom-32 right-10 w-80 h-80 bg-gradient-to-tl from-accent/30 via-pink-600/20 to-transparent rounded-full blur-3xl animate-blob opacity-50" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-transparent rounded-full blur-3xl animate-blob opacity-40" style={{ animationDelay: "4s" }}></div>

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 w-full">
        {/* Main Heading */}
        <div className="space-y-6 animate-fade-in">
          {/* Badge */}
          <div className="inline-block px-4 py-2.5 rounded-full border border-primary/40 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-xl hover:border-primary/80 transition-all duration-300">
            <span className="text-sm font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent flex items-center gap-2 justify-center">
              <Sparkles size={14} className="text-primary" />
              Welcome to my digital portfolio
            </span>
          </div>

          {/* Main Title with animation */}
          <div className="relative">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black leading-tight tracking-tighter">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-shift" style={{ backgroundSize: "200% 200%" }}>
                Hi, I'm Rag
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-shift" style={{ backgroundSize: "200% 200%", animationDelay: "0.5s" }}>
                Raichura
              </span>
            </h1>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-60 blur-sm"></div>
          </div>
        </div>

        {/* Enhanced Subtitle */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            Building <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">cutting-edge digital experiences</span> with{" "}
            <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">React, Node.js, and modern web tech</span>
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Full Stack Developer turning ideas into reality with clean code and stunning design
          </p>
        </div>

        {/* CTA Buttons with enhanced design */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={() => onScrollToSection("projects")}
            className="group relative px-8 py-4 rounded-xl font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-100"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-pink-500 opacity-50 blur-xl group-hover:opacity-100 -z-10 transition-opacity duration-300"></div>
            <span className="relative inline-flex items-center gap-2">
              Explore My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          <button
            onClick={() => onScrollToSection("contact")}
            className="group relative px-8 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-2 border-gray-600 hover:border-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-2xl backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/0 group-hover:from-accent/30 group-hover:to-accent/10 rounded-xl transition-all duration-300"></div>
            <span className="relative flex items-center gap-2">
              Get In Touch
              <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="pt-16 animate-bounce" style={{ animationDuration: "3s" }}>
          <button onClick={() => onScrollToSection("about")} className="mx-auto block p-3 rounded-full border border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 group">
            <ChevronDown size={28} className="text-primary group-hover:text-accent transition-colors" />
          </button>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-5 opacity-10 text-8xl animate-float">💻</div>
      <div className="absolute bottom-32 left-5 opacity-10 text-8xl animate-float" style={{ animationDelay: "2s" }}>⚡</div>
    </section>
  );
}
