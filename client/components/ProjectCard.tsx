import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  emoji: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  index?: number;
}

export function ProjectCard({
  title,
  emoji,
  description,
  tech,
  live,
  github,
  index = 0,
}: ProjectCardProps) {
  return (
    <div
      className="group relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-700/40 backdrop-blur-xl hover:backdrop-blur-2xl transition-all duration-500 hover:border-primary/60 shadow-2xl hover:shadow-3xl hover:shadow-primary/30 transform hover:-translate-y-2 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Premium border glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 blur-2xl"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col p-8">
        {/* Project Image/Icon */}
        <div className="relative w-full h-48 rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 mb-6 flex items-center justify-center border border-gray-600/30 overflow-hidden group/icon">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500"></div>
          <div className="text-7xl group-hover/icon:scale-110 transition-transform duration-500">
            {emoji}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/40 hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-700/50">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white text-sm font-bold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ExternalLink
              size={16}
              className="group-hover:rotate-45 transition-transform"
            />{" "}
            Live
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-gray-600 text-gray-300 text-sm font-bold hover:border-accent hover:text-accent transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-accent/10"
          >
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </div>
  );
}
