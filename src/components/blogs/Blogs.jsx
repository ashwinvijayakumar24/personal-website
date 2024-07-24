import React from 'react';
import blogs_hero from '../../assets/images/heros/new_blog_hero.avif';
import BlogsGrid from './BlogsGrid';

const Blogs = ({blogs}) => {
    document.title = 'Blogs'
    return (
        <div>
            <div style={{backgroundImage: `url(${blogs_hero})`, fontFamily: 'Handlee'}} className="min-h-screen flex items-center justify-center text-white m-auto ">
                <div className="mt-12">
                    <div className="text-center px-4 space-y-6 m-auto leading-loose basis-1/2 w-full text-black">  
                        <div className="text-4xl md:max-lg:text-5xl lg:text-6xl font-bold p-4">Film Reviews</div>
                        <h2 className="text-lg md:max-lg:text-xl lg:text-2xl">Critical Reviews of Indian Films</h2>
                    </div>
                </div>
            </div>
            <BlogsGrid blogs={blogs}/>
        </div>
    )
}

export default Blogs;
