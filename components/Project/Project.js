import { Typography } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import React from "react";
import Link from "next/link";
import useStyles from "./styles";
function Project({ img, projectType, projectName, category, id }) {
  const classes = useStyles({ category });
  return (
    <Link href={`/project/${id}`}>
      <a className={classes.root}>
        <div
          className={classes.container}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div id="project-overlay" className={classes.overlay}>
            <Typography
              component="p"
              align="center"
              className={classes.projectType}
            >
              {projectType}
            </Typography>
            {!category && (
              <Typography
                component="p"
                variant="h5"
                align="center"
                className={classes.projectName}
              >
                {projectName}
              </Typography>
            )}
          </div>
        </div>
        {category && (
          <Typography
            component="p"
            variant="h5"
            align="center"
            className={classes.projectName}
          >
            {projectName}
          </Typography>
        )}
      </a>
    </Link>
  );
}

export default Project;
