import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	return (
		<div className="font-sans scroll-smooth">
			<Navbar />
			<main className="pt-20">
				<section id="hero">
					<Hero />
				</section>
				<Projects />
				<About />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
