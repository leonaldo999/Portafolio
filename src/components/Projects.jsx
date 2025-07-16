const projects = [
	{
		title: "App de Adopción de Perros",
		description:
			"Plataforma web para rescatar y adoptar perros con panel de administrador y tienda solidaria.",
		tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
		image: "/project-dogs.jpg", // Agregar imagen
		url: "https://github.com/leonaldo999/huellas-frontend.git", // Cambiar por URL real
		github: "https://github.com/leonaldo999", // Opcional
	},
	{
		title: "Landing Page de Ropa Masculina",
		description:
			"Landing responsiva con filtros, carrito de compras y conexión a API.",
		tech: ["React", "Tailwind", "API REST"],
		image: "/project-clothing.jpg",
		url: "#",
		github: "https://github.com/tu-usuario/clothing-landing",
	},
	{
		title: "Panel de Administración Full Stack",
		description: "Dashboard para administrar usuarios y contenido dinámico.",
		tech: ["MERN Stack", "JWT", "CRUD"],
		image: "/project-admin.jpg",
		url: "#",
		github: "https://github.com/tu-usuario/admin-panel",
	},
	{
		title: "Blog Técnico Personal",
		description:
			"Espacio para publicar artículos sobre programación y proyectos personales.",
		tech: ["React", "Markdown", "Vite"],
		image: "/project-blog.png",
		url: "#",
		github: "https://github.com/tu-usuario/tech-blog",
	},
	{
		title: "Carta Digital con QR",
		description:
			"Carta PDF digitalizada con código QR, ideal para negocios físicos.",
		tech: ["HTML", "CSS", "PDF", "QR"],
		image: "/project-qr-menu.jpg",
		url: "#",
		github: "https://github.com/tu-usuario/qr-menu",
	},
];

export default function Projects() {
	return (
		<section id="projects" className="bg-gray-50 dark:bg-gray-800 py-16 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
					Proyectos Destacados
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							data-aos="zoom-in"
							data-aos-delay={`${index * 100}`}
							className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-none hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
						>
							{/* Imagen del proyecto */}
							<div className="relative h-48 bg-gray-200 dark:bg-gray-700">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover"
									onError={(e) => {
										e.target.style.display = "none";
										e.target.nextElementSibling.classList.remove("hidden");
									}}
								/>
								{/* Placeholder si no hay imagen */}
								<div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center hidden">
									<span className="text-white text-2xl font-bold">
										{project.title
											.split(" ")
											.map((word) => word[0])
											.join("")}
									</span>
								</div>
							</div>

							{/* Contenido */}
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
									{project.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
									{project.description}
								</p>

								{/* Tecnologías */}
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Enlaces */}
								<div className="flex gap-3">
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300 text-sm font-medium"
									>
										Ver Proyecto
									</a>
									{project.github && (
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors duration-300 text-sm font-medium"
										>
											GitHub
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
