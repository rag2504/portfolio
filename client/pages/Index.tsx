import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUpRight, ArrowRight, Code2 } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";
import { useToast } from "@/components/ui/use-toast";

export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      description: "A complete web platform where users can book box cricket grounds just like BookMyShow. Features include user, admin, and owner panels, real-time booking status, payment gateway integration, and automated success messages.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      live: "https://boxcricket-booking.vercel.app/",
      github: "https://github.com/rag2504/boxcricket-booking",
    },
    {
      id: 2,
      title: "Billing & Stock Management",
      emoji: "🧾",
      description: "A web application for store owners to manage products, staff panels, stock levels, revenue tracking, and billing operations — everything a retail business needs in one place.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      live: "https://biiling-stock-mangement.vercel.app/",
      github: "https://github.com/rag2504/Biiling-stock-Mangement",
    },
    {
      id: 3,
      title: "Library Management System",
      emoji: "📚",
      description: "A full-featured system to manage books, members, issues, returns, and records — built with an intuitive interface and reliable data handling.",
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
    { icon: "📧", label: "Email", value: "ragraichura12@gmail.com", href: "mailto:ragraichura12@gmail.com" },
    { icon: "📞", label: "Phone", value: "+91 9409257097", href: "tel:+919409257097" },
    { icon: "🌐", label: "GitHub", value: "github.com/rag2504", href: "https://github.com/rag2504" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/rag-raichura", href: "https://linkedin.com/in/rag-raichura-7b6b72273" },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-foreground overflow-x-hidden relative">
      <AnimatedBackground />

      {/* Premium Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-gray-900/70 backdrop-blur-2xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10"
            : "bg-gradient-to-b from-gray-900/40 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110 transition-transform"
          >
            Rag.Dev
          </button>

          <div className="hidden md:flex gap-12 items-center">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-gray-300 hover:text-purple-300 transition-colors group text-sm font-bold uppercase tracking-wider"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 active:scale-95"
          >
            Contact <ArrowUpRight size={16} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection onScrollToSection={scrollToSection} />

      {/* About Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent opacity-50"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-xl mb-4">
              <span className="text-sm font-bold text-blue-300">About Me</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Avatar Section */}
            <div className="flex justify-center animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-pink-500/40 rounded-3xl blur-3xl opacity-75 animate-blob"></div>
                <div className="relative w-80 h-80 rounded-3xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-2 border-purple-500/30 backdrop-blur-xl flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Code2 size={160} className="text-purple-400/40 group-hover:text-purple-400/60 transition-colors duration-500 group-hover:scale-110" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg text-gray-200 leading-relaxed font-light">
                I'm a results-driven <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Full Stack Developer</span> with hands-on experience in designing and developing responsive web and mobile applications.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed font-light">
                Specialized in <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">React, Node.js, Express, MongoDB, and Flutter</span>. I craft clean, scalable, and user-friendly solutions that solve real-world problems.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed font-light">
                With a passion for modern technology and <span className="font-bold text-green-400">clean code</span>, I've successfully delivered multiple projects from concept to production, always focusing on user experience and performance optimization.
              </p>

              <div className="pt-6 flex gap-4">
                <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold hover:shadow-xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 active:scale-95">
                  Download Resume <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 via-transparent to-pink-600/5 opacity-50"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-xl mb-4">
              <span className="text-sm font-bold text-purple-300">Featured Projects</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Showcasing some of my recent work with modern technologies and best practices
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>

          {/* Mini Projects */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-white mb-10">✨ Small Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Mini Project 1", "Mini Project 2", "Mini Project 3"].map((title, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-xl p-8 flex flex-col items-center justify-center min-h-56 hover:border-pink-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/30 transform hover:-translate-y-3 animate-slide-up overflow-hidden"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-px bg-gradient-to-r from-pink-600/0 via-purple-600/50 to-pink-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10"></div>

                  <div className="relative z-10 text-center">
                    <p className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {title}
                    </p>
                    <p className="text-gray-500 font-semibold">Coming Soon...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-600/5 to-transparent opacity-50"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-xl mb-4">
              <span className="text-sm font-bold text-cyan-300">Tech Stack</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-gray-300 text-lg">Technologies I work with to build amazing products</p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
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
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-600/5 via-transparent to-transparent opacity-50"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-xl mb-4">
              <span className="text-sm font-bold text-pink-300">Get in Touch</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear from you. Let's create something amazing together!
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form className="space-y-6 animate-slide-up">
              <div className="group">
                <label className="block text-sm font-bold text-gray-300 mb-3 group-focus-within:text-pink-400 transition-colors">Name</label>
                <input
                  type="text"
                  className="w-full px-5 py-3.5 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-pink-500/30 backdrop-blur-xl group-focus-within:border-pink-500/60"
                  placeholder="Your name"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-bold text-gray-300 mb-3 group-focus-within:text-pink-400 transition-colors">Email</label>
                <input
                  type="email"
                  className="w-full px-5 py-3.5 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-pink-500/30 backdrop-blur-xl group-focus-within:border-pink-500/60"
                  placeholder="your@email.com"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-bold text-gray-300 mb-3 group-focus-within:text-pink-400 transition-colors">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-5 py-3.5 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-pink-500/30 backdrop-blur-xl resize-none group-focus-within:border-pink-500/60"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full group relative px-6 py-4 rounded-lg font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-blue-500 opacity-50 blur-xl group-hover:opacity-100 -z-10 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative block p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-xl hover:border-pink-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/30 transform hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-px bg-gradient-to-r from-pink-600/0 via-purple-600/40 to-pink-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10"></div>

                  <div className="relative z-10 flex items-start gap-4">
                    <span className="text-3xl mt-1">{info.icon}</span>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm font-bold group-hover:text-pink-300 transition-colors">{info.label}</p>
                      <p className="text-white font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 text-lg">
                        {info.value}
                      </p>
                    </div>
                    <ArrowUpRight size={20} className="text-gray-600 group-hover:text-pink-400 transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20 bg-gradient-to-t from-gray-950 via-gray-900/50 to-transparent relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Rag.Dev</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Building beautiful digital experiences with cutting-edge technologies and modern best practices.</p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Projects", "Skills"].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">Social</h4>
              <div className="flex gap-4">
                <a href="https://github.com/rag2504" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-125 duration-300">
                  <Github size={22} />
                </a>
                <a href="https://linkedin.com/in/rag-raichura-7b6b72273" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-125 duration-300">
                  <Linkedin size={22} />
                </a>
                <a href="mailto:ragraichura12@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-125 duration-300">
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 Rag Raichura | Built with ❤️ using React, Tailwind & TypeScript
            </p>
            <p className="text-gray-600 text-xs">Crafted with precision and passion for excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
