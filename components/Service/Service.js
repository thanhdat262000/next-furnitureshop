import React from "react";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import { Typography } from "@material-ui/core";
import Link from "next/link";
import useStyles from "./styles";
function Service({ icon, title, titleContent }) {
  const classes = useStyles();
  return (
    <Link href="/">
      <a className={classes.root}>
        <div className={classes.content}>
          <div className={classes.icon}>{icon}</div>
          <div className={classes.title}>
            <Typography className={classes.titleMain}>{title}</Typography>
            <div className={classes.titleContent}>
              <Typography variant="body2" component="p">
                {titleContent}
              </Typography>
              <TrendingFlatIcon />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Service;
