import React from "react";
import "../styles/navbar.css";
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="profile-picture">
        <a href="/">
          <img
            src="images/pfp.png"
            alt="Profile Picture"
            height="80px"
            width="90px"
          />
        </a>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="/#about-me">About Me</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="/#contact-me">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
