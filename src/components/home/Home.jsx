import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience"
import Projects from "./projects/Projects";

export default function Home() {
  document.title = 'Ashwin Vijayakumar'
  return (
    <div>
      <Hero />
      <About />
      <Experience/>
      <Projects />
    </div>
  );
}
