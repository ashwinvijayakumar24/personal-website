import React from "react";
import "../styles/mainblogspage.css";
import { blogs } from "./Blogs";

function BlogContainer() {
  document.title = "My Blogs";
  const objectItems = blogs.map((blog) => {
    return (
      <div className="blog-grid-item">
        <a href = {blog.route} target ='_blank' rel="noreferrer">
          <img 
            src={blog.image}
            alt="blog"
          />
        </a>
        <a href = {blog.route} target ='_blank' rel="noreferrer">
          <div className="blog-title"><h2>{blog.title}</h2></div>
        </a>
      </div>
    );
  });
  return objectItems;
}

export default function BlogsPage() {
  return (
    <div>
      <div className="blogs-header">
        <div className="blogs-content">
          <h1>My Blogs</h1>
          <p>Life advice, narratives, opinions</p>
        </div>
      </div>
      <div className="blog-grid-container">
          <BlogContainer />
      </div>
    </div>
  );
}
