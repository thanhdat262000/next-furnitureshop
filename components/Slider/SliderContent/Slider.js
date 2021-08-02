import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CustomNextButton from "../CustomNextButton/CustomNextButton";
import useStyles from "./styles";
import Image from "next/image";
function Slider(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Carousel
        dynamicHeight={true}
        showStatus={true}
        showThumbs={false}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        transitionTime={1000}
        preventMovementUntilSwipeScrollTolerance={true}
        renderArrowPrev={(onClickHandler, hasNext, label) => (
          <CustomNextButton
            onClick={onClickHandler}
            title={label}
            prev={true}
          />
        )}
        renderArrowNext={(onClickHandler, hasPrev, label) => (
          <CustomNextButton onClick={onClickHandler} title={label} />
        )}
      >
        <div className={classes.imageContainer}>
          <Image
            src="/img/slider_1.jpg"
            alt="noithat1"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
          />
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/img/slider_2.jpg"
            alt="noithat2"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
          />
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/img/slider_3.jpg"
            alt="noithat3"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
