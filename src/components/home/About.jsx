import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-me" id="about-me">
      <div className="about-me-text">
        <h1>About Me</h1>
        <p>
          Hello! I'm Ashwin Vijayakumar. I am an 11th grader at Shadow Creek High
          School in Pearland, Texas, USA. I am the co-founder of Code Wizdom, a
          non-profit organization that aims to provide free programming courses
          to anyone who wants to learn the fundamentals of programming and
          technology. I strive to be a hardworking, ambitious, and positive
          person throughout my life's journey. I love to engage in many
          activities such as playing soccer, hanging out with friends, 
          programming personal projects, and writing blogs on this website.
        </p>
      </div>
      <img
        src="images/grad-party.jpg"
        alt="My Pic"
        height="40%"
        width="40%"
      />
    </div>
  );
}
