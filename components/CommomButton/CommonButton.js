import React from "react";
import { Typography } from "@material-ui/core";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import useStyles from "./styles";
function CommonButton({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography component="p" variant="body2">
        {title}
      </Typography>
      <TrendingFlatIcon />
    </div>
  );
}

export default CommonButton;
