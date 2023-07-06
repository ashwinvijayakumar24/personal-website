import React from "react";
import "../styles/featuredprojects.css";
import AwesomeSlider from "react-awesome-slider";




export default function FeaturedProjects() {
  return (
    <div className="featured-projects" id="featured-projects">
      <h1>Featured Projects</h1>
      <AwesomeSlider className='slider-container' bullets={false}>
        <div style={{backgroundImage: 'url("images/ig-bot-pic.png")', width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="slider-caption">
            <h1>Instagram Bot</h1>
          </div>
        </div>
        <div style={{backgroundImage: 'url("images/code-wizdom-pic.png")', width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="slider-caption">
            <h1>Code Wizdom</h1>
          </div>
        </div>
        <div style={{backgroundImage: 'url("images/math-program-slideshow.png")', width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="slider-caption">
            <h1>Practice Arithmetic Math (Website)</h1>
          </div>
        </div>
      </AwesomeSlider>
      <h4><a href="/projects">See all of my projects in development here</a></h4>
    </div>
  );
}
