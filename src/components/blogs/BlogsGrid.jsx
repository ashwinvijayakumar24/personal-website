import React from 'react'
import BlogCard from './BlogCard';

const BlogsGrid = ({blogs}) => {
    return(
        <div className="p-6">
            <div className="grid grid-cols-1 gap-8 text-center overflow-y-hidden mx-auto ">
            {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
            ))}
            </div>
        </div>
    )

}


export default BlogsGrid;

