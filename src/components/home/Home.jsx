import Hero from "./Hero";
import About from "./About";
import FeaturedProjects from "./FeaturedProjects";
import Experience from "./Experience"

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
