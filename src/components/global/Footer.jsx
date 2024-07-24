import React from "react";
import { Link } from "react-router-dom";
import av_logo from '../../assets/images/logos/av_transparent.png';
import instagram from '../../assets/images/social-handles/instagram.png';
import gmail from '../../assets/images/social-handles/gmail.png';
import github from '../../assets/images/social-handles/github.png';
import linkedin from '../../assets/images/social-handles/linkedin.png';


const Footer = () =>  {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col space-y-5 w-full justify-around items-center lg:flex-row basis-1/4 lg:max-xl:basis-1/6">
          <div className="flex flex-col w-full space-y-4 items-center md:flex-row">
            <div className="mx-auto">
              <Link to='/'> 
                <img className='size-12 md:max-lg:size-16 lg:size-20'src={av_logo} alt="av logo"/>
              </Link>
            </div>
            <div className="flex flex-row justify-center items-center space-x-10 mx-auto basis-1/2 lg:max-xl:basis-1/2">
              <a href="https://www.instagram.com/_ashwinv/" target="_blank" rel="noreferrer">
                <img className='size-12 md:max-lg:size-16 lg:size-18'src={instagram} alt="instagram"/>  
              </a>
              <a href="mailto:24ashwinv@gmail.com" target="_blank" rel="noreferrer">
                <img className='size-12 md:max-lg:size-16 lg:size-18'src={gmail} alt="email" />  
              </a>
              <a href="https://github.com/ashwinvijayakumar24" target="_blank" rel="noreferrer">
                <img className='size-12 md:max-lg:size-16 lg:size-18'src={github} alt="github" />  
              </a>
              <a href="https://www.linkedin.com/in/ashwin-vijayakumar-28499a23a/" target="_blank" rel="noreferrer">
                <img className='size-12 md:max-lg:size-16 lg:size-18'src={linkedin} alt="linkedin" />  
              </a>
            </div>
          </div>
          <nav className="flex flex-row space-x-8 mx-auto basis-1/4 lg:max-xl:basis-1/3 items-center justify-center">
            <Link to="/blogs" className="hover:underline text-white">Film Reviews</Link>
          </nav>
      </div>
      <div className="mx-auto mt-4">
        <p className="">Ashwin Vijayakumar © 2024</p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;