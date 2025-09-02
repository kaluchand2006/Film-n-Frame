import React, { useEffect, useState } from "react";
import "../styles/DarkModeToggle.css";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      className={`darkmode-toggle${dark ? " active" : ""}`}
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeToggle;
