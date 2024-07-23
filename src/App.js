import {useState, useEffect} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import ScrollToTop from './components/global/ScrollToTop';
import Home from "./components/home/Home";
import Blogs from './components/blogs/Blogs';
import SingleBlog from "./components/blogs/SingleBlog";
import Error from "./components/error/Error";

function App() {

  const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const getBlogs = async () => {
            await axios.get('http://localhost:5000/api/blogs')
            .then(response => {
                setBlogs(response.data)
            })
            .catch(err => console.log(err));
        }
        getBlogs();
    }, [])


  return (
    <Router>
      <ScrollToTop/>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blogs" element={<Blogs blogs={blogs}/>} />
          {blogs.map((blog, index) => (
            <Route key={index} exact path={`/blogs${blog.route}`} element={<SingleBlog blog={blog}/>}/>
          ))}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
