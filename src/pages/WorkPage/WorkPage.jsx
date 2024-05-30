import React from "react";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { HeaderWork } from "../../components/Header/HeaderWork/HeaderWork";
import { Footer } from "../../components/Footer/Footer";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../auth/firebase/firebase";

export function WorkPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const projectsCollection = collection(db, "portfolio");
      const projects = await getDocs(projectsCollection);
      const projectsList = [];
      projects.forEach((project) => {
        projectsList.push(project.data());
      });
      setProjects(projectsList);
    })();
  }, []);

  return (
    <>
      <div>
        <HeaderWork />.
        <div className="project-img-container">
        {
          projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                p={project.type_project}
                src={project.images}
                alt={project.alt}
              />
            );
          })
        }
      </div>
      <Footer />
      </div>
    </>
  );
}

export default WorkPage;
