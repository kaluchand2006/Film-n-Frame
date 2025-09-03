import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  // Close menu if window resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <h1 className="logo" onClick={() => scrollToSection("hero")}>
        Flute n Frame
      </h1>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation + CTA Button */}
      <div className={`navbar-content ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Our Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: '#ffd700', fontWeight: 700 }}
            >
              Log In
            </a>
          </li>
        </ul>
        {/* CTA Button removed as requested */}
      </div>
    </nav>
  );
};

export default Navbar;
