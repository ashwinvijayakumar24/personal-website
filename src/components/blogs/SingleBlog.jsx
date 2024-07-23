import React from 'react';

const SingleBlog = ({blog}) => {
    document.title = blog.title;

    const blogBody = blog.content.split("<br/>");

    return(
        <div className="min-h-screen mt-28 bg-white flex justify-center p-4">
            <div>
                <h1 className="text-2xl md:max-lg:text-3xl lg:text-4xl font-bold mb-4 p-4 text-center">{blog.title}</h1>
                <div className="text-gray-700 mb-2 text-center font-semibold">
                    By: Ashwin Vijayakumar
                </div>
                <div className="text-gray-500 mb-6 text-center font-semibold">
                    Published on: {blog.date}
                </div>
                <div className="text-gray-800 w-3/4 mx-auto">
                    {blogBody.map((segment, index) => (
                        <p className="text-md leading-loose md:max-lg:text-lg md:max-lg:leading-loose lg:text-xl lg:leading-loose" key={index}>{segment}<br/><br/></p>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default SingleBlog;