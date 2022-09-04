import React from "react";
import "../styles/featuredprojects.css";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';




export default function FeaturedProjects() {
  return (
    <div className="featured-projects" id="featured-projects">
      <h2>Featured Projects</h2>
      <AwesomeSlider className='slider-container' animation="cubeAnimation" bullets={false}>
        <div data-src="/images/ig-bot-pic.png" />
        <div data-src="/images/math-program-pic.png" />
        <div data-src="/images/math-app.png" />
      </AwesomeSlider>
    </div>
  );
}
