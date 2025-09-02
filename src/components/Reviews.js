import React, { useState, useEffect } from "react";
import "../styles/Reviews.css";

const getStars = (count) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < count ? "star filled" : "star"}>★</span>
  ));
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", rating: 0, feedback: "" });

  useEffect(() => {
    const stored = localStorage.getItem("customerReviews");
    if (stored) setReviews(JSON.parse(stored));
  }, []);

  const handleStar = (idx) => {
    setForm({ ...form, rating: idx + 1 });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.rating || !form.feedback.trim()) return;
    const newReviews = [
      { ...form, date: new Date().toLocaleDateString() },
      ...reviews,
    ];
    setReviews(newReviews);
    localStorage.setItem("customerReviews", JSON.stringify(newReviews));
    setForm({ name: "", email: "", rating: 0, feedback: "" });
  };

  return (
    <section className="reviews-section">
      <h2>Customer Reviews</h2>
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="star-rating">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={i < form.rating ? "star filled" : "star"}
              onClick={() => handleStar(i)}
              role="button"
              tabIndex={0}
              aria-label={`Rate ${i + 1} star`}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          name="feedback"
          value={form.feedback}
          onChange={handleChange}
          placeholder="Write your feedback..."
          required
        />
        <div className="review-fields">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name (optional)"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email (optional)"
          />
        </div>
        <button type="submit" className="submit-btn">Submit Review</button>
      </form>
      <div className="reviews-list">
        {reviews.length === 0 && <p className="no-reviews">No reviews yet. Be the first!</p>}
        {reviews.map((r, idx) => (
          <div className="review-item" key={idx}>
            <div className="review-header">
              <div className="review-stars">{getStars(r.rating)}</div>
              <span className="review-name">{r.name || "Anonymous"}</span>
              <span className="review-date">{r.date}</span>
            </div>
            <div className="review-feedback">{r.feedback}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
