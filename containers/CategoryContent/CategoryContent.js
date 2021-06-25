import { Grid, Typography, CircularProgress } from "@material-ui/core";
import React from "react";
import Project from "../../components/Project/Project";
import useStyles from "./styles";

function CategoryContent({ serviceType, categoryType, projectList }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <Typography className={classes.title} variant="h4">
            {`${serviceType} nội thất ${categoryType}`}
          </Typography>
        </div>
        <div className={classes.categoryContainer}>
          <Grid container spacing={3}>
            {projectList.map((project, index) => (
              <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                <Project
                  id={project.id}
                  category={true}
                  key={index}
                  img={project.img.url}
                  projectType={project.category.actualName}
                  projectName={project.name}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default CategoryContent;
