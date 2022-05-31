import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-me" id="about-me">
      <div className="about-me-text">
        <h3>About Me</h3>
        <p>
          Hello! I'm Ashwin Vijayakumar. I am a 10th grader at Shadow Creek High
          School in Pearland, Texas, USA. I am the co-founder of Code Wizdom, a
          non-profit organization that aims to provide free programming courses
          to anyone who wants to learn the fundamentals of programming and
          technology. I strive to be a hardworking, ambitious, and positive
          person throughout my life's journey. I love to engage in many
          activities such as playing soccer at my club and at my high school,
          hanging out with friends, programming personal projects (like this
          website), writing blogs on this website, and playing chess.
        </p>
      </div>
      <img
        src="images/about-me-pic.jpg"
        alt="My Pic"
        height="30%"
        width="30%"
      />
    </div>
  );
}
