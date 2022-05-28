import React from "react";
import "../styles/projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects-text">
        <h3>Projects</h3>
        <p>
          As a busy 15 year old, I don't have much time to dedicate myself to
          time-consuming programming projects, but I do have some projects that
          I have completed and some that I am working on right now.
        </p>
      </div>
      <div className="project-cards">
        <div className="card-container">
          <div className="cards" id="ig-bot"></div>
          <div className="card-description">
            <h4>Instagram Auto-Liker Bot</h4>
            <p>
              This is admittedly my only major project I have actually finished
              and available for use on my{" "}
              <a
                href="https://github.com/ashwinvijayakumar24/instagrambot"
                target="_blank"
                rel="noreferrer"
                style={{ color: "black" }}
              >
                GitHub
              </a>{" "}
              page. The bot is coded in Python and uses Selenium, an automation
              and testing framework. More details on the use and setup of the
              bot is on my GitHub repository.
            </p>
          </div>
        </div>
        <div className="card-container">
          <div className="card-description">
            <h4>iOS app for kids to practice basic arithmetic math</h4>
            <p>
              This year, I decided to dabble in Swift and SwiftUI as I believe
              that having mobile app development skills will be very beneficial
              later on in my life. I wanted to create a useful project using my
              newfound Swift experience and decided to create an iOS app that
              helps kids practice basic arithmetic math. This project is almost
              done, but I still need to deploy it.
            </p>
          </div>
          <div className="cards" id="swift-app"></div>
        </div>
        <div className="card-container">
          <div className="cards" id="math-program"></div>
          <div className="card-description">
            <h4>Website for kids to practice basic arithmetic math</h4>
            <p>
              This website is basically the same thing as my iOS app, but it is
              obviously built as a website. I used vanilla HTML, CSS, and
              JavaScript to develop this site. The site was up previously, but I
              took it down for some modifications. I am contemplating on whether
              I should keep the site in a website or if should transform the
              site into a web application so users can have much more
              functionality on the webpage. If this site becomes a web
              application, it would realistically take around a year for it to
              fully deploy.
            </p>
          </div>
        </div>
        <div className="card-container">
          <div className="card-description">
            <h4>Simple Mini Projects for learning programming</h4>
            <p>
              In the middle of all of these major projects, I also try to learn
              many programming languages and concepts. To practice these
              concepts, I do a bunch of very mini-projects that take no longer
              than 10-30 minutes if you know what you are doing. These projects
              can be found on my{" "}
              <a
                href="https://github.com/ashwinvijayakumar24"
                target="_blank"
                rel="noreferrer"
                style={{ color: "black" }}
              >
                GitHub
              </a>{" "}
              page if you want any ideas on simple programming projects.
            </p>
          </div>
          <div className="cards" id="mini-projects"></div>
        </div>
        <div className="card-container">
          <div className="cards" id="website"></div>
          <div className="card-description">
            <h4>This Website!</h4>
            <p>
              In my opinion, this website is the biggest project I have done so
              far as I have spent a lot of time and effort into it. At first, I
              decided to build this website because I wanted to practice my
              HTML, CSS, and JavaScript skills. But as I realized that having a
              personal website offers many benefits, I decided to add features
              to it, use React.js instead of plain HTML, CSS, and JavaScript and
              actually make it nice. I am really proud of this site and hope you
              are too!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
