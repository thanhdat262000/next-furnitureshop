import React from "react";
import AboutContent from "../../containers/AboutContent/AboutContent";
import OpeningModal from "../../containers/OpeningModal/OpeningModal";
import useStyles from "./styles";

function AboutPage({ projects }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <OpeningModal
        topTitle="Về chúng tôi"
        mainTitle="Hãy đến với xưởng của chúng tôi"
        content="Chúng tôi tự hào mang đến những sản phẩm tốt nhất. Những sản phẩm đó đều được chế tạo với những công nghệ tiên tiến nhất bởi những người thợ giỏi nhất."
      />
      <AboutContent projects={projects} />
    </div>
  );
}

export default AboutPage;
