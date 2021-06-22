import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
function OpeningModal({ topTitle, mainTitle, content }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="caption" className={classes.subTitle}>
          {topTitle}
        </Typography>
        <Typography variant="h3" className={classes.title} align="center">
          {mainTitle}
        </Typography>
        <div className={classes.divider}></div>
        <Typography align="center" variant="h6" className={classes.content}>
          {content}
        </Typography>
      </div>
    </div>
  );
}

export default OpeningModal;
