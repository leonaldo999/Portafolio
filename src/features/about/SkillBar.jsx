import useInView from "../../shared/hooks/useInView";

export default function SkillBar({ name, level }) {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200/50 dark:bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${level}%` : "0%",
          }}
        />
      </div>
    </div>
  );
}
