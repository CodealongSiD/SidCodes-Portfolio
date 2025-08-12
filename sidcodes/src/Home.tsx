import Bento from "./comps/Bento";
import Navbar from "./comps/Navbar";
import Contact from "./comps/Contact";
import Footer from "./comps/Footer";
import About from "./comps/About";
import Skills from "./comps/Skills";
import Hero from "./comps/Hero";
import Projects from "./comps/Projects";

const Home = () => {
  return (
    <section id="Uptop" className="bg-gradient-to-b from-purple-600 to-violet-800 px-4">
      <Navbar />
      <Hero />
      <Bento />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
