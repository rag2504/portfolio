interface SkillCardProps {
  name: string;
  icon: string;
  index?: number;
}

export function SkillCard({ name, icon, index = 0 }: SkillCardProps) {
  return (
    <div
      className="group relative rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-xl p-6 text-center hover:border-purple-500/80 transition-all duration-500 transform hover:-translate-y-2 hover:scale-110 cursor-default animate-fade-in overflow-hidden"
      style={{ animationDelay: `${index * 0.03}s` }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-600/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>

      {/* Animated border glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/0 via-purple-600/80 to-pink-600/0 rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>

      {/* Shine effect */}
      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45 group-hover:inset-0 transition-all duration-700 opacity-0 group-hover:opacity-20"></div>

      <div className="relative z-10 space-y-3">
        {/* Icon */}
        <div className="inline-flex justify-center">
          <div className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg">
            {icon}
          </div>
        </div>

        {/* Name */}
        <p className="font-bold text-white text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
          {name}
        </p>

        {/* Accent line */}
        <div className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto group-hover:w-full transition-all duration-500 rounded-full"></div>
      </div>
    </div>
  );
}
