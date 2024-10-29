import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import { GitHub } from "@mui/icons-material";
import "../styles/ProjectInfo.css";

function ProjectInfo() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1> {project.name} </h1>
      <img src={project.image} alt="Project" />
      <p>
        <b> Skills: {project.skills} </b>
      </p>
      <a href="https://github.com/sumedhbadnore">
        <GitHub />
      </a>
    </div>
  );
}

export default ProjectInfo;
