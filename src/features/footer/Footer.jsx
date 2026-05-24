import SocialIcon from "../../shared/SocialIcon";
import { socialLinks } from "../../shared/constants/social";

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="relative mt-20">
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />

			<div className="max-w-6xl mx-auto px-6 py-10">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<div className="text-center md:text-left">
						<a
							href="#hero"
							className="text-lg font-bold gradient-text hover:opacity-80 transition-opacity"
						>
							Leonaldo.dev
						</a>
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
							© {new Date().getFullYear()} — Todos los derechos reservados
						</p>
					</div>

					<div className="flex items-center gap-3">
						{socialLinks.map((link) => (
							<a
								key={link.name}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="glass-card w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300"
								aria-label={
									link.url && link.url.startsWith("http")
										? `${link.name} (se abre en una pestaña nueva)`
										: link.name
								}
							>
								<SocialIcon icon={link.icon} />
							</a>
						))}
					</div>
				</div>

				<div className="flex justify-center mt-8">
					<button
						onClick={scrollToTop}
						className="glass-card w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-teal-500 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 group"
						aria-label="Volver arriba"
					>
						<svg
							className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 10l7-7m0 0l7 7m-7-7v18"
							/>
						</svg>
					</button>
				</div>
			</div>
		</footer>
	);
}
