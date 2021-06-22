import { Typography } from "@material-ui/core";
import React from "react";
import CommonButton from "../CommomButton/CommonButton";
import TopTitle from "../TopTitle/TopTitle";
import useStyles from "./styles";
function CustomModal({ topTitle, mainTitle, content, button }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TopTitle title={topTitle} />
        {mainTitle && (
          <div className={classes.mainTitle}>
            <Typography component="p" variant="h4">
              {mainTitle}
            </Typography>
          </div>
        )}

        {content && (
          <div className={classes.mainContent}>
            <Typography component="p">{content}</Typography>
          </div>
        )}

        {button && <CommonButton title={button} />}
      </div>
    </div>
  );
}

export default CustomModal;
