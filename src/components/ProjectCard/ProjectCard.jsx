import React from "react";
import "./ProjectCard.css";

export function ProjectCard(props) {
  const { p, src, alt } = props;
  return (
    <div className="project-card">
      <div className="tag-div">
        <p>{p}</p>
      </div>
      <img className="project-img" src={src} alt={alt} />
    </div>
  );
}