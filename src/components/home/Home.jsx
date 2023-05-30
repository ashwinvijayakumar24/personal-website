import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience"
import FeaturedProjects from "./FeaturedProjects";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience/>
      <FeaturedProjects />
    </div>
  );
}
