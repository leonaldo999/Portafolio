import useTypewriter from "../../shared/hooks/useTypewriter";

export default function Typewriter({ words, className = "" }) {
	const text = useTypewriter(words, {
		typeSpeed: 80,
		deleteSpeed: 50,
		delayBetween: 2000,
	});

	return (
		<span className={className} aria-live="polite" aria-atomic="true">
			{text}
			<span className="inline-block w-0.5 h-5 ml-0.5 bg-teal-400 animate-typewriter-cursor align-middle" />
		</span>
	);
}
