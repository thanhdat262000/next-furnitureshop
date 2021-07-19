import React from "react";
import FooterInfo from "../../components/FooterInfo/FooterInfo";
import useStyles from "./styles";

function Footer(props) {
  const classes = useStyles();
  const listFooterInfo = [
    {
      title: "NOITHAT93",
      intro:
        "Trong quá trình hình thành và phát triển, LuxHome Việt Nam luôn vững vàng với mục tiêu lớn nhất là mang lại cho khách hàng những sản phẩm bất động sản có giá trị tốt nhất bằng sự phục vụ chuyên nghiệp nhất. ",
    },
    {
      title: "DỊCH VỤ",
      links: [
        {
          title: "Thiết kế nội thất chung cư",
          href: "/category/apartment-design",
        },
        {
          title: "Thiết kế nội thất khách sạn",
          href: "/category/hotel-design",
        },
        { title: "Thiết kế nội thất nhà phố", href: "/category/house-design" },
        {
          title: "Thi công nội thất chung cư",
          href: "/category/apartment-construction",
        },
        {
          title: "Thi công nội thất khách sạn",
          href: "/category/hotel-construction",
        },
        {
          title: "Thi công nội thất nhà phố",
          href: "/category/house-construction",
        },
      ],
    },
    {
      title: "THÔNG TIN LIÊN QUAN",
      links: [
        { title: "TRANG TRỦ", href: "/" },
        { title: "GIỚI THIỆU", href: "/about" },
        { title: "THIẾT KẾ NỘI THẤT", href: "/design" },
        { title: "THIẾT KẾ KIẾN TRÚC", href: "/construction" },
        { title: "TIN TỨC", href: "/news" },
        { title: "LIÊN HỆ", href: "/contact" },
      ],
    },
    {
      title: "THÔNG TIN LIÊN HỆ",
      contact: {
        phone: "0944.121.665",
        email: "taminhngoc0402@gmail.com",
        address: "Số 1 Ngõ 255 Lĩnh Nam, Vĩnh Hưng, Hoàng Mai, Hà Nội",
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
