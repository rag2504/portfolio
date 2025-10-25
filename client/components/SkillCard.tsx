interface SkillCardProps {
  name: string;
  icon: string;
  index?: number;
}

export function SkillCard({ name, icon, index = 0 }: SkillCardProps) {
  return (
    <div
      className="group relative rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-700/40 backdrop-blur-xl p-5 text-center hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1 cursor-default hover:scale-110 animate-fade-in"
      style={{ animationDelay: `${index * 0.03}s` }}
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>

      {/* Animated border glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-accent/0 group-hover:from-primary/50 group-hover:to-accent/50 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>

      <div className="relative z-10">
        <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-500 inline-block">{icon}</div>
        <p className="font-bold text-white text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">
          {name}
        </p>
      </div>
    </div>
  );
}
