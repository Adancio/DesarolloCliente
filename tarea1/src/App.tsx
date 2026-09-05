import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechExperience from "./components/TechExperience";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#inicio">
        Saltar al contenido principal
      </a>
      <main className="app__content">
        <Hero />
        <About />
        <Projects />
        <TechExperience />
        <Education />
        <Hobbies />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;