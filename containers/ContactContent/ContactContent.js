import { Typography } from "@material-ui/core";
import {
  HomeWorkOutlined,
  MailOutlineRounded,
  PermPhoneMsgOutlined,
} from "@material-ui/icons";
import React from "react";
import ContactCard from "../../components/ContactCard/ContactCard";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Facebook, Instagram } from "../../shared/icons";
import useStyles from "./styles";

function ContactContent(props) {
  const classes = useStyles();
  const listContacts = [
    {
      icon: <PermPhoneMsgOutlined />,
      contactInfo: "(+84) 944 121 665",
      content: "Call us any time from 08:00 till 17:00 Mon-Fri",
    },
    {
      icon: <MailOutlineRounded />,
      contactInfo: "taminhngoc0402@gmail.com",
      content: "Email us anytime, we usually response in 24 hours",
    },
    {
      icon: <HomeWorkOutlined />,
      contactInfo: "Hoàng Mai, Hà Nội",
      content: "Schedule your meeting before your visit",
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.cardContainer}>
          {listContacts.map((contact, index) => (
            <ContactCard
              key={index}
              icon={contact.icon}
              contactInfo={contact.contactInfo}
              content={contact.content}
            />
          ))}
        </div>
        <div className={classes.formContainer}>
          <div className={classes.intro}>
            <Typography className={classes.bigTitle} variant="h2">
              Liên hệ với chúng tôi ngay!
            </Typography>
            <Typography>
              Để có thêm thông tin về các dự án đã và đang thi công hoặc tư vấn
              về dự án của quý khách. Nhận tư vấn trực tiếp từ các kiến trúc sư
              hàng đầu, quý khách vui lòng để lại thông tin cá nhân để chúng tôi
              kịp thời hỗ trợ.
            </Typography>
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
    </div>
  );
}

export default ContactContent;
