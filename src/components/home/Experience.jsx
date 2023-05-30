import React from "react";
import "../styles/experience.css";
import{DiPython, DiHtml5, DiJava, DiReact, DiSwift} from 'react-icons/di';
import {SiJavascript, SiGoogle, SiMicrosoftoffice, SiVisualstudio} from 'react-icons/si';
import {GiChessPawn, GiPencil, GiSoccerBall} from 'react-icons/gi';

export default function Experience() {
  return (
    <div className="experience" id="experience">
      <img
        src="images/soccer.jpg"
        alt="My Pic"
        height="40%"
        width="40%"
      />
      <div className="experience-text">
        <h1>My Experience and Skills</h1>
        <div className="experience-grid">
                <h2><DiPython/> Python </h2>
                <h2><DiJava/> Java </h2>
                <h2><SiJavascript/> JavaScript </h2>
                <h2><DiReact/> React.js </h2>
                <h2><DiHtml5/> HTML, CSS </h2>
                <h2><DiSwift/> Swift</h2>
                <h2><SiMicrosoftoffice/> MS Office</h2>
                <h2><SiGoogle/> Google Suite</h2>
                <h2><SiVisualstudio/> VSCode</h2>
                <h2><GiSoccerBall/> Soccer</h2>
                <h2><GiChessPawn/> Chess</h2>
                <h2><GiPencil/> Writing</h2>
          </div>
        </div>
      </div>
  );
}

