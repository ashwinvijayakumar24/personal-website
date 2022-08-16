import React from "react";
import "../styles/mainblogspage.css";
import { blogs } from "./Blogs";

function BlogContainer() {
  document.title = "Blogs";
  const objectItems = blogs.map((blog) => {
    return (
      <div className="blog-containers">
        <div className="blog-title" onClick={() => {window.open(blog.route, "_blank")}}><h2>{blog.title}</h2></div>
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
      <div className="blogs-intro">
        <div>
          <h3>My thoughts on blogging</h3>
        </div>
        <div>
          <p>
            When I first thought of creating this personal website, I was so
            hyped and ready that without even planning, I started to work on the
            code. It was after I started to work on the navigation bar that I
            realized that I had no plan for the site. The only purpose of the
            site was to introduce me and what I have done. After I came to this
            realization, I decided to make this website worth coming to. I
            started to think of ideas on what I can do. My first thought was to
            be a freelancer for hire for front-end development, but considering
            the fact that I am only 15 and busy with school and
            extracurriculars, it seemed like a poor idea. And plus, who knows
            how long it would take for someone to hire me. So I looked through
            the wonderful world of Google to find ideas and BAM! I saw that
            blogging was an option. At first, I didn't consider it at all as I
            thought blogging was very lame and just not for me. But even as I am
            writing this, I feel good just sharing my thoughts and my stories.
            For me, it is a relaxing outlet from the outside world and really
            helps if you just want to get your thoughts out and also to inform
            readers about things. I would love to make a difference through
            blogging on this page and hope that you can learn something or just
            have a relaxing read!
          </p>
        </div>
      </div>
      <div className="blog-cards">
        <BlogContainer />
      </div>
    </div>
  );
}
