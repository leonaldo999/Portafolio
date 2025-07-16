// portafolio/src/components/Contact.jsx

import { useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState("");

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("");

		try {
			// Simular envío (reemplaza con tu lógica real)
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Aquí puedes integrar con EmailJS, Formspree, o tu backend
			console.log("Formulario enviado:", formData);

			setSubmitStatus("success");
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("Error al enviar:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	// Datos de contacto para fácil mantenimiento
	const contactLinks = [
		{
			href: "mailto:leonaldo999@gmail.com",
			icon: "/gmailIcon.png",
			alt: "Email",
			label: "leonaldo999@gmail.com",
		},
		{
			href: "https://www.linkedin.com/in/leonardo-figueroa-lima-191070293", // Actualizar con tu perfil real
			icon: "/linkedinIcon.png",
			alt: "LinkedIn",
			label: "LinkedIn",
		},
		{
			href: "https://github.com/leonaldo999", // Actualizar con tu usuario real
			icon: "/githubIcon.png",
			alt: "GitHub",
			label: "GitHub",
		},
	];

	return (
		<section id="contact" className="bg-gray-50 dark:bg-gray-800 py-16 px-4">
			<div className="max-w-3xl mx-auto" data-aos="fade-right">
				<h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
					Contáctame
				</h2>

				{/* Información de contacto */}
				<div className="text-center mb-8">
					<p className="text-gray-600 dark:text-gray-300 mb-6">
						¿Tienes un proyecto en mente? ¡Hablemos!
					</p>
					<div className="flex flex-wrap justify-center gap-6">
						{contactLinks.map((link, index) => (
							<a
								key={index}
								href={link.href}
								target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
								rel={
									link.href.startsWith("mailto:") ? "" : "noopener noreferrer"
								}
								className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 group"
								title={link.label}
							>
								<img
									src={link.icon}
									alt={link.alt}
									className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
								/>
								<span className="text-sm hidden sm:inline">{link.label}</span>
							</a>
						))}
					</div>
				</div>

				<form
					onSubmit={handleSubmit}
					className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg dark:shadow-none space-y-6"
				>
					<div>
						<label
							htmlFor="name"
							className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
						>
							Nombre *
						</label>
						<input
							type="text"
							id="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
							placeholder="Tu nombre"
						/>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
						>
							Correo electrónico *
						</label>
						<input
							type="email"
							id="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
							placeholder="tu@correo.com"
						/>
					</div>

					<div>
						<label
							htmlFor="message"
							className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
						>
							Mensaje *
						</label>
						<textarea
							id="message"
							rows="5"
							value={formData.message}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
							placeholder="Cuéntame sobre tu proyecto o idea..."
						></textarea>
					</div>

					{/* Mensajes de estado */}
					{submitStatus === "success" && (
						<div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg animate-fade-in">
							✅ ¡Mensaje enviado correctamente! Te responderé pronto.
						</div>
					)}

					{submitStatus === "error" && (
						<div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-lg animate-fade-in">
							❌ Error al enviar el mensaje. Por favor, inténtalo de nuevo.
						</div>
					)}

					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
					>
						{isSubmitting ? (
							<>
								<div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
								Enviando...
							</>
						) : (
							"Enviar mensaje"
						)}
					</button>
				</form>
			</div>
		</section>
	);
}
