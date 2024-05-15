import React from "react";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { HeaderWork } from "../../components/Header/HeaderWork/HeaderWork";
import { Footer } from "../../components/Footer/Footer";

export function WorkPage() {
  return (
    <>
      <div>
        <HeaderWork />
        <ProjectCard />
        <Footer />
      </div>
    </>
  );
}

export default WorkPage;
