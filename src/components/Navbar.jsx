// portafolio/src/components/Navbar.jsx

import { useEffect, useState } from "react";

export default function Navbar() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
			document.documentElement.classList.add("dark");
			setIsDarkMode(true);
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const toggleDarkMode = () => {
		const isDark = document.documentElement.classList.toggle("dark");
		setIsDarkMode(isDark);
		localStorage.setItem("theme", isDark ? "dark" : "light");
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 px-6 py-4">
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				{/* Logo */}
				<a
					href="#hero"
					className="text-xl font-bold text-gray-800 dark:text-white hover:text-primary transition"
				>
					Leonaldo.dev
				</a>

				{/* Ícono hamburguesa en móvil */}
				<div className="md:hidden">
					<button onClick={toggleMenu} className="focus:outline-none">
						<img
							src={isDarkMode ? "/hamburguesaDark.png" : "/hamburguesa.png"}
							alt="Menú"
							className="w-8 h-8 object-contain"
						/>
					</button>
				</div>

				{/* Menú en desktop */}
				<div className="hidden md:flex items-center gap-6">
					<a
						href="#about"
						className="text-gray-700 dark:text-gray-300 hover:text-primary"
					>
						Sobre mí
					</a>
					<a
						href="#projects"
						className="text-gray-700 dark:text-gray-300 hover:text-primary"
					>
						Proyectos
					</a>
					<a
						href="#contact"
						className="text-gray-700 dark:text-gray-300 hover:text-primary"
					>
						Contacto
					</a>
					<button
						onClick={toggleDarkMode}
						className="text-xl hover:scale-110 transition"
					>
						{isDarkMode ? "☀️" : "🌙"}
					</button>
				</div>
			</div>

			{/* Menú desplegable en móvil */}
			{isOpen && (
				<div className="md:hidden mt-4 flex flex-col items-start gap-4 px-6">
					<a
						href="#about"
						onClick={toggleMenu}
						className="text-gray-700 dark:text-gray-300 hover:text-primary"
					>
						Sobre mí
					</a>
					<a
						href="#projects"
						onClick={toggleMenu}
						className="text-gray-700 dark:text-gray-300 hover:text-primary"
					>
						Proyectos
					</a>
					<a
						href="#contact"
						onClick={toggleMenu}
						className="text-gray-700 dark:text-gray-300 hover:text-primary"
					>
						Contacto
					</a>
					<button
						onClick={() => {
							toggleDarkMode();
							toggleMenu();
						}}
						className="text-xl hover:scale-110 transition"
					>
						{isDarkMode ? "☀️" : "🌙"}
					</button>
				</div>
			)}
		</nav>
	);
}
