import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-me" id="contact-me">
      <div className="contact-me-info">
        <h3>Contact Me</h3>
        <p>You can contact me through any of these ways:</p>
      </div>
      <div className="contact-info">
        <div>
          <a href="mailto:24ashwinv@gmail.com" target="_blank">
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
          <a href="https://www.instagram.com/thefamashwin/" target="_blank">
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
          <a href="https://twitter.com/thefamashwin/" target="_blank">
            <img
              src="images/twitter-icon.png"
              alt="twitter-icon"
              height="50px"
              width="50px"
            />
          </a>
          <p>Twitter- @thefamashwin</p>
        </div>
      </div>
    </div>
  );
}
