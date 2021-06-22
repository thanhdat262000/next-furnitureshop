import React from "react";
import CustomModal from "../../components/Modal/CustomModal";
import useStyles from "./styles";

function IntroModal(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div
          className={classes.image}
          style={{ backgroundImage: "url(/img/intro.png)" }}
        >
          <div></div>
        </div>
        <CustomModal
          button="Read more"
          topTitle="ABOUT US"
          mainTitle="Details that matter. We make dream reality."
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s. When an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries."
        />
      </div>
    </div>
  );
}

export default IntroModal;
