import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

function ContactCard({ icon, contactInfo, content }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {icon}
        <Typography variant="h6" align="center">
          {contactInfo}
        </Typography>
        <Typography align="center" variant="body2">
          {content}
        </Typography>
      </div>
    </div>
  );
}

export default ContactCard;
