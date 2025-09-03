import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/About.css"; // optional

const About = () => {
  const navigate = useNavigate();
  const aboutRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;
      const section = aboutRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const percent = (windowHeight - rect.top) / (windowHeight + rect.height);
        section.style.backgroundPosition = `center ${percent * 40}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHighlightClick = (type) => {
    // Redirect to a new page based on the highlight type
    if (type === 'Creative Excellence') navigate('/project/1');
    else if (type === 'Technical Mastery') navigate('/project/2');
    else if (type === 'Global Reach') navigate('/project/3');
    else if (type === 'Client Satisfaction') navigate('/project/4');
  };

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="container">
        <div className="about-image" style={{ animation: 'fadeInLeft 1.2s' }}>
          <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="Films n Frame Team" />
        </div>
        <div className="about-content" style={{ animation: 'fadeInRight 1.2s' }}>
          <h2 className="about-title-gradient">About Us</h2>
          <p className="about-description">
            <b>Flute n Frame</b> is dedicated to producing high-quality films that tell compelling stories and captivate audiences worldwide. With years of experience in the industry, we bring creativity, passion, and technical excellence to every project we undertake.
          </p>
          <div className="about-highlights">
            {[
              {
                type: 'Creative Excellence',
                icon: '🎬',
                title: 'Creative Excellence',
                desc: 'Crafting stories with unmatched imagination.'
              },
              {
                type: 'Technical Mastery',
                icon: '🎥',
                title: 'Technical Mastery',
                desc: 'Precision, innovation, and flawless execution.'
              },
              {
                type: 'Global Reach',
                icon: '🌍',
                title: 'Global Reach',
                desc: 'Connecting audiences beyond every border.'
              },
              {
                type: 'Client Satisfaction',
                icon: '⭐',
                title: 'Client Satisfaction',
                desc: 'Delivering happiness and exceeding expectations.'
              }
            ].map((h, i) => (
              <div
                key={h.type}
                className={`highlight-box clickable highlight-glass pulse`}
                onClick={() => handleHighlightClick(h.type)}
                tabIndex={0}
                role="button"
                aria-label={h.type}
              >
                <span className="icon-gradient">{h.icon}</span>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
                <span className="highlight-ripple" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
