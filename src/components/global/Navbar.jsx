import React, { useState } from "react";
import "../styles/navbar.css";
export default function NavBar() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="navbar">
      <div className="profile-picture">
        <a href="/">
          <img src="images/pfp.png" alt="Profile" height="80px" width="90px" />
        </a>
      </div>
      <button id="toggle-button" onClick={handleToggle}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <div className="navbar-links" id={isActive ? null : "active"}>
        <ul>
          <li>
            <a href="/#about-me" onClick={handleToggle}>
              About Me
            </a>
          </li>
          <li>
            <a href="/#projects" onClick={handleToggle}>
              Projects
            </a>
          </li>
          <li>
            <a href="/blogs" onClick={handleToggle}>
              Blogs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
