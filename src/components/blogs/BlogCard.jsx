import React from 'react';
import { useNavigate } from 'react-router-dom';


const BlogCard = ({blog}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blogs${blog.route}`)
    }

    return(
        <div className="flex flex-col md:flex-row items-center md:w-3/4 mx-auto bg-amber-600 text-white p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform cursor-pointer space-y-4" onClick={handleClick}>
            <div className='space-y-6 w-2/3 mx-auto'>
              <h3 className="text-xl md:max-lg:text-2xl lg:text-3xl font-bold">{blog.title}</h3>
              <p className=' text-md leading-loose md:max-lg:text-lg md:max-lg:leading-loose lg:text-xl lg:leading-loose'>{blog.description}</p>
            </div>
        </div>
    )

}


export default BlogCard;