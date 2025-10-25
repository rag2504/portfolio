import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  emoji: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  index?: number;
}

export function ProjectCard({ title, emoji, description, tech, live, github, index = 0 }: ProjectCardProps) {
  return (
    <div
      className="group relative h-full rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 via-gray-900/40 to-black/60 backdrop-blur-xl border border-gray-700/50"></div>
      
      {/* Premium border glow */}
      <div className="absolute -inset-px bg-gradient-to-r from-blue-600/0 via-purple-600/50 to-pink-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>

      {/* Inner border */}
      <div className="absolute inset-0 rounded-2xl border border-gray-700/20 group-hover:border-purple-500/40 transition-colors duration-500"></div>

      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

      {/* Shine effect */}
      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 group-hover:inset-0 transition-all duration-700 opacity-0 group-hover:opacity-30"></div>

      <div className="relative z-10 h-full flex flex-col p-8 space-y-6">
        {/* Project Icon Container */}
        <div className="relative w-full h-44 rounded-2xl bg-gradient-to-br from-gray-700/40 to-gray-800/40 border border-gray-600/30 flex items-center justify-center overflow-hidden group/icon shadow-lg">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-pink-600/20 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500"></div>
          
          {/* Pulsing glow background */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/0 to-purple-600/5 group-hover/icon:animate-glow-pulse"></div>

          <div className="text-8xl group-hover/icon:scale-125 group-hover/icon:rotate-12 transition-all duration-500 drop-shadow-lg">{emoji}</div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-24 transition-all duration-500 rounded-full"></div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed flex-grow group-hover:text-gray-100 transition-colors duration-300 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-blue-300 border border-blue-500/30 hover:border-blue-500/80 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-700/50 group-hover:border-purple-500/30 transition-colors duration-300">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 relative group/btn flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
            <ExternalLink size={16} className="group-hover/btn:rotate-45 transition-transform" />
            <span className="relative">Live</span>
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 relative group/btn flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-gray-600 text-gray-300 text-sm font-bold hover:border-purple-500 hover:text-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 active:scale-95 hover:bg-purple-500/10"
          >
            <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
            <span className="relative">Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}
