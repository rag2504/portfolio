import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUpRight, ArrowRight } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";

export default function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      id: 1,
      title: "CricBox",
      emoji: "🏏",
      description:
        "A complete web platform where users can book box cricket grounds just like BookMyShow. Features include user, admin, and owner panels, real-time booking status, payment gateway integration, and automated success messages.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      live: "https://boxcricket-booking.vercel.app/",
      github: "https://github.com/rag2504/boxcricket-booking",
    },
    {
      id: 2,
      title: "Billing & Stock Management",
      emoji: "🧾",
      description:
        "A web application for store owners to manage products, staff panels, stock levels, revenue tracking, and billing operations — everything a retail business needs in one place.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      live: "https://biiling-stock-mangement.vercel.app/",
      github: "https://github.com/rag2504/Biiling-stock-Mangement",
    },
    {
      id: 3,
      title: "Library Management System",
      emoji: "📚",
      description:
        "A full-featured system to manage books, members, issues, returns, and records — built with an intuitive interface and reliable data handling.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      live: "https://github.com/rag2504/library",
      github: "https://github.com/rag2504/library",
    },
  ];

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "JavaScript", icon: "✨" },
    { name: "TypeScript", icon: "📘" },
    { name: "Flutter", icon: "🦋" },
    { name: "Dart", icon: "🎯" },
    { name: "HTML/CSS", icon: "🎨" },
    { name: "REST APIs", icon: "🔌" },
    { name: "Git/GitHub", icon: "🐙" },
    { name: "Tailwind CSS", icon: "🎪" },
  ];

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "ragraichura12@gmail.com",
      href: "mailto:ragraichura12@gmail.com",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 9409257097",
      href: "tel:+919409257097",
    },
    {
      icon: "🌐",
      label: "GitHub",
      value: "github.com/rag2504",
      href: "https://github.com/rag2504",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/rag-raichura",
      href: "https://linkedin.com/in/rag-raichura-7b6b72273",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-foreground overflow-x-hidden relative">
      <AnimatedBackground />

      {/* Premium Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-gray-900/70 backdrop-blur-2xl border-b border-gray-800/50 shadow-2xl"
            : "bg-gradient-to-b from-gray-900/50 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:scale-110 transition-transform"
          >
            Rag.Dev
          </button>

          <div className="hidden md:flex gap-12 items-center">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-gray-300 hover:text-primary transition-colors group text-sm font-semibold"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-bold hover:shadow-xl hover:shadow-primary/50 transition-all transform hover:scale-105 active:scale-95"
          >
            Contact <ArrowUpRight size={16} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection onScrollToSection={scrollToSection} />

      {/* About Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar */}
            <div className="flex justify-center animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-3xl opacity-40 animate-blob"></div>
                <div className="relative w-80 h-80 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-primary/50 backdrop-blur-xl flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-9xl">💻</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className="space-y-6 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                I'm a results-driven{" "}
                <span className="font-bold text-primary">
                  Full Stack Developer
                </span>{" "}
                with hands-on experience in designing and developing responsive
                web and mobile applications using React, Node.js, Express,
                MongoDB, and Flutter.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed font-light">
                I enjoy crafting{" "}
                <span className="font-bold text-secondary">
                  clean, scalable, and user-friendly
                </span>{" "}
                solutions that solve real-world problems. With a passion for
                modern technology and clean code, I've successfully delivered
                multiple projects from concept to production.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed font-light">
                My focus is always on{" "}
                <span className="font-bold text-accent">
                  user experience and performance optimization
                </span>
                , ensuring every project is production-ready and maintainable.
              </p>

              <div className="pt-6 flex gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-secondary to-secondary/80 text-white font-bold hover:shadow-xl hover:shadow-secondary/50 transition-all transform hover:scale-105 active:scale-95"
                >
                  Download Resume <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-xl mb-4">
              <span className="text-sm font-bold text-primary">
                Featured Projects
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              💻 My Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing some of my recent work with modern technologies and
              best practices
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6"></div>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>

          {/* Mini Projects */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <span>✨ Small Projects</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Mini Project 1", "Mini Project 2", "Mini Project 3"].map(
                (title, index) => (
                  <div
                    key={index}
                    className="group relative rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-700/40 backdrop-blur-xl p-8 flex flex-col items-center justify-center min-h-56 hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/30 transform hover:-translate-y-2 animate-slide-up"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 text-center">
                      <p className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">
                        {title}
                      </p>
                      <p className="text-gray-500 font-semibold">
                        Coming Soon...
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 backdrop-blur-xl mb-4">
              <span className="text-sm font-bold text-secondary">
                Tech Stack
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-gray-400 text-lg">
              Technologies I work with to build amazing products
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-xl mb-4">
              <span className="text-sm font-bold text-accent">
                Get in Touch
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear from you. Let's create
              something amazing together!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form className="space-y-6 animate-slide-up">
              <div className="group">
                <label className="block text-sm font-bold text-gray-300 mb-3 group-focus-within:text-primary transition-colors">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3.5 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/30 backdrop-blur-xl"
                  placeholder="Your name"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-bold text-gray-300 mb-3 group-focus-within:text-primary transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-5 py-3.5 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/30 backdrop-blur-xl"
                  placeholder="your@email.com"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-bold text-gray-300 mb-3 group-focus-within:text-primary transition-colors">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-5 py-3.5 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/30 backdrop-blur-xl resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full group relative px-6 py-4 rounded-lg font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-100 group-hover:opacity-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 blur-xl group-hover:opacity-50 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Send Message{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>
            </form>

            {/* Contact Info */}
            <div
              className="space-y-4 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group relative block p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-700/40 backdrop-blur-xl hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/30 transform hover:-translate-y-2"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex items-start gap-4">
                    <span className="text-3xl mt-1">{info.icon}</span>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm font-bold group-hover:text-accent transition-colors">
                        {info.label}
                      </p>
                      <p className="text-white font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300 text-lg">
                        {info.value}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-gray-600 group-hover:text-accent transition-colors"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50 bg-gradient-to-t from-gray-950 via-gray-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Rag.Dev
              </h3>
              <p className="text-gray-400 text-sm">
                Building beautiful digital experiences with React and Node.js.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <div className="space-y-2">
                {["About", "Projects", "Skills"].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">
                Social
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/rag2504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors hover:scale-110"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://linkedin.com/in/rag-raichura-7b6b72273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors hover:scale-110"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="mailto:ragraichura12@gmail.com"
                  className="text-gray-400 hover:text-primary transition-colors hover:scale-110"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 Rag Raichura | Built with ❤️ using React, Tailwind &
              TypeScript
            </p>
            <p className="text-gray-500 text-xs">
              Crafted with passion for excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
