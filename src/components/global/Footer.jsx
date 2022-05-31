import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="profile-picture-footer">
        <a href="/">
          <img src="images/pfp.png" alt="Profile" height="80px" width="90px" />
        </a>
      </div>
      <div className="contact-me">
        <div className="contact-info">
          <div>
            <a
              href="mailto:24ashwinv@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/email-icon.png"
                alt="email-icon"
                height="50px"
                width="50px"
              />
            </a>
            <p>Email- 24ashwinv@gmail.com</p>
          </div>
          <div>
            <a
              href="https://www.instagram.com/thefamashwin/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/instagram-icon.png"
                alt="instagram-icon"
                height="50px"
                width="50px"
              />
            </a>
            <p>Instagram- @thefamashwin</p>
          </div>
          <div>
            <a
              href="https://twitter.com/thefamashwin/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/twitter-icon.png"
                alt="twitter-icon"
                height="50px"
                width="50px"
              />
            </a>
            <p>Twitter- @thefamashwin</p>
          </div>
          <div>
            <a
              href="https://github.com/ashwinvijayakumar24"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/github-icon.png"
                alt="github-icon"
                height="50px"
                width="50px"
              />
            </a>
            <p>GitHub- ashwinvijayakumar24</p>
          </div>
        </div>
        <div className="copyright-notice">
          <h5>Copyright © 2022 Ashwin Vijayakumar </h5>
        </div>
      </div>
      <div className="links">
        <a href="/#about-me">About Me</a>
        <a href="/#projects">Projects</a>
        <a href="/blogs">Blogs</a>
      </div>
    </div>
  );
}
