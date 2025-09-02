import React from "react";
import "../styles/VideoTestimonials.css";

const testimonials = [
  {
    name: "Director A",
    video: process.env.PUBLIC_URL + "/testimonial1.mp4",
    quote: "Working with this team was a cinematic dream come true!"
  },
  {
    name: "Producer B",
    video: process.env.PUBLIC_URL + "/testimonial2.mp4",
    quote: "Professional, creative, and always on time. Highly recommended."
  },
  {
    name: "Client C",
    video: process.env.PUBLIC_URL + "/testimonial3.mp4",
    quote: "They brought our vision to life beyond expectations."
  }
];

const VideoTestimonials = () => (
  <section className="video-testimonials-section">
    <h2 className="video-testimonials-title">What Our Clients Say</h2>
    <div className="video-testimonials-grid">
      {testimonials.map((t, i) => (
        <div className="testimonial-card" key={i}>
          <video controls poster={process.env.PUBLIC_URL + "/testimonial-thumb" + (i+1) + ".jpg"}>
            <source src={t.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <blockquote>“{t.quote}”</blockquote>
          <div className="testimonial-name">- {t.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default VideoTestimonials;
