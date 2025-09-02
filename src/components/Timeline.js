import React, { useRef, useEffect, useState } from "react";
import "../styles/Timeline.css";

const milestones = [
  { year: "2015", title: "Founded", desc: "Our journey began with a passion for cinematic storytelling." },
  { year: "2017", title: "First Award", desc: "Won our first international film award." },
  { year: "2019", title: "Global Expansion", desc: "Expanded our work to 10+ countries." },
  { year: "2022", title: "AI Integration", desc: "Adopted AI tools for post-production and editing." },
  { year: "2025", title: "Virtual Production", desc: "Launched virtual production services." }
];

const Timeline = () => {
  const timelineRef = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = timelineRef.current?.getBoundingClientRect().top;
      if (top < window.innerHeight / 2) {
        timelineRef.current?.classList.add("visible");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="timeline-section" ref={timelineRef}>
      <h2 className="timeline-title">Our Journey</h2>
      <div className="timeline-track">
        {milestones.map((m, i) => (
          <div
            key={i}
            className={`timeline-milestone${active === i ? " active" : ""}`}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onClick={() => setActive(i)}
          >
            <div className="timeline-dot" />
            <div className="timeline-year">{m.year}</div>
            <div className="timeline-title-milestone">{m.title}</div>
            {active === i && (
              <div className="timeline-tooltip">
                <strong>{m.title}</strong>
                <p>{m.desc}</p>
              </div>
            )}
          </div>
        ))}
        <div className="timeline-bar" />
      </div>
    </section>
  );
};

export default Timeline;
