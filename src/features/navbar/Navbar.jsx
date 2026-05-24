import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import ScrollProgress from "./ScrollProgress";
import { useTheme } from "../../shared/hooks/useTheme";

export default function Navbar() {
	const { isDark, toggleTheme } = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const links = [
		{ href: "#about", label: "Sobre mí" },
		{ href: "#projects", label: "Proyectos" },
		{ href: "#contact", label: "Contacto" },
	];

	return (
		<>
			<ScrollProgress />
			<nav
				className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
					scrolled
						? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-black/5"
						: "bg-transparent"
				}`}
			>
				<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
					<a
						href="#hero"
						className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
					>
						Leonaldo.dev
					</a>

					<div className="hidden md:flex items-center gap-8">
						{links.map((link) => (
							<a key={link.href} href={link.href} className="nav-link py-1">
								{link.label}
							</a>
						))}
						<ThemeToggle isDark={isDark} onToggle={toggleTheme} />
					</div>

					<div className="flex items-center gap-3 md:hidden">
						<ThemeToggle isDark={isDark} onToggle={toggleTheme} />
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="relative w-8 h-8 flex items-center justify-center glass-card rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
							aria-label="Menú"
							aria-expanded={isOpen}
							aria-controls="mobile-menu"
						>
							<div className="w-5 flex flex-col gap-1.5">
								<span
									className={`block h-0.5 bg-gray-600 dark:bg-gray-300 rounded transition-all duration-300 ${
										isOpen ? "rotate-45 translate-y-1" : ""
									}`}
								/>
								<span
									className={`block h-0.5 bg-gray-600 dark:bg-gray-300 rounded transition-all duration-300 ${
										isOpen ? "opacity-0" : ""
									}`}
								/>
								<span
									className={`block h-0.5 bg-gray-600 dark:bg-gray-300 rounded transition-all duration-300 ${
										isOpen ? "-rotate-45 -translate-y-1" : ""
									}`}
								/>
							</div>
						</button>
					</div>
				</div>

				<div
					id="mobile-menu"
					className={`md:hidden overflow-hidden transition-all duration-300 ${
						isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<div className="glass-card mx-6 mb-4 rounded-2xl p-4 flex flex-col gap-3">
						{links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setIsOpen(false)}
								className="px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-teal-500/10 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
			</nav>
		</>
	);
}
