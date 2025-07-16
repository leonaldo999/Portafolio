export default function About() {
	return (
		<section id="about" className="bg-white dark:bg-gray-900 py-16 px-4">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
				{/* Imagen */}
				<div className="w-full md:w-1/3">
					<img
						src="/naldoWebPortafolio.jpg"
						alt="Foto de Leonaldo"
						className="rounded-2xl shadow-lg dark:shadow-none object-cover w-full h-auto"
						data-aos="fade-up"
						loading="lazy"
					/>
				</div>

				{/* Texto */}
				<div className="w-full md:w-2/3 text-center md:text-left">
					<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
						Sobre mí
					</h2>
					<p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
						Soy{" "}
						<span className="font-semibold text-blue-600 dark:text-blue-400">
							Leonaldo
						</span>
						, desarrollador Full Stack egresado de una especialización
						intensiva. Me apasiona construir soluciones web que no solo
						funcionen bien, sino que también se vean geniales. He desarrollado
						proyectos que van desde tiendas en línea hasta plataformas sociales
						para causas reales como el rescate animal. 💻🐶
					</p>
					<p className="mt-6 text-gray-600 dark:text-gray-300 text-lg">
						Me especializo en{" "}
						<span className="font-medium text-gray-800 dark:text-white">
							React, Node.js, MongoDB
						</span>{" "}
						y estilos modernos con{" "}
						<span className="font-medium text-gray-800 dark:text-white">
							Tailwind CSS
						</span>
						.
					</p>

					{/* Enlaces sociales */}
					<div className="mt-8 flex justify-center md:justify-start gap-4">
						<a
							href="https://github.com/leonaldo999"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:scale-110 transition-transform duration-300"
						>
							<img
								src="/githubIcon.png"
								alt="GitHub"
								className="w-8 h-8 hover:opacity-80"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/leonardo-figueroa-lima-191070293"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:scale-110 transition-transform duration-300"
						>
							<img
								src="/linkedinIcon.png"
								alt="LinkedIn"
								className="w-8 h-8 hover:opacity-80"
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
