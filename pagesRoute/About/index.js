import React from "react";
import AboutContent from "../../containers/AboutContent/AboutContent";
import OpeningModal from "../../containers/OpeningModal/OpeningModal";
import useStyles from "./styles";

function AboutPage({ projects }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <OpeningModal
        topTitle="about us"
        mainTitle="Welcome to our charming studio"
        content="We are proud to present our work. These projects are built using
          latest technologies and best talents. The benefits of our methods
          guarantee quality for many years to come."
      />
      <AboutContent projects={projects} />
    </div>
  );
}

export default AboutPage;
