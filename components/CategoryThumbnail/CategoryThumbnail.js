import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Image from "next/image";
function CategoryThumbnail({ title, img, link }) {
  const classes = useStyles();
  return (
    <a href={`/${link}`} className={classes.root}>
      <div className={classes.container}>
        <Image
          className={classes.thumbnailImage}
          width={1000}
          height={550}
          objectFit="cover"
          src={img}
          alt="thumbnail"
        />
        <div className={classes.divider}></div>
        <Typography variant="h6" component="p" className={classes.title}>
          {title}
        </Typography>
      </div>
    </a>
  );
}

export default CategoryThumbnail;
