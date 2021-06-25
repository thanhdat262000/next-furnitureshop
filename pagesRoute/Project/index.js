import React from "react";
import ReactMarkdown from "react-markdown";
function ProjectPage({ project }) {
  return (
    <div>{project && <ReactMarkdown>{project.article}</ReactMarkdown>}</div>
  );
}

export default ProjectPage;
