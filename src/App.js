import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import VideoTestimonials from "./components/VideoTestimonials";
import ProjectDetail from "./pages/ProjectDetail";
import Showreel from "./components/Showreel";
import DarkModeToggle from "./components/DarkModeToggle";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ position: "fixed", bottom: "2.2rem", right: "2.2rem", zIndex: 13000, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1.1rem" }}>
          <DarkModeToggle />
          <Chatbot />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Showreel />
                <About />
                <Projects />
                <VideoTestimonials />
                <Contact />
                <Reviews />
                <Footer />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
