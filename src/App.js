import React from "react";
import "./App.css";
import NavBar from "./components/global/Navbar";
import Home from "./components/home/Home";
import BlogsPage from "./components/blogs/BlogsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LOTFReview from "./components/blogs/LOTF-Review";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/lotf-review" element={<LOTFReview />} />
      </Routes>
    </Router>
  );
}

export default App;
