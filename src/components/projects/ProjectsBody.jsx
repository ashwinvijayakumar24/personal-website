import React from 'react';
import '../styles/projectsbody.css';

export default function ProjectsBody() {
    return(
        <div className='projects-container'>
        <div className='projects-description'>
            <h2>
                As a busy 16 year old, I don't have 
                much time to dedicate myself to time-consuming programming projects, 
                but I do have some projects that I have completed and some that I am
                 working on right now.
            </h2>
        </div>
        <div className="project-grid-container">
        <div className="project-grid-item" style={{backgroundColor:'darkgray'}}>
                <img
                    src="images/code-wizdom-pic.png"
                    alt="Code Wizdom"
                    width="40%"
                    height ="100%"
                />
                <div>
                    <h3><a href="https://codewizdom.org/" target="_blank" rel="noreferrer">Code Wizdom</a></h3>
                    <p>
                        The Code Wizdom Website is by far my most proud achievement as it took around 6 months to fully complete and deploy.
                        I developed it with my co-founder, who like me is also proficient in React.js. We built the 
                        whole website using React.js and have made many modifications to the site after its original deployment in order to 
                        improve the site's UI and UX. This website helped facilitate our growth as an organization as a well built website
                        can bring in people to explore Code Wizdom and the courses we offer.
                    </p>
                </div> 
            </div>
            <div className="project-grid-item">
                <img
                    src="images/ig-bot-pic.png"
                    alt="Instagram Bot"
                    width="40%"
                    height ="100%"
                />
                <div>
                    <h3><a href="https://github.com/ashwinvijayakumar24/instagrambot" target="_blank" rel="noreferrer">Instagram Auto-Liker Bot</a></h3>
                    <p>This is admittedly my only major project I have actually finished and available for use on my GitHub page. 
                        The bot is coded in Python and uses Selenium, an automation and testing framework. More details on the use 
                        and setup of the bot is on my GitHub repository. I was inspired to create this bot through watching a YouTube
                        video that explored building a Twitter Bot using Python and Selenium. I took those same concepts and made my
                        own Instagram Bot.
                    </p>
                </div>
            </div>
            <div className="project-grid-item" style={{backgroundColor:'darkgray'}}>
                <img
                    src="images/math-program-pic.png"
                    alt="Practice Arithmetic Math (Website)"
                    width="40%"
                    height ="100%"
                />
                <div>
                    <h3><a href="https://arithmeticmath.org/" target="_blank" rel="noreferrer">Practice Arithmetic Math (Wesbite)</a></h3>
                    <p>I got the idea of building a website that helped kids practice basic arithmetic as my 
                        brother was starting to learn arithmetic math at his school. I have put off this project for a couple years, 
                        but after honing my skills in React.js, JavaScript, and Bootstrap, I created a website that helps kids practice basic 
                        math problems.
                    </p>
                </div>
            </div>
            <div className="project-grid-item">
                <img
                    src="images/math-app.png"
                    alt="Practice Arithmetic Math (App)"
                    width="40%"
                    height ="100%"
                />
                <div>
                    <h3>Practice Arithmetic Math (App)</h3>
                    <p>This year, I decided to dabble in Swift and SwiftUI as I believe that having 
                        mobile app development skills will be very beneficial later on in my life. 
                        I wanted to create a useful project using my newfound Swift experience 
                        and decided to create an iOS app that is an extension of my arithmetic math website. 
                        The project is still yet to be deployed.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}