import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
function TopTitle({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div></div>
      <Typography component="p">{title}</Typography>
    </div>
  );
}

export default TopTitle;
