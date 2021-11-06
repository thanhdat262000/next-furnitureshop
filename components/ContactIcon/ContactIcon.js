import React from "react";
import Link from "next/link";
import Image from "next/image";
import useStyles from "./styles";
function ContactIcon(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div></div>
      <Link href="https://zalo.me/0944121665">
        <a>
          <Image
            className={classes.icon}
            width={50}
            height={50}
            src="/img/zalo.png"
            alt="zalo"
          />
        </a>
      </Link>
    </div>
  );
}

export default ContactIcon;
