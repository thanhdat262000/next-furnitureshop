import React from "react";
import ReactMarkdown from "react-markdown";
import useStyles from "./styles";
function ProjectPage({ project }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {project && <ReactMarkdown>{project.article}</ReactMarkdown>}
      </div>
    </div>
  );
}

export default ProjectPage;
