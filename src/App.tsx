import Hero from "./sections/hero";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Experience from "./sections/experience";
import Certificates from "./sections/certificates";
import Products from "./sections/products";
import Contact from "./sections/contact";
import Navigation from "./sections/navigation";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Products />
      <Contact />
    </div>
  );
}
