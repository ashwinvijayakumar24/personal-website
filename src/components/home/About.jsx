import React from "react";
import ashwin_img from '../../assets/images/solos/headshot_sq.png';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-8 mb-8 text-white">
      <div className="space-y-6 text-center w-full mx-auto lg:w-1/2 lg:mx-0 p-12">
        <h1 className="text-2xl md:max-lg:text-3xl lg:text-4xl font-bold mb-4 p-4 w-fit mx-auto">About Me</h1>
        <p className="text-lg leading-loose md:max-lg:text-xl md:max-lg:leading-loose lg:text-2xl lg:leading-loose mx-auto">
          Hello! I'm Ashwin Vijayakumar. I am an 12th grader at Shadow Creek High
          School in Pearland, Texas. I am the founder of Code Wizdom, a
          non-profit organization that provides one-on-one online tutoring in programming and web development. 
          I strive to be a hardworking, ambitious, and positive
          person throughout my life's journey. Currently, I'm diving into
          the realm of machine learning and AI, specifically working with Scikit-Learn and Pytorch.
          I love to engage in many activities such as programming personal projects, hanging out with friends,
          playing sports, and writing movie reviews on this website!
        </p>
      </div>
      <div className="rounded-lg bg-amber-400  mx-auto p-6 space-y-4">
        <img className="mx-auto size-64 md:max-xl:size-72 xl:size-80 rounded-lg" src={ashwin_img} alt="ashwin headshot"/>
      </div>
    </div>
  );
}


export default About;
