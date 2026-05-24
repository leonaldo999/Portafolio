import useInView from "../../shared/hooks/useInView";

const events = [
  {
    year: "2023",
    title: "Inicio en el Desarrollo",
    description: "Completé una especialización intensiva en desarrollo Full Stack, enfocándome en React, Node.js y MongoDB.",
  },
  {
    year: "2024",
    title: "Primeros Proyectos",
    description: "Desarrollé múltiples proyectos web, desde landing pages hasta paneles de administración completos.",
  },
  {
    year: "2025",
    title: "Portafolio y Crecimiento",
    description: "Continuo expandiendo mis habilidades en tecnologías modernas y construyendo soluciones web impactantes.",
  },
];

export default function Timeline() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-cyan-500" />
      <div className="space-y-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative pl-10"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-20px)",
              transition: `all 0.5s ease-out ${index * 0.15}s`,
            }}
          >
            <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-teal-500 border-2 border-white dark:border-gray-900 shadow-sm" />
            <span className="text-xs font-semibold text-teal-500 dark:text-teal-400 tracking-wider uppercase">
              {event.year}
            </span>
            <h4 className="text-base font-semibold text-gray-800 dark:text-white mt-0.5">
              {event.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
