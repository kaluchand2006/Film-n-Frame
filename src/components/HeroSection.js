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
          poster="/Users/aashishchand/Desktop/website/Mama-website/image1.png."
        ></video>
      ) : (
        <div className="hero-bg-fallback" role="img" aria-label="Cinematic film reel background"></div>
      )}
      <div className="hero-gradient-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-gradient">Flims n Frame</span>
        </h1>
        <p className="hero-tagline">Creating Cinematic Experiences That Inspire</p>
        <button className="cta-premium pulse">
          <span>Explore Our Work</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
