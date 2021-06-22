import { Typography } from "@material-ui/core";
import { NavigateNextOutlined } from "@material-ui/icons";
import React from "react";
import useStyles from "./styles";
import Link from "next/dist/client/link";

function ContactButton(props) {
  const classes = useStyles();
  return (
    <Link href="/contact">
      <a className={classes.root}>
        <div className={classes.container}>
          <Typography
            className={classes.title}
            variant="h6"
            align="center"
            component="p"
          >
            bấm vào đây để nhận tư vấn miễn phí ngày hôm nay
          </Typography>
          <NavigateNextOutlined className={classes.svg} />
        </div>
      </a>
    </Link>
  );
}

export default ContactButton;
