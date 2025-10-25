import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

export function HeroSection({ onScrollToSection }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
    >
      {/* Floating gradient elements */}
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDuration: "6s" }}
      ></div>
      <div
        className="absolute bottom-32 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDuration: "8s", animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-4 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-xl">
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in leading-tight">
            Hi, I'm Rag Raichura{" "}
            <span
              className="inline-block animate-bounce"
              style={{ animationDuration: "2s" }}
            >
              👋
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in font-light"
          style={{ animationDelay: "0.2s" }}
        >
          A{" "}
          <span className="font-semibold text-primary">
            Full Stack Developer
          </span>{" "}
          crafting elegant digital solutions with{" "}
          <span className="font-semibold text-secondary">
            React, Node.js, Express & MongoDB
          </span>
          . Building the future, one line of code at a time.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            onClick={() => onScrollToSection("projects")}
            className="group relative px-8 py-4 rounded-xl font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-110 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-100 group-hover:opacity-110 transition-opacity"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 blur-xl group-hover:opacity-50 transition-opacity"></div>
            <span className="relative inline-flex items-center gap-2">
              View My Projects
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>

          <button
            onClick={() => onScrollToSection("contact")}
            className="group relative px-8 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-transparent hover:border-accent transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-700 shadow-xl"
          >
            Contact Me
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/0 group-hover:from-accent/20 group-hover:to-accent/10 rounded-xl transition-all duration-300"></div>
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="pt-12 animate-bounce"
          style={{ animationDuration: "3s" }}
        >
          <button
            onClick={() => onScrollToSection("about")}
            className="mx-auto block p-2 rounded-full border border-primary/30 hover:border-primary transition-colors"
          >
            <ChevronDown size={32} className="text-primary" />
          </button>
        </div>
      </div>

      {/* Floating code elements */}
      <div className="absolute top-32 right-10 opacity-5 text-gray-400 text-xs font-mono max-w-xs hidden lg:block">
        <div className="border border-gray-500 rounded p-4 bg-gray-900/50">
          <div>
            const <span className="text-primary">buildAwesome</span> = () =&gt;{" "}
            {"{}"}
          </div>
        </div>
      </div>
    </section>
  );
}
