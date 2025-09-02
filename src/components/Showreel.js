import React, { useState } from "react";
import "../styles/Showreel.css";

const showreelData = [
  {
    id: 1,
    title: "Feature Film Trailer",
    video: "/showreel1.mp4",
    thumb: "/showreel1.jpg"
  },
  {
    id: 2,
    title: "Behind the Scenes",
    video: "/showreel2.mp4",
    thumb: "/showreel2.jpg"
  },
  {
    id: 3,
    title: "Commercial Spot",
    video: "/showreel3.mp4",
    thumb: "/showreel3.jpg"
  }
];

const Showreel = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="showreel-section">
      <h2>Showreel</h2>
      <div className="showreel-slider">
        {showreelData.map((item, idx) => (
          <div
            key={item.id}
            className={`showreel-thumb glass-card${active === idx ? " active" : ""}`}
            onMouseEnter={() => setActive(idx)}
            onClick={() => setActive(idx)}
            tabIndex={0}
            role="button"
            aria-label={item.title}
            style={{ position: 'relative' }}
          >
            <img className="showreel-img" src={item.thumb} alt={item.title} />
            <span className="showreel-title-gradient">{item.title}</span>
            <span className="showreel-play-icon">▶</span>
            <span className="showreel-ripple" />
          </div>
        ))}
      </div>
      <div className="showreel-video">
        <video
          key={showreelData[active].video}
          src={showreelData[active].video}
          controls
          autoPlay
          loop
          muted
          playsInline
          poster={showreelData[active].thumb}
          style={{ width: '100%', maxWidth: '700px', borderRadius: '1.2rem', boxShadow: '0 8px 32px #0008' }}
        >
          <source src={showreelData[active].video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Showreel;
