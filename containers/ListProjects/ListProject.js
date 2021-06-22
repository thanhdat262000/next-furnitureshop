import { CircularProgress, Typography } from "@material-ui/core";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import Project from "../../components/Project/Project";
import useStyles from "./styles";

function ListProject({ title, multipleTypes, projectList }) {
  const classes = useStyles();
  const categoryList = [
    { name: "Thiết kế nội thất", id: 1 },
    { name: "Thi công nội thất", id: 2 },
  ];
  const [curCategory, setCurCategory] = useState(1);
  const onChangeCategory = (id) => {
    setCurCategory(id);
  };
  const nodeRef = useRef(null);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography component="p" variant="h4" className={classes.title}>
          {title}
        </Typography>
        {multipleTypes && (
          <div className={classes.categoryRoot}>
            <div className={classes.categoryContainer}>
              {categoryList.map((category, index) => (
                <div
                  className={clsx({
                    [classes.categoryComponent]: true,
                    [classes.categoryComponentActive]:
                      category.id === curCategory,
                  })}
                  key={index}
                  onClick={() => onChangeCategory(category.id)}
                >
                  <Typography>{category.name}</Typography>
                </div>
              ))}
            </div>
          </div>
        )}
        {projectList ? (
          <Grid container spacing={3}>
            <TransitionGroup component={null}>
              {projectList
                .filter((project) => project.category.service === curCategory)
                .map((project, index) => (
                  <CSSTransition
                    key={project.id}
                    timeout={500}
                    classNames={{
                      enter: classes.listEnter,
                      enterActive: classes.listEnterActive,
                      exit: classes.listExit,
                      exitActive: classes.listExitActive,
                    }}
                  >
                    <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                      <Project
                        id={project.id}
                        key={index}
                        img={project?.img?.url}
                        projectType={project.category.actualName}
                        projectName={project.name}
                      />
                    </Grid>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </Grid>
        ) : (
          <Typography>No project</Typography>
        )}
      </div>
    </div>
  );
}

export default React.memo(ListProject);
