import cw_img from '../../../assets/images/project_imgs/cw_logo_transparent.png';
import soccer from '../../../assets/images/project_imgs/soccer.png';
import ml_bulb from '../../../assets/images/project_imgs/ml_bulb.png';
import insta_img from '../../../assets/images/project_imgs/instagram_bot.png';
import arithmetic_img from '../../../assets/images/project_imgs/arithmetic_math.png';
import weather_img from '../../../assets/images/project_imgs/weather_app.png';
import av_img from '../../../assets/images/project_imgs/av_transparent.png';

const projects = [
    { 
        id: 1,
        name: 'Code Wizdom Website', 
        about: 'Developed my non-profit website by implementing React and Tailwind for the front-end, MongoDB for the database, and Express.js to connect to the backend', 
        link: 'https://www.codewizdom.org/',
        github_link: 'https://github.com/ashwinvijayakumar24/code-wizdom',
        image: cw_img,
    },
    { 
        id: 2,
        name: 'Automatic Soccer Team Sorter for Community Soccer League', 
        about: 'Uses Pandas, Flask, and Python to automate sorting of 1500 newly registered soccer players for community league into balanced teams. Reduced sorting time from 3 weeks to 3 seconds ',
        link: '',
        github_link: 'https://github.com/ashwinvijayakumar24/soccer-team-sorter',
        image: soccer,
    },
    { 
        id: 3,
        name: 'ML Electricity Price Predictor', 
        about: 'Uses Scikit-Learn, Pandas, and Python to create random Forest regression model to predict house electricity prices from 2011-2013',
        link: '',
        github_link: 'https://github.com/ashwinvijayakumar24/electricity-price-predictor',
        image: ml_bulb,
    },
    { 
        id: 4,
        name: 'Instagram Auto-Liker Engagement Bot', 
        about: 'Uses Python Selenium web scraping framework to automate liking posts in order to boost personal content engagement', 
        link: '',
        github_link: 'https://github.com/ashwinvijayakumar24/instagrambot',
        image: insta_img,
    },
    { 
        id: 5,
        name: 'Website for Kids to Practice Arithmetic Math', 
        about: 'Uses React and Bootstrap to create a single-page webpage where kids can learn basic arithmetic through practicing math problems', 
        link: 'https://arithmeticmath.org/',
        github_link: 'https://github.com/ashwinvijayakumar24/arithmeticmath',
        image: arithmetic_img,
    },
    { 
        id: 6,
        name: 'Python Weather App', 
        about: 'Simple Flask app that uses OpenWeather API to give the current weather of any location', 
        link: '',
        github_link: 'https://github.com/ashwinvijayakumar24/weatherapp',
        image: weather_img,
    },
    { 
        id: 6,
        name: 'Personal Portfolio Website', 
        about: 'Developed this personal website by implementing React and Tailwind for the front-end, MongoDB for the database, and Express.js to connect to the backend', 
        link: 'https://ashwinvijayakumar.com/',
        github_link: 'https://github.com/ashwinvijayakumar24/personal-website',
        image: av_img,
    },
]



export default projects;