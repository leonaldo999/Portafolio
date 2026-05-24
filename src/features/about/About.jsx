import SkillBar from "./SkillBar";
import Timeline from "./Timeline";
import AnimatedSection from "../../shared/AnimatedSection";
import skills from "../../shared/constants/skills";
import SocialIcon from "../../shared/SocialIcon";
import { socialLinks } from "../../shared/constants/social";

export default function About() {
	return (
		<AnimatedSection id="about" className="py-20 px-4 content-visibility-auto" animation="up">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
						Sobre <span className="gradient-text">mí</span>
					</h2>
					<p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
						Conoce más sobre mi trayectoria y habilidades técnicas
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="glass-card rounded-2xl p-8">
						<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
							<picture>
								<source srcSet="/naldoWebPortafolio.webp" type="image/webp" />
								<img
									src="/naldoWebPortafolio.jpg"
									alt="Foto de Leonaldo"
									className="w-28 h-28 object-cover rounded-2xl shadow-lg"
									loading="lazy"
								/>
							</picture>
							<div className="text-center sm:text-left">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
									Leonaldo
								</h3>
								<p className="text-sm text-teal-500 dark:text-teal-400 font-medium mb-2">
									Desarrollador Full Stack
								</p>
								<p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
									Egresado de una especialización intensiva. Apasionado por
									construir soluciones web que no solo funcionen bien, sino que
									también se vean geniales.
								</p>
							</div>
						</div>

						<div className="mb-8">
							<div className="flex flex-wrap gap-4 justify-center sm:justify-start">
								{socialLinks.map((link) => (
									<a
										key={link.name}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={
											link.url && link.url.startsWith("http")
												? `${link.name} (se abre en una pestaña nueva)`
												: link.name
										}
										className="glass-card px-4 py-2 rounded-xl flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 hover:border-teal-400/30 transition-all duration-300"
									>
										<SocialIcon icon={link.icon} />
										{link.name}
									</a>
								))}
							</div>
						</div>

						<h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
							Habilidades Técnicas
						</h4>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
							{skills.map((skill) => (
								<SkillBar
									key={skill.name}
									name={skill.name}
									level={skill.level}
								/>
							))}
						</div>
					</div>

					<div className="glass-card rounded-2xl p-8">
						<h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
							Mi Trayectoria
						</h4>
						<Timeline />
					</div>
				</div>
			</div>
		</AnimatedSection>
	);
}
