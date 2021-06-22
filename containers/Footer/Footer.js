import React from "react";
import FooterInfo from "../../components/FooterInfo/FooterInfo";
import useStyles from "./styles";

function Footer(props) {
  const classes = useStyles();
  const listFooterInfo = [
    {
      title: "CÔNG TY CP LUXHOME VIỆT NAM",
      intro:
        "Trong quá trình hình thành và phát triển, LuxHome Việt Nam luôn vững vàng với mục tiêu lớn nhất là mang lại cho khách hàng những sản phẩm bất động sản có giá trị tốt nhất bằng sự phục vụ chuyên nghiệp nhất. ",
    },
    {
      title: "DỊCH VỤ",
      links: [
        "Architecture",
        "Decorating",
        "Floor planning",
        "Interior Design",
        "LED Lighting",
        "Lighting Installation",
        "All services",
      ],
    },
    {
      title: "THÔNG TIN LIÊN QUAN",
      links: [
        "TRANG TRỦ",
        "GIỚI THIỆU",
        "SẢN PHẨM",
        "THIẾT KẾ NỘI THẤT",
        "THIẾT KẾ KIẾN TRÚC",
        "CHẤT LIỆU",
        "TIN TỨC",
        "LIÊN HỆ",
      ],
    },
    {
      title: "THÔNG TIN LIÊN HỆ",
      contact: {
        phone: "0966.998.657",
        email: "thanhdat262000@gmail.com",
        address: "Số 207 Trần Quốc Hoàn, Cầu Giấy, Hà Nội",
      },
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {listFooterInfo.map((info, index) =>
          info.intro ? (
            <FooterInfo title={info.title} intro={info.intro} key={index} />
          ) : info.links ? (
            <FooterInfo title={info.title} links={info.links} key={index} />
          ) : (
            <FooterInfo title={info.title} contact={info.contact} key={index} />
          )
        )}
      </div>
    </div>
  );
}

export default Footer;
