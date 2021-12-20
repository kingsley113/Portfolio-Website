import React from "react";
import ProjectCard from "../components/main/projectCard";

import { softwareProjects as projects } from "../data/data";

const SoftwareProjects = () => {
  // Software project cards
  const cards = projects.map((project) => <ProjectCard project={project} />);
  return <div className="flex-horizontal">{cards}</div>;
};

export default SoftwareProjects;
