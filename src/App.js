import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Home from "./components/home/Home";
import BlogsPage from "./components/blogs/BlogsPage";
import LOTFReview from "./components/blogs/LOTF-Review";
import APHumanStudy from "./components/blogs/AP-Human-Study";
import LearnCodeFree from "./components/blogs/Learn-Code-Free";
import ComingSoon from "./components/blogs/Coming-Soon";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/lotf-review" element={<LOTFReview />} />
        <Route path="/ap-study-human-geography" element={<APHumanStudy />} />
        <Route path="/learn-to-code-free" element={<LearnCodeFree />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
