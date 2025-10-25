import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
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
      featured: true,
    },
    {
      id: 2,
      title: "Billing & Stock Management",
      emoji: "🧾",
      description: "A web application for store owners to manage products, staff panels, stock levels, revenue tracking, and billing operations — everything a retail business needs in one place.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      live: "https://biiling-stock-mangement.vercel.app/",
      github: "https://github.com/rag2504/Biiling-stock-Mangement",
      featured: true,
    },
    {
      id: 3,
      title: "Library Management System",
      emoji: "📚",
      description: "A full-featured system to manage books, members, issues, returns, and records — built with an intuitive interface and reliable data handling.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      live: "https://github.com/rag2504/library",
      github: "https://github.com/rag2504/library",
      featured: true,
    },
  ];

  const miniProjects = [
    { title: "Mini Project 1", status: "Coming Soon..." },
    { title: "Mini Project 2", status: "Coming Soon..." },
    { title: "Mini Project 3", status: "Coming Soon..." },
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
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/rag-raichura-7b6b72273", href: "https://linkedin.com/in/rag-raichura-7b6b72273" },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-gray-900/80 to-transparent backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Rag Raichura
          </div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection("about")} className="text-gray-300 hover:text-primary transition">About</button>
            <button onClick={() => scrollToSection("projects")} className="text-gray-300 hover:text-primary transition">Projects</button>
            <button onClick={() => scrollToSection("skills")} className="text-gray-300 hover:text-primary transition">Skills</button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-primary transition">Contact</button>
          </div>
          <button onClick={() => scrollToSection("contact")} className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105">
            Let's Talk
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
            Hi, I'm Rag Raichura 👋
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
            A passionate Full Stack Developer building modern web and mobile apps with React, Node.js, and Flutter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105"
            >
              View My Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-all"
            >
              Contact Me
            </button>
          </div>

          <button onClick={() => scrollToSection("about")} className="animate-bounce mx-auto block mt-8">
            <ChevronDown size={32} className="text-primary" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/50 backdrop-blur-xl flex items-center justify-center">
                <Code2 size={120} className="text-primary/60" />
              </div>
            </div>

            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a results-driven Full Stack Developer with hands-on experience in designing and developing responsive web and mobile applications using React, Node.js, Express, MongoDB, and Flutter. I enjoy crafting clean, scalable, and user-friendly solutions that solve real-world problems.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                With a passion for modern technology and clean code, I've successfully delivered multiple projects from concept to production, always focusing on user experience and performance optimization.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-secondary to-secondary/80 text-white font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all transform hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">💻 My Projects</h2>
          <p className="text-center text-gray-400 mb-16">Showcasing some of my recent work and technical achievements</p>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-full h-40 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 mb-4 flex items-center justify-center border border-gray-600">
                    <div className="text-6xl">{project.emoji}</div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/80 transition-all"
                    >
                      <ExternalLink size={16} /> View Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-600 text-gray-300 text-sm font-semibold hover:border-primary hover:text-primary transition-all"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mini Projects */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">✨ Small Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {miniProjects.map((project, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 p-6 flex flex-col items-center justify-center min-h-48 hover:border-accent/50 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <p className="text-xl font-semibold text-gray-300 mb-3">{project.title}</p>
                  <p className="text-gray-500 font-medium">{project.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills & Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 p-4 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="font-semibold text-white text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Let's Work Together</h2>
          <p className="text-center text-gray-400 mb-12">Have a project in mind? Let's create something amazing together!</p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form className="space-y-6 animate-slide-up">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="block p-4 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform hover:-translate-y-1"
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{info.icon}</span>
                    <div>
                      <p className="text-gray-400 text-sm font-semibold">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50 bg-gradient-to-t from-gray-950 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-400 text-sm">
              © 2025 Rag Raichura | Built with ❤️ using React & TailwindCSS
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/rag2504"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rag-raichura-7b6b72273"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ragraichura12@gmail.com"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
