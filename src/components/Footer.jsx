export default function Footer() {
	return (
		<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6 px-4 mt-16">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
				{/* Créditos */}
				<p className="text-gray-600 dark:text-gray-400 text-sm">
					© {new Date().getFullYear()} Leonaldo.dev — Todos los derechos
					reservados
				</p>

				{/* Redes sociales */}
				<div className="flex gap-4 mt-4 md:mt-0">
					<a
						href="https://github.com/leonaldo999"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
						aria-label="GitHub"
					>
						<img
							src="/githubIcon.png"
							alt="GitHub"
							className="w-6 h-6 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200 dark:invert dark:group-hover:invert-0"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/leonardo-figueroa-lima-191070293"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
						aria-label="LinkedIn"
					>
						<img
							src="/linkedinIcon.png"
							alt="LinkedIn"
							className="w-6 h-6 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200 dark:invert dark:group-hover:invert-0"
						/>
					</a>
					{/* Ejemplo de más redes sociales */}
					<a
						href="mailto:tu-email@ejemplo.com"
						className="group relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
						aria-label="Email"
					>
						<img
							src="/gmailIcon.png"
							alt="Email"
							className="w-6 h-6 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200 dark:invert dark:group-hover:invert-0"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
}
