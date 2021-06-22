import React from "react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GET_PROJECT_BY_ID } from "../../redux/action";
import { projectsSelector } from "../../redux/selector";
function ProjectPage({ project }) { 
  return (
    <div>{project && <ReactMarkdown>{project.article}</ReactMarkdown>}</div>
  );
}

export default ProjectPage;
