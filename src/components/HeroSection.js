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
      <div className="hero-gradient-overlay" style={{
        background: 'linear-gradient(120deg, #fff8f0 0%, #e7c8a0 50%, #7c4f2c 100%)',
        opacity: 0.7
      }}></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-gradient" style={{
            color: '#a05a2c',
            background: 'linear-gradient(90deg, #a05a2c 30%, #ffd700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 12px #fff8f0, 0 1px 0 #a05a2c'
          }}>
            Flims n Frame
          </span>
        </h1>
        <p className="hero-tagline" style={{
          color: '#7c4f2c',
          background: 'rgba(255, 248, 240, 0.85)',
          borderRadius: '8px',
          padding: '0.5rem 1.5rem',
          fontWeight: 500,
          boxShadow: '0 2px 8px #e7c8a0'
        }}>
          Creating Cinematic Experiences That Inspire
        </p>
        <div className="hero-features" style={{
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div className="feature-item" style={{
            textAlign: 'center',
            background: 'rgba(255, 248, 240, 0.95)',
            borderRadius: '12px',
            boxShadow: '0 2px 12px #e7c8a0',
            padding: '1rem 1.5rem',
            minWidth: '140px',
            color: '#7c4f2c',
            fontWeight: 600
          }}>
            <span role="img" aria-label="Award" style={{ fontSize: '2rem' }}>🏆</span>
            <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>Award-Winning Team</div>
          </div>
          <div className="feature-item" style={{
            textAlign: 'center',
            background: 'rgba(255, 248, 240, 0.95)',
            borderRadius: '12px',
            boxShadow: '0 2px 12px #e7c8a0',
            padding: '1rem 1.5rem',
            minWidth: '140px',
            color: '#7c4f2c',
            fontWeight: 600
          }}>
            <span role="img" aria-label="Camera" style={{ fontSize: '2rem' }}>🎥</span>
            <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>Cutting-Edge Equipment</div>
          </div>
          <div className="feature-item" style={{
            textAlign: 'center',
            background: 'rgba(255, 248, 240, 0.95)',
            borderRadius: '12px',
            boxShadow: '0 2px 12px #e7c8a0',
            padding: '1rem 1.5rem',
            minWidth: '140px',
            color: '#7c4f2c',
            fontWeight: 600
          }}>
            <span role="img" aria-label="Globe" style={{ fontSize: '2rem' }}>🌍</span>
            <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>Global Reach</div>
          </div>
          <div className="feature-item" style={{
            textAlign: 'center',
            background: 'rgba(255, 248, 240, 0.95)',
            borderRadius: '12px',
            boxShadow: '0 2px 12px #e7c8a0',
            padding: '1rem 1.5rem',
            minWidth: '140px',
            color: '#7c4f2c',
            fontWeight: 600
          }}>
            <span role="img" aria-label="Star" style={{ fontSize: '2rem' }}>⭐</span>
            <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>Client Satisfaction</div>
          </div>
        </div>
        <button className="cta-premium pulse" style={{
          background: 'linear-gradient(90deg, #ffd700 0%, #a05a2c 100%)',
          color: '#fff8f0',
          boxShadow: '0 4px 16px #e7c8a0',
          border: 'none',
          borderRadius: '30px',
          padding: '0.9rem 2.5rem',
          fontWeight: 700,
          fontSize: '1.2rem',
          letterSpacing: '0.05em',
          marginTop: '0.5rem',
          cursor: 'pointer',
          transition: 'background 0.3s, box-shadow 0.3s'
        }}>
          <span>Explore Our Work</span>
        </button>
        <div className="hero-socials" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ fontSize: '1.8rem', color: '#a05a2c' }}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ fontSize: '1.8rem', color: '#b86b2c' }}>
            <i className="fab fa-youtube"></i>
          </a>
          <a href="mailto:info@filmsnframe.com" aria-label="Email" style={{ fontSize: '1.8rem', color: '#7c4f2c' }}>
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="scroll-down-indicator" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <span style={{ fontSize: '2rem', color: '#a05a2c', animation: 'bounce 2s infinite' }}>▼</span>
          <div style={{ fontSize: '1rem', color: '#a05a2c', marginTop: '0.2rem' }}>Scroll Down</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
