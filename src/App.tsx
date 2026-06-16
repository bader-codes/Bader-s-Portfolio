import Projects from "./components/Projects/Projects";
import { Header } from "./components/Header/Navbar";
import Contact from "./components/Contact/Contact";
import Roadmap from "./components/Roadmap/Roadmap";
import Hero from "./components/Hero/HeroSection";
import Cursor from "./components/Cursor/Cursor";
import Resume from "./components/Resume/Resume";
import Skills from "./components/Skills/Skills";
import Social from "./components/Social/Social";
import About from "./components/About/About";
import "./App.css";

export default function App() {
  return (
    <>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Roadmap />
        <Projects />
        <Resume />
        <Social />
        <Contact />
      </main>
    </>
  );
}