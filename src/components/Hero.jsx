// portafolio/src/components/Hero.jsx

export default function Hero() {
	return (
		<section
			id="hero"
			className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center px-4"
		>
			<div
				className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10"
				data-aos="fade-down"
			>
				{/* Texto */}
				<div className="w-full md:w-2/3 text-center md:text-left">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
						Hola, soy{" "}
						<span className="text-blue-600 dark:text-blue-400">Leonaldo</span>
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-300">
						Desarrollador Full Stack apasionado por crear soluciones web
						impactantes.
					</p>

					{/* Botón y enlaces sociales */}
					<div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
						<a
							href="/CV-LeonardoDev.pdf"
							download="CV-Leonardo-Figueroa.pdf"
							className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
						>
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								/>
							</svg>
							<span className="font-medium">Descargar CV</span>
							<span className="text-xs opacity-80">(PDF)</span>
						</a>

						{/* Íconos sociales */}
						<div className="flex gap-3">
							<a
								href="https://github.com/leonaldo999"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:scale-110 transition-transform duration-300"
							>
								<img
									src="/githubIcon.png"
									alt="GitHub"
									className="w-10 h-10 hover:opacity-80"
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
									className="w-10 h-10 hover:opacity-80"
								/>
							</a>
						</div>
					</div>
				</div>

				{/* Imagen */}
				<div className="w-full md:w-1/3 flex justify-center">
					<img
						src="/naldoWebPortafolio.jpg"
						alt="Foto de Leonaldo"
						className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-white transition-transform duration-300 hover:scale-105"
					/>
				</div>
			</div>
		</section>
	);
}
