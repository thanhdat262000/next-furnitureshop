import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../../components/Slider/SliderContent/Slider";
import SloganBanner from "../../components/SloganBanner/SloganBanner";
import IntroModal from "../../containers/IntroModal/IntroModal";
import ListProject from "../../containers/ListProjects/ListProject";
import ListServiceDetails from "../../containers/ListServiceDetails/ListServiceDetails";
import ListServices from "../../containers/ListServices/ListServices";
import ListStep from "../../containers/ListStep/ListStep";
import { GET_ALL_PROJECT_BY_SERVICE } from "../../redux/action";
import { loadingSelector, projectsSelector } from "../../redux/selector";
import useStyles from "./styles";
import * as api from "../../api";
function HomePage({ projects }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slider />
      <ListServices />
      <ListServiceDetails />
      <SloganBanner />
      <IntroModal />
      <ListProject
        title="Our projects so far"
        multipleTypes={true}
        projectList={projects}
      />
      <ListStep />
    </div>
  );
}

export default HomePage;
