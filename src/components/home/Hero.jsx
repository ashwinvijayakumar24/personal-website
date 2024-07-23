import React from "react";
import hero_img from '../../assets/images/heros/home-hero.jpg';


const Hero = () => {
    return (
        <div style={{backgroundImage: `url(${hero_img})`, fontFamily: 'Handlee'}} className="min-h-screen flex items-center justify-center text-white m-auto ">
            <div className="mt-12">
                <div className="text-center px-4 space-y-6 m-auto leading-loose basis-1/2 w-full">  
                    <div className="text-4xl md:max-lg:text-5xl lg:text-6xl font-bold p-4">Ashwin Vijayakumar</div>
                    <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">Student | Developer | Blogger </h2>
                </div>
            </div>
        </div>
    )
}


export default Hero;