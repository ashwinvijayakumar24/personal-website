import React from "react";
import "../styles/experience.css";

export default function Experience() {
  return (
    <div className="experience" id="experience">
      <img
        src="images/about-me-pic.jpg"
        alt="My Pic"
        height="30%"
        width="30%"
      />
      <div className="experience-text">
        <h3>My Experience and Skills</h3>
        <p>
          I have experience programming in HTML, CSS, JavaScript, React.js (what I used to build this site)
          , Python, Java, and Swift. I am in no means an expert in any of these languages, but I do know 
          HTML, CSS, JavaScript (including React), and Python to a proficient level. I am currently trying 
          to learn more intermediate Java at this time. Outside of programming, I am the co-founder and a 
          tutor for Code Wizdom. I love to teach students and I believe that teaching students also helps you
          learn more in whatever you are teaching. I am somewhat good at soccer as I play on my school team. 
          I play some online chess from time to time. I am also starting to dabble in business and 
          marketing (hence the shop on my page lol). I speak 2 languages fluently (English and Tamil) while
          also understanding the basics of Spanish.
        </p>
      </div>
    </div>
  );
}

