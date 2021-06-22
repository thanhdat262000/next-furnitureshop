import React from "react";
import ServiceDetail from "../../components/ServiceDetail/ServiceDetail";
import useStyles from "./styles";
function ListServiceDetails(props) {
  const classes = useStyles();
  const serviceDetails = [
    { intro: true },
    { img: "/img/design.png", title: "THIẾT KẾ NỘI THẤT", link: "/desgin" },
    {
      img: "/img/design1.png",
      title: "THIẾT KẾ KIẾN TRÚC",
      link: "/construction",
    },
    { img: "/img/design2.png", title: "THI CÔNG NỘI THẤT", link: "/" },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {serviceDetails.map((serviceDetail, index) =>
          !serviceDetail.intro ? (
            <ServiceDetail
              img={serviceDetail.img}
              title={serviceDetail.title}
              key={index}
              link={serviceDetail.link}
            />
          ) : (
            <ServiceDetail intro={serviceDetail.intro} key={index} />
          )
        )}
      </div>
    </div>
  );
}

export default ListServiceDetails;
