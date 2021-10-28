import React from "react";
import Slider from "../../components/Slider/SliderContent/Slider";
import SloganBanner from "../../components/SloganBanner/SloganBanner";
import IntroModal from "../../containers/IntroModal/IntroModal";
import ListCriterias from "../../containers/ListCriterias/ListCriterias";
import ListProject from "../../containers/ListProjects/ListProject";
import ListServiceDetails from "../../containers/ListServiceDetails/ListServiceDetails";
import ListServices from "../../containers/ListServices/ListServices";
import ListStep from "../../containers/ListStep/ListStep";
import useStyles from "./styles";
function HomePage({ projects }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slider />
      <IntroModal />
      <ListProject
        title="Các dự án của chúng tôi"
        multipleTypes={true}
        projectList={projects}
      />
      <ListCriterias />
    </div>
  );
}

export default HomePage;
