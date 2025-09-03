import React, { useEffect, useState } from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Detect slow connection or mobile for fallback
    const video = document.createElement('video');
    video.src = "/filmreel.mp4";
    video.preload = "auto";
    let timeout = setTimeout(() => setShowFallback(true), 2500);
    video.oncanplaythrough = () => {
      clearTimeout(timeout);
    };
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="hero">
      {!showFallback ? (
        <video
          className="hero-bg-video"
          src="/filmreel.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/film-reel-fallback.jpg"
        ></video>
      ) : (
        <div
          className="hero-bg-fallback"
          role="img"
          aria-label="Cinematic film reel background"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/film-reel-fallback.jpg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
      <div className="hero-gradient-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-gradient">Flims n Frame</span>
        </h1>
        <p className="hero-tagline">Creating Cinematic Experiences That Inspire</p>
        <div className="hero-features" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div className="feature-item" style={{ textAlign: 'center' }}>
            <span role="img" aria-label="Award" style={{ fontSize: '2rem' }}>🏆</span>
            <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>Award-Winning Team</div>
          </div>
          <div className="feature-item" style={{ textAlign: 'center' }}>
            <span role="img" aria-label="Camera" style={{ fontSize: '2rem' }}>🎥</span>
            <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>Cutting-Edge Equipment</div>
          </div>
          <div className="feature-item" style={{ textAlign: 'center' }}>
            <span role="img" aria-label="Globe" style={{ fontSize: '2rem' }}>🌍</span>
            <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>Global Reach</div>
          </div>
          <div className="feature-item" style={{ textAlign: 'center' }}>
            <span role="img" aria-label="Star" style={{ fontSize: '2rem' }}>⭐</span>
            <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>Client Satisfaction</div>
          </div>
        </div>
        <button className="cta-premium pulse">
          <span>Explore Our Work</span>
        </button>
        <div className="hero-socials" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ fontSize: '1.8rem', color: '#ffd700' }}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ fontSize: '1.8rem', color: '#ff0000' }}>
            <i className="fab fa-youtube"></i>
          </a>
          <a href="mailto:info@filmsnframe.com" aria-label="Email" style={{ fontSize: '1.8rem', color: '#7b2ff2' }}>
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="scroll-down-indicator" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <span style={{ fontSize: '2rem', color: '#ffd700', animation: 'bounce 2s infinite' }}>▼</span>
          <div style={{ fontSize: '1rem', color: '#ffd700', marginTop: '0.2rem' }}>Scroll Down</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
