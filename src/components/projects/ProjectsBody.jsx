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
                    <h3>Code Wizdom</h3>
                    <p>
                        The Code Wizdom Website is by far my most proud achievement as it took around 6 months to fully complete and deploy.
                        I developed it with my co-founder Akshay Padmakumar, who like me is also a good programmer in React.js. We built the 
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
                    <h3>Instagram Bot</h3>
                    <p>This is admittedly my only major project I have actually finished and available for use on my GitHub page. 
                        The bot is coded in Python and uses Selenium, an automation and testing framework. More details on the use 
                        and setup of the bot is on my GitHub repository. I was inspired to create this bot through watching a YouTube
                        video that explored building a Twitter Bot using Python and Selenium. I took those same concepts and made my
                        own Instagram Bot.
                    </p>
                </div>
            </div>
            <div className="project-grid-item">
                <img
                    src="images/math-app.png"
                    alt="Math Program (App)"
                    width="40%"
                    height ="100%"
                />
                <div>
                    <h3>Math Program (App)</h3>
                    <p>This year, I decided to dabble in Swift and SwiftUI as I believe that having mobile app development skills will 
                        be very beneficial later on in my life. I wanted to create a useful project using my newfound Swift experience 
                        and decided to create an iOS app that helps kids practice basic arithmetic math. This project is almost done, 
                        but I still need to deploy it.
                    </p>
                </div>
            </div>
            <div className="project-grid-item" style={{backgroundColor:'darkgray'}}>
                <img
                    src="images/math-program-pic.png"
                    alt="Math Program (Website)"
                    width="40%"
                    height ="100%"
                />
                <div>
                    <h3>Math Program (Website)</h3>
                    <p>This website is basically the same thing as my iOS app, but it is obviously built as a website. 
                        I used vanilla HTML, CSS, and JavaScript to develop this site. The site was up previously, but I 
                        took it down for some modifications. I am contemplating on whether I should keep the site in a website 
                        or if should transform the site into a web application so users can have much more functionality on the webpage. 
                        If this site becomes a web application, it would realistically take around a year for it to fully deploy.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}