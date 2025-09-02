import React from "react";
import { useParams } from "react-router-dom";

const projectData = [
  {
    id: 1,
    title: "Cinematic Feature Film",
    description: "Every frame tells a story, and every story deserves to be told with artistry. Our team thrives on pushing creative boundaries, blending imagination with innovation. From script to screen, we craft visuals that leave a lasting impression, ensuring each project reflects originality, emotional depth, and unforgettable cinematic beauty.",
    category: "Feature Film",
    year: "2025"
  },
  {
    id: 2,
    title: "Commercial Campaign",
    description: "Behind every breathtaking scene lies a foundation of precision and expertise. We harness state-of-the-art equipment, advanced editing tools, and industry-best practices to deliver flawless productions. Whether it’s seamless cinematography, immersive sound design, or cutting-edge post-production, our technical mastery ensures perfection in every detail.",
    category: "Commercial",
    year: "2025"
  },
  {
    id: 3,
    title: "Documentary Series",
    description: "Stories have no borders—and neither do we. Our work resonates across cultures, reaching audiences worldwide through creativity that speaks a universal language. With collaborations and distribution that span continents, we ensure your story finds its stage on the global platform it deserves.",
    category: "Documentary",
    year: "2025"
  },
  {
    id: 4,
    title: "Music Video Production",
    description: "Cinematic music video for chart-topping artist with visual storytelling",
    category: "Music Video",
    year: "2025"
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === Number(id));

  if (!project) return <div style={{padding: '2rem'}}>Project not found.</div>;

  return (
    <div style={{padding: '2rem'}}>
      <h2>{project.title}</h2>
      <p><b>Category:</b> {project.category}</p>
      <p><b>Year:</b> {project.year}</p>
      <p>{project.description}</p>
      {/* Add more details, images, or video as needed */}
    </div>
  );
};

export default ProjectDetail;
