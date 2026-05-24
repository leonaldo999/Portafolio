import Navbar from "./features/navbar/Navbar";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import Projects from "./features/projects/Projects";
import Contact from "./features/contact/Contact";
import Footer from "./features/footer/Footer";

function App() {
	return (
		<div className="font-sans scroll-smooth">
			<Navbar />
			<main id="main">
				<Hero />
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
