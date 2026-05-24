import { useCallback } from "react";
import AnimatedSection from "../../shared/AnimatedSection";
import ProjectCard from "./ProjectCard";
import projects, { categories } from "../../shared/constants/projects";

function useUrlFilter(key, defaultValue) {
  const params = new URLSearchParams(window.location.search);
  const value = params.get(key) || defaultValue;

  const setValue = useCallback((next) => {
    const url = new URL(window.location);
    if (next === defaultValue) {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, next);
    }
    window.history.replaceState({}, "", url);
  }, [key, defaultValue]);

  return [value, setValue];
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useUrlFilter("category", "all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <AnimatedSection id="projects" className="py-20 px-4 content-visibility-auto" animation="up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            Una selección de mis trabajos más recientes y representativos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${
                activeCategory === cat.id
                  ? "bg-teal-500 text-white shadow-lg shadow-teal-500/20"
                  : "bg-white/50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-teal-500/10 hover:text-teal-500 dark:hover:text-teal-400 border border-gray-200/50 dark:border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="card-grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard>
                <ProjectCard.Image src={project.image} alt={project.title} />
                <ProjectCard.Body>
                  <ProjectCard.Title>{project.title}</ProjectCard.Title>
                  <ProjectCard.Description>{project.description}</ProjectCard.Description>
                  <ProjectCard.Tags tags={project.tech} />
                  <ProjectCard.Actions>
                    <ProjectCard.ActionLink href={project.url}>
                      Ver Proyecto
                    </ProjectCard.ActionLink>
                    <ProjectCard.ActionGithub href={project.github} />
                  </ProjectCard.Actions>
                </ProjectCard.Body>
              </ProjectCard>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-12">
            No hay proyectos en esta categoría todavía.
          </p>
        )}
      </div>
    </AnimatedSection>
  );
}
