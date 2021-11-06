import { Divider, Typography } from "@material-ui/core";
import React from "react";
import Slider from "../../components/Slider/SliderContent/Slider";
import IntroModal from "../../containers/IntroModal/IntroModal";
import ListCriterias from "../../containers/ListCriterias/ListCriterias";
import ListProject from "../../containers/ListProjects/ListProject";
import useStyles from "./styles";
import { Facebook, Instagram } from "../../shared/icons";
import ContactForm from "../../components/ContactForm/ContactForm";
function HomePage({ projects }) {
  const classes = useStyles();
  const listInfors = [
    {
      content: (
        <Typography variant="body1">
          Địa chỉ nhà xưởng:{" "}
          <b>thôn Thanh Mạc, xã Thanh Đa, huyện Phúc Thọ, Hà Nội</b>
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body1">
          Văn phòng:{" "}
          <b>1A ngách 121, ngõ 255, Lĩnh Nam, Vĩnh Hưng, Hoàng Mai, Hà Nội </b>
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body1">
          Email: <b> taminhngoc0402@gmail.com </b>
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body1">
          Facebook: <b>Thiết kế thi công nội thất 93</b>
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body1">
          Số điện thoại:{" "}
          <Typography component="span" variant="h5" style={{ fontWeight: 700 }}>
            0944 121 665
          </Typography>
        </Typography>
      ),
    },
  ];
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
      <div className={classes.formContainer}>
        <div className={classes.intro}>
          <Typography className={classes.bigTitle} variant="h4">
            Liên hệ với chúng tôi ngay!
          </Typography>
          <Typography>
            Để có thêm thông tin về các dự án đã và đang thi công hoặc tư vấn về
            dự án của quý khách. Nhận tư vấn trực tiếp từ các kiến trúc sư hàng
            đầu, quý khách vui lòng để lại thông tin cá nhân để chúng tôi kịp
            thời hỗ trợ.
          </Typography>
          <Divider className={classes.divider} />
          <ul className={classes.listInfor}>
            {listInfors.map((infor, index) => (
              <li key={index}>{infor.content}</li>
            ))}
          </ul>
          <div className={classes.iconContainer}>
            <a href="https://fb.com" className={classes.link}>
              <Facebook />
            </a>
            <a href="https://instagram.com" className={classes.link}>
              <Instagram />
            </a>
            {/* <a href="tel:0123456789" className={classes.callSupport}>
                <Support width={38} />
                <Typography align="center" variant="h5">
                  0123456789
                </Typography>
              </a> */}
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default HomePage;
