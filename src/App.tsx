import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Learning } from "./components/Learning";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F4F0EA] text-[#2B2522]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Learning />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;