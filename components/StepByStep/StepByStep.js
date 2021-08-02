import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import TopTitle from "../TopTitle/TopTitle";
import clsx from "clsx";
function StepByStep({ intro, stepNumber, mainTitle, content, button }) {
  const classes = useStyles();
  return intro ? (
    <div className={classes.basis}>
      <div>
        <TopTitle title="Cách chúng tôi làm việc" />
      </div>
      <Typography variant="h4">Kết quả là minh chứng cho quá trình</Typography>
    </div>
  ) : (
    <div className={clsx(classes.root, classes.basis)}>
      <div className={classes.container}>
        <div className={classes.step} id="step-number">
          <Typography variant="h2" className={classes.stepNumber}>
            {stepNumber}
          </Typography>
        </div>
        <div className={classes.stepContent}>
          <div className={classes.stepContentContainer}>
            <Typography variant="h5" className={classes.stepContentTitle}>
              {mainTitle}
            </Typography>
            <Typography>{content}</Typography>
            <div className={classes.button} id="step-button">
              <Typography>{button}</Typography>
              <TrendingFlatIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepByStep;
