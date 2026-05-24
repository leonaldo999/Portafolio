import { useReducer } from "react";
import AnimatedSection from "../../shared/AnimatedSection";
import SocialIcon from "../../shared/SocialIcon";
import { socialLinks } from "../../shared/constants/social";

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

const initialForm = { name: "", email: "", message: "" };

function formReducer(state, action) {
	switch (action.type) {
		case "SET_FIELD":
			return { ...state, [action.field]: action.value };
		case "RESET":
			return initialForm;
		default:
			return state;
	}
}

const STATUS = { IDLE: "idle", SUBMITTING: "submitting", SUCCESS: "success", ERROR: "error" };

function statusReducer(state, action) {
	switch (action.type) {
		case "SUBMIT": return STATUS.SUBMITTING;
		case "SUCCESS": return STATUS.SUCCESS;
		case "ERROR": return STATUS.ERROR;
		case "RESET": return STATUS.IDLE;
		default: return state;
	}
}

export default function Contact() {
	const [formData, dispatch] = useReducer(formReducer, initialForm);
	const [status, dispatchStatus] = useReducer(statusReducer, STATUS.IDLE);

	const handleChange = (e) => {
		dispatch({ type: "SET_FIELD", field: e.target.id, value: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatchStatus({ type: "SUBMIT" });

		if (!FORM_ENDPOINT) {
			dispatch({ type: "RESET" });
			dispatchStatus({ type: "SUCCESS" });
			return;
		}

		try {
			const res = await fetch(FORM_ENDPOINT, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			if (!res.ok) throw new Error("Error");
			dispatch({ type: "RESET" });
			dispatchStatus({ type: "SUCCESS" });
		} catch {
			dispatchStatus({ type: "ERROR" });
		}
	};

	const isSubmitting = status === STATUS.SUBMITTING;

	return (
		<AnimatedSection id="contact" className="py-20 px-4 content-visibility-auto" animation="up">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
						<span className="gradient-text">Contáctame</span>
					</h2>
					<p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
						¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
					<div className="lg:col-span-2 flex flex-col gap-4">
						{socialLinks.map((link) => (
							<a
								key={link.name}
								href={link.url}
								target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
								rel={
									link.url.startsWith("mailto:") ? "" : "noopener noreferrer"
								}
								aria-label={
									link.url &&
									!link.url.startsWith("mailto:") &&
									link.url.startsWith("http")
										? `${link.name} (se abre en una pestaña nueva)`
										: link.name
								}
								className="glass-card-hover rounded-xl p-4 flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
							>
								<div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-400/10 flex items-center justify-center text-teal-500 dark:text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
									<SocialIcon icon={link.icon} />
								</div>
								<div>
									<p className="text-sm font-medium text-gray-800 dark:text-white">
										{link.name}
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-400">
										{link.url.replace("mailto:", "").replace("https://", "")}
									</p>
								</div>
							</a>
						))}
					</div>

					<form
						onSubmit={handleSubmit}
						className="lg:col-span-3 glass-card rounded-2xl p-8 space-y-5"
					>
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
							>
								Nombre *
							</label>
							<input
								type="text"
								id="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="glass-input w-full px-4 py-3 rounded-xl"
								placeholder="Tu nombre"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
							>
								Correo electrónico *
							</label>
							<input
								type="email"
								id="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="glass-input w-full px-4 py-3 rounded-xl"
								placeholder="tu@correo.com"
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
							>
								Mensaje *
							</label>
							<textarea
								id="message"
								rows="5"
								value={formData.message}
								onChange={handleChange}
								required
								className="glass-input w-full px-4 py-3 rounded-xl resize-none"
								placeholder="Cuéntame sobre tu proyecto o idea..."
							/>
						</div>

						{status === STATUS.SUCCESS && (
							<div className="bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 p-4 rounded-xl text-sm">
								¡Mensaje enviado correctamente! Te responderé pronto.
							</div>
						)}
						{status === STATUS.ERROR && (
							<div className="bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 p-4 rounded-xl text-sm">
								Error al enviar el mensaje. Por favor, inténtalo de nuevo.
							</div>
						)}

						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 disabled:from-teal-400 disabled:to-cyan-400 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
						>
							{isSubmitting ? (
								<>
									<svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
											fill="none"
										/>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
										/>
									</svg>
									Enviando...
								</>
							) : (
								<>
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
											d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
										/>
									</svg>
									Enviar mensaje
								</>
							)}
						</button>
					</form>
				</div>
			</div>
		</AnimatedSection>
	);
}
