import { Typography } from "@material-ui/core";
import React from "react";
import CategoryThumbnail from "../../components/CategoryThumbnail/CategoryThumbnail";
import useStyles from "./styles";

function DesignContent({ listThumbnails }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.intro}>
          <Typography variant="h4" className={classes.introTitle}>
            Bạn đang quan tâm đến?
          </Typography>
        </div>
        <div className={classes.thumbnailContainer}>
          {listThumbnails.map((thumbnail, index) => (
            <CategoryThumbnail
              title={thumbnail.title}
              img={thumbnail.img}
              link={thumbnail.link}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(DesignContent);
