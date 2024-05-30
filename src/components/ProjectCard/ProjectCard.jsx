import React from "react";
import "./ProjectCard.css";

import { PROJECT_DATA } from "../../Cons/PROJECT_DATA";
import { useNavigate } from "react-router-dom";

export function ProjectCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/show")
}

  const { id, p, src, alt } = props;
  return (
    <div className="project-img-container">
      {PROJECT_DATA.map(({ id, p, src, alt }) => (
        <div className="project-card" key={id}>
          <div className="tag-div">
            <p>{p}</p>
          </div>
          <img className="project-img" onClick={handleClick} 
          src={src} alt={alt} />
        </div>
      ))}
    </div>
  );
}
