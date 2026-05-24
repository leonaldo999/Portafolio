import Typewriter from "./Typewriter";
import SocialIcon from "../../shared/SocialIcon";
import { socialLinks } from "../../shared/constants/social";

const words = [
	"Desarrollador Full Stack",
	"Creador de Soluciones Web",
	"Apasionado por el Código",
];

function Blob({ className }) {
	return (
		<div
			className={`absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob ${className}`}
		/>
	);
}

export default function Hero() {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
		>
			<Blob className="w-72 h-72 bg-teal-400 top-20 left-10 animation-delay-2000" />
			<Blob className="w-96 h-96 bg-cyan-400 top-40 right-10 animation-delay-4000" />
			<Blob className="w-64 h-64 bg-teal-300 bottom-20 left-1/3" />

			<div className="relative max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 w-full">
				<div className="w-full md:w-3/5 text-center md:text-left">
					<p className="inline-block text-sm font-medium text-teal-500 dark:text-teal-400 glass-card px-4 py-1.5 rounded-full mb-4">
						👋 Hola, mundo
					</p>

					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
						Hola, soy <span className="gradient-text">Leonaldo</span>
					</h1>

					<div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 h-8 mb-6">
						<Typewriter words={words} />
					</div>

					<p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
						Construyo aplicaciones web modernas y funcionales con tecnologías de
						vanguardia.
					</p>

					<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
						<a
							href="/CV-LeonardoDev.pdf"
							download="CV-Leonardo-Figueroa.pdf"
							className="glass-btn group"
						>
							<svg
								fill="none"
								stroke="currentColor"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 10v6m0 0-3-3m3 3 3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2"
									strokeWidth={2}
								/>
							</svg>
							<span>Descargar CV</span>
							<span className="text-xs text-teal-100">(PDF)</span>
						</a>

						<div className="flex gap-3">
							{socialLinks.slice(0, 2).map((link) => (
								<a
									key={link.name}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="glass-card w-11 h-11 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300"
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
				</div>

				<div className="w-full md:w-2/5 flex justify-center">
					<div className="relative group">
						<div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-500 animate-spin-slow" />
						<div
							className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500 animate-spin-slow"
							style={{ animationDirection: "reverse" }}
						/>
						<picture>
							<source srcSet="/naldoWebPortafolio.webp" type="image/webp" />
							<img
								src="/naldoWebPortafolio.jpg"
								alt="Foto de Leonaldo"
								className="relative w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
								fetchpriority="high"
							/>
						</picture>
					</div>
				</div>
			</div>
		</section>
	);
}
