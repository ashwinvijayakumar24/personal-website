import React from 'react'
import BlogCard from './BlogCard';

const BlogsGrid = ({blogs}) => {
    return(
        <div className="p-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center overflow-y-hidden mx-auto">
            {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
            ))}
            </div>
        </div>
    )

}


export default BlogsGrid;

